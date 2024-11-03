"use client";

import {
  InboxArrowDownIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Select,
  Typography,
  Option,
  Switch,
} from "@material-tailwind/react";
import { useTheme } from "@/app/widgets/ThemeContext";

export default function Page() {
  const { sidenavColor, theme, applyTheme } = useTheme();
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="container mx-auto p-4">
        <Typography variant="h3" color="blue-gray" className="font-bold mb-4">
          设置
        </Typography>
        <Card className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-sm border border-blue-gray-100">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="font-bold mb-4"
            >
              通用设置
            </Typography>
            <div className="mb-4">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-bold mb-2"
              >
                挂载知识库
              </Typography>
              <Input
                id="knowledgeBase"
                name="knowledgeBase"
                label="输入知识库地址..."
                color={sidenavColor === "blue" ? "blue" : "gray"}
                size="lg"
              />
            </div>
            <div className="mb-4">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-bold mb-2"
              >
                主题选择
              </Typography>
              <Select
                id="theme"
                name="theme"
                label="选择主题..."
                color={sidenavColor === "blue" ? "blue" : "gray"}
                size="lg"
                value={theme}
                onChange={(val) => applyTheme(val)}
              >
                <Option value="light">浅色</Option>
                <Option value="dark">深色</Option>
              </Select>
            </div>
            <div className="mb-4">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-bold mb-2"
              >
                通知
              </Typography>
              <Switch
                id="notifications"
                name="notifications"
                label="启用桌面通知"
                color={sidenavColor === "blue" ? "blue" : "gray"}
                className="font-bold"
              />
            </div>
            <hr className="my-4" />
            <Typography
              variant="h4"
              color="blue-gray"
              className="font-bold mb-4"
            >
              账户设置
            </Typography>
            <div className="mb-4">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-bold mb-2"
              >
                账户名称
              </Typography>
              <Input
                id="accountName"
                name="accountName"
                label="输入您的账户名称"
                value={"testUser"}
                color={sidenavColor === "blue" ? "blue" : "gray"}
                size="lg"
              />
            </div>
            <div className="mb-4">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-bold mb-2"
              >
                电子邮箱
              </Typography>
              <Input
                type="email"
                id="email"
                name="email"
                label="输入您的邮箱地址"
                value={"testUser@car.com"}
                color={sidenavColor === "blue" ? "blue" : "gray"}
                size="lg"
              />
            </div>
            <div className="mb-4">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-bold mb-2"
              >
                密码
              </Typography>
              <Input
                type="password"
                id="password"
                name="password"
                label="输入新密码"
                color={sidenavColor === "blue" ? "blue" : "gray"}
                size="lg"
              />
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex items-center gap-1 font-normal"
              >
                <ShieldExclamationIcon className="w-5 h-5 text-inherit" />
                确保使用强密码以提高账户安全性。
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="flex justify-end">
            <Button
              color={sidenavColor === "blue" ? "blue" : "gray"}
              variant="gradient"
              className=" font-bold py-2 px-4 flex items-center gap-2"
            >
              <InboxArrowDownIcon className="w-5 h-5 text-inherit" />
              <Typography variant="h6">保存</Typography>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
