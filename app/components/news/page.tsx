import * as React from "react";
import LocalNews from "./local-news/page";
import styles from "./news.module.css";

export default function News(props: any) {
  return (
    <div
      className="flex justify-center bg-blue-700 items-start"
      style={{ width: "100%", height: "100%", paddingTop: "100px" }}
    >
      <div
        id={styles.localNewsDiv}
        className="flex flex-col justify-start items-center"
        style={{
          width: "60%",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <LocalNews />
        <LocalNews />
        <LocalNews />
      </div>
      <div
        className="flex justify-center items-center bg-green-700"
        style={{ width: "40%", height: "100vh" }}
      >
        <p>foreign news section</p>
      </div>
    </div>
  );
}
