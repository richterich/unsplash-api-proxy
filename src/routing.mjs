import express from 'express';
import { sendRandomPhoto } from './api/random-photo.mjs';

const routing = express();

routing.get('/bg', (_request, response) => {
    sendRandomPhoto(response);
});

export { routing };
