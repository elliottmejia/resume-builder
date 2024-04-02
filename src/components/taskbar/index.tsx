import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  // MenubarRadioGroup,
  // MenubarRadioItem,
  // MenubarSeparator,
  // MenubarShortcut,
  // MenubarSub,
  // MenubarSubContent,
  // MenubarSubTrigger,
  MenubarTrigger,
} from "components/ui/menubar";
import { Icon } from "@iconify/react";
import { HOSTED_DOMAIN } from "src/data/data";
import { clipboardCopy } from "src/lib/utils";
import { useState } from "react";

type Props = {
  handleColorPrint: () => void;
  handleBNWPrint: () => void;
  editToggle: () => void;
};

const Taskbar = ({ handleColorPrint, handleBNWPrint, editToggle }: Props) => {
  const handlePDF = () => {};
  const [isCheckedEdit, setCheckedEdit] = useState(false);

  const handleEditToggle = () => {
    editToggle();
    setCheckedEdit(!isCheckedEdit);
  };
  const triggerClasses =
    "px-4 py-2 hover:shadow-pressed rounded-none animate ease-in-out duration-100";
  return (
    <>
      <Menubar
        id="taskbar"
        className="rounded-none relative top-2 p-0 w-fit mx-auto z-50"
        style={{
          clear: "both",
        }}
      >
        <MenubarMenu>
          <MenubarTrigger className={triggerClasses}>Share</MenubarTrigger>
          <MenubarContent>
            {/* <MenubarItem disabled>New Incognito Window</MenubarItem> */}
            <MenubarItem onClick={() => clipboardCopy(HOSTED_DOMAIN)}>
              <Icon icon="material-symbols:link" />
              Copy Link
            </MenubarItem>
            <MenubarItem>Email Pdf</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={triggerClasses} id="printButton">
            Print
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={handleColorPrint}>Print Color</MenubarItem>
            <MenubarItem onClick={handleBNWPrint}>Print B&W</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={triggerClasses} onClick={handlePDF}>
            PDF
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={triggerClasses}>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem
              checked={isCheckedEdit}
              onClick={handleEditToggle}
            >
              Enable Edit Mode
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <div className="hidden px-4 py-2 hover:bg-gray-200 hover:border-radius-pressed "></div>
      </Menubar>
    </>
  );
};

export default Taskbar;
