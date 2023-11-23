import { Alert, Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axiosClient from 'src/axios-client';
import { useState } from 'react';
import { ContextProvider, useStateContext } from 'src/contexts/ContextProvider';
import { Navigate } from 'react-router-dom';

interface authPayload {
  name: string;
  password: string;
}

type FieldType = {
  username?: string;
  password?: string;
};

export default function LoginForm() {
  const [errors, setErrors] = useState<string[] | undefined>(undefined);
  const { token, setUser, setToken } = useStateContext();

  if (token) {
    return <Navigate to="/image-upload" />;
  }

  const onSubmit = (values: any) => {
    const payload: authPayload = {
      name: values.name,
      password: values.password,
    };
    // console.log('Received values payload: ', payload);
    axiosClient
      .post('/login', payload)
      .then((res: any) => {
        console.log('res data', res.data);
        setUser(res.data.user);
        debugger;

        setToken(res.data.token);

        console.log('token', token);
      })
      .catch((err: any) => {
        const response: any = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors([response.data.message]);
          }
        }
      });
  };

  return (
    <>
      {/* <LoginFormConatainerDiv> */}
      <Form
        name="login"
        className="login-form"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>Prijava</h1>
        {errors &&
          Object.keys(errors).map((index: string) => {
            debugger;
            return (
              <Alert
                key={index}
                style={{ marginBottom: 24 }}
                message={`${errors[Number(index)]}`}
                type="error"
                showIcon
                closable
              />
            );
          })}

        <Form.Item
          name="name"
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
      </Form>
      {/* </LoginFormConatainerDiv> */}
    </>
  );
}
