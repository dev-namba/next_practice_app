import { atom } from "recoil";
import { User } from "../types/todo";

// Todoリストを保持
const todoListState = atom<User[]>({
  key: "todoListState",
  default: [
    {
      id: "おっっっっっs",
      title: "おっす",
      text: "テキスト",
      isComplete: false,
    },
    {
      id: "やああ",
      title: "おっす",
      text: "テキスト",
      isComplete: false,
    },
    {
      id: "ららららr",
      title: "おっす",
      text: "テキスト",
      isComplete: false,
    },
  ],
});

export { todoListState };
