import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/actions/userActions";
import { increment, decrement } from "../../../redux/actions/counterActions";

const TestRedux = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);

  //const count = useSelector((state) => state.counter)

  return (
    <div className="container">
      {/* <p>
        User name and Email: {userInfo.name}, {userInfo.email}
      </p> */}

      {/* Вариант 1: */}
      {/* <p>
        User name and Email:{" "}
        {userInfo.name && userInfo.email
          ? `${userInfo.name}, ${userInfo.email}`
          : null}
      </p> */}

      {/* Вариант 2: */}
      <p>
        User name and Email:{" "}
        {userInfo.name &&
          userInfo.email &&
          `${userInfo.name}; ${userInfo.email}`}
      </p>

      {/* Вариант 3: */}
      {/* {userInfo.name && userInfo.email && (
        <p>
          User name and Email: {userInfo.name}; {userInfo.email}
        </p>
      )} */}

      <button
        className="btnPrimary"
        onClick={() =>
          dispatch(setUser({ name: "Anna", email: "anna@mail.com" }))
        }
      >
        Set user
      </button>
    </div>
  );
};

export default TestRedux;
