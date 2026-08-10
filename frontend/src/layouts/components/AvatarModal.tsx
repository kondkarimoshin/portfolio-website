import { useEffect } from "react";
import profile from "../../assets/images/profile.webp";

type AvatarModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AvatarModal = ({ isOpen, onClose }: AvatarModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center
        bg-black/75
        backdrop-blur-sm
        p-6
      "
    >
      <img
        src={profile}
        alt="Profile"
        onClick={(e) => e.stopPropagation()}
        className="
          max-h-[80vh]
          max-w-[90vw]
          rounded-2xl
          shadow-2xl
        "
      />
    </div>
  );
};

export default AvatarModal;