import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.png";
import { usersRef } from "../firebase-config";
import { doc, setDoc } from "@firebase/firestore";

export default function SignUpPage({ showLoader }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const auth = getAuth();

  useEffect(() => {
    showLoader(false);
  }, [showLoader]);

  function handleSignUp(event) {
    event.preventDefault();
    const mail = event.target.mail.value; // mail value from inout field in sign in form
    const password = event.target.password.value; // password value from inout field in sign in form

    // read the docs: https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
    createUserWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Created and signed in
        const user = userCredential.user;
        console.log(user); // for test purposes: logging the authenticated user
        saveUserInfo();
      })
      .catch((error) => {
        let code = error.code; // saving error code in variable
        console.log(code);
        code = code.replaceAll("-", " "); // some JS string magic to display error message. See the log above in the console
        code = code.replaceAll("auth/", "");
        setErrorMessage(code);
      });
  }

  async function saveUserInfo() {
    const userToUpdate = {
      name: name, // name fra state
      age: age, //age fra state
      weight: weight, //weight fra state
      height: height, // height fra state
    };
    const docRef = doc(usersRef, auth.currentUser.uid);
    await setDoc(docRef, userToUpdate);
  }

  return (
    <section className="page">
      <img className="logo" src={logo} alt="Logo" />
      <p>Opret dig for at lave din egen træningsplan & dele den med andre</p>
      <form onSubmit={handleSignUp}>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Angiv dit navn"
          />
        </label>
        <input type="email" name="mail" placeholder="Indtast din email" />
        <label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            name="age"
            placeholder="Angiv din alder"
          />
        </label>{" "}
        <label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            name="weight"
            placeholder="Angiv vægt i Kg"
          />
        </label>{" "}
        <label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            name="Height"
            placeholder="Angiv højde"
          />
        </label>
        <input
          type="password"
          name="password"
          placeholder="Indtast dit kodeord"
        />
        <p className="text-error">{errorMessage}</p>
        <button>Sign Up</button>
      </form>
      <p className="text-center">
        Har du allerede en bruger? <Link to="/sign-in">Log in</Link>
      </p>
    </section>
  );
}
