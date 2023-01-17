import { atom } from "recoil";
import { User } from "../types/user";

// Todoリストを保持
const userListState = atom<User[]>({
  key: "userListState",
  default: [
    {
      key: "11",
      id: "@dev__flutter",
      name: "Flutter",
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
    {
      key: "12",
      id: "@dev__next",
      name: "Developer",
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
    {
      key: "122",
      id: "@dev__react",
      name: "React",
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
    {
      key: "32",
      id: "@dev__go",
      name: "GoLang",
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
    {
      key: "42",
      id: "@dev__neet",
      name: "Neet",
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
    {
      key: "11112",
      id: "@dev__Designer",
      name: "Designer",
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
    {
      key: "1144331",
      id: "@dev__Ruby",
      name: "Ruby",
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
