export interface Tour {
  id?: number;
  title: string;
  price: {
    self_driving: number;
    local_driver: number;
  };
  duration: string;
  accommodation: string;
  motorbike: string[];
  tour_guide: string;
  transport: string;
  image: string;
}
