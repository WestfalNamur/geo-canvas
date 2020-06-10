import { API } from "./index";
import { Serie } from "../store/series/types";

/*************************** Topoligical data *********************************/
// MaterialTable table data object type  => need for data processing
export async function putSeriesApi(newSerie: Serie) {
  const data: Serie = {
    name: newSerie.name,
    isfault: newSerie.isfault,
  };
  try {
    const response = await API.put("/geo-model/data/geo-model-series", data);
    return response;
  } catch (error) {
    if (error.response) {
      console.log("PUT-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}
