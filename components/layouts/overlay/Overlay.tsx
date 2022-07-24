import { createPortal } from 'react-dom';
export interface IOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay: React.FC<IOverlayProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/80 py-20 px-10 z-30">
      <button
        onClick={onClose}
        className="absolute right-10 top-10 text-white h-10 w-10 text-lg"
      >
        x
      </button>
      <div className="opacity-100 text-white w-full h-full">{children}</div>
    </div>,
    document.body
  );
};

export default Overlay;
