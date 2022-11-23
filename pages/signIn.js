import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Router from "next/router";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const supabase = useSupabaseClient();

  async function loginHandler() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      Router.push("/");
    }
  }

  return (
    <div>
      <h1>sign in</h1>
      email:
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <br /> Password:
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password"
      />
      <br />
      <button onClick={loginHandler}>Login</button>
      <br />
    </div>
  );
}
