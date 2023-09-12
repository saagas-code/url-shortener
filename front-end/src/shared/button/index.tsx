import "./styles.css";

interface props {
    children: React.ReactNode;
    onClick?: () => void
}

const CustomButton = ({children, onClick}: props) => {
    return (
        <button onClick={onClick} className="button">
            <img src="/assets/arrow-right.svg" alt="right-arrow" className="icon" />
            <div style={{}} className="children">
                {children}
            </div>
        </button>
    )
}

export default CustomButton