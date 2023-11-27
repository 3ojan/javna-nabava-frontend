import { Form } from 'antd';
import LoginForm from '../components/login/LoginForm';
import { LoginFormConatainerDiv } from './styled';

export default function Login() {
  return (
    <>
      <LoginFormConatainerDiv>
        <LoginForm></LoginForm>
        {/* <Form>
          {/*  this form is for styling the <a> purposes only 
          <div>
            <a style={{ float: 'right' }} href="">
              Register
            </a>
          </div>
        </Form> */}
      </LoginFormConatainerDiv>
    </>
  );
}
