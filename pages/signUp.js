import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewEmail, setViewEmail] = useState(false);

  const supabase = useSupabaseClient();

  async function signUpHandler() {
    const { data, error } = supabase.auth.signUp({ email, password });
    if (!error) {
      return setViewEmail(true);
    }
  }

  return (
    <div>
      <h1>signUP</h1>
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
      {viewEmail ? <h1>check your email</h1> : <h1> </h1>}
      <button onClick={signUpHandler}>signUp</button>
      <br />
    </div>
  );
}
