import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyLikeUIProps {
  favoriteData: Pick<IQuery, "fetchUserFavoriteCafe"> | undefined;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUserFavoriteCafe">>>;
  count: any;
}
