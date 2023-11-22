import { Alert, Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormConatainerDiv } from './styled';

type FieldType = {
  username?: string;
  password?: string;
};

export default function LoginForm() {
  return (
    <>
      <LoginFormConatainerDiv>
        <Form
          name="login"
          className="login-form"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1>Prijava</h1>
          {/* {(this.state.notice as any) && (
          <Alert
            style={{ marginBottom: 24 }}
            message={this.state.notice}
            type="error"
            showIcon
            closable
          />
        )} */}

          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Unesite korisnčko ime' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Korisničko ime"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Unesite lozinku' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Lozinka"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Prijavi se
            </Button>
          </Form.Item>
          <div>
            <a style={{ float: 'right' }} href="">
              Register
            </a>
          </div>
        </Form>
      </LoginFormConatainerDiv>
    </>
  );
}
