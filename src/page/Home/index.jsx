import styles from "./Home.module.scss";
function Home() {
  return (
    <div className={styles.home}>
      <img
        src="https://zoom.fullstack.edu.vn/assets/f8_icon.png"
        alt=""
        className={styles.img}
      ></img>
      <h1 className={styles.title}>Chào mừng đến với F8 React Day 35</h1>
    </div>
  );
}
export default Home;
