"use client";
import { LoginErrorProps, LoginProps } from "@/types";
import React, { useEffect, useState } from "react";
import { validateLoginForm } from "@/utils/loginFormValidation";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { IoHome } from "react-icons/io5";

const LoginForm = () => {
  const Router = useRouter();
  const [dataUser, setDataUser] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<LoginErrorProps>({
    email: "",
    password: "",
  });

  // Mostrar u ocultar contraseña
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
      fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      })
        .then((res) => res.json())
        .then((json) => {
          const { token, user } = json;
          if (token) {
            localStorage.setItem(
              "userSession",
              JSON.stringify({ token: token, userData: user })
            );
            Swal.fire({
              icon: "success",
              title: "¡Bienvenido a SmartMarket!",
              showConfirmButton: false,
              timer: 1500,
            });
            Router.push("/product");
          } else {
            Swal.fire({
              icon: "error",
              title: "Usuario o contraseña incorrecta",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  // Validar formulario
  useEffect(() => {
    const errors = validateLoginForm(dataUser);
    setError(errors);
  }, [dataUser]);
  console.log(dataUser);

  return (
    <div
      className="h-screen md:pt-40"
      style={{
        backgroundImage: 'url("/presentacion.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <div className="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-sky-600"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 className="text-4xl text-gray-50 tracking-tight">
          Inicia sesión para comprar
        </h2>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-teal-50 rounded-lg shadow-md p-6"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email-address"
              >
                Correo electrónico
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                id="email-address"
                name="email"
                value={dataUser.email}
                onChange={handleChange}
                required
              />
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  className="appearance-none block w-full bg-gray-50 text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={dataUser.password}
                  onChange={handleChange}
                  placeholder="***********"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-sky-400"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v.01M8 4v.01M16 4v.01M12 20v.01M8 20v.01M16 20v.01M4 12h.01M4 8h.01M4 16h.01M20 12h.01M20 8h.01M20 16h.01"
                      />
                    </svg>
                  ) : (
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-sky-400"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v.01M8 4v.01M16 4v.01M12 20v.01M8 20v.01M16 20v.01M4 12h.01M4 8h.01M4 16h.01M20 12h.01M20 8h.01M20 16h.01"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
            </div>
            {/* <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <a href="#" className="text-sky-500 text-sm tracking-tight">
                ¿Olvidaste tu contraseña?
              </a>
            </div> */}
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-yellow-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-yellow-500 focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Ingresar
              </button>
            </div>
          </div>
          <div className="text-sm text-right">
            <a href="/user" className="text-sky-500 hover:text-sky-600">
              ¿Aún no tienes cuenta? Regístrate
            </a>
          </div>
        </form>
      </div>
      <div className="flex flex-row items-center justify-center pt-6">
        <a
          className="flex flex-row items-center appearance-none bg-teal-400 w-96 text-gray-500 font-bold border border-yellow-200 rounded-lg py-3 px-3 leading-tight hover:bg-teal-300 focus:outline-none focus:bg-white focus:border-gray-500 text-center"
          href="/product"
        ><IoHome />
          <span className="flex-grow">Visitar la tienda</span> 
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
