import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ModalWrapper = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-200 ease-in-out`}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div
        className={`fixed transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } rounded-xl z-10 overflow-y-scroll top-[5rem] left-0 max-h-[88vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
