import React, { createContext, useState } from "react";
import { IconContextProps } from "./types";
import { cars } from "../../assets/cars";

const IconContext = createContext({} as IconContextProps);

export const IconProvider = ({ children }: { children: React.ReactNode }) => {
  const [icon, setIcon] = useState(1 as number);

  const car = cars[`car${icon}`];

  return (
    <IconContext.Provider value={{ icon, setIcon, car }}>
      {children}
    </IconContext.Provider>
  );
};

export const useIcon = () => {
  const context = React.useContext(IconContext);
  if (!context) {
    throw new Error("useIcon must be used within a IconProvider");
  }
  return context;
};
