import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function page() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

  return (
    <div className="mt-8">
      <h1 className="text-center font-bold text-3xl">
        Welcome to your profile!
      </h1>
    </div>
  );
}

export default page;
