import { useEffect, useState } from "react";

export default function PostForm({ savePost, post }) {
    const [title, setTitle] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (post) {
            // if post, set the states with values from the post object.
            // The post object is a prop, passed from UpdatePage
            setTitle(post.title);
            setSets(post.sets);
            setReps(post.reps);
        }
    }, [post]); // useEffect is called every time post changes.


    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            // create a new objebt to hold the value from states / input fields
            title: title,
            reps: reps,
            sets: sets
        };

        const validForm = formData.title && formData.sets && formData.reps; // will return false if one of the properties doesn't have a value
        if (validForm) {
            // if all fields/ properties are filled, then call savePost
            savePost(formData);
        } else {
            // if not, set errorMessage state.
            setErrorMessage("Please, fill in all fields.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Øvelse
                <input type="text" value={title} placeholder="Søg efter øvelse" onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Sets
                <input type="text" value={sets} placeholder="Indtast antal set" onChange={e => setSets(e.target.value)} />
            </label>
            <label>
                Reps
                <input type="text" value={reps} placeholder="Indtast antal reps" onChange={e => setReps(e.target.value)} />
            </label>
            <p className="text-error">{errorMessage}</p>
            <button type="submit">Opret</button>
        </form>
    );
}
