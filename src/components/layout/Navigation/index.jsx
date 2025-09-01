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
      title: "counter",
    },
    {
      to: "/todo",
      title: "todo",
    },
    {
      to: "/profile",
      title: "profile",
    },
    {
      to: "/products",
      title: "products",
    },
    {
      to: "/comments",
      title: "comments",
    },
    {
      to: "/weather",
      title: "weather",
    },
    {
      to: "/buttons",
      title: "buttons",
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
