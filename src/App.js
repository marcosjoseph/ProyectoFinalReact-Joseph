import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Cart from "./Components/Cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {DataProvider} from "./Context/DataContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="*" element={<Error/>}/>
            </Route>
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
