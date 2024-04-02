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

const Taskbar = () => {
  return (
    <Menubar style={{ width: "fit-content", padding: "0 1rem 0 1rem" }}>
      <Icon icon="material-symbols:article-outline-rounded" />
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          {/* <MenubarItem disabled>New Incognito Window</MenubarItem> */}
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Export</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>PDF</MenubarItem>
          <MenubarItem>Word</MenubarItem>
          <MenubarItem>HTML</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Taskbar;
