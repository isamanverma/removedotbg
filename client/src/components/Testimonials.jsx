import { testimonialsData } from "../assets/assets";

export default function Testimonials() {
  return (
    <div>
      {/* Title */}
      <h1 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-center text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl">
        Customer Testimonials
      </h1>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-2">
        {testimonialsData.map((item, index) => (
          <div
            className="m-auto max-w-lg rounded-xl bg-white p-6 drop-shadow-md transition-all duration-300 hover:scale-105"
            key={index}
          >
            <p className="font-serif text-4xl text-gray-500">&quot;</p>
            <p className="text-sm text-gray-500">{item.text}</p>
            <div className="mt-5 flex items-center gap-3">
              <img
                className="w-9 rounded-full"
                src={item.image}
                alt="customer profile picture"
              />
              <div>
                <p>{item.author}</p>
                <p className="text-sm text-gray-600">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
