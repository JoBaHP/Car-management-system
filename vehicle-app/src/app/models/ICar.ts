
export interface ICar {
  id: number;
  SelRent: number;
  brand: string;
  model: string;
  fuel: "petrol" | "diesel" | "gas" | "hibryd" | "electric";
  year: number;
  price: number;
  // engine: Engine;
  image: string;
  Description?: string;

}