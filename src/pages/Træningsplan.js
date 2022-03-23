import { useState, useEffect } from "react";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { postsRef } from "../firebase-config";
import PostCard from "../components/PostCard";

export default function HomePage({ showLoader }) {
    const [planer, setPlaner] = useState([]);

    useEffect(() => {
        const q = query(postsRef, orderBy("createdAt", "desc")); // order by: lastest post first
        const unsubscribe = onSnapshot(q, data => {
            const postsData = data.docs.map(doc => {
                // map through all docs (object) from post collection
                return { ...doc.data(), id: doc.id }; // changing the data structure so it's all gathered in one object
            });
            setPlaner(postsData);
            showLoader(false);
        });
        return () => unsubscribe(); // tell the post component to unsubscribe from listen on changes from firestore
    }, [showLoader]);

    return (
        <section className="page">
            <section className="grid-container">
                {planer.map(planer => (
                    <PostCard post={planer} key={planer.id} />
                ))}
            </section>
        </section>
    );
}