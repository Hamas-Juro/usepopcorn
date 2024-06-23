import { useState, useEffect } from "react";
export function useLocalStorageState(intitalState, key) {
  const [value, setValue] = useState(function () {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : intitalState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
