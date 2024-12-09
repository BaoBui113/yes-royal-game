'use client';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IProfile } from '../type';

interface AuthContextType {
  user: IProfile | null;
  login: (token: string) => void;
  logout: () => void;
  isModalLoginOpen: boolean;
  setIsModalLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowModalLogin: () => void;
  selectGameRun: number;
  setSelectGameRun: (value: number) => void;
  isModalDepositOpen: boolean;
  setIsModalDepositOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowModalDeposit: () => void;
  handleShowModalDepositNotice: () => void;
  isModalDepositNotice: boolean;
  setIsModalDepositNotice: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [isModalDepositOpen, setIsModalDepositOpen] = useState(false);
  const [isModalDepositNotice, setIsModalDepositNotice] = useState(false);
  const [selectGameRun, setSelectGameRun] = useState(1);
  useEffect(() => {
    const auth = localStorage.getItem('informationUserYesRoyal');
    if (auth) {
      try {
        const parseAuth = JSON.parse(auth);
        setUser(parseAuth);
      } catch (error) {
        console.error('Invalid auth', error);
        localStorage.removeItem('informationUserYesRoyal');
      }
    }
  }, []);

  const handleShowModalLogin = () => {
    setIsModalLoginOpen(true);
  };

  const handleShowModalDeposit = () => {
    setIsModalDepositOpen(true);
  };

  const handleShowModalDepositNotice = () => {
    setIsModalDepositNotice(true);
  };

  const login = (auth: string) => {
    try {
      const parseAuth: IProfile = JSON.parse(auth);
      setUser(parseAuth);
      localStorage.setItem('informationUserYesRoyal', auth);
    } catch (error) {
      console.error('Login failed: invalid auth', error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('informationUserYesRoyal');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        setIsModalLoginOpen,
        isModalLoginOpen,
        handleShowModalLogin,
        isModalDepositOpen,
        setIsModalDepositOpen,
        handleShowModalDeposit,
        selectGameRun,
        setSelectGameRun,
        handleShowModalDepositNotice,
        isModalDepositNotice,
        setIsModalDepositNotice,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
