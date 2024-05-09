"use client";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { userSession } from "@/types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const NavbarComponent = () => {
  const [userSessionData, setUserSessionData] = useState<userSession | null>(
    null
  );
  const [showAvatar, setShowAvatar] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  //!Cerrar sesión
  const handleSignOut = () => {
    localStorage.removeItem("userSession");
    localStorage.removeItem("cart"); // Remove cart from local storage
    setUserSessionData(null);
    setShowAvatar(false);

    Swal.fire("¡Hasta luego!", "Has cerrado sesión exitosamente", "success");
    router.push("/home");
  };

  //!Mostar avatar si hay sesión de usuario
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      if (userToken) {
        setUserSessionData(JSON.parse(userToken));
        setShowAvatar(true);
      } else {
        setUserSessionData(null);
        setShowAvatar(false);
      }
    } else {
      setShowAvatar(false);
    }
  }, [pathname]);

//! Función para obtener y actualizar la cantidad de elementos en el carrito
const [cartItemCount, setCartItemCount] = useState(0);

const updateCartItemCount = () => {
  const cartItems = localStorage.getItem("cart");
  
  if (cartItems) {
    const items: any[] = JSON.parse(cartItems);
    setCartItemCount(items.length);
   
  } else {
    setCartItemCount(0);
  }
};
//! Actualizar la cantidad de elementos en el carrito
useEffect(() => {
  const interval = setInterval(() => {
    updateCartItemCount();
  }, 1000); 
  return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
}, [cartItemCount]);

  return (
    <div>
      <Navbar fluid rounded className="bg-cyan-900">
        <NavbarBrand href="/home">
          <Image
            src="/Logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
            width={30}
            height={40}
          />
          <span className="self-center whitespace-nowrap text-2xl font-extrabold text-cyan-500">
            SmartMarket
          </span>
        </NavbarBrand>

        <div className="flex md:order-2">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="w-52 md:w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-cyan-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar..."
            />
          </div>
        </div>
        <div className="flex md:order-2">
          <Link href="/cart">
            <div className="relative">
              <Image
                src="/cart.png"
                alt="..."
                className="h-8 cursor-grab mx-2 hover:scale-110"
                width={30}
                height={40}
              />
              {cartItemCount > 0 && ( //! Mostrar el número si hay elementos en el carrito
                <div className="absolute top-0 right-0 bg-red-500 rounded-full h-5 w-5 text-white text-xs flex items-center justify-center">
                  {cartItemCount}
                </div>
              )}
            </div>
          </Link>
          {!showAvatar && (
            <Link href="/">
              <div className="text-red-600 font-bold bg-lime-500 rounded-md py-1 px-3 hover:scale-110 hover:bg-yellow-300">
                Login
              </div>
            </Link>
          )}

          {showAvatar && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  className="px-2"
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <DropdownHeader className="bg-slate-100">
                <span className="block text-lg">
                  {userSessionData?.userData.name}
                </span>
                <span className="block truncate text-sm font-medium">
                  {userSessionData?.userData.email}
                </span>
              </DropdownHeader>
              <DropdownItem href="/dashboard">Dashboard</DropdownItem>
              <DropdownDivider />
              <DropdownItem onClick={handleSignOut}>Salir</DropdownItem>
            </Dropdown>
          )}

          <NavbarToggle />
        </div>

        <NavbarCollapse className="text-cyan-50">
          <Link href="/home" className="active text-lg hover:text-cyan-300">
            Home
          </Link>

          <Link className="text-lg hover:text-cyan-300" href="/product">
            Productos
          </Link>
          <Link className="text-lg hover:text-cyan-300" href="#">
            Pricing
          </Link>
          <Link className="text-lg hover:text-cyan-300" href="#">
            Contáctenos
          </Link>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
