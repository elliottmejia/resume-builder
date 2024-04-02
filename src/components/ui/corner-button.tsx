import { Icon } from "@iconify/react";
type Props = {
  handlePageEdit: () => void;
};

const CornerButton = ({ handlePageEdit }: Props) => {
  return (
    <div
      id="corner-button-container"
      className="no-print z-50 animate duration-100 hover:translate-x-1 hover:-translate-y-1 absolute right-0 top-0 cursor-pointer"
      onClick={handlePageEdit}
    >
      <div id="corner-button" className="absolute right-0 top-0 w-0 h-0 z-50" />
      <Icon
        icon="ic:sharp-edit"
        id="edit-button"
        className="absolute right-1 top-1 z-50 h-6 w-6 text-black"
      ></Icon>
    </div>
  );
};

export default CornerButton;
