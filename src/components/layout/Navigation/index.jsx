import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";
function Navigation() {
  const navItems = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/counter",
      title: "Counter",
    },
    {
      to: "/todo",
      title: "Todo",
    },
    {
      to: "/profile",
      title: "Profile",
    },
    {
      to: "/products",
      title: "Products",
    },
    {
      to: "/comments",
      title: "Comments",
    },
    {
      to: "/weather",
      title: "Weather",
    },
    {
      to: "/buttons",
      title: "Buttons",
    },
  ];
  return (
    <nav>
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={item.to}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </nav>
  );
}
export default Navigation;
