import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
const ACCESS_TOKEN = 'ACCESS_TOKEN';

interface StateContextType {
  user: null | {};
  token: null | string;
  setUser: (user: any | null) => void;
  setToken: (token: string | null) => void;
}

const StateContext = createContext<StateContextType>({
  //<StateContextType>
  user: null,
  token: null,
  setUser: () => { },
  setToken: () => { },
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>({});
  const [token, _setToken] = useState<string | null>(
    localStorage.getItem(ACCESS_TOKEN)
  );

  const setToken = (token: any) => {
    _setToken(token);
    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
    } else {
      localStorage.removeItem(ACCESS_TOKEN);
    }
  };


  return <StateContext.Provider value={{ user, token, setUser, setToken }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
export const getACCESS_TOKEN = ACCESS_TOKEN;
