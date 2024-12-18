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
  handleShowModalWithDraw: () => void;
  isModalWithdrawOpen: boolean;
  setIsModalWithdrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowModalSendPhoneSms: () => void;
  isModalSendPhoneSms: boolean;
  setIsModalSendPhoneSms: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowModalSideBar: () => void;
  isModalSidebar: boolean;
  setIsModalSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseModalSideBar: () => void;
  handleShowModalSidebarAuth: () => void;
  isModalSidebarAuth: boolean;
  setIsModalSidebarAuth: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseModalSidebarAuth: () => void;
  handleShowModalMyPageHistoryPoint: () => void;
  handleShowModalMyPageInfoMember: () => void;
  isModalMyPage: {
    historyPoint: boolean;
    infoMember: boolean;
  };
  setIsModalMyPage: React.Dispatch<
    React.SetStateAction<{
      historyPoint: boolean;
      infoMember: boolean;
    }>
  >;
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
  const [isModalWithdrawOpen, setIsModalWithdrawOpen] = useState(false);
  const [isModalDepositNotice, setIsModalDepositNotice] = useState(false);
  const [isModalSendPhoneSms, setIsModalSendPhoneSms] = useState(false);
  const [isModalSidebar, setIsModalSideBar] = useState(false);
  const [isModalSidebarAuth, setIsModalSidebarAuth] = useState(false);
  const [isModalMyPage, setIsModalMyPage] = useState({
    historyPoint: false,
    infoMember: false,
  });
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

  const handleShowModalMyPageHistoryPoint = () => {
    setIsModalMyPage({
      historyPoint: !isModalMyPage.historyPoint,
      infoMember: false,
    });
  };

  const handleShowModalMyPageInfoMember = () => {
    setIsModalMyPage({
      historyPoint: false,
      infoMember: !isModalMyPage.infoMember,
    });
  };

  const handleShowModalSidebarAuth = () => {
    if (isModalSidebar) {
      setIsModalSideBar(false);
    }
    setIsModalSidebarAuth(!isModalSidebarAuth);
  };

  const handleCloseModalSidebarAuth = () => {
    if (isModalSidebar) {
      setIsModalSideBar(false);
    }
    setIsModalSidebarAuth(!isModalSidebarAuth);
  };

  const handleShowModalLogin = () => {
    setIsModalLoginOpen(true);
  };

  const handleShowModalWithDraw = () => {
    setIsModalWithdrawOpen(true);
  };

  const handleShowModalDeposit = () => {
    setIsModalDepositOpen(true);
  };

  const handleShowModalDepositNotice = () => {
    setIsModalDepositNotice(true);
  };

  const handleShowModalSendPhoneSms = () => {
    setIsModalSendPhoneSms(true);
  };

  const handleCloseModalSideBar = () => {
    if (isModalSidebarAuth) {
      setIsModalSidebarAuth(false);
    }
    setIsModalSideBar(!isModalSidebar);
  };

  const handleShowModalSideBar = () => {
    if (isModalSidebarAuth) {
      setIsModalSidebarAuth(false);
    }
    setIsModalSideBar(!isModalSidebar);
  };

  const login = (auth: string) => {
    try {
      const parseAuth: IProfile = JSON.parse(auth);
      setUser(parseAuth);
      localStorage.setItem('informationUserYesRoyal', auth);
      document.cookie = `informationUserYesRoyal=${auth}`;
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
        handleShowModalWithDraw,
        isModalWithdrawOpen,
        setIsModalWithdrawOpen,
        handleShowModalSendPhoneSms,
        isModalSendPhoneSms,
        setIsModalSendPhoneSms,
        isModalSidebar,
        setIsModalSideBar,
        handleShowModalSideBar,
        handleShowModalSidebarAuth,
        isModalSidebarAuth,
        setIsModalSidebarAuth,
        handleCloseModalSidebarAuth,
        handleCloseModalSideBar,
        handleShowModalMyPageHistoryPoint,
        handleShowModalMyPageInfoMember,
        isModalMyPage,
        setIsModalMyPage,
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
