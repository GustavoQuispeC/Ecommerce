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

export function NavbarComponent() {
  return (
    <div>
      <Navbar fluid rounded className="bg-cyan-900">
        <NavbarBrand href="/">
          <img
            src="/Logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-extrabold text-cyan-500">
            SmartMarket
          </span>
        </NavbarBrand>

        <div className="flex md:order-2">
          {/* Input de búsqueda */}
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
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-cyan-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex md:order-2">
          <Link href="/cart">
            <img
              src="/cart_113919.png"
              alt="..."
              className="h-8 cursor-grab mx-2"
            />
          </Link>

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
              <span className="block text-lg">Gustavo</span>
              <span className="block truncate text-sm font-medium">
                gusstavo@gmail.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>

        <NavbarCollapse className="text-cyan-50 ">
          <Link href="/home" className="active text-lg hover:text-cyan-300">
            Home
          </Link>
          <Link className=" text-lg hover:text-cyan-300" href="#">About</Link>
          <Link className="text-lg hover:text-cyan-300" href="#">Services</Link>
          <Link className="text-lg hover:text-cyan-300" href="#">Pricing</Link>
          <Link className="text-lg hover:text-cyan-300" href="#">Contact</Link>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
export default NavbarComponent;
