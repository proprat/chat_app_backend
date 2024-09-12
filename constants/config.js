const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://chat-app-frontend-seven-sigma.vercel.app'
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
