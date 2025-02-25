import { assets } from "../assets/assets";

export default function Header() {
  return (
    <div className="m-10 flex items-center justify-between gap-y-10 px-4 max-sm:flex-col-reverse sm:mt-20 lg:px-44">
      {/* Left side */}
      <div>
        <h1 className="text-4xl font-bold leading-tight text-neutral-700 xl:text-5xl 2xl:text-6xl">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md:hidden" />
          images for free
        </h1>
        <p className="my-6 text-base text-gray-500">
          Remove backgrounds from images in seconds with AI-powered precision.
          <br className="max-sm:hidden" /> Upload, process, and download with
          ease! 🚀
        </p>
        <button className="">
          <input type="file" name="" id="upload1" hidden />
          <label
            className="to inline-flex cursor-pointer gap-3 rounded-full bg-fuchsia-500 bg-gradient-to-r from-violet-600 px-8 py-3.5 transition-all duration-700 hover:scale-105"
            htmlFor="upload1"
          >
            <img
              width={20}
              src={assets.upload_btn_icon}
              alt="upload button icon"
            />
            <p className="text-sm text-white">Upload your image</p>
          </label>
        </button>
      </div>

      {/* Right side */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="header_img" />
      </div>
    </div>
  );
}
