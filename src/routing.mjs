import express from 'express';
import cors from 'cors';
import { corsConfig } from './cors.config.mjs';
import { fetchRandomPhoto } from './api/random-photo.mjs';

const routing = express();
routing.use(cors(corsConfig));

routing.get('/bg', (request, response) => {
    fetchRandomPhoto(request.query)
        .then((randomPhoto) => {
            response.send(randomPhoto);
        })
        .catch((err) => {
            response.send(err);
        });
});

export { routing };
