"use client";

import { ConfigProvider, theme } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function AntdProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#49d26d",
          colorBgContainer: "#1f2937",
          colorBgElevated: "#111827",
          borderRadius: 8,
        },
      }}
    >
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
}
