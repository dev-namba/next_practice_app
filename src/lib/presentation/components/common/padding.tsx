import { Button, Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Padding {
  p?: string;
  ph?: string;
  pv?: string;
}

type PaddingProps = {
  p?: Padding;
  children: React.ReactNode;
};

const Padding: FC<PaddingProps> = ({ p = { p: "12px" }, ...props }) => (
  <Box p={p.p} paddingStart={p.ph} paddingEnd={p.pv}>
    {props.children}
  </Box>
);

export default Padding;
