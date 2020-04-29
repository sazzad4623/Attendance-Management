import axios from "axios";
import { Base_url } from "../util/global";

const param = 1;
const url = Base_url + `manualAttendance/${param}`;

export const getManualAttendance = async () => {
  try {
    const response = await axios.get(url);
    return response.data.result;
  } catch (error) {}
};
