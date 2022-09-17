import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyLikeUIProps {
  data: Pick<IQuery, "fetchLoginedUser"> | undefined;
  favoriteData: Pick<IQuery, "fetchUserFavoriteCafe"> | undefined;
}
