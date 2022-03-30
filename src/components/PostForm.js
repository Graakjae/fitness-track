import { useEffect, useState } from "react";

export default function PostForm({ savePost, post }) {

  const [name, setname] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (post) {
      // if post, set the states with values from the post object.
      // The post object is a prop, passed from UpdatePage
      setname(post.name);
    }
  }, [post]); // useEffect is called every time post changes.

  /**
   * handleImageChange is called every time the user chooses an image in the fire system.
   * The event is fired by the input file field in the form
   */
  

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      // create a new objebt to hold the value from states / input fields
      name: name,
    };

    const validForm = formData.name && formData.body && formData.image; // will return false if one of the properties doesn't have a value
    if (validForm) {
      // if all fields/ properties are filled, then call savePost
      savePost(formData);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h1
          type="text"
          value={name}
          placeholder="Navngiv din træningsplan"
        > </h1>
      </label>
      
      <label>
        <input
          type="text"
          value={body}
          placeholder="Beskriv din træningsplan"
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      
      <p className="text-error">{errorMessage}</p>
      <button type="submit">Opret</button>
    </form>
  );
}
