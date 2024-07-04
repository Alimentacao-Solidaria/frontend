import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AutoContext";
import UsuarioLogin from "../../model/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="flex h-screen items-center">
      <div className="relative flex w-full max-w-sm mx-auto flex-col space-y-3 space-x-2 rounded-lg border bg-white px-9 py-10 shadow-xl">
        <div className="-z-10 absolute top-5 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-100 sm:-right-5 sm:top-5 sm:left-auto sm:w-full sm:translate-x-0"></div>
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-center text-3xl font-bold text-gray-700">Entrar</h1>
        </div>
        <form className="space-y-5" onSubmit={login}>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              value={usuarioLogin.usuario || ""}
              onChange={atualizarEstado}
            />
            <label
              htmlFor="usuario"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Usuário
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              value={usuarioLogin.senha || ""}
              onChange={atualizarEstado}
            />
            <label
              htmlFor="senha"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Senha
            </label>
          </div>
          <div className="flex w-full justify-center items-center">
            <button
              type="submit"
              className="inline-flex w-36 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-400 py-3 font-bold text-white"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Entrar</span>
              )}
            </button>
          </div>
          <p className="text-center text-gray-600">
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="whitespace-nowrap font-semibold text-gray-900 hover:text-blue-600"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
