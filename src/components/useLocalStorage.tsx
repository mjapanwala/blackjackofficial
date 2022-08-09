import React, { useEffect, useState } from "react";
// for the first time that useState is called, read local storage and
// IF there is data, call setter with it

export default function useLocalStorage(key, initialValue) {
  const [getter, setter] = useState(initialValue);
  let storageValue;
  useEffect(() => {
   storageValue = localStorage.getItem(key);
    if (storageValue) {
      setter(storageValue);
    } else {
      localStorage.setItem(key, initialValue);
    }
  }, []);
  useEffect(() => {
    storageValue = localStorage.setItem(key, getter)
  }, [getter])
  // Before useState setter, set data to local storage
  
  return [getter, setter];
}
