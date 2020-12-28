const corsConfig = {
    origin: process.env.ALLOWED_ORIGIN,
    methods: 'GET',
    optionsSuccessStatus: 200,
};

export { corsConfig };
