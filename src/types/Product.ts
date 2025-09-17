export interface Product {
  id: string;
  category: 'bicycle' | 'motorcycle' | 'atv';
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  images: string[];
  specs: {
    engine?: string;
    transmission?: string;
    mileage: string;
    fuelType?: string;
    drivetrain?: string;
    horsepower?: string;
    gears?: string;
    brakes?: string;
    suspension?: string;
    frame?: string;
    wheels?: string;
    capacity?: string;
  };
  features: string[];
  available: boolean;
  description: string;
}
