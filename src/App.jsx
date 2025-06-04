import Itinerary from "./Components/Itinerary";
import Places from "./Components/Places";

function App() {
  return (
    <div className="grid grid-cols-2 w-[80%] h-screen mx-auto mt-4">
      <Itinerary />
      <Places />
    </div>
  );
}

export default App;
