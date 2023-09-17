//import store from "../store";

const fetchDataRequest = () => {
  return { type: "CHECK_DATA_REQUEST", };
};

const fetchDataSuccess = (payload) => {
  return { type: "CHECK_DATA_SUCCESS", payload: payload, };
};

const fetchDataFailed = (payload) => {
  return { type: "CHECK_DATA_FAILED", payload: payload,};
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();
      dispatch(
        fetchDataSuccess({ 
          // cost,
        })
      );
    } catch (err) {
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
