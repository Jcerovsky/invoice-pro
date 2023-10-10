import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  style?: string;
}

const ModalWrapper = ({ isOpen, onClose, children, style }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-200 ease-in-out`}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div
        className={`${style} transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-10 overflow-y-scroll  max-h-[88vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
