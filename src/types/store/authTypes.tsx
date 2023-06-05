interface UserData {
  id: number;
  email: string;
  battleTag: string;
  password: string;
}

interface AuthStore {
  userData: UserData;
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  setUserData: (userData: UserData) => void;
  editAccount: boolean;
  toggleEditAccount: () => void;
  editSecurity: boolean;
  toggleEditSecurity: () => void;
  newEmail: string;
  setNewEmail: (email: string) => void;
  clearNewEmail: () => void;
  newPassword: string;
  setNewPassword: (password: string) => void;
  clearNewPassword: () => void;
  confirmNewPassword: string;
  setConfirmNewPassword: (password: string) => void;
  clearConfirmNewPassword: () => void;
  newBattleTag: string;
  setNewBattleTag: (battleTag: string) => void;
  clearNewBattleTag: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  clearActiveTab: () => void;
}

export type { UserData, AuthStore };
