import { useNavigate } from "react-router-dom";

function GoBack() {
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate(-1);


    }
    return (<>
        <button onClick={HandleClick}>Trở lại</button>
    </>)
}
export default GoBack;