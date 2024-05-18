import React from "react";
import { Button, Flex, Input, Typography } from "antd";
const { Title } = Typography;

const index = () => {
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const sharedProps = {
    onChange,
  };

  return (
    <Flex gap="middle" align="flex-start" className="flex items-center mt-20" vertical>
      <h1 className="font-semibold text-2xl text-steelBlue">Enter OTP</h1>
      <p className="text-sm">OTP has been sent to your phone</p>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps}/>
      <Button className="bg-steelBlue text-white px-10 mt-5">Get OTP</Button>
    </Flex>
  );
};

export default index;
