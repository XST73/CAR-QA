"use client";

import { IconButton, Textarea, Typography } from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/app/widgets/ThemeContext";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { sidenavColor } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState("");
  const router = useRouter();

  const handleSendMessage = () => {
    router.push(`/chats/0?question=${encodeURIComponent(currentQuestion)}`);
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col h-screen w-1/2 mx-auto pt-4">
        <div className="h-1/2 flex items-end justify-center pb-4">
          <Link href="/" className="py-6 px-8 text-center" passHref>
            <Typography
              variant="h1"
              color={sidenavColor === "blue" ? "blue" : "blue-gray"}
              className=" flex items-center justify-center font-black"
            >
              <CubeTransparentIcon className="w-12 h-12 mr-4 text-inherit" />
              用车知识问答系统
            </Typography>
          </Link>
        </div>
        <div className="p-4 bg-white rounded-xl mb-2 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-sm border border-blue-gray-100">
          <div className="flex space-x-2 items-center justify-center">
            <IconButton
              color="blue-gray"
              variant="text"
              className=" font-bold flex items-center px-4 py-2"
            >
              <PlusIcon className="h-7 w-7 text-blue-gray-400" />
            </IconButton>
            <Textarea
              rows={1}
              resize
              color={sidenavColor === "blue" ? "blue" : "gray"}
              label="输入问题..."
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
              className="border min-h-full overflow-y-auto"
              containerProps={{
                className: "grid h-full",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
              <IconButton
                onClick={handleSendMessage}
                color={sidenavColor === "blue" ? "blue" : "gray"}
                variant="gradient"
                className=" font-bold flex items-center gap-2 px-4 py-2 capitalize"
              >
                <PaperAirplaneIcon className="w-5 h-5 text-inherit" />
                {/* <Typography color="inherit" className="font-bold capitalize">
                发送
              </Typography> */}
              </IconButton>
          </div>
        </div>
        <Typography
          variant="small"
          className="text-gray-400 text-center text-xs mb-2 mt-auto"
        >
          内容由AI大模型生成，请核查重要信息。
        </Typography>
      </div>
    </div>
  );
}
