const logger = require("../logger");
const { Materials } = require("../models"); 
const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");

// Decode UTF-8 filename from multipart/form-data
const decodeFilename = (filename) => {
  try {
    return Buffer.from(filename, "latin1").toString("utf8");
  } catch (e) {
    return filename;
  }
};

exports.create = async (req, res) => {
  try {
    const {
      title,
      description,
      categoryID,
      materialForID,
      materialTypeID,
      no,
      link,
      documentType,
    } = req.body;

    const photo = req.files?.photo ? req.files.photo[0].path : null;
    const photoName = req.files?.photo
      ? decodeFilename(req.files.photo[0].originalname)
      : null;
    const document = req.files?.document ? req.files.document[0].path : null;
    const documentName = req.files?.document
      ? decodeFilename(req.files.document[0].originalname)
      : null; 

    const material = await Materials.create({
      title,
      description,
      photo,
      photoName,
      document,
      documentName,
      categoryID,
      materialForID,
      materialTypeID,
      no,
      link,
      documentType,
    });

    res
      .status(201)
      .json({ message: "Material created successfully", material });

    logger.info(
      `Material created: ${material.id} by [${req.user.id}] ${req.user.username}`
    );
  } catch (error) {
    next(error); 
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      categoryID,
      materialForID,
      materialTypeID,
      no,
      link,
      documentType,
    } = req.body;

    const material = await Materials.findByPk(id);
    if (!material) {
      return res.status(404).json({ error: "Material not found" });
    }

    const photo = req.files?.photo ? req.files.photo[0].path : material.photo;
    const photoName = req.files?.photo
      ? decodeFilename(req.files.photo[0].originalname)
      : material.photoName;
    const document = req.files?.document
      ? req.files.document[0].path
      : material.document;
    const documentName = req.files?.document
      ? decodeFilename(req.files.document[0].originalname)
      : material.documentName; 

    material.title = title || material.title;
    material.description = description || material.description;
    material.photo = photo;
    material.photoName = photoName;
    material.document = document;
    material.documentName = documentName;
    material.categoryID = categoryID || material.categoryID;
    material.materialForID = materialForID || material.materialForID;
    material.materialTypeID = materialTypeID || material.materialTypeID;
    material.no = no || material.no;
    material.link = link || material.link;
    material.documentType = documentType || material.documentType;

    await material.save();

    res
      .status(200)
      .json({ message: "Material updated successfully", material });

    logger.info(
      `Material updated: ${material.id} by [${req.user.id}] ${req.user.username}`
    );
  } catch (error) {
    next(error); 
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const { materialFor, search } = req.query;
    let where = {};
    if (materialFor) {
      where = {
        "$materialFor.name$": materialFor.toLowerCase(),
      };
    }
    if (search) {
      where = {
        ...where,
        [Op.or]: [
          { "$Materials.title$": { [Op.like]: `%${search}%` } },
          { "$Materials.no$": { [Op.like]: `%${search}%` } },
        ],
      };
    }

    const materials = await Materials.findAll({
      where,
      order: [["no", "ASC"]],
      include: [
        {
          association: "materialCategory",
          attributes: ["id", "name"],
        },
        {
          association: "materialFor",
          attributes: ["id", "name"],
        },
        {
          association: "materialType",
          attributes: ["id", "name"],
        },
      ],
    });
    res.status(200).json(materials);
  } catch (error) {
    next(error); 
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const material = await Materials.findByPk(id);
    if (!material) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.status(200).json(material);
  } catch (error) {
    next(error); 
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;

    let material = await Materials.findByPk(id);
    if (!material) {
      return res.status(404).json({ error: "Material not found" });
    }

    if (material.photo) {
      const imagePath = path.resolve(material.photo);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    if (material.document) {
      const documentPath = path.resolve(material.document);
    
      fs.unlink(documentPath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    const deleted = await Materials.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.status(204).send();

    logger.info(
      `Material deleted: ${id} by [${req.user.id}] ${req.user.username}`
    );
  } catch (error) {
    next(error); 
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    let material = await Materials.findByPk(id);
    if (!material) {
      return res.status(404).json({ error: "Material not found" });
    }

    if (material.photo) {
      const imagePath = path.resolve(material.photo);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

      
    await material.update({ photo: null });
    res.status(200).json({ message: "Image deleted successfully" });

    logger.info(
      `Material image deleted: ${id} by [${req.user.id}] ${req.user.username}`
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
