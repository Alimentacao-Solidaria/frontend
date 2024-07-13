import { createContext, ReactNode, useEffect, useState } from "react";

import UsuarioLogin from "../model/UsuarioLogin";
import { login } from "../services/Service";
import { toastAlerta } from "../utils/ToastAlert";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [circleColor, setCircleColor] = useState("");

  useEffect(() => {
    generateRandomColor();
  }, []);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setCircleColor(randomColor);
  };

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, userLogin, setUsuario);
      toastAlerta("Usuário logado com sucesso","sucesso");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toastAlerta("Dados do usuário inconsistentes","erro");
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
  }



  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading, circleColor }}
    >
      {children}
    </AuthContext.Provider>
  );
}
