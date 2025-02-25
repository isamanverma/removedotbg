import { assets, plans } from "../assets/assets";
export default function BuyCredit() {
  return (
    <div className="mb-10 min-h-[80vh] pt-14 text-center">
      <button className="mb-6 rounded-full border border-gray-400 px-10 py-2">
        Our Plans
      </button>
      <h1 className="mb-6 mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-center text-2xl font-semibold text-transparent sm:mb-10 md:text-3xl lg:text-4xl">
        Choose the plan that{"'"}s right your you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border bg-white px-8 py-12 text-gray-700 drop-shadow-sm transition-all duration-300 hover:scale-105"
          >
            <img src={assets.logo_icon} width={40} alt="logo" />
            <p className="mt-3 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}/</span>
              {item.credits} credits
            </p>
            <button className="mt-8 w-full min-w-52 rounded-md bg-gray-800 py-2.5 text-sm text-white">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
