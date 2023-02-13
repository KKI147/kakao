import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  container: HTMLElement;
  text: string;
}

export default function Modal({ text }: ModalProps, { container }: ModalProps) {
  return ReactDOM.createPortal(
    <div>
      <p>some jsx, etc.</p>
      <p>{text}</p>
    </div>,
    container
  );
}
