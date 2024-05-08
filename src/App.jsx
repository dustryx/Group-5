import "./App.css";
import CabinList from "./CabinList";
import BookingForm from "./BookingForm";
import CabinDetails from "./CabinDetails";
import BookingSummary from "./BookingSummary";
import NavBar from "./NavBar";
import CabinCard from "./CabinCard";
function App() {
  return (
    
    <>
      <NavBar />
      <CabinCard />
      <CabinList />
      <BookingForm />
      <CabinDetails />
      <BookingSummary />
    </>
  );
}
export default App;
