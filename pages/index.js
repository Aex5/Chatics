import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
// import next router
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (!session) {
      router.push("/signIn");
    }
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <Account />
    </div>
  );
};

export default Home;
