import { LocalizationProvider } from "@mui/x-date-pickers";
import Navigation from "./features/navigation/components/Navigation";
import RentalForm from "./features/rental-form/pages/RentalForm";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <main>
      <Navigation />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RentalForm />
      </LocalizationProvider>
    </main>
  );
}

export default App;
