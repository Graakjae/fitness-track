import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function PostCard({ post }) {
    const navigate = useNavigate();

    /**
     * handleClick is called when user clicks on the Article (PostCard)
     */
    function handleClick() {
        navigate(`posts/${post.id}`);
    }

    return (
        <article onClick={handleClick}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} alt={post.title} />
            <UserAvatar uid={post.uid} />
        </article>
    );
}
