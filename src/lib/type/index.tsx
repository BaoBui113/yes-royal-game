export interface IProfile {
  GAME_ALIAS: string;
  HP_NO: string;
  MEM_ID: string;
  MEM_LID: string;
}
export interface IDepositProps {
  amount: number;
  deposit_name: string;
  username: string;
  game_id: string;
  comment?: string;
}
export interface ISendPhoneSms {
  username: string;
  phone: string;
}

export interface GameRunProps {
  username: string;
  game_id: string;
  mobile: string;
}

export interface IGame2 {
  name: string;
  title: string;
  value: string;
}

export interface IGame<T> {
  data: T;
}
export interface IBoard {
  NOTICE_SEQ: number;
  NOTICE_TITLE: string;
  NOTICE_CONTENT: string;
  RGST_DT: string;
}
