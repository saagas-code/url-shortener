const API_PORT = import.meta.env.VITE_BACKEND_PORT;

const config = {
  backEndUrl: `http://localhost:${API_PORT}`, 
  frontEndUrl: "http://localhost:5173",
};

export default config;
