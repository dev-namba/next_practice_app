import { atom } from "recoil";
import { User } from "../types/user";

// Todoリストを保持
const userListState = atom<User[]>({
  key: "userListState",
  default: [
    {
      key: "11",
      id: "@dev__our",
      name: "GatiNeet",
      profile:
        "Actress, musician, songwriter and artist. PM for work inquires or #tag me in your posts",
      tags: [
        "react",
        "flutter",
        "Next",
        "swift",
        "Next",
        "Next",
        "Next",
        "Next",
      ],
    },
  ],
});

export { userListState };
