import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./signUpPage/SignUpPage";
import LoginForm from "./loginForm/LoginForm";
import Todo from "./Todo";

const LinkingFile = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/" SignUp/>
        <Link to="/login" Login />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/todo" element={<Todo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default LinkingFile;
