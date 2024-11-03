"use client";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <Image
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
          alt={""}
          width={500}
          height={500}
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            注册
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            输入您的电子邮件和密码进行注册
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              电子邮箱
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                我同意所有&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  用户条款和条件
                </a>
              </Typography>
            }
            color="blue"
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 text-md" color="blue" fullWidth>
            注册
          </Button>

          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            已经有账号了?
            <Link href="/auth/sign-in" className="text-blue-500 ml-1">
              前往登录
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}
