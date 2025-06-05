import { Places } from "../Data/Places";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdStarBorder } from "react-icons/md";
import { FaMapMarkerAlt, FaPaperclip, FaTrashAlt, FaPen } from "react-icons/fa";
import { useState } from "react";

const ItineraryCards = () => {
  const [places, setPlaces] = useState(Places);
  const [dragCards, setDragCards] = useState(null);

  const dragStart = (index) => {
    setDragCards(index);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const drop = (index) => {
    if (dragCards === null || dragCards === index) return;

    const updatedPlaces = [...places];

    const [movedCard] = updatedPlaces.splice(dragCards, 1);
    updatedPlaces.splice(index, 0, movedCard);

    setPlaces(updatedPlaces);
    setDragCards(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <header className="ml-7 flex flex-col gap-2">
        <h1 className="font-bold text-3xl">Itinerary</h1>
        <p className="font-bold text-gray-400 text-lg">Day</p>
      </header>
      <section className="space-y-6 h-[70vh] overflow-y-auto mt-8">
        {places.map((place, index) => {
          return (
            <div
              key={place.id}
              className="flex items-start gap-4 bg-white rounded-xl shadow p-4"
              draggable
              onDragStart={() => dragStart(index)}
              onDragOver={(e) => dragOver(e)}
              onDrop={() => drop(index)}
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
                <div className="relative mt-1 w-full">
                  <p className="bg-slate-100 p-3 pr-10 rounded-md text-sm relative">
                    {place.description}
                  </p>
                  <FaPen className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg cursor-pointer" />
                </div>
              </div>

              {/* icons */}
              <div className="flex flex-row items-center gap-3 w-auto">
                <FaMapMarkerAlt className="text-red-500" />
                <button>
                  <FaPaperclip className="text-gray-400" />
                </button>
                <button>
                  <FaTrashAlt className="text-red-600" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ItineraryCards;
