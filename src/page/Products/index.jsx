import { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import Button from "../../components/Button";

function Products() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectPost, setSelectPost] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((user) => {
        setposts(user);
        setLoading(false);
      });
  }, []);
  const handleModal = (id) => {
    const cardId = posts.find((card) => card.id === id);

    setSelectPost(cardId);
  };
  const handlCloseModal = () => {
    setSelectPost(null);
  };
  return (
    <>
      {loading && <span className={styles.loader}></span>}
      <h1 className={styles.titleHeading}>Danh Sách Sản phẩm</h1>
      <div className={styles.gird}>
        {posts.map((post) => (
          <div className={styles.card} key={post.id}>
            <h2 className={styles.titleCard}>{post.title}</h2>
            <p className={styles.title}>{post.body}</p>

            <Button className={styles.btn} onClick={() => handleModal(post.id)}>
              Chi tiết sản phẩm
            </Button>
          </div>
        ))}
      </div>

      {selectPost && (
        <div className={styles.modalOverlay} onClick={handlCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectPost.title}</h2>
            <p>{selectPost.body}</p>
            <Button onClick={handlCloseModal}>Đóng</Button>
          </div>
        </div>
      )}
    </>
  );
}
export default Products;
