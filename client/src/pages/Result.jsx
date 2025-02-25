import { assets } from "../assets/assets";

export default function Result() {
  return (
    <div className="mx-4 my-3 mt-14 min-h-[75vh] lg:mx-44">
      <div className="rounded-lg bg-white px-8 py-6 drop-shadow-sm">
        {/* image container */}
        <div className="flex grid-cols-2 flex-col gap-8 sm:grid">
          {/* left */}
          <div>
            <p className="mb-2 font-semibold text-gray-600">Original Image</p>
            <img
              className="rounded-md border"
              src={assets.image_w_bg}
              alt="image w background"
            />
          </div>
          {/* right */}
          <div className="flex flex-col">
            <p className="mb-2 font-semibold text-gray-600">
              Background Removed
            </p>
            <div className="bg-layer relative h-full overflow-hidden rounded-md border border-gray-300">
              {/* <img
              className=""
              src={assets.image_wo_bg}
              alt="image without background"
              /> */}

              <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform">
                <div className="size-12 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:justify-end">
          <button className="cursor-pointer rounded-full border border-violet-600 px-8 py-2.5 text-sm text-violet-600 transition-all duration-300 hover:scale-105">
            Try another image
          </button>
          <a href="">
            <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-2.5 text-sm text-white transition-all duration-300 hover:scale-105">
              Download image
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
