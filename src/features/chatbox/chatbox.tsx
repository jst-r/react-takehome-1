import { type SyntheticEvent } from "react";
import s from "./chatbox.module.scss";

const longText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum excepturi hic asperiores, esse velit quasi! Impedit officiis cum eos aliquam beatae doloremque quo ipsum ratione perferendis sapiente, perspiciatis laboriosam?";

export function Chatbox() {
  return (
    <div className={s.chatbox_container}>
      <div className={s.messages_container}>
        <MessageBox text="Test message" sender="user" />
        <MessageBox text="Test response" sender="bot" />
        <MessageBox text={longText} sender="user" />
        <MessageBox text={longText} sender="bot" />
      </div>
      <MessageInput onSendMessage={console.log} />
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

interface MessageInputProps {
  onSendMessage: (msg: string) => void; // Uncontrolled компонент чтобы не ререндерить всего родителя
}

function MessageInput({ onSendMessage }: MessageInputProps) {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget as unknown as typeof e.target & {
      message: { value: string };
    };
    const message = target.message.value;
    e.currentTarget.reset();
    onSendMessage(message);
  };

  return (
    <form onSubmit={handleSubmit} className={s.message_input_container}>
      <input
        type="text"
        required
        placeholder="Start typing here..."
        name="message"
        className={s.message_input}
      />
      <button type="submit" className={s.message_submit_button} />
    </form>
  );
}
