import GlobalWrapper from "../GlobalWrapper";

import React, { useState } from "react";

import { Button, Layout, Menu, theme } from "antd";
import { AxeIcon, BanIcon, PiIcon, Tv2Icon, User2 } from "lucide-react";
const { Header, Content, Footer, Sider } = Layout;

const AdminWrapper = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();
  return (
    <GlobalWrapper className="p-2">
      <Header
        style={{
          padding: 0,
          background: colorPrimary,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <Tv2Icon /> : <Tv2Icon />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Layout>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
            <div className="demo-logo-vertical" />
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <AxeIcon />,
                  label: "Dashboard",
                },
                {
                  key: "2",
                  icon: <BanIcon />,
                  label: "Employee",
                },
                {
                  key: "3",
                  icon: <BanIcon />,
                  label: "Teams",
                },
                {
                  key: "4",
                  icon: <BanIcon />,
                  label: "Task",
                },
                {
                  key: "5",
                  icon: <BanIcon />,
                  label: "Contacts",
                },
                {
                  key: "6",
                  icon: <BanIcon />,
                  label: "RTO",
                },
                {
                  key: "7",
                  icon: <BanIcon />,
                  label: "Vendors",
                },
                {
                  key: "8",
                  icon: <BanIcon />,
                  label: "Reports",
                },
              ]}
            />
          </Sider>
        </Layout>

        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </GlobalWrapper>
  );
};

export default AdminWrapper;
