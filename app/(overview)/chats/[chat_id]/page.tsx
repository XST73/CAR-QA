"use client";

import {
  Avatar,
  Card,
  IconButton,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/app/widgets/ThemeContext";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

const messagesList = [
  {
    chat_id: "1",
    messages: [
      { id: 1, sender: "user", text: "想问问理想汽车怎么样" },
      {
        id: 2,
        sender: "bot",
        text: `理想汽车是一家专注于智能电动车的汽车制造商，以其增程式电动车（EREV）技术而闻名。这种技术结合了电动驱动与传统内燃机的优势，能够在不依赖充电桩的情况下，提供更长的续航里程，特别适合城市及长途出行的使用场景。

理想汽车的首款量产车型理想ONE于2018年上市，获得了消费者的广泛好评。后续推出的理想L系列（如理想L9、L8等）更是以其豪华配置和智能科技吸引了众多用户。这些车型在空间、动力性能及智能辅助驾驶方面表现都非常出色，受到家庭用户的喜爱。

在智能化方面，理想汽车搭载了先进的智能驾驶辅助系统和车载智能生态，提升了驾驶体验。从语音助手到车载导航，理想汽车都注重用户的实际需求，让车主在行车过程中更加便捷舒适。

此外，理想汽车也非常关注售后服务和用户体验，力求为每位客户提供优质的服务支持，增强用户的信任和满意度。

总的来说，理想汽车凭借其增程式电动车的技术优势、出色的产品设计和良好的用户体验，在电动车领域赢得了不错的口碑，是值得考虑的选项。`,
      },
      { id: 3, sender: "user", text: "那么华为问界汽车怎么样呢" },
      {
        id: 4,
        sender: "bot",
        text: `华为问界汽车是华为与重庆小康股份旗下的赛力斯公司的合作项目，专注于智能电动车领域，其首款车型为问界M5，定位为5座中型SUV。这一品牌的推出标志着华为在汽车智能化领域的深入探索，采用了华为的鸿蒙智行技术，致力于提供卓越的智能驾驶与出行体验。

问界汽车系列目前包括问界M5、问界M7、问界M9和智界S7，涵盖了SUV和轿车两种车型，并提供了纯电与增程式两种动力选择。问界M5基于插电式增程混动车型升级而来，保留了原有动力系统和底盘，但引入了华为的全新设计和智能技术，让车辆在动力、智能化和豪华配置上都有显著提升。

问界M7则是一款定位7座中大型SUV的车型，进一步扩展了问界系列的产品线。而问界M9则致力于满足对豪华和空间有更高要求的消费者，提供了更大的车内空间和豪华配置。

整体来说，问界汽车凭借华为在智能技术、车机系统方面的优势，在市场上迅速获得了一定的关注和认可。而随着后续车型的推出，问界汽车也在不断丰富其产品线，满足不同消费者的需求。如果您对智能化、高科技配置的汽车感兴趣，问界汽车是一个值得考虑的品牌。不过，如果您在选车时也考虑理想汽车的增程式电动车，这两者各有特色，可以根据您的需求进行选择。`,
      },
      {
        id: 5,
        sender: "user",
        text: "如果让你在理想汽车和华为问界之间选一个，你会选哪个",
      },
      {
        id: 6,
        sender: "bot",
        text: `作为汽车顾问，在选择理想汽车和华为问界之间，综合考虑多个方面，我倾向于推荐理想汽车。

理想汽车的增程式电动车（EREV）技术在提供长续航的同时，解决了纯电动车在充电便利性方面的不足，特别适合那些经常需要长途出行的消费者。此外，理想汽车在空间设计、动力性能、智能配置等方面都表现出色，非常适合家庭用户的需求。

尽管华为问界也具备良好的智能化和豪华配置，但作为一家新兴品牌，虽然依托华为的技术背景，但在市场认可度、服务网络和产品成熟度方面，理想汽车相对更为稳健。

总的来说，如果您更看重续航能力、空间利用及成熟度，理想汽车无疑是一个更为合适的选择。如果您对智能科技和豪华配置有特别的偏好，华为问界也是一个值得考虑的选项。最终选择还是要根据个人的需求和使用场景来决定。`,
      },
    ],
  },
  {
    chat_id: "2",
    messages: [
      { id: 1, sender: "user", text: "你好" },
      { id: 2, sender: "bot", text: "你好，请问有什么可以帮助您的？" },
      { id: 3, sender: "user", text: "我想了解一下汽车的保养知识" },
      {
        id: 4,
        sender: "bot",
        text: "汽车保养是非常重要的，它可以帮助延长汽车的使用寿命，提高汽车的性能和安全性。以下是一些基本的汽车保养知识：\n1.  定期更换机油和机油滤芯：机油是发动机的血液，定期更换可以减少发动机磨损。\n2.  检查冷却液：确保冷却液液位正常，防止发动机过热。\n3.  检查刹车系统：包括刹车片、刹车盘和刹车油，确保刹车系统安全可靠。\n4.  轮胎保养：定期检查轮胎的气压和磨损情况，必要时进行轮胎换位或更换。\n5.  更换空气滤芯：保持发动机进气畅通，提高燃油效率。\n6.  检查电池：确保电池电量充足，定期清洁电池端子。\n7.  检查皮带和软管：检查是否有磨损、裂纹或松动。\n8.  清洁和更换火花塞：火花塞是点火系统的关键部件，需要定期检查和更换。\n9.  检查悬挂系统：确保悬挂系统没有漏油或损坏，保持车辆行驶平稳。\n10.  定期清洗车辆：不仅可以保持车辆外观，还可以防止污垢和盐分对车漆的侵蚀。\n11.  定期进行车辆的全面检查：包括但不限于上述项目。\n记得按照汽车制造商的推荐保养周期进行保养，通常可以在车辆的用户手册中找到这些信息。如果你不熟悉这些操作，建议去专业的汽车维修店进行保养。",
      },
      { id: 5, sender: "user", text: "我想了解一下机油保养" },
      {
        id: 6,
        sender: "bot",
        text: "机油保养是汽车维护中非常重要的一环，它涉及到机油的作用、更换周期、选择因素、品牌推荐、粘度等级、检查方法和保养技巧等多个方面。机油在发动机中起到润滑、清洁、冷却、密封、防锈和减震的作用。选择合适的机油要根据汽车制造商的推荐、机油的API质量等级、SAE粘度等级以及自己的经济实力来决定，壳牌、嘉实多和美孚是市场上口碑较好的机油品牌，它们各有特点，适合不同的车型和需求。机油粘度等级如”5W-30”，“W”代表冬季，数字越小，冷启动流动性越好；后面的数字代表高温下的粘度，数字越大，保护越好。定期检查机油的颜色、粘度和液位，以判断是否需要更换。保养小技巧包括避免长时间怠速，定期检查其他液体如冷却液、刹车液等，保持车辆清洁，特别是发动机舱，以及定期检查轮胎磨损情况和气压。对于混动汽车，秋冬季节需要特别注意电池的维护和冷却系统的检查。定期的机油保养不仅能保护发动机，还能提升汽车性能和延长寿命。",
      },
      { id: 7, sender: "user", text: "机油保养的周期是多久？" },
      {
        id: 8,
        sender: "bot",
        text: "机油保养周期的长短主要取决于机油的类型和质量。矿物油通常建议每5000公里或6个月更换一次；半合成油的更换周期大约是7500公里或6个月；而全合成机油的更换周期较长，一般为10000-12000公里或一年。需要注意的是，这些周期是以先到者为准，也就是说，即使没有达到规定的公里数，如果时间到了，也是需要更换的。",
      },
      { id: 9, sender: "user", text: "好的，谢谢" },
      { id: 10, sender: "bot", text: "不客气，有其他问题可以随时问我哦!" },
    ],
  },
];

const botAvatarUrl = "/img/bot.png";
const userAvatarUrl = "/img/user.png";

export default function Page({ params }: { params: { chat_id: string } }) {
  const { sidenavColor } = useTheme();
  const chat_id = params.chat_id;
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [messages, setMessages] = useState(
    messagesList.find((m) => m.chat_id === chat_id)?.messages || [
      { id: 0, sender: "bot", text: "您好！有什么可以帮助您的？" },
    ]
  );

  const query = useSearchParams();
  const question = query.get("question");
  useEffect(() => {
    if (question) {
      setCurrentQuestion(question);
      handleSendMessage(question);
    }
  }, []);

  const handleSendMessage = async (question?: string) => {
    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: question ? question : currentQuestion,
    };
    setMessages((prev) => [...prev, newMessage]);

    setLoading(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: question ? question : currentQuestion }),
    });

    const data = await response.json();
    const botMessage = { id: Date.now(), sender: "bot", text: data.reply };
    setMessages((prev) => [...prev, botMessage]);
    setCurrentQuestion("");

    setLoading(false);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col h-screen w-1/2 mx-auto pt-4">
        <div className="flex-grow overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "bot" ? "flex-row" : "flex-row-reverse"
              } items-start mb-6`}
            >
              <Avatar
                src={message.sender === "bot" ? botAvatarUrl : userAvatarUrl}
                alt={`${message.sender}-avatar`}
                size="sm"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40  mx-4 my-1"
              />
              <Card
                color={
                  message.sender === "bot"
                    ? "white"
                    : sidenavColor === "blue"
                    ? "blue"
                    : "gray"
                }
                className={`p-3 max-w-md`}
              >
                <Typography
                  variant="paragraph"
                  color={message.sender === "bot" ? "blue-gray" : "white"}
                  className="whitespace-pre-wrap font-normal"
                  suppressHydrationWarning
                >
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </Typography>
              </Card>
            </div>
          ))}
          <div ref={messagesEndRef} />
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
              disabled={loading}
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
              onClick={() => handleSendMessage()}
              color={sidenavColor === "blue" ? "blue" : "gray"}
              variant="gradient"
              className=" font-bold flex items-center gap-2 px-4 py-2 capitalize"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 rounded-full border-2 border-t-2 border-gray-50 border-r-transparent animate-spin" />
              ) : (
                <PaperAirplaneIcon className="w-5 h-5 text-inherit" />
              )}
              {/* <Typography color="inherit" className="font-bold capitalize">
                发送
              </Typography> */}
            </IconButton>
          </div>
        </div>
        <Typography
          variant="small"
          className="text-gray-400 text-center text-xs mb-2"
        >
          内容由AI大模型生成，请核查重要信息。
        </Typography>
      </div>
    </div>
  );
}
