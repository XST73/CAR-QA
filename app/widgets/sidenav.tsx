"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChatBubbleLeftRightIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useTheme } from "@/app/widgets/ThemeContext";

interface Route {
  layout: string;
  title?: string;
  pages: {
    icon?: JSX.Element;
    name: string;
    path: string;
  }[];
}

interface SidenavProps {
  brandImg?: string;
  brandName?: string;
  routes: Route[];
}

const userAvatarUrl = "/img/user.png";

export function Sidenav({
  // brandImg = "/img/logo-ct.png",
  brandName = "用车知识问答系统",
  routes,
}: SidenavProps) {
  const pathName = usePathname();
  const openSidenav = true;
  const { sidenavColor, sidenavType } = useTheme();
  const sidenavTypes: { [key: string]: string } = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent:
      "bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-sm",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 flex flex-col`}
    >
      <div className="relative">
        <Link href="/" className="py-6 px-8 text-center" passHref>
          <Typography
            variant="h5"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
            className=" flex items-center justify-center font-bold"
          >
            <CubeTransparentIcon className="w-7 h-7 mr-2 text-inherit" />
            {brandName}
          </Typography>
        </Link>
      </div>
      {/* <div className="mx-4 flex gap-3 justify-center items-center">
        <Button color="blue-gray" variant="text" className=" font-bold py-2 px-4 w-1/2 flex justify-center items-center gap-2">
          <HomeIcon className="w-5 h-5" />
          <Typography variant="h6">主页</Typography>
        </Button>
        <Button color="blue-gray" variant="text"  className=" font-bold py-2 px-4 w-1/2 flex justify-center items-center gap-2">
          <PencilSquareIcon className="w-5 h-5" />
          <Typography variant="h6">新对话</Typography>
        </Button>
      </div> */}
      <div className="overflow-y-auto m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => {
              const isActive = pathName === `/${layout}${path}`;
              return (
                <li key={name}>
                  <Link href={`/${layout}${path}`} passHref>
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon ? (
                        icon
                      ) : (
                        <ChatBubbleLeftRightIcon className="w-5 h-5 text-inherit" />
                      )}
                      <Typography
                        color="inherit"
                        className="font-bold capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
      <div className="mt-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar
            src={userAvatarUrl}
            alt="user-avatar"
            size="sm"
            className="rounded-lg shadow-lg shadow-blue-gray-500/40"
          />
          <Typography
            // variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
            className="ml-2 uppercase font-bold"
          >
            testUser
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip content="登出">
            <Link href="/auth/sign-in" passHref>
              <IconButton
                color={sidenavType === "dark" ? "white" : "blue-gray"}
                variant="text"
              >
                <ArrowLeftStartOnRectangleIcon className="w-6 h-6 text-inherit" />
              </IconButton>
            </Link>
          </Tooltip>
          <Link href="/settings" passHref>
            <Tooltip content="设置">
              <IconButton
                color={sidenavType === "dark" ? "white" : "blue-gray"}
                variant="text"
              >
                <Cog6ToothIcon className="w-6 h-6 text-inherit" />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidenav;
