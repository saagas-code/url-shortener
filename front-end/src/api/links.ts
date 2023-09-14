import axios from "axios";

export interface Link {
  id: string;
  url: string;
  shortener: string;
  clicks: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface getLinksProps {
  result: Link[];
}

interface getFullUrlProps {
  result: string;
}

const api = {
  getLinks: async (): Promise<getLinksProps> => {
    try {
      const url = `http://localhost:${process.env.REACT_APP_API_PORT}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  getFullUrl: async (shortener: string): Promise<getFullUrlProps> => {
    try {
      const url = `http://localhost:8819/${shortener}`;
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  shorterUrl: async (fullUrl: string): Promise<void> => {
    try {
      const url = `http://localhost:8819/`;
      const response = await axios.post(url, {
        url: fullUrl,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};

export default api;
