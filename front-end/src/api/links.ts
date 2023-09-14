import axios from "axios";
import config from "../config";

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

const backEndUrl = config.backEndUrl

const api = {
  getLinks: async (): Promise<getLinksProps> => {
    try {
      const url = `${backEndUrl}/`;
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  getFullUrl: async (shortener: string): Promise<getFullUrlProps> => {
    try {
      const url = `${backEndUrl}/${shortener}`;
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  shorterUrl: async (fullUrl: string): Promise<void> => {
    try {
      const url = `${backEndUrl}/`;
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
