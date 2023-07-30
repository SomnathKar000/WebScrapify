import { AlertColor } from "@mui/material/Alert";

export interface codeState {
  links: string[];
  results: string[];
  loading: boolean;
  alert: {
    open: boolean;
    type: AlertColor | undefined;
    message: string;
  };
}
export interface codeAction {
  type: string;
  payload: any;
}

export const reducer = (state: codeState, action: codeAction) => {
  if (action.type === "GET_LINKS") {
    return { ...state, links: action.payload };
  }
  if (action.type === "SET_RESULTS") {
    return { ...state, results: action.payload };
  }
  if (action.type === "CREATE_ALERT") {
    const { message, type } = action.payload;
    const alert = {
      open: true,
      message,
      type,
    };
    return {
      ...state,
      alert,
    };
  }
  if (action.type === "CLOSE_ALERT") {
    return {
      ...state,
      alert: {
        ...state.alert,
        open: false,
      },
    };
  }

  if (action.type === "STOP_LOADING") {
    return {
      ...state,
      loading: false,
    };
  }
  if (action.type === "START_LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  return { ...state };
};
