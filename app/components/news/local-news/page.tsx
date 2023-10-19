import { Button, Typography } from "@mui/material";
import * as React from "react";
import styles from "./local-news.module.css";

export default function LocalNews(props: any) {
  return (
    <div
      className="flex flex-col"
      style={{
        width: "100%",
        height: "500px",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      <img
        src="https://now.tufts.edu/sites/default/files/uploaded-assets/images/2023-03/230302_ukraine_overview_lg.jpg"
        style={{ width: "100%", height: "500px" }}
      />
      <div
        style={{
          width: "100%",
          height: "210px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          position: "absolute",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "100%", height: "80%" }}>
          <h1 className="text-white" style={{ fontSize: "40px" }}>
            Isreal vs Palestine: The War 2023
          </h1>
          <div style={{ width: "100%", height: "50%" }}>
            <Typography id={styles.summaryText} className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vestibulum sem eget pulvinar pretium. Cras id placerat quam, in
              fermentum eros. Phasellus urna tellus, condimentum sed ipsum nec,
              mattis rhoncus lectus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla vestibulum sem eget pulvinar pretium. Cras
              id placerat quam, in fermentum eros. Phasellus urna tellus,
              condimentum sed ipsum nec, mattis rhoncus lectus. Phasellus urna
              tellus, condimentum sed ipsum nec, mattis rhoncus lectus.
            </Typography>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "20%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            id={styles.readMoreBtn}
            className="text-white border-white"
            variant="outlined"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
