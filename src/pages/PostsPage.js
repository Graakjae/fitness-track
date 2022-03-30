import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { favsRef } from "../firebase-config";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";

export default function HomePage({ post, showLoader }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(favsRef, data => {
            const favData = data.docs.map(doc => {
                // map through all docs (object) from post collection
                return { ...doc.data(), id: doc.id }; // changing the data structure so it's all gathered in one object
            });
            console.log(favData);
            setPosts(favData);
            showLoader(false);
        });
        return () => unsubscribe(); // tell the post component to unsubscribe from listen on changes from firestore
    }, [showLoader]);

    const navigate = useNavigate();

    /**
     * handleClick is called when user clicks on the Article (PostCard)
     */
    function handleClick() {
        navigate(`/ny-plan`);
    }

    return (
        <section className="page">
            <button className="button-fixed" onClick={handleClick}>Opret træningsplan</button>
            
            <section className="grid-container">
                <h1>Dine træningsplaner</h1>
                {posts.map(post => (
                    <PostCard post={post} key={post.id} />
                ))}
                <button className="button" 
                //onClick={}
                >
                Se alle
            </button>
            </section>
            <section className="grid-container">
                <h1>Udforsk træningsplaner</h1>
                {posts.map(post => (
                    <PostCard post={post} key={post.id} />
                ))}
                <button className="button" 
                //onClick={}
                >
                Se alle
            </button>
            </section>

        </section>
    );
}
