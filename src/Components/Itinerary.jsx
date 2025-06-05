import Header from "./Header";
import ItineraryCards from "./ItineraryCard";

const Itinerary = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl flex flex-col ">
      <Header />
      <ItineraryCards />
    </div>
  );
};

export default Itinerary;
