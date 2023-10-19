import * as React from "react";
import Header from "../header/page";
import UserLogin from "./user/user-login/page";

export default function Account(props: any) {
  return (
    <div className="flex" style={{ width: "100vw", height: "100vh" }}>
      <div
        className=" bg-red-700"
        style={{ width: "50%", height: "100%" }}
      ></div>
      <div
        className="flex justify-center items-center bg-blue-700"
        style={{ width: "50%", height: "100%" }}
      >
        <UserLogin />
      </div>
    </div>
  );
}
