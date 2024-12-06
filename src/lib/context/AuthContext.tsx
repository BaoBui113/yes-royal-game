"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

import { useDisclosure } from "@nextui-org/react";
import { IProfile } from "../type";

interface AuthContextType {
  user: IProfile | null;
  login: (token: string) => void;
  logout: () => void;
  isModalLoginOpen: boolean;
  setIsModalLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowModalLogin: () => void;
  isOpenBank: boolean;
  onOpenBank: () => void;
  onOpenChangeBank: () => void;
  selectGameRun: number;
  setSelectGameRun: (value: number) => void;

}

// Create AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define type for AuthProvider props
interface AuthProviderProps {
  children: ReactNode;
}

// Create provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IProfile | null>(null);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const { isOpen: isOpenBank, onOpen: onOpenBank, onOpenChange: onOpenChangeBank } = useDisclosure();
  const [selectGameRun, setSelectGameRun] = useState(1)
  useEffect(() => {
    const auth = localStorage.getItem("informationUserYesRoyal");
    if (auth) {
      try {
        const parseAuth = JSON.parse(auth);
        setUser(parseAuth);
      } catch (error) {
        console.error("Invalid auth", error);
        localStorage.removeItem("informationUserYesRoyal");
      }
    }
  }, []);

  const handleShowModalLogin = () => {
    setIsModalLoginOpen(true);
  }

  const login = (auth: string) => {
    try {
      const parseAuth: IProfile = JSON.parse(auth);
      setUser(parseAuth);
      localStorage.setItem("informationUserYesRoyal", auth);
    } catch (error) {
      console.error("Login failed: invalid auth", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("informationUserYesRoyal");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setIsModalLoginOpen, isModalLoginOpen, handleShowModalLogin, isOpenBank, onOpenBank, onOpenChangeBank, selectGameRun, setSelectGameRun }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};