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
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  cafeList?: Maybe<ICafeList>;
  comment?: Maybe<Array<IComment>>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  favoriteBoard?: Maybe<Array<IFavoriteBoard>>;
  id: Scalars['String'];
  images?: Maybe<Array<IImage>>;
  likeCount?: Maybe<Scalars['Float']>;
  tags?: Maybe<Array<ITag>>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: IUser;
  zipcode?: Maybe<Scalars['String']>;
};

export type ICafeList = {
  __typename?: 'CafeList';
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  cafeListImage?: Maybe<Array<ICafeListImage>>;
  cafeListTag?: Maybe<Array<ICafeListTag>>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deposit?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['String']>;
  favoriteCafe?: Maybe<Array<IFavoriteCafe>>;
  favoriteCafeCount?: Maybe<Scalars['Float']>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<IReview>>;
  startTime?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<IUser>;
  zipcode?: Maybe<Scalars['String']>;
};

export type ICafeListImage = {
  __typename?: 'CafeListImage';
  cafeList?: Maybe<ICafeList>;
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isMain?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type ICafeListTag = {
  __typename?: 'CafeListTag';
  cafeList: Array<ICafeList>;
  id: Scalars['String'];
  name: Scalars['String'];
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
  board?: Maybe<IBoard>;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<IUser>;
};

export type ICreateBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  cafeList?: InputMaybe<Scalars['String']>;
  contents: Scalars['String'];
  image?: InputMaybe<Array<Scalars['String']>>;
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  zipcode?: InputMaybe<Scalars['String']>;
};

export type ICreateCafeListInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  contents: Scalars['String'];
  deposit?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['String']>;
  homepage?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  phone?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  zipcode?: InputMaybe<Scalars['String']>;
};

export type ICreateCafeOwnerInput = {
  cafeName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  nickName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type ICreateCommentInput = {
  boardId: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
};

export type ICreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  nickName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type IFavoriteCafe = {
  __typename?: 'FavoriteCafe';
  cafeList?: Maybe<ICafeList>;
  id: Scalars['String'];
  isLike: Scalars['Boolean'];
  user?: Maybe<IUser>;
};

export type IImage = {
  __typename?: 'Image';
  board: IBoard;
  id: Scalars['String'];
  isMain?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  checkSMSTokenValid: Scalars['Boolean'];
  createBoard: IBoard;
  createCafeList: ICafeList;
  createCafeOwner: IUser;
  createCafeReservation: ICafeReservation;
  createCancel: IPayment;
  createComment: IComment;
  createPayment: IPayment;
  createRoom: IChatRoom;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteCafeList: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteLoginUser: Scalars['Boolean'];
  fetchUserFavoriteCafe: Scalars['Boolean'];
  loginUser: Scalars['String'];
  logoutUser: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreBoard: Scalars['Boolean'];
  restoreCafeList: Scalars['Boolean'];
  restoreUser: Scalars['Boolean'];
  sendTokenToSMS: Scalars['String'];
  toggleFavoriteCafes: Scalars['Boolean'];
  toggleLikeFeed: Scalars['Boolean'];
  updateBoard: IBoard;
  updateCafeList: ICafeList;
  updateComment: IComment;
  updateLoginUser: IUser;
  updateUserPassword: IUser;
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCheckSmsTokenValidArgs = {
  SMSToken: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateCafeListArgs = {
  createCafeListInput: ICreateCafeListInput;
};


export type IMutationCreateCafeOwnerArgs = {
  CreateCafeOwnerInput: ICreateCafeOwnerInput;
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
  CreateUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteCafeListArgs = {
  cafeListId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteLoginUserArgs = {
  password: Scalars['String'];
};


export type IMutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRestoreBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationRestoreCafeListArgs = {
  cafeListId: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  email: Scalars['String'];
};


export type IMutationSendTokenToSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type IMutationToggleFavoriteCafesArgs = {
  cafeListId: Scalars['String'];
};


export type IMutationToggleLikeFeedArgs = {
  boardId: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  nickName: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateCafeListArgs = {
  cafeListId: Scalars['String'];
  updateCafeListInput: IUpdateCafeListInput;
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  updateCommentInput: IUpdateCommentInput;
  userId: Scalars['String'];
};


export type IMutationUpdateLoginUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUploadFileArgs = {
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
  fetchBoardsCreatedAt: Array<IBoard>;
  fetchBoardsLikeCount: Array<IBoard>;
  fetchBoardsNumber: Scalars['Int'];
  fetchCafeList: ICafeList;
  fetchCafeListNumber: Scalars['Int'];
  fetchCafeLists: Array<ICafeList>;
  fetchCafeListsCreatedAt: Array<ICafeList>;
  fetchCafeListsFavoriteCafe: Array<ICafeList>;
  fetchComments: Array<IComment>;
  fetchLoginedUser: IUser;
  fetchLogs: Array<IChatMessage>;
  fetchUser: IUser;
  fetchUserByEmail: IUser;
  fetchUserWithDeleted: Array<IUser>;
  fetchUsers: Array<IUser>;
  roleGuardAdmin: IUser;
  roleGuardCafeOwner: IUser;
  roleGuardUser: IUser;
  searchBoards: Array<IBoard>;
  searchMyBoards: Array<IBoard>;
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
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchBoardsCreatedAtArgs = {
  page?: InputMaybe<Scalars['Float']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchBoardsLikeCountArgs = {
  page?: InputMaybe<Scalars['Float']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchCafeListArgs = {
  cafeListId: Scalars['String'];
};


export type IQueryFetchCafeListsArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchCafeListsCreatedAtArgs = {
  page?: InputMaybe<Scalars['Float']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchCafeListsFavoriteCafeArgs = {
  page?: InputMaybe<Scalars['Float']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchCommentsArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchLogsArgs = {
  room: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUserByEmailArgs = {
  phoneNumber: Scalars['String'];
};


export type IQueryRoleGuardAdminArgs = {
  userId: Scalars['String'];
};


export type IQueryRoleGuardCafeOwnerArgs = {
  userId: Scalars['String'];
};


export type IQueryRoleGuardUserArgs = {
  userId: Scalars['String'];
};


export type IQuerySearchBoardsArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQuerySearchMyBoardsArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type IReview = {
  __typename?: 'Review';
  cafeList: ICafeList;
  id: Scalars['String'];
  ownerComment?: Maybe<Scalars['String']>;
  reviewComment: Scalars['String'];
  user: IUser;
};

export type ITag = {
  __typename?: 'Tag';
  boards: Array<IBoard>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum IUser_Role_Enum {
  Admin = 'ADMIN',
  Cafeowner = 'CAFEOWNER',
  User = 'USER'
}

export type IUpdateBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  cafeList?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<Scalars['String']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type IUpdateCafeListInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  deposit?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['String']>;
  homepage?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  phone?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type IUpdateCommentInput = {
  boardId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
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
  role?: Maybe<IUser_Role_Enum>;
  signupDate: Scalars['DateTime'];
};

export type IFavoriteBoard = {
  __typename?: 'favoriteBoard';
  board?: Maybe<IBoard>;
  id: Scalars['String'];
  isLike: Scalars['Boolean'];
  user?: Maybe<IUser>;
};
