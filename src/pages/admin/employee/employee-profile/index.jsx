import React, { useState } from "react";
import ArrowLeftOutlined from "@ant-design/icons/ArrowLeftOutlined";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { Form, Input, Button, Flex } from "antd";
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const index = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const handleLogOut = () => {
    const formData = form.getFieldsValue();
    console.log("Form Data:", formData);
  };
  console.log("Component rendered");
  form
    .validateFields()
    .then((values) => console.log(values))
    .catch((err) => console.log(err));

  const handleAddPhotoClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 ">
      <div className="mt-8 flex flex-col gap-4">
        <ArrowLeftOutlined />
        <h1>Admin</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar size={64} icon={<UserOutlined />} src={imageUrl} />
          </Space>
        </Space>
        <h2 className="flex gap-2 cursor-pointer" onClick={handleAddPhotoClick}>
          <PlusOutlined />
          Add Photo
        </h2>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          accept="image/"
          onChange={handleFileChange}
        />
      </div>
      <Form
        className="max-w-sm flex flex-col  mx-auto"
        form={form}
        name="dependencies"
        autoComplete="off"
        layout="vertical"
        validateMessages={validateMessages}
      >
        <Form.Item
          className="mb-4"
          name={["user", "Firstname"]}
          label="First Name"
          rules={[
            {
              type: "Name",
            },
          ]}
        >
          <Input placeholder="Admin First Name" />
        </Form.Item>
        <Form.Item
          className="mb-4"
          name={["user", "Lastname"]}
          label="Last Name"
          rules={[
            {
              type: "Name",
            },
          ]}
        >
          <Input placeholder="Admin Last Name" />
        </Form.Item>
        <Form.Item
          className="mb-4"
          name={["phone"]}
          label="Phone number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="xxxxxxxxxxx" />
        </Form.Item>
        <Form.Item
          className="mb-4"
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="admin@gmail.com" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="*************"/>
        </Form.Item>

        <Flex gap="small" wrap className="flex items-center justify-center">
          <Button
            className="bg-steelBlue text-white px-10 "
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </Flex>
      </Form>
    </div>
  );
};

export default index;
