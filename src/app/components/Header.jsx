import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

async function Header() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="bg-gray-100 py-4 px-8 flex justify-between">
      {/* logo div here */}
      <div>
        <p className="text-3xl">Blog Website</p>
      </div>
      {/* logo div here */}

      {/* Navlinks div here */}
      <div className="flex gap-4">
        <button className="border rounded-lg border-black px-4 py-2 hover:bg-gray-300 duration-300 transition-all">
          <Link className="text-xl font-bold" href={"/"}>
            Home
          </Link>
        </button>
        <button className="border rounded-lg border-black px-4 py-2 hover:bg-gray-300 duration-300 transition-all">
          <Link className="text-xl font-bold" href={"/profile"}>
            Profile
          </Link>
        </button>
        {isUserAuthenticated ? (
          <>
            <button className="text-xl font-bold border rounded-lg border-black px-4 py-2 hover:bg-gray-300 duration-300 transition-all">
              <LogoutLink>Log out</LogoutLink>
            </button>
          </>
        ) : (
          <>
            <button className="text-xl font-bold border rounded-lg border-black px-4 py-2 hover:bg-gray-300 duration-300 transition-all">
              <LoginLink>Sign in</LoginLink>
            </button>
            <button className="text-xl font-bold border rounded-lg border-black px-4 py-2 hover:bg-gray-300 duration-300 transition-all">
              <RegisterLink>Sign up</RegisterLink>
            </button>
          </>
        )}
      </div>
      {/* Navlinks div here */}
    </div>
  );
}

export default Header;
