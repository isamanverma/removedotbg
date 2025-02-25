import { useState } from "react";
import { assets } from "../assets/assets";

export default function BgSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const handleSlideChange = (e) => {
    setSliderPosition(e.target.value);
  };
  return (
    <div className="mx-2 pb-10 md:pb-20">
      <h1 className="mb-12 mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-center text-2xl font-semibold text-transparent sm:mb-20 md:text-3xl lg:text-4xl">
        Remove Background with High <br /> Quality & Accuracy
      </h1>
      <div className="relative m-auto w-full max-w-3xl overflow-hidden rounded-xl">
        {/* background image */}
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt="image w background"
        />

        {/* foreground image */}
        <img
          className="absolute left-0 top-0 h-full w-full"
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt="image w background"
        />

        {/* slider */}
        <input
          className="slider absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform"
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSlideChange}
        />
      </div>
    </div>
  );
}
