import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/createSlice/userSlice";

const Users = ({ albumId, id, title, thumbnailUrl }) => {
  const dispatch = useDispatch();
  const [titleBlog, setTitleBlog] = useState(title);

  const handleUpdateTitle = (e) => {
    setTitleBlog(e.target.value);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    console.log("blur");
    dispatch(
      userActions.isActiveUpdateTitle({
        isStateBtn: { title: titleBlog, albumId, id, thumbnailUrl },
        isActiveBtn: true,
      })
    );
    dispatch(
      userActions.isResetTitleUser({
        isStateBtn: { title, albumId, id, thumbnailUrl },
        isActiveBtn: true,
      })
    );
  };

  return (
    <section
      className=""
      id={albumId}
      style={{
        display: "flex",
        gap: "20px",
        margin: "10px 0",
      }}>
      <img
        src={thumbnailUrl}
        alt="avatar"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          flex: 3,
          flexDirection: "column",
          display: "flex",
          gap: "10px",
        }}>
        <label htmlFor={id}>User {id}</label>
        <input
          value={titleBlog}
          id={id}
          defaultValue="title"
          onChange={handleUpdateTitle}
          onBlur={handleBlur}
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>{Math.random()}</p>
      </div>
    </section>
  );
};

export default React.memo(Users);
