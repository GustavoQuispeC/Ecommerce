"use client";
import { RegisterErrorProps, RegisterProps } from "@/types";
import { validateRegisterForm } from "@/utils/registerFormValidation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Alert } from "flowbite-react";

const RegisterUser = () => {
  const Router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const [dataUser, setDataUser] = useState<RegisterProps>({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState<RegisterErrorProps>({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          // Mostrar el alert aquí si el registro fue exitoso
          setShowAlert(true);
          // Redirigiriendo al login
          setTimeout(() => {
            Router.push("/");
          }, 3000);
        });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  //Validar formulario
  useEffect(() => {
    const errors = validateRegisterForm(dataUser);
    setError(errors);
  }, [dataUser]);

  return (
    <>
      <div>
        {showAlert && (
          <Alert color="warning">
            <span className="font-medium">Mensaje:</span> Usuario registrado con
            éxito.
          </Alert>
        )}
      </div>
      <div className="flex items-center justify-center md:h-screen mt-16">
        <div className="bg-teal-50 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-gray-200 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                />
              </svg>
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Crear una nueva cuenta
          </h2>
          <p className="text-gray-600 text-center mb-6">Ingresa tus datos.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Nombres completo *
              </label>
              <input
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese nombre completo."
                value={dataUser.name}
                onChange={handleChange}
                required
              />

              {error.name && <p style={{ color: "red" }}>{error.name}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                name="email"
                required
                placeholder="Ingrese email."
                value={dataUser.email}
                onChange={handleChange}
              />
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Dirección *
              </label>
              <input
                type="text"
                id="address"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                name="address"
                placeholder="Ingrese dirección."
                value={dataUser.address}
                onChange={handleChange}
              />
              {error.address && <p style={{ color: "red" }}>{error.address}</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Teléfono *
              </label>
              <input
                type="text"
                id="phone"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                name="phone"
                placeholder="Ingrese teléfono."
                value={dataUser.phone}
                onChange={handleChange}
              />
              {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="••••••••"
                value={dataUser.password}
                onChange={handleChange}
              />
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
              <p className="text-gray-600 text-xs mt-1">
                Debe contener 1 letra mayúscula, 1 número, mín. 8 caracteres.
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
