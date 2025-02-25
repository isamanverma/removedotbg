import { Link } from "react-router-dom";
import { Trash } from "lucide-react";

export default function Error() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-5">
      <Trash size={50} />
      <h1>Error 404: Page Not Found</h1>
      <Link to="/">
        <button className="rounded-full bg-zinc-800 px-6 py-2 text-base text-white sm:px-8 sm:py-3">
          Return to Home
        </button>
      </Link>
    </section>
  );
}
