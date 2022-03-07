import { TYPE_NAME } from "./types";
type ACTION_PAYLOAD = {
  auth1: string;
};
export const ACTION_FUNC = (payload: ACTION_PAYLOAD) => {
  return {
    type: TYPE_NAME,
    payload: payload.auth1,
  };
};
export type ACTION_INSTANCE = ReturnType<typeof ACTION_FUNC>;
