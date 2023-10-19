import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./account-popover.module.css";
import Link from "next/link";

export default function AccountPopOver(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    props.btnLocation
  );

  React.useEffect(() => {
    setAnchorEl(props.btnLocation);
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
    props.closePopOver(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Link
        href="/components/account"
        id={styles.userLoginDiv}
        className="flex justify-center items-center p-2 text-center"
      >
        <Icon
          id={styles.userIcon}
          icon="solar:user-bold"
          className="text-red-700 mr-2"
          style={{ width: "25px", height: "25px" }}
        />
        <Typography
          id={styles.userLoginText}
          className="text-red-700 font-bold"
          sx={{ p: 2 }}
        >
          User Login
        </Typography>
      </Link>
      <div
        id={styles.adminLoginDiv}
        className="flex justify-center items-center p-2 text-center"
      >
        <Icon
          id={styles.adminIcon}
          icon="eos-icons:admin-outlined"
          className="text-red-700"
          style={{ width: "30px", height: "30px" }}
        />
        <Typography
          id={styles.adminLoginText}
          className="text-red-700 font-bold"
          sx={{ p: 2 }}
        >
          Admin Login
        </Typography>
      </div>
    </Popover>
  );
}
