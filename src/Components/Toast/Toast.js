import React from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};

export default Toast;
