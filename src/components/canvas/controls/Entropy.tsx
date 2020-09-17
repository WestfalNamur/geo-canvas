import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { toggleShowIE } from "../../../store/meta/selected/actions";
import {
  getSectionTops,
  getSectionTopsMulti,
} from "../../../store/solutions/sectionTops/actions";

import Button from "@material-ui/core/Button";

export default function IEButton() {
  const dispatch = useDispatch();
  const showIEState = (state: RootState) => state.meta.selections.showIE.showIe;
  const showIe = useSelector(showIEState);

  function handleClick(e: any) {
    e.preventDefault();
    dispatch(toggleShowIE());
    !showIe ? dispatch(getSectionTopsMulti()) : dispatch(getSectionTops());
  }

  const btnYes = (
    <Button color="primary" variant="contained" onClick={handleClick}>
      Multiple realizations
    </Button>
  );

  const btnNo = (
    <Button variant="contained" onClick={handleClick}>
      Multiple realizations
    </Button>
  );

  return showIe ? btnYes : btnNo;
}
