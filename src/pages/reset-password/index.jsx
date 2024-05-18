import React from "react";
import { Form, Input, Button, Flex } from "antd";
const index = () => {
  const [form] = Form.useForm();
  return (
    <div className="p-5">
      <h1 className="text-steelBlue text-2xl font-semibold text-center mt-16 mb-5">
        Reset Password
      </h1>
      <Form
        className="max-w-sm flex flex-col  mx-auto"
        form={form}
        name="dependencies"
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: false,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="password"
          rules={[
            {
              required: false,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Flex gap="small" wrap className="flex items-center justify-center">
          <Button className="bg-steelBlue text-white px-10 ">Reset</Button>
        </Flex>
      </Form>
    </div>
  );
};

export default index;
