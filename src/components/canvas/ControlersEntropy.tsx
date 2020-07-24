import React from "react";

import { useDispatch } from "react-redux";
import { toggleShowIE } from "../../store/meta/selected/actions";

import Button from "@material-ui/core/Button";

export default function IEButton() {
  const dispatch = useDispatch();

  function handleClick(e: any) {
    e.preventDefault();
    dispatch(toggleShowIE());
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      Show Entropy
    </Button>
  );
}
