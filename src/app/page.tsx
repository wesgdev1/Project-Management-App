import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Radix app",
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/dashboard");
  }
  return (
    <Container className="px-5 md:px-0">
      <header className="my-10 p-10  bg-slate-500 rounded-2xl">
        <h1 className="text-7xl my-10">Welcome to RadixAPP</h1>
        <p>
          This is a simple app using Radix UI and Next.js for add projects and
          tasks
        </p>
        <div className="py-5">
          <Link
            href={"/auth/login"}
            className="text-white bg-slate-900 p-2 rounded-md"
          >
            Ingresa
          </Link>
        </div>
      </header>
    </Container>
  );
}
