import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./header/Header";
import Home from "./templates/homepage/Home";
import Account from "./templates/account/Account";
import Wallet from "./templates/wallet/Wallet";
import Market from "./templates/market/Market";
import Rankings from "./templates/rankings/Rankings";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/wallet" element={<Wallet />}></Route>
        <Route path="/market" element={<Market />}></Route>
        <Route path="/rankings" element={<Rankings />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
