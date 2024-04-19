export type IconContextProps = {
  icon: number;
  setIcon: React.Dispatch<React.SetStateAction<number>>;
  car: {
    north: any;
    northeast: any;
    east: any;
    southeast: any;
    south: any;
    southwest: any;
    west: any;
    northwest: any;
  };
};