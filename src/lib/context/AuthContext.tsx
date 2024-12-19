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
  closeModal: () => void;
  isModalLoginOpen: boolean;
  setIsModalLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowModalLogin: () => void;
  selectGameRun: number;
  setSelectGameRun: (value: number) => void;
  handleShowModalDeposit: () => void;
  handleShowModalDepositNotice: () => void;
  isModalDepositNotice: boolean;
  setIsModalDepositNotice: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowModalWithDraw: () => void;
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
  statusModal: string;
  handleShowModalConvertPoint: () => void;
  setStatusModal: React.Dispatch<React.SetStateAction<string>>;
  handleShowModalHistoryDeposit: () => void;
  handleShowModalNotice: () => void;
  handleShowModalEvent: () => void;
  handleShowModalFAQ: () => void;
  handleShowModalSecretAccount: () => void;
  handleShowModalRemoteSupport: () => void;
  handleShowModalPcGuard: () => void;
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
  const [isModalDepositNotice, setIsModalDepositNotice] = useState(false);
  const [isModalSendPhoneSms, setIsModalSendPhoneSms] = useState(false);
  const [isModalSidebar, setIsModalSideBar] = useState(false);
  const [isModalSidebarAuth, setIsModalSidebarAuth] = useState(false);
  const [statusModal, setStatusModal] = useState('');
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
  const closeModal = () => {
    setStatusModal('');
  };
  const handleShowModalMyPageHistoryPoint = () => {
    setIsModalMyPage({
      historyPoint: !isModalMyPage.historyPoint,
      infoMember: false,
    });
  };

  const handleShowModalConvertPoint = () => {
    setStatusModal('convertPoint');
  };
  const handleShowModalHistoryDeposit = () => {
    setStatusModal('historyDeposit');
  };

  const handleShowModalWithDraw = () => {
    setStatusModal('withdraw');
  };

  const handleShowModalDeposit = () => {
    setStatusModal('deposit');
  };

  const handleShowModalNotice = () => {
    setStatusModal('notice');
  };

  const handleShowModalEvent = () => {
    setStatusModal('event');
  };

  const handleShowModalFAQ = () => {
    setStatusModal('faq');
  };

  const handleShowModalSecretAccount = () => {
    setStatusModal('secretAccount');
  };

  const handleShowModalRemoteSupport = () => {
    setStatusModal('remoteSupport');
  };

  const handleShowModalPcGuard = () => {
    setStatusModal('pcGuard');
  };

  const handleShowModalDepositNotice = () => {
    setIsModalDepositNotice(true);
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
        closeModal,
        setIsModalLoginOpen,
        isModalLoginOpen,
        handleShowModalLogin,
        handleShowModalNotice,
        handleShowModalDeposit,
        selectGameRun,
        setSelectGameRun,
        handleShowModalDepositNotice,
        isModalDepositNotice,
        setIsModalDepositNotice,
        handleShowModalWithDraw,
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
        statusModal,
        handleShowModalConvertPoint,
        setStatusModal,
        handleShowModalHistoryDeposit,
        handleShowModalEvent,
        handleShowModalFAQ,
        handleShowModalSecretAccount,
        handleShowModalRemoteSupport,
        handleShowModalPcGuard,
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
