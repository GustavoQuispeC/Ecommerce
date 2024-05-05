"use client";
import { LoginErrorProps, LoginProps } from "@/types";
import React, { useEffect,useState } from "react";
import { validateLoginForm } from "@/utils/loginFormValidation";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'

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
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataUser),
      })
      .then((res) => res.json())
      .then((json) => {
        const { token, user } = json;
        if (token) {
          localStorage.setItem("userSession", JSON.stringify({ token: token, userData: user }));
          Swal.fire({
            icon: 'success',
            title: '¡Bienvenido a SmartMarket!',
            showConfirmButton: false,
            timer: 1500
          });
          Router.push("/home");
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Usuario o contraseña incorrecta',
            showConfirmButton: false,
            timer: 1500
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
      className="h-screen"
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
            className="w-12 h-12 text-blue-500"
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
        <h2 className="text-4xl tracking-tight">Inicia sesión para comprar</h2>
        <span className="text-sm">
          o{" "}
          <a href="/user" className="text-gray-50 hover:text-red-800">
            ¿Aún no tienes cuenta? Regístrate
          </a>
        </span>
      </div>
      <div
        
        className="flex justify-center my-2 mx-4 md:mx-0"
      >
        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email-address"
              >
                Correo electrónico
              </label>
              <input
                className="appearance-none block w-full bg-green-50 text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
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
                  className="appearance-none block w-full bg-green-50 text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
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
                      className="w-6 h-6 text-gray-400"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.071 4.929a9 9 0 010 14.142M4.929 19.071a9 9 0 010-14.142M12 6v2m0 8v2m-6-6h2m8 0h2M6.343 6.343l1.414 1.414M16.243 16.243l1.414 1.414M6.343 17.657l1.414-1.414M16.243 7.757l1.414-1.414"
                      />
                    </svg>
                  ) : (
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-400"
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
                  )}
                </button>
              </div>
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <a href="#" className="text-blue-500 text-sm tracking-tight">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-cyan-800 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-cyan-700 focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
