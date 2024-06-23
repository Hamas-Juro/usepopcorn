import { useEffect } from "react";

export function useKey(key, callback) {
  useEffect(() => {
    const callBack = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        callback();
      }
    };
    document.addEventListener("keydown", callBack);
    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [key, callback]);
}
