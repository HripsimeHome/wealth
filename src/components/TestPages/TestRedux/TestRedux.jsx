import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/actions/userProfileActions";
import {
  setIncrement,
  setDecrement,
} from "../../../redux/actions/counterActions";

const TestRedux = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userProfile);

  const counter = useSelector((state) => state.counter.count);

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
      <br />
      <br />
      <p> {counter}</p>
      <button className="btnPrimary" onClick={() => dispatch(setIncrement())}>
        +1
      </button>{" "}
      Increment
      <br /> <br />
      <button className="btnPrimary" onClick={() => dispatch(setDecrement())}>
        -1
      </button>{" "}
      Decrement
      <br />
    </div>
  );
};

export default TestRedux;
