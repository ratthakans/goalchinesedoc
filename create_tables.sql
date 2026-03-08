-- Create tables manually for PostgreSQL

-- Account table
CREATE TABLE Account (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  dateOfBirth TIMESTAMP NOT NULL,
  duty VARCHAR(255),
  phone VARCHAR(255),
  address VARCHAR(255),
  schoolName VARCHAR(255),
  resumeNo VARCHAR(255),
  scoreForKids INTEGER,
  scoreForAdult INTEGER,
  teacherTypeID INTEGER,
  registerDate TIMESTAMP,
  photo VARCHAR(255),
  avaliableForClass VARCHAR(255),
  language VARCHAR(255),
  addmissionDate TIMESTAMP,
  endClassDate TIMESTAMP,
  studentTypeID INTEGER,
  classTypeID INTEGER,
  addmissionNo VARCHAR(255),
  branchID INTEGER,
  note VARCHAR(255),
  status VARCHAR(255) DEFAULT 'Active',
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP NOT NULL
);

-- Users table
CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  accountID INTEGER NOT NULL,
  role VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP NOT NULL,
  FOREIGN KEY (accountID) REFERENCES Account(id)
);

-- Add other tables as needed...

-- Test data
INSERT INTO Account (name, gender, dateOfBirth, status, createdAt, updatedAt) 
VALUES ('Test User', 'Male', '1990-01-01', 'Active', NOW(), NOW());

INSERT INTO Users (username, password, accountID, role, createdAt, updatedAt)
VALUES ('admin', '$2b$10$encrypted_password', 1, 'admin', NOW(), NOW());
