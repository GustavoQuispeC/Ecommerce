export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

export interface LoginProps {
  email: string;
  password: string;
}
export interface LoginErrorProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export interface RegisterErrorProps {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export interface userSession {
  token: string;
  userData: {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: string;
    credential: {
      id: number;
      password: string;
    };
    orders: any[]; // Cambia el tipo según la estructura real de "orders"
  };
 
}
export interface IOrder {
  id: number;
  products: IProduct[];
  date: string;
  status: string;
  total: number;
} 