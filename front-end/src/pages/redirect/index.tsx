import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/links";
import navigateExternalRoute from "../../helpers/navigateExternalRoute";

const Redirect = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { link } = useParams();

  const fetchUrl = async () => {
    const response = await api.getFullUrl(link!);
    console.log(response);
    navigateExternalRoute(response.result);
  };

  useEffect(() => {
    fetchUrl();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="">Loading</div>;
  }

  return null;
};

export default Redirect;
