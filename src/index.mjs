import { routing } from './routing.mjs';
import http from 'http';

const port = process.env.PORT;
const host = process.env.ADDRESS;

const server = http.createServer(routing);
server.listen(port, host);

console.log(`Server is run at https://${host}:${port}`);
