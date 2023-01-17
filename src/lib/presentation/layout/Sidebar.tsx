import { FC, useState } from "react";

import { Flex } from "@chakra-ui/react";
import SideBarItem from "../components/items/sidebar_item";
import { useRecoilState } from "recoil";
import { sizeMenuState } from "lib/model/atoms/side_menu_atom";
import Padding from "../components/common/padding";

const Sidebar = () => {
  const [sizeMenus] = useRecoilState(sizeMenuState);
  return (
    <Flex pos="sticky" h="100%" flexDirection="column">
      {sizeMenus.map((value) => (
        <Padding
          p={{
            p: "6px",
          }}
        >
          <SideBarItem sideMenu={value} onTap={() => {}} />
        </Padding>
      ))}
    </Flex>
  );
};

export default Sidebar;
