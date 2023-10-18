import * as React from "react";

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
          height: "200px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          padding: "10px",
        }}
      >
        <h1 className="text-white" style={{ fontSize: "40px" }}>
          Isreal vs Palestine: The War 2023
        </h1>
      </div>
    </div>
  );
}
