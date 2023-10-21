import { Button, Card, Typography } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";

export default function AdminLogin(props: any) {
  return (
    <Card style={{ width: "70%", height: "60%" }}>
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
          style={{ fontSize: "50px" }}
        >
          Admin Login
        </Typography>
      </div>
      <div
        className="flex justify-evenly flex-col items-center"
        style={{ width: "100%", height: "70%" }}
      >
        <TextField
          style={{ width: "80%" }}
          id="outlined-basic"
          label="Enter your email/username"
          variant="outlined"
        />
        <TextField
          style={{ width: "80%" }}
          id="outlined-basic"
          label="Enter password"
          variant="outlined"
        />
        <Link href="/components/account/admin/admin-dashboard">
          <Button className="bg-red-700" variant="contained">
            Login
          </Button>
        </Link>
      </div>
    </Card>
  );
}
