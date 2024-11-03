import type { Metadata } from "next";
import { HomeIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import Sidenav from "@/app/widgets/sidenav";

const icon = {
  className: "w-5 h-5 text-inherit",
};

const routes = [
  {
    layout: "",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "主页",
        path: "",
      },
      {
        icon: <PencilSquareIcon {...icon} />,
        name: "新对话",
        path: "chats/0",
      },
    ],
  },
  {
    title: "历史对话",
    layout: "chats",
    pages: [
      {
        name: "理想汽车与华为问界",
        path: "/1",
      },
      {
        name: "关于机油保养",
        path: "/2",
      },
      {
        name: "购车分期贷款",
        path: "/",
      },
      {
        name: "车船税是什么意思",
        path: "/",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "用车知识问答系统",
  description: "用车知识问答系统",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-blue-gray-50">
      <Sidenav routes={routes} />
      <div className="xl:ml-80">{children}</div>
    </div>
  );
}
