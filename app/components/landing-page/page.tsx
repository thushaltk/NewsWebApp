"use client";
import * as React from "react";
import styles from "./landingpage.module.css";
import News from "../news/page";

export default function LandingPage(props: any) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <News />
    </div>
  );
}
