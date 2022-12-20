import {useRef} from "react";

export const useFocus = () => {
  const htmlElRef = useRef<any>(null);
  const setFocus = (isBlur: boolean | undefined) => {
    if (isBlur) {
      htmlElRef.current && htmlElRef.current.blur();
    } else {
      htmlElRef.current && htmlElRef.current.focus();
    }
  };

  return [htmlElRef, setFocus];
};