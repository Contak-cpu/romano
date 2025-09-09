export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  images: string[];
  specs: {
    engine: string;
    transmission: string;
    mileage: string;
    fuelType: string;
    drivetrain: string;
    horsepower: string;
  };
  features: string[];
  available: boolean;
  description: string;
}