import {useState } from "react";

function LikeButton(){
    const [liked, setLiked] = useState(false);

    const like = () => {
        setLiked(!liked)
    }

    return (
        <>
            <button style={{ marginTop: "160px" }} onClick={like}  >
                {liked ? " ❤️ Liked" : " 🤍 Like"}
            </button>
        </>
    )
}

export default LikeButton;