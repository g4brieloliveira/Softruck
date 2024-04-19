export type Position = Array<number>;
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