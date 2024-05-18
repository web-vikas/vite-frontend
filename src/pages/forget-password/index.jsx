import React from "react";
import { Form, Input, Button, Flex } from "antd";
import Title from "antd/es/typography/Title";
const ForgetPassword = () => {
  const [form] = Form.useForm();
  return (
    <div className="p-5">
      <div className="text-center p-4">
        <Title className="text-steelBlue text-2xl font-semibold mt-16 mb-5">
         Forget password
        </Title>
        <Title className="text-sm mb-2">
          Please enter your registered email, we will send you a verification
          code.
        </Title>
      </div>
      <Form
        className="max-w-sm flex flex-col  mx-auto"
        form={form}
        name="dependencies"
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          className="mb-8"
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input placeholder="Enter register email" />
        </Form.Item>
        <Flex gap="small" wrap className="flex items-center justify-center">
          <Button className="bg-steelBlue text-white px-10 ">Get OTP</Button>
        </Flex>
      </Form>
    </div>
  );
};

export default ForgetPassword;
