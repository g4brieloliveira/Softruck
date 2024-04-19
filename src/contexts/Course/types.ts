export type Course = {
  duration: number;
  stops: number;
  gps: Array<{
    latitude: number;
    longitude: number;
    direction: number;
    speed: number;
  }>;
  stop_points: {
    coordinates: Array<Array<number>>;
  };
};


export type CourseContextProps = {
  course: Course;
  setCourse: React.Dispatch<React.SetStateAction<Course>>;
};