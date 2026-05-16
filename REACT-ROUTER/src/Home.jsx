import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about")
    }

    return (
        <>
            <h2>Welcome to Home</h2>
            <button onClick={goToAbout}>Go to About</button>
        </>
    )

}

export default Home;