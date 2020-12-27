import { credentials } from './credentials.mjs';
import { routing } from './routing.mjs';
import https from 'https';

const port = process.env.PORT;
const host = process.env.ADDRESS;

const server = https.createServer(credentials, routing);
server.listen(port, host);

console.log(`Server is run at https://${host}:${port}`);
