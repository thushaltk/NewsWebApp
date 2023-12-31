"use client";
import * as React from "react";
import styles from "./header.module.css";
import { Icon } from "@iconify/react";
import BreakingNews from "../news/breaking-news/page";
import AccountPopOver from "../account/account-popover";
import { Button } from "@mui/material";

export default function Header(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopoverHandler = (event: null) => {
    setAnchorEl(event);
  };

  return (
    <div className="w-full h-[60px] fixed" style={{ zIndex: "2" }}>
      <div className="w-full h-full bg-red-700 p-2 flex justify-center items-center">
        <div
          className="h-full text-center flex justify-center items-center"
          style={{ width: "90%" }}
        >
          <h1 className="text-3xl text-white font-bold">PREMIUM NEWS 24/7</h1>
        </div>
        <div
          className="w-1/5, h-full text-center flex justify-center items-center"
          style={{ width: "10%" }}
        >
          <Button onClick={handleClick}>
            <Icon
              icon="mdi:user"
              style={{
                fontSize: "35px",
                color: "white",
                border: "1px solid white",
                padding: "5px",
                borderRadius: "100%",
              }}
            />
          </Button>
          {Boolean(anchorEl) ? (
            <AccountPopOver
              btnLocation={anchorEl}
              closePopOver={closePopoverHandler}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <BreakingNews />
    </div>
  );
}
