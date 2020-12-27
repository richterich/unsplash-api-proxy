import { unsplashConfig } from './unsplash.config.mjs';
import { createApi } from 'unsplash-js';

const unsplash = createApi(unsplashConfig);

function sendRandomPhoto(response) {
    unsplash.photos
        .getRandom({
            query: 'abstract',
            orientation: 'landscape',
        })
        .then((result) => {
            if (result.errors) {
                response.send(result.errors);
            }
            const photo = result.response;
            response.send({
                description: photo.description,
                background: photo.urls.regular,
                username: photo.user.username,
                profile_url: photo.user.links.html,
            });
        })
        .catch((err) => {
            response.send(err);
        });
}

export { sendRandomPhoto };
