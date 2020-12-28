import { unsplashConfig } from './unsplash.config.mjs';
import { createApi } from 'unsplash-js';

const unsplash = createApi(unsplashConfig);

function fetchRandomPhoto(query) {
    return unsplash.photos
        .getRandom({
            query: query.searchterm,
            orientation: query.orientation,
        })
        .then((result) => {
            if (result.errors) {
                throw result.errors;
            }
            const randomPhoto = result.response;
            return {
                description: randomPhoto.description,
                background: randomPhoto.urls[query.size],
                username: randomPhoto.user.username,
                profile_url: randomPhoto.user.links.html,
            };
        })
        .catch((err) => {
            throw err;
        });
}

export { fetchRandomPhoto };
