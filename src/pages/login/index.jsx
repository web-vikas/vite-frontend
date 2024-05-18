import GlobalWrapper from "../../components/GlobalWrapper";

import { Form, Input, Button, Flex } from "antd";
import { emailValidation } from "../../helpers";
import { Mail } from "lucide-react";
import { useDispatch } from "react-redux";
import { loadingStart, login } from "../../redux/action";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);

    const userData = {
      _id: 1,
      email: "email@gamil.com",
      name: "Name",
      mobile: "911987331",
      role: "admin",
      access_token: "access_token",
      active_session_refresh_token: "active_session_refresh_token",
    };
    dispatch(login(userData));
    dispatch(loadingStart());
  };

  return (
    <GlobalWrapper>
      <h1 className="text-steelBlue text-4xl font-bold text-center mt-16 mb-5">
        Log In
      </h1>
      <div className="mx-auto">
        <Form
          name="login-form"
          className="max-w-sm m-5 md:mx-auto "
          layout="vertical"
          onFinish={onFinish}
          autoComplete="on"
        >
          <Form.Item label="Email Id" name="email" rules={emailValidation}>
            <Input
              placeholder="Enter registered email"
              prefix={<Mail strokeWidth={"1"} />}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" className="my-5">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </GlobalWrapper>
  );
};

export default LoginPage;
