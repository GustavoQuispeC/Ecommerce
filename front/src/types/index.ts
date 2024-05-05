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
  userData: {
    name: string;
    email: string;
  };
}