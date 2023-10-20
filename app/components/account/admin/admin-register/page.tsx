import { Button, Card, Typography } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function AdminRegister(props: any) {
  return (
    <Card style={{ width: "70%", height: "75%" }}>
      <div
        className="flex justify-start items-center"
        style={{
          width: "100%",
          height: "30%",
          paddingLeft: "30px",
          paddingTop: "30px",
        }}
      >
        <Typography
          className="font-bold text-red-700"
          style={{ fontSize: "40px" }}
        >
          Add new admin
        </Typography>
      </div>
      <div
        className="flex justify-evenly flex-col items-center"
        style={{ width: "100%", height: "70%" }}
      >
        <TextField
          style={{ width: "80%" }}
          id="outlined-basic"
          label="Enter your username"
          variant="outlined"
        />
        <TextField
          style={{ width: "80%" }}
          id="outlined-basic"
          label="Enter password"
          variant="outlined"
        />
        <TextField
          style={{ width: "80%", marginBottom: "20px" }}
          id="outlined-basic"
          label="Confirm password"
          variant="outlined"
        />
        <Button className="bg-red-700" variant="contained" style={{}}>
          Add
        </Button>
      </div>
    </Card>
  );
}
