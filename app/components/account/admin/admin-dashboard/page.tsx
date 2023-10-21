import { Button, Typography } from "@mui/material";
import * as React from "react";
import AddNews from "./add-news/page";

export default function AdminDashboard(props: any) {
  return (
    <div
      className="bg-red-700 flex"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        className="bg-white flex flex-col"
        style={{
          width: "30%",
          height: "100%",
          borderRadius: "0px 15px 15px 0px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "30%",
            boxShadow: "0px 5px 15px 0px #888888",
            padding: "0px 0px 1vw 2vw",
          }}
        >
          <div
            className="flex flex-col justify-end items-start"
            style={{
              width: "100%",
              height: "70%",
            }}
          >
            <Typography
              className="text-red-700"
              style={{ fontSize: "2.5vw", fontWeight: "bold" }}
            >
              Welcome!
            </Typography>
          </div>
          <div
            className="flex flex-col justify-end items-start"
            style={{
              width: "100%",
              height: "30%",
            }}
          >
            <Typography
              className="text-red-700"
              style={{ fontSize: "3vw", fontWeight: "bold" }}
            >
              Admin Name
            </Typography>
          </div>
        </div>
        <div
          className="flex flex-col justify-evenly items-center"
          style={{
            width: "100%",
            height: "70%",
          }}
        >
          <Button
            variant="contained"
            style={{
              padding: "20px",
              width: "90%",
              backgroundColor: "rgb(185 28 28)",
            }}
          >
            Add News
          </Button>
          <Button
            variant="contained"
            style={{
              padding: "20px",
              width: "90%",
              backgroundColor: "rgb(185 28 28)",
            }}
          >
            View News
          </Button>
          <Button
            variant="outlined"
            style={{
              padding: "20px",
              width: "90%",
              borderColor: "rgb(185 28 28)",
              color: "rgb(185 28 28)",
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <div
        style={{
          width: "70%",
          height: "100%",
          padding: "20px",
        }}
      >
        <AddNews />
      </div>
    </div>
  );
}
