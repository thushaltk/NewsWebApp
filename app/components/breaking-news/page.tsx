"use client";
import * as React from "react";
import { Icon } from "@iconify/react";
import styles from "./breakingnews.module.css";

export default function BreakingNews(props: any) {
  return (
    <div className="w-full h-[40px] bg-black flex justify-center items-center">
      <div
        className="h-full text-center flex justify-start bg-black items-center p-2"
        style={{ width: "13%", zIndex: "2" }}
      >
        <Icon icon="openmoji:red-circle" className="mr-1" />
        <h1
          className="text-1xl text-white font-bold "
          id={styles.breakingnewsheading}
        >
          BREAKING NEWS
        </h1>
      </div>
      <div
        className="w-1/5, h-full text-center flex justify-center items-center"
        style={{ width: "87%", zIndex: "1" }}
      >
        <div
          className="w-1/5, h-full text-center flex justify-center items-center"
          id={styles.breakingnews}
          style={{ width: "100%" }}
        >
          <p className="text-white mr-5">Breaking news goes here</p>
          <p className="text-white mr-5">Breaking news goes here</p>
          <p className="text-white mr-5">Breaking news goes here</p>
          <p className="text-white mr-5">Breaking news goes here</p>
          <p className="text-white mr-5">Breaking news goes here</p>
        </div>
      </div>
    </div>
  );
}
