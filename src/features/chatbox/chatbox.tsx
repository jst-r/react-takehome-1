import s from "./chatbox.module.scss";

export function Chatbox() {
  return (
    <div className={s.chatbox_container}>
      <MessageBox text="Test message" sender="user" />
      <MessageBox text="Test response" sender="bot" />
    </div>
  );
}

interface MessageBoxProps {
  sender: "user" | "bot";
  text: string;
}

function MessageBox({ text, sender }: MessageBoxProps) {
  return (
    <div className={s.message_box} data-sender={sender}>
      {text}
    </div>
  );
}
