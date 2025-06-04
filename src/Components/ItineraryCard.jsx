import { Places } from "../Data/Places";

const ItineraryCards = () => {
  return Places.map((place) => {
    return (
      <div>
        <p>{place.name}</p>
        <img src={place.image} alt={place.name} />
      </div>
    );
  });
};

export default ItineraryCards;
