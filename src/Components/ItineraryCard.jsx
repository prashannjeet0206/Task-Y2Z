import { Places } from "../Data/Places";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdStarBorder } from "react-icons/md";

const ItineraryCards = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <header className="ml-7 flex flex-col gap-2">
        <h1 className="font-bold text-3xl">Itinerary</h1>
        <p className="font-bold text-gray-400 text-lg">Day</p>
      </header>
      <section className="space-y-6 h-[70vh] overflow-y-auto mt-8">
        {Places.map((place, index) => {
          return (
            <div
              key={place.id}
              className="flex items-start gap-4 bg-white rounded-xl shadow p-4"
            >
              {/* Images */}
              <div className="relative">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <span className="bg-purple-600 text-white w-6 h-6 rounded-full text-sm flex items-center justify-center absolute bottom-[50%] -left-3">
                  {index + 1}
                </span>
                <span className="absolute bottom-[25%] -left-6">
                  <IoReorderThreeOutline className="text-2xl" />
                </span>
              </div>

              {/* title,rating,description */}
              <div className="flex-1">
                <h3 className="font-bold">{place.name}</h3>
                <p className="flex items-center gap-4 text-gray-400 font-bold">
                  {place.rating}{" "}
                  <MdStarBorder className="text-yellow-500 text-xl" />{" "}
                  {`(${place.reviews.toLocaleString()})`}
                </p>
                <p className="bg-slate-100 p-2 rounded-md text-sm">
                  {place.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ItineraryCards;
