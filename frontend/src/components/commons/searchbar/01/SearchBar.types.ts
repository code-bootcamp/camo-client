import { ChangeEvent } from "react";

export interface ISearchBarsProps {
  refetch: (variables: any) => void;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchBarsUIProps {
  onChangeSearchBar: (event: ChangeEvent<HTMLInputElement>) => void;
}
