import React, { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ModalWrapper = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-100 ease-in-out h-screen`}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div
        className=" absolute left-0 transform rounded-lg shadow-lg z-10  overflow-y-scroll
       "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
