import "./styles.css";

interface props {
    children: React.ReactNode;
}

const CustomButton = ({children}: props) => {
    return (
        <div className="button">
            <img src="/assets/arrow-right.svg" alt="right-arrow" className="icon" />
            <div style={{}} className="children">
                {children}
            </div>
        </div>
    )
}

export default CustomButton