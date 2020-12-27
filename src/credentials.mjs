import fs from 'fs';

const privkey = process.env.PRIVKEY_PATH;
const fullchain = process.env.FULLCHAIN_PATH;

const credentials = {
    key: fs.readFileSync(`${privkey}`, 'utf8'),
    cert: fs.readFileSync(`${fullchain}`, 'utf8'),
};

export { credentials };
