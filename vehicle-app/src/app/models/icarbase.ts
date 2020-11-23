export interface ICarBase {
  id: number;
  SellRent: number;
  brand: string;
  model: string;
  CType: string;
  FType: string;
  fuel: 'petrol' | 'diesel' | 'gas' | 'hibryd' | 'electric';
  year: number;
  city: string;
  price: number;
  // engine: Engine;
  image: string;
  description?: string;
}
