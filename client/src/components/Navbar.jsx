import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/appContext";

export default function Navbar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const {credit, loadCreditsData} = useContext(AppContext)
  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData()
    }
  }, [isSignedIn])
  return (
    <nav className="mx-4 flex items-center justify-between py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="logo" />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() =>
            openSignIn({
              redirectUrl: "/",
              afterSignInUrl: "/",
            })
          }
          className="group flex items-center gap-2 rounded-full bg-zinc-800 px-6 py-2 text-base text-white transition-all sm:px-8 sm:py-3"
        >
          <span>Get Started</span>
          <img
            className="w-3 transition-transform duration-300 group-hover:translate-x-2 sm:w-4"
            src={assets.arrow_icon}
            alt="arrow icon"
          />
        </button>
      )}
    </nav>
  );
}
