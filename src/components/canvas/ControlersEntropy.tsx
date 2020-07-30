import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleShowIE } from "../../store/meta/selected/actions";

import Button from "@material-ui/core/Button";

export default function IEButton() {
  const dispatch = useDispatch();
  const showIEState = (state: RootState) => state.meta.selections.showIE.showIe;
  const showIe = useSelector(showIEState);

  function handleClick(e: any) {
    e.preventDefault();
    dispatch(toggleShowIE());
  }

  const btnYes = (
    <Button color="primary" variant="contained" onClick={handleClick}>
      Show Entropy
    </Button>
  );

  const btnNo = (
    <Button variant="contained" onClick={handleClick}>
      Show Entropy
    </Button>
  );

  return showIe ? btnYes : btnNo;
}
