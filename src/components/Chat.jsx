import React, { useContext } from "react";
import {
  VideoCameraOutlined,
  UserAddOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <span className="icons">
            <VideoCameraOutlined />
          </span>
          <span className="icons">
            <UserAddOutlined />
          </span>
          <span className="icons">
            <MoreOutlined />
          </span>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
