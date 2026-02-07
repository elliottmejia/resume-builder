import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "components/ui/menubar";
import { Icon } from "@iconify/react";
import IconWithText from "components/ui/icon-with-text";
import { toast } from "components/ui/use-toast";
import { clipboardCopy, getEditModeFromStorage } from "src/lib/utils";
import { useState } from "react";
import { isProd } from "lib/utils";
import { cn } from "lib/utils";

type Props = {
  handleDownload: () => void;
  editToggle: () => void;
  hostedDomain: string;
};

const Taskbar = ({ handleDownload, editToggle, hostedDomain }: Props) => {
  const [isCheckedEdit, setCheckedEdit] = useState(getEditModeFromStorage);

  const handleEditToggle = () => {
    editToggle();
    setCheckedEdit(!isCheckedEdit);
  };
  const handleCopyLink = () => {
    toast({
      title: "Link copied to clipboard",
      description:
        "Share it with your favorite recruiter... If that's you, you're my favorite recruiter!",
    });
    clipboardCopy(hostedDomain);
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
          <MenubarTrigger className={triggerClasses}>Share</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={handleCopyLink}>
              <IconWithText icon="material-symbols:link" className="gap-2">
                Copy Link
              </IconWithText>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
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
