import React, { useState } from "react";
import { directChatsMessages } from "../../data/dummy";
import { Inbox } from "../index";
import "./directChat.css";
import { IoChatbubbles } from "react-icons/io5";
import { FaMinus, FaTimes } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import CustomToggle from "./Accordion";
import { Accordion, Card, } from "react-bootstrap";

const DirectChat = () => {
  const [showing, setShowing] = useState(false);
  const [ open ] = useState(false);
  const [activeSlide, setActiveSlide] = useState("chat");
  const [visible, setVisible] = useState(true);

  const toggleSlide = () => {
    setActiveSlide(() => (activeSlide === "chat" ? "inbox" : "chat"));
  };

  const handleShow = () => {
    setShowing((prev) => !prev);
  };

  const removeElement = () => {
    setVisible((prev) => !prev);
  };
if(visible)
 return (
  <Accordion defaultActiveKey="0">
    <div className="card card-danger direct-chat direct-chat-danger">
      <div className="card-header d-flex justify-content-between align-items-center bg-transparent">
        <h6 className="card-title">Direct Chat</h6>
        <div className="card-tools">
          <span
            data-toggle="tooltip"
            title="3 New Messages"
            className="badge badge-primary mr-3"
          >
            3
          </span>
          <CustomToggle eventKey="0">
            <span
              type="button"
              className=""
            >
              {!showing ? (
                <FaMinus
                  className="chat-icons"
                  onClick={handleShow}
                />
              ) : (
                <GoPlus onClick={handleShow} className='chat-icons' />
              )}
            </span>
          </CustomToggle>
          <button
            type="button"
            className="btn btn-tool btn-outline-light"
            onClick={toggleSlide}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <IoChatbubbles  className='mb-1 chat-icons'/>
          </button>
          <button
            type="button"
            className="btn btn-tool btn-outline-light"
            data-card-widget="remove"
          >
            <FaTimes className="chat-icons m-0" type="button" onClick={removeElement}/>
          </button>
        </div>
      </div>
      <Accordion.Collapse eventKey="0">
        <Card className='bg-none'>
          <div style={{width: '100%', height:'200px', overflow:'scroll'}} className='y'>
            <div className={activeSlide === "chat" ? "chat show" : "chat hide"}>
            {directChatsMessages.map((chat, index) => (
              <div className="direct-chat-messages p-2" key={index} style={{width: '100%'}}>
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos d-flex justify-content-between align-items-center">
                    <span className="direct-chat-name float-left font-weight-bold">
                      {chat.message.name}
                    </span>
                    <h6 className="dateAndTime float-right">
                      {chat.message.time}
                    </h6>
                  </div>

                  <div className="d-flex  align-items-center">
                  <img
                    src={chat.message.img}
                    className="rounded-circle m-2"
                    alt="message user"
                    width="40px"
                    height="40px"
                  />

                  <div
                    className="p-2 w-100 m-2 chatText rounded-lg"
                    style={{ backgroundColor: "#d2d6de", color: " #444" }}
                  >
                    {chat.message.text}
                  </div>
                  </div>
                </div>
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name font-weight-bold float-right">
                      {chat.reply.name}
                    </span>
                    <span className="dateAndTime float-left">
                      {chat.reply.time}
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse align-items-center">
                  <img
                    src={chat.reply.img}
                    className="rounded-circle m-2"
                    alt="message user"
                    width="40px"
                    height="40px"
                  />

                  <div
                    className="chatText p-2 w-100 m-2 bg-primary text-white rounded-lg"
                  >
                    {chat.reply.text}
                  </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            <div
              id="example-collapse-text"
              className={
                activeSlide === "inbox" ? "inbox show" : "inbox hide"
              }
            >
              <Inbox />
            </div>
          </div>

          <div className="card-footer">
            <form action="#" method="post">
              <div className="input-group">
                <input
                  type="text"
                  name="message"
                  placeholder="Type Message ..."
                  className="form-control outline-light "
                />
                <span className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-primary btn-outline-light"
                  >
                    Send
                  </button>
                </span>
              </div>
            </form>
          </div>
        </Card>
      </Accordion.Collapse>
    </div>
  </Accordion>
) 
};

export default DirectChat;
