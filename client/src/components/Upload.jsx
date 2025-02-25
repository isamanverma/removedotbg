import { assets } from "../assets/assets";

export default function Upload() {
  return (
    <div className="pb-16">
      {/* title */}
      <h1 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text py-6 text-center text-2xl font-semibold text-transparent md:py-16 md:text-3xl lg:text-4xl">
        See the magic. Try now
      </h1>

      <div className="mb-24 flex justify-center">
        <button>
          <input type="file" name="" id="upload2" hidden />
          <label
            className="to inline-flex cursor-pointer gap-3 rounded-full bg-fuchsia-500 bg-gradient-to-r from-violet-600 px-8 py-3.5 transition-all duration-700 hover:scale-105"
            htmlFor="upload2"
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
    </div>
  );
}
