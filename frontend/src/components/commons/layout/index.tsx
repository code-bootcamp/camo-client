import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutHeader from "./header/LayoutHeader.container";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <div> {props.children} </div>
    </>
  );
}
