import './App.css';
import Product from './Product';
import Extra from './Extra';
import Extrawork from './Extrawork';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/extrawork" element={<Extrawork />} />
      </Routes>
    </div>

  );
}

export default App;