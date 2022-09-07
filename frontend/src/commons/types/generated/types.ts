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
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  cafeList?: Maybe<ICafeList>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image: Array<IImage>;
  likeCount?: Maybe<Scalars['Float']>;
  tag?: Maybe<Array<ITag>>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: IUser;
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
  postalNumber: Scalars['String'];
  startTime: Scalars['String'];
  tag: Array<ITag>;
  user: IUser;
};

export type ICafeReservation = {
  __typename?: 'CafeReservation';
  cafeList: ICafeList;
  id: Scalars['String'];
  orderRequest?: Maybe<Scalars['String']>;
  reservationDate: Scalars['DateTime'];
  reservationStatus: Scalars['Boolean'];
  reservationTime: Scalars['DateTime'];
  user: IUser;
};

export type IChatMessage = {
  __typename?: 'ChatMessage';
  createAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  room: Scalars['String'];
  user: IUser;
};

export type IChatRoom = {
  __typename?: 'ChatRoom';
  id: Scalars['String'];
  room: Scalars['String'];
  user: IUser;
};

export type IComment = {
  __typename?: 'Comment';
  board: IBoard;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICreateBoardInput = {
  address: Scalars['String'];
  contents: Scalars['String'];
  image?: InputMaybe<Array<Scalars['String']>>;
  tag: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type ICreateCommentInput = {
  boardId: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type IImage = {
  __typename?: 'Image';
  board: IBoard;
  cafeList?: Maybe<ICafeList>;
  id: Scalars['String'];
  isMain?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  checkSMSTokenValid: Scalars['Boolean'];
  createBoard: IBoard;
  createCafeReservation: ICafeReservation;
  createCancel: IPayment;
  createComment: IComment;
  createPayment: IPayment;
  createRoom: IChatRoom;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteLoginUser: Scalars['Boolean'];
  loginUser: Scalars['String'];
  logoutUser: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreUser: Scalars['Boolean'];
  sendTokenToSMS: Scalars['String'];
  toggleLikeFeed: Scalars['Boolean'];
  updateBoard: IBoard;
  updateComment: IComment;
  updateLoginUser: IUser;
  uploadImage: Array<Scalars['String']>;
};


export type IMutationCheckSmsTokenValidArgs = {
  SMSToken: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateCancelArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  user: Scalars['String'];
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateRoomArgs = {
  opponentNickName: Scalars['String'];
  userId: Scalars['String'];
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


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
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


export type IMutationSendTokenToSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type IMutationToggleLikeFeedArgs = {
  boardId: Scalars['String'];
  email: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  nickName: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
  userId: Scalars['String'];
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  updateCommentInput: IUpdateCommentInput;
  userId: Scalars['String'];
};


export type IMutationUpdateLoginUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadImageArgs = {
  files: Array<Scalars['Upload']>;
};

export enum IPoint_Transaction_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  cafeReservation: ICafeReservation;
  impUid: Scalars['String'];
  paymentAmount: Scalars['Int'];
  paymentDate: Scalars['DateTime'];
  status: IPoint_Transaction_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  checkUserEmail: Scalars['Boolean'];
  connectionRoom: IChatRoom;
  fetchBoard: IBoard;
  fetchBoardWithDeleted: Array<IBoard>;
  fetchBoards: Array<IBoard>;
  fetchComments: Array<IComment>;
  fetchLike: IBoard;
  fetchLoginUser: IUser;
  fetchLoginUsers: Array<IUser>;
  fetchLogs: Array<IChatMessage>;
  fetchMyBoards: IBoard;
  fetchUser: IUser;
  fetchUserWithDeleted: Array<IUser>;
  fetchUsers: Array<IUser>;
};


export type IQueryCheckUserEmailArgs = {
  email: Scalars['String'];
};


export type IQueryConnectionRoomArgs = {
  hostNickName: Scalars['String'];
  userId: Scalars['String'];
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchCommentsArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchLikeArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchLogsArgs = {
  room: Scalars['String'];
};


export type IQueryFetchMyBoardsArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};

export type ITag = {
  __typename?: 'Tag';
  board: Array<IBoard>;
  cafeList: Array<ICafeList>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IUpdateBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<Scalars['String']>>;
  tag?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateCommentInput = {
  boardId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  nickName: Scalars['String'];
  password: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  cafeName?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nickName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  signupDate: Scalars['DateTime'];
  status?: Maybe<Scalars['String']>;
};
