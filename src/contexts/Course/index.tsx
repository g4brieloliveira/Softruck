import React, { createContext, useState } from "react";
import { Course, CourseContextProps } from "./types";
import data from "../../api/frontend_data_gps.json";

const CourseContext = createContext({} as CourseContextProps);

export const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  const [course, setCourse] = useState(data.courses[0] as Course);

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = React.useContext(CourseContext);
  if (!context) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
};
