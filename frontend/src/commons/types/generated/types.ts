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

export type ICafeBoard = {
  __typename?: 'CafeBoard';
  CafeLikeCount?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  cafeReservation?: Maybe<Array<ICafeReservation>>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deposit?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images?: Maybe<Array<IImage>>;
  like?: Maybe<Array<ILike>>;
  phone?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<IReview>>;
  startTime?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<ITag>>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<IUser>;
  zipcode?: Maybe<Scalars['String']>;
};

export type ICafeReservation = {
  __typename?: 'CafeReservation';
  cafeBoard: ICafeBoard;
  deposit: Scalars['Int'];
  endTime: Scalars['String'];
  id: Scalars['String'];
  orderRequest?: Maybe<Scalars['String']>;
  reservationDate: Scalars['DateTime'];
  reservationStatus?: Maybe<Scalars['Boolean']>;
  reservedPeople?: Maybe<Scalars['Int']>;
  startTime: Scalars['String'];
  title?: Maybe<Scalars['String']>;
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
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  freeBoard?: Maybe<IFreeBoard>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<IUser>;
};

export type ICreateCafeBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  contents: Scalars['String'];
  deposit?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['String']>;
  homepage?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<Scalars['String']>>;
  phone?: InputMaybe<Scalars['String']>;
  remarks?: InputMaybe<Scalars['String']>;
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

export type ICreateFreeBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  cafeBoard?: InputMaybe<Scalars['String']>;
  contents: Scalars['String'];
  image?: InputMaybe<Array<Scalars['String']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  zipcode?: InputMaybe<Scalars['String']>;
};

