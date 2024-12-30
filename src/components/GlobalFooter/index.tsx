"use client";

import React from "react";
import "./index.css";
/*
* 全局底部栏组件
* */
export default function GlobalFooter() {
  const currentYear: number =new Date().getFullYear()
  return (
    <div
      className="global-footer"
      style={{
        textAlign: "center",
        paddingBlockStart: 12,
      }}
    >
      <div>© {currentYear} 面试助手</div>
      <div>
        <a href="https://github/zhangfeng-code" target="_blank">
          作者：张峰
        </a>
      </div>
    </div>
  );
}