import { Button } from 'antd';
import axiosClient from 'src/axios-client';
import { useStateContext } from 'src/contexts/ContextProvider';

export default function LogoutButton() {
  const { setToken, setUser } = useStateContext();

  const onLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    axiosClient.post('/logout').then(() => {
      setUser({}), setToken(null);
    });
  };

  return (
    <Button title="Logout" onClick={onLogout}>
      Logout
    </Button>
  );
}
