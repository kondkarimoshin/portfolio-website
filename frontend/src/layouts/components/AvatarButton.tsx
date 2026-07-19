import profile from "../../assets/images/profile.jpg";

type AvatarButtonProps = {
  onClick: () => void;
};

const AvatarButton = ({ onClick }: AvatarButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label="View profile photo"
      className="
        overflow-hidden
        rounded-full
        border-2
        border-slate-700
        transition-all
        duration-300
        hover:border-cyan-400
        hover:scale-105
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400
      "
    >
      <img
        src={profile}
        alt="Profile"
        className="h-10 w-10 object-cover"
      />
    </button>
  );
};

export default AvatarButton;