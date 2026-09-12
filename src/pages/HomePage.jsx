import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/authSlice";

const HomePage = () => {
  let dispatch = useDispatch();
  return (
    <div className="h-screen bg-black text-white text-6xl font-semibold flex flex-col items-center justify-center">
      This is test home.
      <div
        className="m-3 px-4 py-2 text-3xl rounded-lg bg-red-700 cursor-pointer"
        onClick={() => dispatch(removeUser())}
      >
        Logout
      </div>
    </div>
  );
};

export default HomePage;
