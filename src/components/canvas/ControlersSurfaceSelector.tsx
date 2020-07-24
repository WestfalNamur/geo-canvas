import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateSelectedSurface } from "../../store/meta/selected/actions";
import { SelectedSurface } from "../../store/meta/selected/types";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function SurfaceSelector() {
  const dispatch = useDispatch();
  const selectedSurfaceState = (state: RootState) =>
    state.meta.selections.selectedSurface;
  const selectedSurface = useSelector(selectedSurfaceState);
  const surfacesState = (state: RootState) => state.geoData.surfaces.surfaces;
  const surfaces = useSelector(surfacesState);

  let surfaceNames: string[] = surfaces.map((s) => s.name);
  surfaceNames.push('None')
  const handleSelectSurface = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    try {
      const newSelectedSurface: SelectedSurface = {
        name: event.target.value as string,
      };
      dispatch(updateSelectedSurface(newSelectedSurface));
    } catch (err) {}
  };

  return (
    <Select
      label="Selected surface"
      value={selectedSurface.name ? selectedSurface.name : ""}
      onChange={handleSelectSurface}
      variant="outlined"
    >
      {surfaceNames.map((name) => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
}
