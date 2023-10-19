import { Card } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function UserLogin(props: any) {
  return (
    <Card style={{ width: "80%", height: "80%" }}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Card>
  );
}
