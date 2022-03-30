import { useEffect, useState } from "react";

export default function PostForm({ post }) {

  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [rating, setRating] = useState([]);
  const [reads, setReads] = useState([]);



  useEffect(() => {
    if (post) {
      // if post, set the states with values from the post object.
      // The post object is a prop, passed from UpdatePage
      setName(post.name);
      setPosts(post.posts);
      setRating(post.rating);
      setReads(post.reads);

    }
  }, [post]); // useEffect is called every time post changes.


  return (
    <section>
      <h1> {post.name} </h1>
      <p> {post.reads} </p>
      <p> {post.rating} </p>
      
      
      
      <p className="text-error">{errorMessage}</p>
    </section>
  );
}
