const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    console.log('Password hash:', hash);
}

hashPassword('Caaue2cw2293299.');
