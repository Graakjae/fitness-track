import { useState, useEffect } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { usersRef } from "../firebase-config";
import placerholder from "../assets/img/user-placeholder.jpg";

export default function UserAvatar({ uid }) {
    const [user, setUser] = useState({
        image: placerholder,
        name: "User's Name",
    }); // initial values defined for properties: image, name and title

    useEffect(() => {
        // based on the passed prop uid from PostCard
        // get user detail from firestore
        async function getUser() {
            const docRef = doc(usersRef, uid); // uid is the prop
            const docSnap = await getDoc(docRef);
            if (docSnap.data()) {
                // if user data then state the user state with the values
                setUser(docSnap.data());
            }
        }
        getUser();
    }, [uid]); // useEffect is called every time uid changes

    return (
        <div className="avatar">
            <span>
                <p>Lavet af {user.name}</p>
            </span>
        </div>
    );
}
