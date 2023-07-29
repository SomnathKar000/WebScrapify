export interface codeState {
  links: string[];
  results: string[];
  linkLoading: boolean;
  resultLoading: boolean;
  alert: {
    open: boolean;
    type: string;
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
  return { ...state };
};
