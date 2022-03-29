import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import React from "react";
import profileuser from "../assets/img/profile-user.png";

export default function SignInPage({ showLoader }) {
  const [errorMessage, setErrorMessage] = useState("");
  const auth = getAuth();

  useEffect(() => {
    showLoader(false);
  }, [showLoader]);

  function signIn(event) {
    event.preventDefault();
    const mail = event.target.mail.value; // mail value from inout field in sign in form
    const password = event.target.password.value; // password value from inout field in sign in form

    // read the docs: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user); // for test purposes: logging the authenticated user
      })
      .catch((error) => {
        let code = error.code; // saving error code in variable
        console.log(code);
        code = code.replaceAll("-", " "); // some JS string magic to display error message. See the log above in the console
        code = code.replaceAll("auth/", "");
        setErrorMessage(code);
      });
  }
  return (
    <section className="page">
      <img src={profileuser} alt="Logo" />
      <h1>Fitness Tracker</h1>
      <form onSubmit={signIn}>
        <input type="email" name="mail" placeholder="Indtast din email" />
        <input
          type="password"
          name="password"
          placeholder="Indtast dit kodeord"
        />
        <p className="text-error">{errorMessage}</p>
        <button>Log ind</button>
      </form>
      <p className="text-center">
        Har du ikke en bruger? <Link to="/sign-up">Opret</Link>
      </p>
    </section>
  );
}
