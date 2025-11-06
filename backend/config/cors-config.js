const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests from any origin that matches the pattern
        const allowedOrigins = [
            'https://tadasedl.vercel.app',
            process.env.FRONTEND_URL,
            /^http:\/\/172.26.0.217:3004$/,
            /^http:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:3004$/
        ];
        
        if (!origin || allowedOrigins.some(pattern => typeof pattern === 'string' ? pattern === origin : pattern.test(origin))) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-jwt-token'],
    credentials: true,
    optionsSuccessStatus: 200
};

module.exports = corsOptions;
