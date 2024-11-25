"use client";

import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "bock",
  margin: "100px auto",
};

const LoadingPage = () => {
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={override}
      size={150}
      aria-label="loading spinner"
    />
  );
};

export default LoadingPage;
