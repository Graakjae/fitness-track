import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function PostCard({ post }) {
    const navigate = useNavigate();

    /**
     * handleClick is called when user clicks on the Article (PostCard)
     */
    function handleClick() {
        navigate(`plan/${post.id}`);
    }

    return (
        <article onClick={handleClick}>
            <h2>{post.name}</h2>
            <p>{post.id}</p>
            <p>{post.muskel}</p>
            <UserAvatar uid={post.uid} />
        </article>
    );
}
