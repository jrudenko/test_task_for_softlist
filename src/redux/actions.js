import axios from "axios";

// Отримуємо данні з API/
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });

    axios
      .get("https://public.api.openprocurement.org/api/2.5/tenders")
      .then((response) => {
        dispatch({
          type: "FETCH_DATA_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_DATA_FAILURE",
          payload: error.message,
        });
      });
  };
};
