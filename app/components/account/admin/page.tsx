import * as React from "react";
import newsCrew from "../../../assets/imgs/news-crew.jpg";
import AdminRegister from "./admin-register/page";
import AdminLogin from "./admin-login/page";

export default function Admin(props: any) {
  return (
    <div
      className="flex"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${newsCrew.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex justify-center items-center"
        style={{ width: "50%", height: "100%" }}
      >
        <AdminRegister />
      </div>
      <div
        className="flex justify-center items-center"
        style={{ width: "50%", height: "100%" }}
      >
        <AdminLogin />
      </div>
    </div>
  );
}
