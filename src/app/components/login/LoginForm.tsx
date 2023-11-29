import { Alert, Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axiosClient from 'src/axios-client';
import { useState } from 'react';
import { ContextProvider, useStateContext } from 'src/contexts/ContextProvider';
import { Navigate } from 'react-router-dom';

interface authPayload {
  email: string;
  password: string;
}

type FieldType = {
  email?: string;
  password?: string;
};

export default function LoginForm() {
  const [errors, setErrors] = useState<string[] | undefined>(undefined);
  const { token, setUser, setToken /* , setExpiration */ } = useStateContext();

  // if (token) {
  //   return <Navigate to="/image-upload" />;
  // }

  const onSubmit = (values: any) => {
    const payload: authPayload = {
      email: values.email,
      password: values.password,
      // email: 'admin@example.com',
      // password: 'Pa$$w0rd',
    };
    console.log('Received values payload: ', payload);
    axiosClient
      .post('/login', payload)
      .then((res: any) => {
        // console.log('res data', res.data);
        setUser(res.data.user);
        ///ovo ti neće raditi, stavi setTokenAndUser(token.user)
        setToken(res.data.token);
        // setExpiration(createExpirationDate(res.data.expiration));
      })
      .catch((err: any) => {
        // Rework errors to croatian
        const response: any = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            const emailErrors = response.data.errors.email || [];
            const passwordErrors = response.data.errors.password || [];

            const combinedErrors = emailErrors.concat(passwordErrors);
            setErrors(combinedErrors);
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
            return (
              <Alert
                key={index}
                style={{ marginBottom: 24 }}
                message={`${errors[Number.parseInt(index)]}`}
                type="error"
                showIcon
                closable
              />
            );
          })}

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Unesite email adresu' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
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
