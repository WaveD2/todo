import React, { useEffect, useLayoutEffect, useState } from "react";
import Users from "../components/Layout/Users";
import Button from "../components/Layout/Button";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/createSlice/userSlice";
import { FakeApi } from "./FakeApi.js";
const HomePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userSlice.userItems);
  const [loading, setLoading] = useState(false);
  const data = currentUser;
  const [page, setPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      const data = await FakeApi(page);
      setLoading(true);
      dispatch(userActions.addUserItems(data));
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + Math.floor(document.documentElement.scrollTop) ===
      Math.floor(document.documentElement.offsetHeight) - 1
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <div
      style={{
        maxWidth: "1080px",
        margin: "12px auto",
        padding: "12px",
        border: "1px solid #333",
      }}>
      <Button text={"Confirm"} />
      <Button text={"Reset"} />
      <div style={{ marginTop: "80px" }}>
        {data?.map((item) => (
          <Users
            key={item.id}
            albumId={item.albumId}
            id={item.id}
            title={item.title}
            thumbnailUrl={item.thumbnailUrl}
          />
        ))}
      </div>
      {loading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
    </div>
  );
};

export default HomePage;
