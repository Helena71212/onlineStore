import startCase from "lodash/startCase";
import styles from "./index.module.css"

const Profile = ({ 
  userInfo, 
  orders, 
  }) => {
  return (
    <div className={styles.orderWrapper}>
      <div className={styles.info}>
        <h2>Name & Email</h2>
        <div>
          <div className={styles.personInfo}>
            <p>
              {userInfo.firstName} {userInfo.lastName}
            </p>
            <p>{userInfo.email}</p>
          </div>
        </div>
        <div>
          <h2>Orders & Returns</h2>
          <div>
           <p>Orders shown here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
