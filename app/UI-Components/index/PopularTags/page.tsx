"use client";

import Image from "next/image";
import PythonTag from "@/public/Python.png";
import CppTag from "@/public/C++.png";
import CTag from "@/public/C.png";
import ArduinoTag from "@/public/Arduino.png";
import WebotTag from "@/public/WeBotTechnology.png";
import RosTag from "@/public/RosTechnology.svg";
import openCvTag from "@/public/OpenCv.png";
import pyTorchTag from "@/public/PyTorch.png";
import langChainTag from "@/public/Langchain.svg";
import gitHubTag from "@/public/github-mark-white.png";
import gitTag from "@/public/Git_icon.svg";
import YoloTag from "@/public/Yolo.png"

const TagData = [
  {
    id: "1",
    title: "Python",
    image: PythonTag,
  },
  {
    id: "2",
    title: "C++",
    image: CppTag,
  },
  {
    id: "3",
    title: "C",
    image: CTag,
  },
  {
    id: "4",
    title: "Arduino",
    image: ArduinoTag,
  },
  {
    id: "5",
    title: "WeBot",
    image: WebotTag,
  },
  {
    id: "6",
    title: "ROS",
    image: RosTag,
  },
  {
    id: "7",
    title: "OpenCV",
    image: openCvTag,
  },
  {
    id: "8",
    title: "PyTorch",
    image: pyTorchTag,
  },
  {
    id: "9",
    title: "LangChain",
    image: langChainTag,
  },
  {
    id: "10",
    title: "LangGraph",
    image: langChainTag,
  },
  {
    id: "11",
    title: "GitHub",
    image: gitHubTag,
  },
  {
    id: "12",
    title: "Git",
    image: gitTag,
  },
  {
    id: "13",
    title: "YOLOV8",
    image: YoloTag,
  },
];

export default function PopularTags() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 text-[var(--white)]">
        <div className="title">
          <h1 className="text-4xl lg:text-5xl font-bold neon-text">
            Technologies & FrameWorks.
          </h1>
          <p className="text-lg text-[var(--text-light)] leading-relaxed mt-6">
            Most used Technologies & FrameWorks
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {TagData.map((topic) => (
              <div
                key={topic.id}
                className="tag-card flex items-center gap-3 p-5 rounded-2xl border border-[var(--light-boarder)] bg-[var(--bg-color)]"
              >
                <Image
                  src={topic.image}
                  alt={topic.title}
                  className="w-10 h-10 flex-shrink-0"
                />
                <h2 className="font-mono text-base text-[var(--text-light)] truncate">
                  {topic.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
