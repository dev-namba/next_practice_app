import { atom } from "recoil";
import { SideMenu } from "../types/side_menu";

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

// Todoリストを保持
const sideMenuState = atom<SideMenu[]>({
  key: "sideMenuState",
  default: [
    { title: "Home", icon: FiHome },
    { title: "Trending", icon: FiTrendingUp },
    { title: "Explore", icon: FiCompass },
    { title: "Favourites", icon: FiStar },
    { title: "Settings", icon: FiSettings },
  ],
});

export { sideMenuState };
