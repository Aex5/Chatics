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
    <main className="w-full text-[#eff1f0] mt-10">
      <div className="max-w-[800px] mx-auto">
        <div className="w-96 mx-auto flex flex-col gap-4 ">
          <div className="text-2xl text-slate-300 font-semibold tracking-wide">
            <h1>Connect with your friends.</h1>
            <p className="text-indigo-600">Fast and Fun.</p>
          </div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="py-2 px-2 rounded-md bg-slate-700"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="py-2 px-2 rounded-md bg-slate-700"
          />
          <div className="w-full h-10 flex justify-between gap-3">
            <button
              onClick={loginHandler}
              className="w-full bg-gradient-to-br from-fuchsia-700 via-indigo-600 to-indigo-600 hover:border-[1px] border-slate-500 rounded-md "
            >
              Login
            </button>

            <button className="w-full bg-slate-700 rounded-md border-2 border-slate-600 hover:bg-slate-600">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
