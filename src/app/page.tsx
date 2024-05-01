export default function Landing() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: 'url("/presentacion.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mt-24">
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
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Correo electrónico
              </label>
              <input
                className="appearance-none block w-full bg-green-50 text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Contraseña
              </label>
              <input
                className="appearance-none block w-full bg-green-50 text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                required
              />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <a href="#" className="text-blue-500 text-sm tracking-tight">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button className="appearance-none block w-full bg-cyan-800 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-cyan-700 focus:outline-none focus:bg-white focus:border-gray-500">
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
