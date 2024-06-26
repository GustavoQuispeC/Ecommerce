import { RegisterProps, RegisterErrorProps } from "@/types";

export function validateRegisterForm(values: RegisterProps): RegisterErrorProps {
  let errors: RegisterErrorProps = {
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  };

  if (!values.name.trim()) {
    errors.name = "El campo nombre es requerido";
  }
  if (!values.email.trim()) {
    errors.email = "El campo email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El email es invalido";
  }
  if (!values.address.trim()) {
    errors.address = "El campo dirección es requerido";
  }
  if (!values.phone.trim()) {
    errors.phone = "El campo teléfono es requerido";
  }
  if (!values.password.trim()) {
    errors.password = "El campo password es requerido";
  }

  return errors;
}