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
import IconWithText from "components/ui/icon-with-text";
import { toast } from "components/ui/use-toast";
import { HOSTED_DOMAIN } from "src/data/data";
import { clipboardCopy, getEditModeFromStorage } from "src/lib/utils";
import { useState } from "react";
import { isProd } from "lib/utils";
import { cn } from "lib/utils";

type Props = {
  handleColorPrint: () => void;
  editToggle: () => void;
};
//eslint-disable-next-line @typescript-eslint/no-unused-vars
const Taskbar = ({ handleColorPrint, editToggle }: Props) => {
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
    clipboardCopy(HOSTED_DOMAIN);
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
            {/* <MenubarItem disabled>New Incognito Window</MenubarItem> */}
            <MenubarItem onClick={handleCopyLink}>
              <IconWithText icon="material-symbols:link" className="gap-2">
                Copy Link
              </IconWithText>
            </MenubarItem>
            {/* <MenubarItem>Email Pdf</MenubarItem> */}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <a download href="/Elliott_Mejia_Resume_Oct_24.pdf">
            <MenubarTrigger className={cn(triggerClasses, " ")}>
              <Icon
                icon="typcn:download"
                className="relative -top-[2px] "
                height="22px"
              />
            </MenubarTrigger>
          </a>
        </MenubarMenu>
        {!isProd() && (
          <MenubarMenu>
            <MenubarTrigger
              className={triggerClasses}
              onClick={handleColorPrint}
              id="printButton"
            >
              Print
            </MenubarTrigger>
          </MenubarMenu>
        )}
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
