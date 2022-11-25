import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";

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
              onClick={signUpHandler}
              className="w-full bg-gradient-to-br from-fuchsia-700 via-indigo-600 to-indigo-600 hover:border-[1px] border-slate-500 rounded-md "
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
