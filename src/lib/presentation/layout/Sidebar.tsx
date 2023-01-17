import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import SideBarItem from "../components/items/sidebar_item";
import Padding from "../components/common/padding";
import { SideMenu } from "lib/model/types/side_menu";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

const sideMenus = [
  { title: "Home", icon: FiHome },
  { title: "Trending", icon: FiTrendingUp },
  { title: "Explore", icon: FiCompass },
  { title: "Favourites", icon: FiStar },
  { title: "Settings", icon: FiSettings },
];

const Sidebar = () => {
  const [selectMenu, setSelectMenu] = useState(sideMenus[0]);

  // 完了したTodoを削除
  const tapMenu = (menu: SideMenu) => setSelectMenu(menu);

  return (
    <Flex pos="sticky" h="100%" flexDirection="column">
      {sideMenus.map((value) => (
        <Padding
          p={{
            p: "6px",
          }}
          key={value.title}
        >
          <SideBarItem
            sideMenu={value}
            onTap={() => {
              tapMenu(value);
              console.log("押した");
            }}
            selectMenu={selectMenu}
          />
        </Padding>
      ))}
    </Flex>
  );
};

export default Sidebar;
