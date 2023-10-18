"use client";
import * as React from "react";
import { Icon } from "@iconify/react";
import styles from "./breakingnews.module.css";

export default function BreakingNews(props: any) {
  return (
    <div className="w-full h-[50px] bg-black flex justify-center items-center fixed">
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
        style={{
          width: "87%",
          height: "100%",
          zIndex: "1",
          textAlign: "right",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <div className="flex items-center relative" id={styles.breakingnews}>
          <p className="text-white mr-5">
            Isreal attacks Palestine again: 500 dead
          </p>
          <p className="text-white mr-5">
            Isreal attacks Palestine again: 500 dead
          </p>
          <p className="text-white mr-5">
            Isreal attacks Palestine again: 500 dead
          </p>
        </div>
      </div>
    </div>
  );
}
