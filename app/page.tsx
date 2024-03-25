import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <section>
      <h1>This is Home Page</h1>
      {session ? (
        <div>
          <h1>You are logged in.</h1>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h1>You are logged out.</h1>
          <Link href="/auth">
            <Button>Log In</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
