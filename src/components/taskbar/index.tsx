import {
  Menubar,
  // MenubarCheckboxItem,
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

type Props = {
  handlePrint: () => void;
};

const Taskbar = ({ handlePrint }: Props) => {
  const handlePDF = () => {};
  const triggerClasses =
    "px-4 py-2  hover:shadow-pressed rounded-none animate ease-in-out duration-100";
  return (
    <>
      <Menubar
        id="taskbar"
        className="rounded-none relative  top-2 clear right-2 p-0 w-fit mx-auto"
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
          <MenubarTrigger className={triggerClasses} onClick={handlePrint}>
            Print
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className={triggerClasses} onClick={handlePDF}>
            PDF
          </MenubarTrigger>
        </MenubarMenu>
        <div className="hidden px-4 py-2 hover:bg-gray-200 hover:border-radius-pressed "></div>
      </Menubar>
    </>
  );
};

export default Taskbar;
