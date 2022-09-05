import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIProps {
  accessToken: string;
  onClickLogout: () => Promise<void>;
  data: Pick<IQuery, "fetchUser"> | undefined;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUser">>>;
}
