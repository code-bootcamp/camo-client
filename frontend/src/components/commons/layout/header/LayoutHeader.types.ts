export interface ILayoutHeaderUIProps {
  accessToken: string;
  onClickLogout: () => Promise<void>;
  data: any;
  styles: {
    bmBurgerButton: {
      position: string;
      width: string;
      height: string;
      right: string;
      top: string;
    };
    bmBurgerBars: {
      background: string;
    };
    bmBurgerBarsHover: {
      background: string;
    };
  };
}
