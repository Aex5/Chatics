import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const session = useSession();
  const supabase = useSupabaseClient();

  async function loginHandler() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <>
          <h1>Login</h1>
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
        </>
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;
