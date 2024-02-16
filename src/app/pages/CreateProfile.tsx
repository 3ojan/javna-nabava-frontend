import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Upload } from 'antd';
import { RcFile, UploadProps } from 'antd/lib/upload';
import React from 'react';
import { LoginFormConatainerDiv } from './styled';

const { Option } = Select;

// Define the type for form values
interface ProfileFormValues {
  name: string;
  email: string;
  organization: string;
  rkpid: string;
  image: RcFile[];
  logoImage: RcFile[];
}

const CreateProfile: React.FC = () => {
  const [form] = Form.useForm<ProfileFormValues>();

  // Example organizations for dropdown
  const organizations = ['Organization 1', 'Organization 2', 'Organization 3'];

  // Handle form submission
  const onFinish = (values: ProfileFormValues) => {
    // console.log('Received values of form: ', values);
  };

  // Dummy request function for upload
  //TODO: dummy request needs fixed, error: file type

  const dummyRequest: UploadProps['customRequest'] = ({ file, onSuccess }) => {
    setTimeout(() => {
      // onSuccess?.('ok', file);
    }, 0);
  };

  return (
    <LoginFormConatainerDiv>
      <Form
        form={form}
        name="profileForm"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Organization"
          name="organization"
          rules={[
            { required: true, message: 'Please select your organization!' },
          ]}
        >
          <Select placeholder="Select your organization">
            {organizations.map((org) => (
              <Option key={org} value={org}>
                {org}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="RKPID"
          name="rkpid"
          rules={[{ required: true, message: 'Please input your RKPID!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Profile Image" name="image">
          <Upload /* customRequest={dummyRequest} */>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Logo Image" name="logoImage">
          <Upload /* customRequest={dummyRequest} */>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginFormConatainerDiv>
  );
};

export default CreateProfile;
