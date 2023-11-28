import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
const ACCESS_TOKEN = 'ACCESS_TOKEN';
const EXPIRATION = 'EXPIRATION';

interface StateContextType {
  user: null | {};
  token: null | string;
  expiration: null | number;
  setUser: (user: any | null) => void;
  setToken: (token: string | null) => void;
  setExpiration: (expiration: number) => void;
}

const StateContext = createContext<StateContextType>({
  //<StateContextType>
  user: null,
  token: null,
  expiration: null,
  setUser: () => {},
  setToken: () => {},
  setExpiration: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>({});
  const [token, _setToken] = useState<string | null>(
    localStorage.getItem(ACCESS_TOKEN)
  );
  const [expiration, _setExpiration] = useState<number | null>(null);

  const setToken = (token: any) => {
    _setToken(token);
    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
    } else {
      localStorage.removeItem(ACCESS_TOKEN);
    }
  };
  const setExpiration = (expiration: number) => {
    _setExpiration(expiration);
    if (expiration) {
      localStorage.setItem(EXPIRATION, expiration.toString());
    } else {
      localStorage.removeItem(EXPIRATION);
    }
  };

  return (
    <StateContext.Provider
      value={{ user, token, expiration, setUser, setToken, setExpiration }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export const getACCESS_TOKEN = ACCESS_TOKEN;
