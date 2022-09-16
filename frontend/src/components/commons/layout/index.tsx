import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutFooterUI from "./footer/LayoutFooter.presenter";
import LayoutHeader from "./header/LayoutHeader.container";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/"];
const HIDDEN_FOOTERS = ["/cafe/"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <div style={{ position: "relative" }}>
      {!isHiddenHeader && <LayoutHeader />}
      <div> {props.children} </div>
      {!isHiddenFooter && <LayoutFooterUI />}
    </div>
  );
}
