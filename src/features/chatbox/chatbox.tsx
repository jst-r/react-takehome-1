import s from "./chatbox.module.scss";

const longText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum excepturi hic asperiores, esse velit quasi! Impedit officiis cum eos aliquam beatae doloremque quo ipsum ratione perferendis sapiente, perspiciatis laboriosam?";

export function Chatbox() {
  return (
    <div className={s.chatbox_container}>
      <MessageBox text="Test message" sender="user" />
      <MessageBox text="Test response" sender="bot" />
      <MessageBox text={longText} sender="user" />
      <MessageBox text={longText} sender="bot" />
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
