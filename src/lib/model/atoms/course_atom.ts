import { Course } from "../types/course";
import { atom } from "recoil";

// Todoリストを保持
const courseListState = atom<Course[]>({
  key: "courseListState",
  default: [
    {
      id: "1",
      title: "standard",
      detail: "アイウエオ",
      isComplete: false,
      price: 0,
    },
    {
      id: "2",
      title: "common",
      detail: "アイウエオ",
      isComplete: false,
      price: 12,
    },
    {
      id: "3",
      title: "premium",
      detail: "アイウエオ",
      isComplete: false,
      price: 30,
    },
  ],
});

export { courseListState };
