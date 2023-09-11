import Table from "../../shared/table";
import Input from "./Input";
import "./styles.css";

const Main = () => {
    return (
        <main className="main-container">

            <h1 className="gradient">Shorten Your Loooong Links :)</h1>
            <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
            <Input />
            <Table />

        </main>
    );
};

export default Main;
