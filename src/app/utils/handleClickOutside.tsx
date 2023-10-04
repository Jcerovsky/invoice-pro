import React, { Dispatch, SetStateAction } from "react";

export const handleClickOutside = (
  event: MouseEvent,
  ref: React.MutableRefObject<HTMLElement | null>,
  setState: Dispatch<SetStateAction<boolean>>,
) => {
  if (ref.current && !ref.current.contains(event.target as Node))
    setState(false);
};
