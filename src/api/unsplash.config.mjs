import fetch from 'node-fetch';

const unsplashConfig = {
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    fetch: fetch,
};

export { unsplashConfig };
