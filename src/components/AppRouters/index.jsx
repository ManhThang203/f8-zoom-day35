import { HashRouter, Routes, Route } from "react-router";
import Navigation from "../layout/Navigation";
// Pages
import Home from "../../page/Home";
import Counter from "../../page/Counter";
import Todo from "../../page/Todo";
import Profile from "../../page/Profile";
import Products from "../../page/Products";
import Comments from "../../page/Comments";
import Weather from "../../page/Weather";
import Buttons from "../../page/Buttons";

function AppRouters() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </HashRouter>
  );
}
export default AppRouters;
