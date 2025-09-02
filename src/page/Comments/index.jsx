import { useEffect, useState } from "react";
import styles from "./Comments.module.scss";
import Button from "../../components/Button";
function Comments() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const getFakeTime = () => {
    const times = [
      "2 giờ trước",
      "5 giờ trước",
      "1 ngày trước",
      "3 ngày trước",
      "1 tuần trước",
    ];
    return times[Math.floor(Math.random() * times.length)];
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !body) return;
    const newComment = {
      id: Date.now(),
      name,
      email,
      body,
      time: getFakeTime(),
    };
    setComments([newComment, ...comments]); // sét vào đầu mảng
    setName("");
    setEmail("");
    setBody("");
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((data) => {
        setComments(
          data.map((c) => ({
            ...c,
            time: getFakeTime(),
          }))
        );
      });
  }, []);
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span className={styles.input}>
          <input
            type="text"
            name="name"
            placeholder="Nhập tên của bạn..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Nhập email của bạn..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <textarea
          name="body"
          rows={4}
          placeholder="Nội dung bình luận..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <Button disabled={!name || !email || !body} rounded>
          Gửi bình luận
        </Button>
      </form>
      <div className={styles.container}>
        {comments.map((c) => (
          <div className={styles.comment} key={c.id}>
            <div className={styles.commentWapper}>
              <div className={styles.commentContent}>
                <img
                  src={`https://ui-avatars.com/api/?name=${c.name}&background=random`}
                  alt={c.name}
                />
                <div className={styles.information}>
                  <div className={styles.content}>
                    <h3>{c.name}</h3>
                    <span className={styles.email}>{c.email}</span>
                    <span className={styles.time}>{c.time}</span>
                  </div>
                  <p className={styles.title}>{c.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Comments;
