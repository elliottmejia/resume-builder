import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "components/ui/menubar";
import { Icon } from "@iconify/react";
import { getEditModeFromStorage } from "src/lib/utils";
import { useState } from "react";
import { isProd } from "lib/utils";
import { cn } from "lib/utils";

type Props = {
  handleDownload: () => void;
  editToggle: () => void;
};

const Taskbar = ({ handleDownload, editToggle }: Props) => {
  const [isCheckedEdit, setCheckedEdit] = useState(getEditModeFromStorage);

  const handleEditToggle = () => {
    editToggle();
    setCheckedEdit(!isCheckedEdit);
  };

  const triggerClasses =
    "px-4 py-2 hover:shadow-pressed rounded-none animate ease-in-out duration-100 relative hover:top-[1px]";
  return (
    <>
      <Menubar
        id="taskbar"
        className="rounded-none relative top-2 sm:-right-4 p-0 w-fit mx-auto z-50"
        style={{
          clear: "both",
        }}
      >
        <MenubarMenu>
          <MenubarTrigger
            className={cn(triggerClasses, " ")}
            onClick={handleDownload}
          >
            <Icon
              icon="typcn:download"
              className="relative -top-[2px] "
              height="22px"
            />
          </MenubarTrigger>
        </MenubarMenu>
        {!isProd() && (
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
        )}
        <div className="hidden px-4 py-2 hover:bg-gray-200 hover:border-radius-pressed "></div>
      </Menubar>
    </>
  );
};

export default Taskbar;
