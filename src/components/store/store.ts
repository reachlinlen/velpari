import { persistentAtom } from "@nanostores/persistent";

export const cart = persistentAtom(
  "cart",
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
