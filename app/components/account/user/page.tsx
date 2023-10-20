import * as React from "react";
import newsBackdrop from "../../../assets/imgs/news-backdrop.jpg";
import UserRegister from "./user-register/page";
import UserLogin from "./user-login/page";

export default function User(props: any) {
  return (
    <div
      className="flex"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${newsBackdrop.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex justify-center items-center"
        style={{ width: "50%", height: "100%" }}
      >
        <UserRegister />
      </div>
      <div
        className="flex justify-center items-center"
        style={{ width: "50%", height: "100%" }}
      >
        <UserLogin />
      </div>
    </div>
  );
}
