export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type IBoard = {
  __typename?: 'Board';
  adress: Scalars['String'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  likeCount?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<IBoardTag>>;
  title: Scalars['String'];
  user: IUser;
};

export type IBoardTag = {
  __typename?: 'BoardTag';
  board: Array<IBoard>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ICafeList = {
  __typename?: 'CafeList';
  address: Scalars['String'];
  deposit: Scalars['Int'];
  endTime: Scalars['String'];
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  introduction: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  review?: Maybe<IReview>;
  startTime: Scalars['String'];
};

export type ICafeOwner = {
  __typename?: 'CafeOwner';
  cafeList?: Maybe<ICafeList>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  review?: Maybe<IReview>;
  signupDate: Scalars['DateTime'];
};

export type ICafeReservaion = {
  __typename?: 'CafeReservaion';
  cafeList: ICafeList;
  cafeOwner: ICafeOwner;
  id: Scalars['String'];
  orderRequest?: Maybe<Scalars['String']>;
  payment: IPayment;
  reservationDate: Scalars['DateTime'];
  reservationStatus: Scalars['Boolean'];
  reservationTime: Scalars['DateTime'];
  reviewPoint?: Maybe<IReviewPoint>;
  user: IUser;
};

export type ICreateBoardInput = {
  adress: Scalars['String'];
  contents: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  createCancel: IPayment;
  createPayment: IPayment;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteLoginUser: Scalars['Boolean'];
  loginUser: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreUser: Scalars['Boolean'];
  updateBoard: IBoard;
  updateLoginUser: IUser;
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateCancelArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  user: Scalars['String'];
};


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  nickName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteLoginUserArgs = {
  email: Scalars['String'];
};


export type IMutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  email: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  nickName: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
  userId: Scalars['String'];
};


export type IMutationUpdateLoginUserArgs = {
  password: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};

export enum IPoint_Transaction_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  impUid: Scalars['String'];
  paymentAmount: Scalars['Int'];
  paymentDate: Scalars['DateTime'];
  status: IPoint_Transaction_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoardWithDeleted: Array<IBoard>;
  fetchBoards: Array<IBoard>;
  fetchUser: IUser;
  fetchUserWithDeleted: Array<IUser>;
  fetchUsers: Array<IUser>;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};

export type IReview = {
  __typename?: 'Review';
  cafeOwner?: Maybe<ICafeOwner>;
  id: Scalars['String'];
  ownerComment?: Maybe<Scalars['String']>;
  review?: Maybe<ICafeReservaion>;
  reviewComment: Scalars['String'];
  user: IUser;
};

export type IReviewPoint = {
  __typename?: 'ReviewPoint';
  id: Scalars['String'];
  option1?: Maybe<Scalars['Int']>;
  option2?: Maybe<Scalars['Int']>;
  option3?: Maybe<Scalars['Int']>;
  option4?: Maybe<Scalars['Int']>;
  option5?: Maybe<Scalars['Int']>;
};

export type IUpdateBoardInput = {
  adress?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  nickName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  favoritCafe?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  nickName: Scalars['String'];
  phoneNumber: Scalars['String'];
  signupDate: Scalars['DateTime'];
};
