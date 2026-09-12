import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import { useState } from "react";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();


  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );


  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  let registerForm = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    reset();
    toast.success("User registered successfully!");
  };


  let loginForm = (data) => {

    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("Invalid credentials!");
      return;
    }

    dispatch(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    reset();
  };
  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
