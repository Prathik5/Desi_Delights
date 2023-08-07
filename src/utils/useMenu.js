import { useState, useEffect } from "react";
import { Fetch_Menu } from "../Config";

const useMenu = (id) => {
  const [restta, setRestta] = useState([]);

  useEffect(() => {
    getRestroInfo();
  }, []);

  async function getRestroInfo() {
    let data, json;
    try {
      data = await fetch(Fetch_Menu + id);
      json = data.ok ? await data.json() : await Promise.reject(data.status);
      //   console.log(json);
    } catch (e) {
      console.warn("An Error Occured");
    }
    // console.log(json);

    setRestta(json?.data?.cards);
  }

  return restta;
};

export default useMenu;
