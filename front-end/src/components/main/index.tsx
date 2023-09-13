import { useEffect, useState } from "react";
import Table from "../../shared/table";
import Input from "./Input";
import "./styles.css";
import api, { Link } from "../../api/links";

const Main = () => {
  const [links, setLinks] = useState<Link[]>([]);

  const fetchLinks = async () => {
    const response = await api.getLinks();
    setLinks(response.result);
  };

  const shorterUrl = async (value: string) => {
    await api.shorterUrl(value);
    alert("Link encurtado com sucesso!");
    fetchLinks();
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <main className="main-container">
      <h1 className="gradient">Shorten Your Loooong Links :)</h1>
      <p>
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </p>
      <Input onSend={shorterUrl} />
      <Table links={links} />
    </main>
  );
};

export default Main;
