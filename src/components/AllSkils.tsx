"use client";

import type { CSSProperties } from "react";
import React, { useRef } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Card, Collapse } from "antd";
import FrontendSkill from "./FrontendSkill";
import { VscTools } from "react-icons/vsc";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const frontendIcons = [
  "/images/html.svg",
  "/images/css.svg",
  "/images/tailwind.svg",
  "/images/javascript.svg",
  "/images/antd.svg",
  "/images/gsap.svg",
  "/images/typescript.svg",
  "/images/react.svg",
  "/images/nextjs.svg",
];

const backendIcons = [
  "/images/nodejs.svg",
  "/images/express.svg",
  "/images/mongodb.svg",
  "/images/authjs.svg",
];

const tools = [
  "/images/redux.svg",
  "/images/react-query.svg",
  "/images/react-hook-form.svg",
  "/images/axios.svg",
  "/images/react-router-dom.svg",
];

const others = [
  "/images/git.svg",
  "/images/vercel.svg",
  "/images/canva.svg",
  "/images/notion.svg",
  "/images/edrawmind.svg",
];

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: (
      <span className="text-cyan-400 text-xl font-semibold">Frontend</span>
    ),
    children: (
      <div className="bg-transparent p-4 text-gray-200">
        <FrontendSkill icons={frontendIcons} />
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: <span className="text-cyan-400 text-xl font-semibold">Backend</span>,
    children: (
      <div className="bg-transparent p-4 text-gray-200">
        <FrontendSkill icons={backendIcons} />
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: <span className="text-cyan-400 text-xl font-semibold">Tools</span>,
    children: (
      <div className="bg-transparent p-4 text-gray-200">
        <FrontendSkill icons={tools} />
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: <span className="text-cyan-400 text-xl font-semibold">Others</span>,
    children: (
      <div className="bg-transparent p-4 text-gray-200">
        <FrontendSkill icons={others} />
      </div>
    ),
    style: panelStyle,
  },
]; 

const AllSkils: React.FC = () => {
  const panelStyle: CSSProperties = {
    marginBottom: 16,
    background: "transparent",
    border: "0.5px solid #031919",
    borderRadius: "8px",
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="max-w-6xl mx-auto px-4 sm:px-6 bg-[linear-gradient(to_right,_rgba(99,_102,_241,_0.05),_rgba(20,_184,_166,_0.05))] overflow-x-hidden"
    >
      <Card
        styles={{
          header: { borderBottom: "none", marginBottom: 15 },
          body: { paddingTop: 0 },
        }}
        title={
          <span className="text-cyan-400 text-2xl font-semibold flex items-center gap-2">
            <VscTools /> <span>Skills</span>
          </span>
        }
        variant="borderless"
        className="!text-gray-200 border border-[#031919] !bg-transparent"
      >
        <Collapse
          size="large"
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined
              rotate={isActive ? 90 : 0}
              style={{ color: "#22d3ee" }}
              className="!text-xl pt-2"
            />
          )}
          style={{ background: "transparent" }}
          items={getItems(panelStyle)}
        />
      </Card>
    </div>
  );
};

export default AllSkils;
