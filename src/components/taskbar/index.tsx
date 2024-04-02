import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "components/ui/menubar";
import { Icon } from "@iconify/react";

type Props = {
  handlePrint: () => void;
};

const Taskbar = ({ handlePrint }: Props) => {
  return (
    <Menubar style={{ width: "fit-content", padding: "0 1rem 0 1rem" }}>
      <Icon icon="material-symbols:article-outline-rounded" />
      <MenubarMenu>
        <MenubarTrigger>Share</MenubarTrigger>
        <MenubarContent>
          {/* <MenubarItem disabled>New Incognito Window</MenubarItem> */}
          <MenubarItem>
            <Icon icon="material-symbols:link" />
            Copy Link
          </MenubarItem>
          <MenubarItem>Email Pdf</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={handlePrint}>Print</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Taskbar;
