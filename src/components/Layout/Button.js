import React from "react";
import "./styled.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/createSlice/userSlice";
const Button = ({ text }) => {
  const dispatch = useDispatch();

  // userSlice in fn reduce store
  const stateBtnSave = useSelector((state) => state.userSlice?.isActiveBtn);
  const stateBtnReset = useSelector((state) => state.userSlice?.isResetBtn);

  console.log("stateBtnReset", stateBtnReset);
  let isActive = stateBtnSave.isActiveBtn;
  const handleConfirm = () => {
    dispatch(userActions.updateTitle(stateBtnSave.isStateBtn));
    dispatch(
      userActions.isActiveUpdateTitle({ isStateBtn: {}, isActive: false })
    );
  };

  const handleReset = () => {
    dispatch(userActions.updateTitle(stateBtnReset.isStateBtn));
    dispatch(
      userActions.isActiveUpdateTitle({ isStateBtn: {}, isActive: false })
    );
  };

  return (
    <button
      className="btn"
      onClick={text === "Reset" ? handleReset : handleConfirm}
      disabled={isActive ? false : true}>
      {text}
    </button>
  );
};

export default Button;
