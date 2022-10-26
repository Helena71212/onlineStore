import startCase from "lodash/startCase";

const Profile = ({ 
  userInfo, 
  order, 
  }) => {
  return (
    <div>
      <div>
        <h2>Name & Email</h2>
        <div>
          <div>
            <p>
              {userInfo.firstName} {userInfo.lastName}
            </p>
            <p>{userInfo.email}</p>
          </div>
        </div>
        <div>
          <h1>Orders & Returns</h1>
          <div>
            {order?.map((item) => (
              <div key={item.id}>
                <div>{startCase(item.name)}</div>
                <div>
                  <div>Quantity: {item.quantity}</div>
                  <div>Unit price: {item.price}</div>
                  <div>Total price: {item.quantity * item.price}</div>
                </div>
              </div>
            ))}
            <div>
              Total price: ${" "}
              {order?.reduce(
                (result, item) => result + item.quantity * item.price,
                0
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
