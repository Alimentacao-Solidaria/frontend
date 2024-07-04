import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../model/Usuario";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {
  const navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta
        );
        alert("Usuário cadastrado com sucesso");
      } catch (error) {
        alert("Erro ao cadastrar o Usuário");
      }
    } else {
      alert("Dados inconsistentes. Verifique as informações de cadastro.");
      setUsuario({ ...usuario, senha: "" }); // Reinicia o campo de Senha
      setConfirmaSenha(""); // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <div className="flex h-screen items-center">
      <div className="relative flex w-full max-w-md mx-auto flex-col space-y-3 space-x-2 rounded-lg border bg-white px-9 py-10 shadow-xl">
        <div className="-z-10 absolute top-5 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-100 sm:-right-5 sm:top-5 sm:left-auto sm:w-full sm:translate-x-0"></div>
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-center text-3xl font-bold text-gray-700">Cadastrar</h1>
        </div>
        <form className="space-y-5" onSubmit={cadastrarNovoUsuario}>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              value={usuario.nome}
              onChange={atualizarEstado}
            />
            <label
              htmlFor="nome"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Nome
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              value={usuario.usuario}
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
              type="text"
              id="foto"
              name="foto"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              value={usuario.foto}
              onChange={atualizarEstado}
            />
            <label
              htmlFor="foto"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Foto
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              value={usuario.senha}
              onChange={atualizarEstado}
            />
            <label
              htmlFor="senha"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Senha
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
            <label
              htmlFor="confirmarSenha"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              Confirmar Senha
            </label>
          </div>
          <div className="flex w-full justify-center items-center space-x-4">
            <button
              className="inline-flex w-36 items-center justify-center rounded-lg bg-gray-500 hover:bg-gray-700 py-3 font-bold text-white"
              onClick={back}
            >
              Cancelar
            </button>
            <button
              className="inline-flex w-36 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-400 py-3 font-bold text-white"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Cadastro;