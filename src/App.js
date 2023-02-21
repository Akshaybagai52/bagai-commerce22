import "./styles.scss";
import "./categories.styles.scss";
import Home from "./components/routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";
import Shop from "./components/routes/shop/Shop";
import Authentication from "./components/routes/authentication/Authentication";
import Checkout from "./components/routes/checkout/checkout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
