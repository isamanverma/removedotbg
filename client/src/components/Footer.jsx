import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 lg:px-44">
      <img width={150} src={assets.logo} alt="logo" />
      <p className="border-1 flex-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        &copy; isamanverma | All rights reserved.{" "}
      </p>
      <div className="flex gap-1">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.google_plus_icon} alt="" />
      </div>
    </div>
  );
}