export type ICreateReservationInput = {
  cafeBoardId: Scalars['String'];
  endTime: Scalars['String'];
  orderRequest?: InputMaybe<Scalars['String']>;
  reservationDate: Scalars['DateTime'];
  reservedPeople: Scalars['Int'];
  startTime: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateReviewInput = {
  comment: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  nickName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type IFreeBoard = {
  __typename?: 'FreeBoard';
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  cafeBoard?: Maybe<ICafeBoard>;
  comment?: Maybe<Array<IComment>>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  images?: Maybe<Array<IImage>>;
  like?: Maybe<Array<ILike>>;
  likeCount?: Maybe<Scalars['Float']>;
  tags?: Maybe<Array<ITag>>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: IUser;
  zipcode?: Maybe<Scalars['String']>;
};

export type IImage = {
  __typename?: 'Image';
  cafeBoard?: Maybe<ICafeBoard>;
  freeBoard: IFreeBoard;
  id: Scalars['String'];
  isMain?: Maybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type ILike = {
  __typename?: 'Like';
  cafeBoard?: Maybe<ICafeBoard>;
  freeBoard?: Maybe<IFreeBoard>;
  id: Scalars['String'];
  isLike: Scalars['Boolean'];
  user?: Maybe<IUser>;
};

export type IMutation = {
  __typename?: 'Mutation';
  checkSMSTokenValid: Scalars['Boolean'];
  createCafeBoard: ICafeBoard;
  createCafeOwner: IUser;
  createCafeReservation: ICafeReservation;
  createCancel: IPayment;
  createComment: IComment;
  createFreeBoard: IFreeBoard;
  createPayment: IPayment;
  createReview: IReview;
  createRoom: IChatRoom;
  createUser: IUser;
  deleteCafeBoard: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteFreeBoard: Scalars['Boolean'];
  deleteLoginUser: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  loginUser: Scalars['String'];
  logoutUser: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreCafeBoard: Scalars['Boolean'];
  restoreFreeBoard: Scalars['Boolean'];
  restoreUser: Scalars['Boolean'];
  sendTokenToSMS: Scalars['String'];
  toggleCafeBoardLike: Scalars['Boolean'];
  toggleFreeBoardLike: Scalars['Boolean'];
  updateCafeBoard: ICafeBoard;
  updateComment: IComment;
  updateFreeBoard: IFreeBoard;
  updateLoginUser: IUser;
  updateReview: IReview;
  updateUserPassword: IUser;
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCheckSmsTokenValidArgs = {
  SMSToken: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type IMutationCreateCafeBoardArgs = {
  createCafeBoardInput: ICreateCafeBoardInput;
};


export type IMutationCreateCafeOwnerArgs = {
  CreateCafeOwnerInput: ICreateCafeOwnerInput;
};


export type IMutationCreateCafeReservationArgs = {
  createReservationInput: ICreateReservationInput;
};


export type IMutationCreateCancelArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  user: Scalars['String'];
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateFreeBoardArgs = {
  createBoardInput: ICreateFreeBoardInput;
};


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateReviewArgs = {
  createReviewInput: ICreateReviewInput;
};


export type IMutationCreateRoomArgs = {
  opponentNickName: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  CreateUserInput: ICreateUserInput;
};


export type IMutationDeleteCafeBoardArgs = {
  cafeBoardId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteFreeBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteLoginUserArgs = {
  password: Scalars['String'];
};


export type IMutationDeleteReviewArgs = {
  reviewId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRestoreCafeBoardArgs = {
  cafeBoardId: Scalars['String'];
};


export type IMutationRestoreFreeBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  email: Scalars['String'];
};


export type IMutationSendTokenToSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type IMutationToggleCafeBoardLikeArgs = {
  cafeBoardId: Scalars['String'];
};


export type IMutationToggleFreeBoardLikeArgs = {
  freeBoardId: Scalars['String'];
};


export type IMutationUpdateCafeBoardArgs = {
  cafeBoardId: Scalars['String'];
  nickName: Scalars['String'];
  updateCafeBoardInput: IUpdateCafeBoardInput;
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  updateCommentInput: IUpdateCommentInput;
};


export type IMutationUpdateFreeBoardArgs = {
  freeBoardId: Scalars['String'];
  nickName: Scalars['String'];
  updateFreeBoardInput: IUpdateFreeBoardInput;
};


export type IMutationUpdateLoginUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateReviewArgs = {
  updateReviewInput: IUpdateReviewInput;
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
  cafeReservation?: Maybe<ICafeReservation>;
  id: Scalars['String'];
  impUid: Scalars['String'];
  paymentAmount: Scalars['Int'];
  paymentDate: Scalars['DateTime'];
  status: IPoint_Transaction_Status_Enum;
  user?: Maybe<IUser>;
};

export type IQuery = {
  __typename?: 'Query';
  checkUserEmail: Scalars['Boolean'];
  connectionRoom: IChatRoom;
  fetchCafeBoard: ICafeBoard;
  fetchCafeBoardLike: Array<ILike>;
  fetchCafeBoardNumber: Scalars['Float'];
  fetchCafeBoards: Array<ICafeBoard>;
  fetchCafeBoardsByCreatedAt: Array<ICafeBoard>;
  fetchCafeBoardsNumber: Scalars['Int'];
  fetchCafeReservation: ICafeReservation;
  fetchCafeReservationNumber: Scalars['Float'];
  fetchComments: Array<IComment>;
  fetchFreeBoard: IFreeBoard;
  fetchFreeBoardLike: Array<IFreeBoard>;
  fetchFreeBoardWithDeleted: Array<IFreeBoard>;
  fetchFreeBoards: Array<IFreeBoard>;
  fetchFreeBoardsCreatedAt: Array<IFreeBoard>;
  fetchFreeBoardsLikeCount: Array<IFreeBoard>;
  fetchFreeBoardsNumber: Scalars['Int'];
  fetchLoginedUser: IUser;
  fetchLogs: Array<IChatMessage>;
  fetchMyCafeReservation: Array<ICafeReservation>;
  fetchMyFreeBoard: Array<IFreeBoard>;
  fetchReview: IReview;
  fetchReviews: Array<IReview>;
  fetchUserByEmail: IUser;
  fetchUserCafeBoardLike: Array<ILike>;
  fetchUserFreeBoardNumber: Scalars['Float'];
  fetchUserWithDeleted: Array<IUser>;
  fetchUserbyEmail: IUser;
  fetchUserbyId: IUser;
  fetchUsers: Array<IUser>;
  searchCafeBoards: Array<ICafeBoard>;
  searchFreeBoards: Array<IFreeBoard>;
  searchMyFreeBoards: Array<IFreeBoard>;
};


export type IQueryCheckUserEmailArgs = {
  email: Scalars['String'];
};


export type IQueryConnectionRoomArgs = {
  hostNickName: Scalars['String'];
  userId: Scalars['String'];
};


export type IQueryFetchCafeBoardArgs = {
  cafeBoardId: Scalars['String'];
};


export type IQueryFetchCafeBoardLikeArgs = {
  cafeBoardId: Scalars['String'];
};


export type IQueryFetchCafeBoardNumberArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchCafeBoardsArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchCafeBoardsByCreatedAtArgs = {
  page?: InputMaybe<Scalars['Float']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchCafeReservationArgs = {
  cafeReservationId: Scalars['String'];
};


export type IQueryFetchCafeReservationNumberArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchCommentsArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchFreeBoardArgs = {
  freeBoardId: Scalars['String'];
};


export type IQueryFetchFreeBoardLikeArgs = {
  freeBoardId: Scalars['String'];
};


export type IQueryFetchFreeBoardsArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchFreeBoardsCreatedAtArgs = {
  page?: InputMaybe<Scalars['Float']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchFreeBoardsLikeCountArgs = {
  page?: InputMaybe<Scalars['Float']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchLogsArgs = {
  room: Scalars['String'];
};


export type IQueryFetchMyCafeReservationArgs = {
  page?: InputMaybe<Scalars['Float']>;
  userId: Scalars['String'];
};


export type IQueryFetchMyFreeBoardArgs = {
  page?: InputMaybe<Scalars['Float']>;
  userId: Scalars['String'];
};


export type IQueryFetchReviewArgs = {
  reviewId: Scalars['String'];
};


export type IQueryFetchUserByEmailArgs = {
  phoneNumber: Scalars['String'];
};


export type IQueryFetchUserCafeBoardLikeArgs = {
  page?: InputMaybe<Scalars['Float']>;
  userId: Scalars['String'];
};


export type IQueryFetchUserFreeBoardNumberArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchUserbyEmailArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUserbyIdArgs = {
  userId: Scalars['String'];
};


export type IQuerySearchCafeBoardsArgs = {
  search_cafelist?: InputMaybe<Scalars['String']>;
};


export type IQuerySearchFreeBoardsArgs = {
  search_board?: InputMaybe<Scalars['String']>;
};


export type IQuerySearchMyFreeBoardsArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type IReview = {
  __typename?: 'Review';
  cafeBoard: ICafeBoard;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  ownerComment?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ITag = {
  __typename?: 'Tag';
  cafeBoard: Array<ICafeBoard>;
  freeBoard: Array<IFreeBoard>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum IUser_Role_Enum {
  Admin = 'ADMIN',
  Cafeowner = 'CAFEOWNER',
  User = 'USER'
}

export type IUpdateCafeBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  deposit?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['String']>;
  homepage?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<Scalars['String']>>;
  phone?: InputMaybe<Scalars['String']>;
  remarks?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type IUpdateCommentInput = {
  boardId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
};

export type IUpdateFreeBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  cafeBoard?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<Scalars['String']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type IUpdateReviewInput = {
  comment: Scalars['String'];
  reviewId: Scalars['String'];
};

export type IUpdateUserInput = {
  nickName: Scalars['String'];
  password: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  board?: Maybe<Array<IFreeBoard>>;
  cafeName?: Maybe<Scalars['String']>;
  cafeReservation?: Maybe<Array<ICafeReservation>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  like?: Maybe<Array<ILike>>;
  name: Scalars['String'];
  nickName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  role?: Maybe<IUser_Role_Enum>;
  signupDate: Scalars['DateTime'];
};
