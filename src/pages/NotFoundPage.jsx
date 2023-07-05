import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1000);
  return (
    <div>
      <h1 style={{ color: "red" }}>Not Found page</h1>
    </div>
  );
};

export default NotFoundPage;
