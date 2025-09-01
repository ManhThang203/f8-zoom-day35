import { useEffect, useState } from "react";
import imgLove from "../../assets/img/love.jpg";
import styles from "./Profile.module.scss";
function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((user) => {
        setProfile(user);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <span className={styles.loader}></span>}
      {profile && (
        <div className={styles.profileCard}>
          <div className={styles.container}>
            <div className={styles.imgGirl}>
              <img src={imgLove} alt="love" />
            </div>
            <div className={styles.information}>
              <div className={styles.contentHeader}>
                <h1>{profile.name}</h1>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span>{profile.username}</span>
              <div className={styles.mainContent}>
                <span>{profile.email}</span>
                <span>{profile.phone}</span>
                <span>{profile.website}</span>
              </div>
              <div className="footer-content">
                <span>{profile.address.street}</span>
                <span>{profile.address.city}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Profile;
