import { useState } from "react";
import CustomButton from "../../shared/button";

interface props {
    onSend: (url: string) => void;
}

const Input = ({ onSend }: props) => {
    const [inputValue, setInputVale] = useState("");

    const confirm = () => {
        onSend(inputValue);
        setInputVale("");
    };

    return (
        <div className="input-container">
            <img src="/assets/link.svg" alt="" />
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputVale(e.target.value)}
                placeholder="Enter the link here"
            />
            <CustomButton onClick={confirm}>Shorten Now!</CustomButton>
        </div>
    );
};

export default Input;
