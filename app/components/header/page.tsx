"use client";
import * as React from "react";
import styles from "./header.module.css";
import { Icon } from "@iconify/react";

export default function Header(props: any) {
  return (
    <div className="w-full h-[80px] bg-red-700 p-2 flex justify-center items-center">
      <div
        className="h-full text-center flex justify-center items-center"
        style={{ width: "90%" }}
      >
        <h1 className="text-3xl text-white">Premium News 24/7</h1>
      </div>
      <div
        className="w-1/5, h-full text-center flex justify-center items-center"
        style={{ width: "10%" }}
      >
        <a style={{ fontSize: "15px", color: "white" }}>Login</a>
      </div>
    </div>
  );
}
