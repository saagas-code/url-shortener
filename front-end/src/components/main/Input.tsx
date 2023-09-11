import CustomButton from "../../shared/button"

const Input = () => {
    return (
        <div className="input-container">
            <img src="/assets/link.svg" alt="" />
            <input type="text" placeholder="Enter the link here" />
            <CustomButton>
                <div className="">Shorten Now!</div>
            </CustomButton>
        </div>
    )
}

export default Input