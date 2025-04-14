/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Int2: { input: any; output: any; }
  Int4: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Int32: { input: any; output: any; }
  Numeric: { input: any; output: any; }
  Text: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  Uuid: { input: any; output: any; }
  Varchar: { input: any; output: any; }
};

export type Books = {
  __typename?: 'Books';
  amount?: Maybe<Scalars['Int2']['output']>;
  borrowedBooks?: Maybe<Array<BorrowedBooks>>;
  borrowedBooksAggregate: BorrowedBooksAggExp;
  id: Scalars['Uuid']['output'];
  returnedBooks?: Maybe<Array<ReturnedBooks>>;
  returnedBooksAggregate: ReturnedBooksAggExp;
  title: Scalars['Varchar']['output'];
};


export type BooksBorrowedBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BorrowedBooksOrderByExp>>;
  where?: InputMaybe<BorrowedBooksBoolExp>;
};


export type BooksBorrowedBooksAggregateArgs = {
  filter_input?: InputMaybe<BorrowedBooksFilterInput>;
};


export type BooksReturnedBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ReturnedBooksOrderByExp>>;
  where?: InputMaybe<ReturnedBooksBoolExp>;
};


export type BooksReturnedBooksAggregateArgs = {
  filter_input?: InputMaybe<ReturnedBooksFilterInput>;
};

export type BooksAggExp = {
  __typename?: 'BooksAggExp';
  _count: Scalars['Int']['output'];
  amount: Int2AggExp;
  id: UuidAggExp;
  title: VarcharAggExp;
};

export type BooksBoolExp = {
  _and?: InputMaybe<Array<BooksBoolExp>>;
  _not?: InputMaybe<BooksBoolExp>;
  _or?: InputMaybe<Array<BooksBoolExp>>;
  amount?: InputMaybe<Int2BoolExp>;
  borrowedBooks?: InputMaybe<BorrowedBooksBoolExp>;
  id?: InputMaybe<UuidBoolExp>;
  returnedBooks?: InputMaybe<ReturnedBooksBoolExp>;
  title?: InputMaybe<VarcharBoolExp>;
};

export type BooksFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BooksOrderByExp>>;
  where?: InputMaybe<BooksBoolExp>;
};

export type BooksOrderByExp = {
  amount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

export type BorrowedBooks = {
  __typename?: 'BorrowedBooks';
  book?: Maybe<Books>;
  bookId?: Maybe<Scalars['Uuid']['output']>;
  id: Scalars['Uuid']['output'];
  time: Scalars['Timestamp']['output'];
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Uuid']['output']>;
};

export type BorrowedBooksAggExp = {
  __typename?: 'BorrowedBooksAggExp';
  _count: Scalars['Int']['output'];
  bookId: UuidAggExp;
  id: UuidAggExp;
  time: TimestampAggExp;
  userId: UuidAggExp;
};

export type BorrowedBooksBoolExp = {
  _and?: InputMaybe<Array<BorrowedBooksBoolExp>>;
  _not?: InputMaybe<BorrowedBooksBoolExp>;
  _or?: InputMaybe<Array<BorrowedBooksBoolExp>>;
  book?: InputMaybe<BooksBoolExp>;
  bookId?: InputMaybe<UuidBoolExp>;
  id?: InputMaybe<UuidBoolExp>;
  time?: InputMaybe<TimestampBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidBoolExp>;
};

export type BorrowedBooksFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BorrowedBooksOrderByExp>>;
  where?: InputMaybe<BorrowedBooksBoolExp>;
};

export type BorrowedBooksOrderByExp = {
  book?: InputMaybe<BooksOrderByExp>;
  bookId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userId?: InputMaybe<OrderBy>;
};

export type Complaines = {
  __typename?: 'Complaines';
  accusedId?: Maybe<Scalars['Uuid']['output']>;
  accuserId?: Maybe<Scalars['Uuid']['output']>;
  description: Scalars['Text']['output'];
  id: Scalars['Uuid']['output'];
  status?: Maybe<Scalars['Varchar']['output']>;
  suspensions?: Maybe<Array<Suspensions>>;
  suspensionsAggregate: SuspensionsAggExp;
  user?: Maybe<Users>;
  userByAccuserId?: Maybe<Users>;
  warnings?: Maybe<Array<Warnings>>;
  warningsAggregate: WarningsAggExp;
};


export type ComplainesSuspensionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SuspensionsOrderByExp>>;
  where?: InputMaybe<SuspensionsBoolExp>;
};


export type ComplainesSuspensionsAggregateArgs = {
  filter_input?: InputMaybe<SuspensionsFilterInput>;
};


export type ComplainesWarningsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WarningsOrderByExp>>;
  where?: InputMaybe<WarningsBoolExp>;
};


export type ComplainesWarningsAggregateArgs = {
  filter_input?: InputMaybe<WarningsFilterInput>;
};

export type ComplainesAggExp = {
  __typename?: 'ComplainesAggExp';
  _count: Scalars['Int']['output'];
  accusedId: UuidAggExp;
  accuserId: UuidAggExp;
  description: TextAggExp;
  id: UuidAggExp;
  status: VarcharAggExp;
};

export type ComplainesBoolExp = {
  _and?: InputMaybe<Array<ComplainesBoolExp>>;
  _not?: InputMaybe<ComplainesBoolExp>;
  _or?: InputMaybe<Array<ComplainesBoolExp>>;
  accusedId?: InputMaybe<UuidBoolExp>;
  accuserId?: InputMaybe<UuidBoolExp>;
  description?: InputMaybe<TextBoolExp>;
  id?: InputMaybe<UuidBoolExp>;
  status?: InputMaybe<VarcharBoolExp>;
  suspensions?: InputMaybe<SuspensionsBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userByAccuserId?: InputMaybe<UsersBoolExp>;
  warnings?: InputMaybe<WarningsBoolExp>;
};

export type ComplainesFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComplainesOrderByExp>>;
  where?: InputMaybe<ComplainesBoolExp>;
};

export type ComplainesOrderByExp = {
  accusedId?: InputMaybe<OrderBy>;
  accuserId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userByAccuserId?: InputMaybe<UsersOrderByExp>;
};

export type CreateAuthorResult = {
  __typename?: 'CreateAuthorResult';
  id: Scalars['Int32']['output'];
  name: Scalars['String']['output'];
};

/** Responses from the 'delete_Books_by_id' procedure */
export type DeleteBooksByIdResponse = {
  __typename?: 'DeleteBooksByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Books>;
};

/** Responses from the 'delete_BorrowedBooks_by_id' procedure */
export type DeleteBorrowedBooksByIdResponse = {
  __typename?: 'DeleteBorrowedBooksByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<BorrowedBooks>;
};

/** Responses from the 'delete_Complaines_by_id' procedure */
export type DeleteComplainesByIdResponse = {
  __typename?: 'DeleteComplainesByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Complaines>;
};

/** Responses from the 'delete_DormitaryPlacement_by_id' procedure */
export type DeleteDormitaryPlacementByIdResponse = {
  __typename?: 'DeleteDormitaryPlacementByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<DormitaryPlacement>;
};

/** Responses from the 'delete_GetwayEixtLog_by_id' procedure */
export type DeleteGetwayEixtLogByIdResponse = {
  __typename?: 'DeleteGetwayEixtLogByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<GetwayEixtLog>;
};

/** Responses from the 'delete_GetwayEntryLog_by_id' procedure */
export type DeleteGetwayEntryLogByIdResponse = {
  __typename?: 'DeleteGetwayEntryLogByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<GetwayEntryLog>;
};

/** Responses from the 'delete_LibraryEixtLog_by_id' procedure */
export type DeleteLibraryEixtLogByIdResponse = {
  __typename?: 'DeleteLibraryEixtLogByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<LibraryEixtLog>;
};

/** Responses from the 'delete_LibraryEntryLog_by_id' procedure */
export type DeleteLibraryEntryLogByIdResponse = {
  __typename?: 'DeleteLibraryEntryLogByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<LibraryEntryLog>;
};

/** Responses from the 'delete_RegisterdItems_by_id' procedure */
export type DeleteRegisterdItemsByIdResponse = {
  __typename?: 'DeleteRegisterdItemsByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<RegisterdItems>;
};

/** Responses from the 'delete_ReturnedBooks_by_id' procedure */
export type DeleteReturnedBooksByIdResponse = {
  __typename?: 'DeleteReturnedBooksByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<ReturnedBooks>;
};

/** Responses from the 'delete_Suspensions_by_id' procedure */
export type DeleteSuspensionsByIdResponse = {
  __typename?: 'DeleteSuspensionsByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Suspensions>;
};

/** Responses from the 'delete_Users_by_id' procedure */
export type DeleteUsersByIdResponse = {
  __typename?: 'DeleteUsersByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Users>;
};

/** Responses from the 'delete_Warnings_by_id' procedure */
export type DeleteWarningsByIdResponse = {
  __typename?: 'DeleteWarningsByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Warnings>;
};

export type DormitaryPlacement = {
  __typename?: 'DormitaryPlacement';
  blockNumber: Scalars['Int2']['output'];
  id: Scalars['Uuid']['output'];
  roomNumber: Scalars['Int2']['output'];
  status: Scalars['Varchar']['output'];
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Uuid']['output']>;
};

export type DormitaryPlacementAggExp = {
  __typename?: 'DormitaryPlacementAggExp';
  _count: Scalars['Int']['output'];
  blockNumber: Int2AggExp;
  id: UuidAggExp;
  roomNumber: Int2AggExp;
  status: VarcharAggExp;
  userId: UuidAggExp;
};

export type DormitaryPlacementBoolExp = {
  _and?: InputMaybe<Array<DormitaryPlacementBoolExp>>;
  _not?: InputMaybe<DormitaryPlacementBoolExp>;
  _or?: InputMaybe<Array<DormitaryPlacementBoolExp>>;
  blockNumber?: InputMaybe<Int2BoolExp>;
  id?: InputMaybe<UuidBoolExp>;
  roomNumber?: InputMaybe<Int2BoolExp>;
  status?: InputMaybe<VarcharBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidBoolExp>;
};

export type DormitaryPlacementFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DormitaryPlacementOrderByExp>>;
  where?: InputMaybe<DormitaryPlacementBoolExp>;
};

export type DormitaryPlacementOrderByExp = {
  blockNumber?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  roomNumber?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userId?: InputMaybe<OrderBy>;
};

export type GetwayEixtLog = {
  __typename?: 'GetwayEixtLog';
  id: Scalars['Uuid']['output'];
  time: Scalars['Timestamp']['output'];
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Uuid']['output']>;
};

export type GetwayEixtLogAggExp = {
  __typename?: 'GetwayEixtLogAggExp';
  _count: Scalars['Int']['output'];
  id: UuidAggExp;
  time: TimestampAggExp;
  userId: UuidAggExp;
};

export type GetwayEixtLogBoolExp = {
  _and?: InputMaybe<Array<GetwayEixtLogBoolExp>>;
  _not?: InputMaybe<GetwayEixtLogBoolExp>;
  _or?: InputMaybe<Array<GetwayEixtLogBoolExp>>;
  id?: InputMaybe<UuidBoolExp>;
  time?: InputMaybe<TimestampBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidBoolExp>;
};

export type GetwayEixtLogFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GetwayEixtLogOrderByExp>>;
  where?: InputMaybe<GetwayEixtLogBoolExp>;
};

export type GetwayEixtLogOrderByExp = {
  id?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userId?: InputMaybe<OrderBy>;
};

export type GetwayEntryLog = {
  __typename?: 'GetwayEntryLog';
  id: Scalars['Uuid']['output'];
  time: Scalars['Timestamp']['output'];
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Uuid']['output']>;
};

export type GetwayEntryLogAggExp = {
  __typename?: 'GetwayEntryLogAggExp';
  _count: Scalars['Int']['output'];
  id: UuidAggExp;
  time: TimestampAggExp;
  userId: UuidAggExp;
};

export type GetwayEntryLogBoolExp = {
  _and?: InputMaybe<Array<GetwayEntryLogBoolExp>>;
  _not?: InputMaybe<GetwayEntryLogBoolExp>;
  _or?: InputMaybe<Array<GetwayEntryLogBoolExp>>;
  id?: InputMaybe<UuidBoolExp>;
  time?: InputMaybe<TimestampBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidBoolExp>;
};

export type GetwayEntryLogFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GetwayEntryLogOrderByExp>>;
  where?: InputMaybe<GetwayEntryLogBoolExp>;
};

export type GetwayEntryLogOrderByExp = {
  id?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userId?: InputMaybe<OrderBy>;
};

export type HelloResult = {
  __typename?: 'HelloResult';
  count: Scalars['Int32']['output'];
  reply: Scalars['String']['output'];
};

export type InsertBooksObjectInput = {
  amount?: InputMaybe<Scalars['Int2']['input']>;
  id?: InputMaybe<Scalars['Uuid']['input']>;
  title: Scalars['Varchar']['input'];
};

/** Responses from the 'insert_Books' procedure */
export type InsertBooksResponse = {
  __typename?: 'InsertBooksResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Books>;
};

export type InsertBorrowedBooksObjectInput = {
  bookId?: InputMaybe<Scalars['Uuid']['input']>;
  id?: InputMaybe<Scalars['Uuid']['input']>;
  time: Scalars['Timestamp']['input'];
  userId?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'insert_BorrowedBooks' procedure */
export type InsertBorrowedBooksResponse = {
  __typename?: 'InsertBorrowedBooksResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<BorrowedBooks>;
};

export type InsertComplainesObjectInput = {
  accusedId?: InputMaybe<Scalars['Uuid']['input']>;
  accuserId?: InputMaybe<Scalars['Uuid']['input']>;
  description: Scalars['Text']['input'];
  id?: InputMaybe<Scalars['Uuid']['input']>;
  status?: InputMaybe<Scalars['Varchar']['input']>;
};

/** Responses from the 'insert_Complaines' procedure */
export type InsertComplainesResponse = {
  __typename?: 'InsertComplainesResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Complaines>;
};

export type InsertDormitaryPlacementObjectInput = {
  blockNumber: Scalars['Int2']['input'];
  id?: InputMaybe<Scalars['Uuid']['input']>;
  roomNumber: Scalars['Int2']['input'];
  status: Scalars['Varchar']['input'];
  userId?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'insert_DormitaryPlacement' procedure */
export type InsertDormitaryPlacementResponse = {
  __typename?: 'InsertDormitaryPlacementResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<DormitaryPlacement>;
};

export type InsertGetwayEixtLogObjectInput = {
  id?: InputMaybe<Scalars['Uuid']['input']>;
  time: Scalars['Timestamp']['input'];
  userId?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'insert_GetwayEixtLog' procedure */
export type InsertGetwayEixtLogResponse = {
  __typename?: 'InsertGetwayEixtLogResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<GetwayEixtLog>;
};

export type InsertGetwayEntryLogObjectInput = {
  id?: InputMaybe<Scalars['Uuid']['input']>;
  time: Scalars['Timestamp']['input'];
  userId?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'insert_GetwayEntryLog' procedure */
export type InsertGetwayEntryLogResponse = {
  __typename?: 'InsertGetwayEntryLogResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<GetwayEntryLog>;
};

export type InsertLibraryEixtLogObjectInput = {
  id?: InputMaybe<Scalars['Uuid']['input']>;
  time: Scalars['Timestamp']['input'];
  userId?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'insert_LibraryEixtLog' procedure */
export type InsertLibraryEixtLogResponse = {
  __typename?: 'InsertLibraryEixtLogResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<LibraryEixtLog>;
};

export type InsertLibraryEntryLogObjectInput = {
  id?: InputMaybe<Scalars['Uuid']['input']>;
  time: Scalars['Timestamp']['input'];
  userId?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'insert_LibraryEntryLog' procedure */
export type InsertLibraryEntryLogResponse = {
  __typename?: 'InsertLibraryEntryLogResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<LibraryEntryLog>;
};

export type InsertRegisterdItemsObjectInput = {
  id?: InputMaybe<Scalars['Uuid']['input']>;
  itemType?: InputMaybe<Scalars['Varchar']['input']>;
  model?: InputMaybe<Scalars['Varchar']['input']>;
  serial?: InputMaybe<Scalars['Text']['input']>;
  userId?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'insert_RegisterdItems' procedure */
export type InsertRegisterdItemsResponse = {
  __typename?: 'InsertRegisterdItemsResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<RegisterdItems>;
};

export type InsertReturnedBooksObjectInput = {
  bookId?: InputMaybe<Scalars['Uuid']['input']>;
  id?: InputMaybe<Scalars['Uuid']['input']>;
  time: Scalars['Timestamp']['input'];
  userId?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'insert_ReturnedBooks' procedure */
export type InsertReturnedBooksResponse = {
  __typename?: 'InsertReturnedBooksResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<ReturnedBooks>;
};

export type InsertSuspensionsObjectInput = {
  complainId?: InputMaybe<Scalars['Uuid']['input']>;
  id: Scalars['Uuid']['input'];
  suspensionApprover?: InputMaybe<Scalars['Uuid']['input']>;
  suspensionPeriod?: InputMaybe<Scalars['Text']['input']>;
  time?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** Responses from the 'insert_Suspensions' procedure */
export type InsertSuspensionsResponse = {
  __typename?: 'InsertSuspensionsResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Suspensions>;
};

export type InsertUsersObjectInput = {
  email: Scalars['Varchar']['input'];
  id?: InputMaybe<Scalars['Uuid']['input']>;
  name: Scalars['Text']['input'];
  phoneNumber: Scalars['Int4']['input'];
  role: Scalars['Varchar']['input'];
};

/** Responses from the 'insert_Users' procedure */
export type InsertUsersResponse = {
  __typename?: 'InsertUsersResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Users>;
};

export type InsertWarningsObjectInput = {
  complainId?: InputMaybe<Scalars['Uuid']['input']>;
  id?: InputMaybe<Scalars['Uuid']['input']>;
  time?: InputMaybe<Scalars['Timestamp']['input']>;
  warningApprover?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'insert_Warnings' procedure */
export type InsertWarningsResponse = {
  __typename?: 'InsertWarningsResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Warnings>;
};

export type Int2AggExp = {
  __typename?: 'Int2AggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  avg?: Maybe<Scalars['Numeric']['output']>;
  bit_and?: Maybe<Scalars['Int2']['output']>;
  bit_or?: Maybe<Scalars['Int2']['output']>;
  bit_xor?: Maybe<Scalars['Int2']['output']>;
  max?: Maybe<Scalars['Int2']['output']>;
  min?: Maybe<Scalars['Int2']['output']>;
  stddev?: Maybe<Scalars['Numeric']['output']>;
  stddev_pop?: Maybe<Scalars['Numeric']['output']>;
  stddev_samp?: Maybe<Scalars['Numeric']['output']>;
  sum?: Maybe<Scalars['Int8']['output']>;
  var_pop?: Maybe<Scalars['Numeric']['output']>;
  var_samp?: Maybe<Scalars['Numeric']['output']>;
  variance?: Maybe<Scalars['Numeric']['output']>;
};

export type Int2BoolExp = {
  _and?: InputMaybe<Array<Int2BoolExp>>;
  _eq?: InputMaybe<Scalars['Int2']['input']>;
  _gt?: InputMaybe<Scalars['Int2']['input']>;
  _gte?: InputMaybe<Scalars['Int2']['input']>;
  _in?: InputMaybe<Array<Scalars['Int2']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int2']['input']>;
  _lte?: InputMaybe<Scalars['Int2']['input']>;
  _neq?: InputMaybe<Scalars['Int2']['input']>;
  _not?: InputMaybe<Int2BoolExp>;
  _or?: InputMaybe<Array<Int2BoolExp>>;
};

export type Int4AggExp = {
  __typename?: 'Int4AggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  avg?: Maybe<Scalars['Numeric']['output']>;
  bit_and?: Maybe<Scalars['Int4']['output']>;
  bit_or?: Maybe<Scalars['Int4']['output']>;
  bit_xor?: Maybe<Scalars['Int4']['output']>;
  max?: Maybe<Scalars['Int4']['output']>;
  min?: Maybe<Scalars['Int4']['output']>;
  stddev?: Maybe<Scalars['Numeric']['output']>;
  stddev_pop?: Maybe<Scalars['Numeric']['output']>;
  stddev_samp?: Maybe<Scalars['Numeric']['output']>;
  sum?: Maybe<Scalars['Int8']['output']>;
  var_pop?: Maybe<Scalars['Numeric']['output']>;
  var_samp?: Maybe<Scalars['Numeric']['output']>;
  variance?: Maybe<Scalars['Numeric']['output']>;
};

export type Int4BoolExp = {
  _and?: InputMaybe<Array<Int4BoolExp>>;
  _eq?: InputMaybe<Scalars['Int4']['input']>;
  _gt?: InputMaybe<Scalars['Int4']['input']>;
  _gte?: InputMaybe<Scalars['Int4']['input']>;
  _in?: InputMaybe<Array<Scalars['Int4']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int4']['input']>;
  _lte?: InputMaybe<Scalars['Int4']['input']>;
  _neq?: InputMaybe<Scalars['Int4']['input']>;
  _not?: InputMaybe<Int4BoolExp>;
  _or?: InputMaybe<Array<Int4BoolExp>>;
};

export type LibraryEixtLog = {
  __typename?: 'LibraryEixtLog';
  id: Scalars['Uuid']['output'];
  time: Scalars['Timestamp']['output'];
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Uuid']['output']>;
};

export type LibraryEixtLogAggExp = {
  __typename?: 'LibraryEixtLogAggExp';
  _count: Scalars['Int']['output'];
  id: UuidAggExp;
  time: TimestampAggExp;
  userId: UuidAggExp;
};

export type LibraryEixtLogBoolExp = {
  _and?: InputMaybe<Array<LibraryEixtLogBoolExp>>;
  _not?: InputMaybe<LibraryEixtLogBoolExp>;
  _or?: InputMaybe<Array<LibraryEixtLogBoolExp>>;
  id?: InputMaybe<UuidBoolExp>;
  time?: InputMaybe<TimestampBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidBoolExp>;
};

export type LibraryEixtLogFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LibraryEixtLogOrderByExp>>;
  where?: InputMaybe<LibraryEixtLogBoolExp>;
};

export type LibraryEixtLogOrderByExp = {
  id?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userId?: InputMaybe<OrderBy>;
};

export type LibraryEntryLog = {
  __typename?: 'LibraryEntryLog';
  id: Scalars['Uuid']['output'];
  time: Scalars['Timestamp']['output'];
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Uuid']['output']>;
};

export type LibraryEntryLogAggExp = {
  __typename?: 'LibraryEntryLogAggExp';
  _count: Scalars['Int']['output'];
  id: UuidAggExp;
  time: TimestampAggExp;
  userId: UuidAggExp;
};

export type LibraryEntryLogBoolExp = {
  _and?: InputMaybe<Array<LibraryEntryLogBoolExp>>;
  _not?: InputMaybe<LibraryEntryLogBoolExp>;
  _or?: InputMaybe<Array<LibraryEntryLogBoolExp>>;
  id?: InputMaybe<UuidBoolExp>;
  time?: InputMaybe<TimestampBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidBoolExp>;
};

export type LibraryEntryLogFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LibraryEntryLogOrderByExp>>;
  where?: InputMaybe<LibraryEntryLogBoolExp>;
};

export type LibraryEntryLogOrderByExp = {
  id?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userId?: InputMaybe<OrderBy>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** creates an author Procedure is an operation type of mutation, the name of function will be `createAuthor`  Example:  curl http://localhost:8080/mutation -H 'content-type: application/json' -d \ '{ "operations": [ { "type": "procedure", "name": "createAuthor", "arguments": { "name": "John" }, "fields": { "type": "object", "fields": { "id": { "type": "column", "column": "id" }, "name": { "type": "column", "column": "name" } } } } ], "collection_relationships": {} }' */
  createAuthor?: Maybe<CreateAuthorResult>;
  /** Delete any row on the 'Books' collection using the 'id' key */
  deleteBooksById: DeleteBooksByIdResponse;
  /** Delete any row on the 'BorrowedBooks' collection using the 'id' key */
  deleteBorrowedBooksById: DeleteBorrowedBooksByIdResponse;
  /** Delete any row on the 'Complaines' collection using the 'id' key */
  deleteComplainesById: DeleteComplainesByIdResponse;
  /** Delete any row on the 'DormitaryPlacement' collection using the 'id' key */
  deleteDormitaryPlacementById: DeleteDormitaryPlacementByIdResponse;
  /** Delete any row on the 'GetwayEixtLog' collection using the 'id' key */
  deleteGetwayEixtLogById: DeleteGetwayEixtLogByIdResponse;
  /** Delete any row on the 'GetwayEntryLog' collection using the 'id' key */
  deleteGetwayEntryLogById: DeleteGetwayEntryLogByIdResponse;
  /** Delete any row on the 'LibraryEixtLog' collection using the 'id' key */
  deleteLibraryEixtLogById: DeleteLibraryEixtLogByIdResponse;
  /** Delete any row on the 'LibraryEntryLog' collection using the 'id' key */
  deleteLibraryEntryLogById: DeleteLibraryEntryLogByIdResponse;
  /** Delete any row on the 'RegisterdItems' collection using the 'id' key */
  deleteRegisterdItemsById: DeleteRegisterdItemsByIdResponse;
  /** Delete any row on the 'ReturnedBooks' collection using the 'id' key */
  deleteReturnedBooksById: DeleteReturnedBooksByIdResponse;
  /** Delete any row on the 'Suspensions' collection using the 'id' key */
  deleteSuspensionsById: DeleteSuspensionsByIdResponse;
  /** Delete any row on the 'Users' collection using the 'id' key */
  deleteUsersById: DeleteUsersByIdResponse;
  /** Delete any row on the 'Warnings' collection using the 'id' key */
  deleteWarningsById: DeleteWarningsByIdResponse;
  /** Insert into the Books table */
  insertBooks: InsertBooksResponse;
  /** Insert into the BorrowedBooks table */
  insertBorrowedBooks: InsertBorrowedBooksResponse;
  /** Insert into the Complaines table */
  insertComplaines: InsertComplainesResponse;
  /** Insert into the DormitaryPlacement table */
  insertDormitaryPlacement: InsertDormitaryPlacementResponse;
  /** Insert into the GetwayEixtLog table */
  insertGetwayEixtLog: InsertGetwayEixtLogResponse;
  /** Insert into the GetwayEntryLog table */
  insertGetwayEntryLog: InsertGetwayEntryLogResponse;
  /** Insert into the LibraryEixtLog table */
  insertLibraryEixtLog: InsertLibraryEixtLogResponse;
  /** Insert into the LibraryEntryLog table */
  insertLibraryEntryLog: InsertLibraryEntryLogResponse;
  /** Insert into the RegisterdItems table */
  insertRegisterdItems: InsertRegisterdItemsResponse;
  /** Insert into the ReturnedBooks table */
  insertReturnedBooks: InsertReturnedBooksResponse;
  /** Insert into the Suspensions table */
  insertSuspensions: InsertSuspensionsResponse;
  /** Insert into the Users table */
  insertUsers: InsertUsersResponse;
  /** Insert into the Warnings table */
  insertWarnings: InsertWarningsResponse;
  /** Update any row on the 'Books' collection using the 'id' key */
  updateBooksById: UpdateBooksByIdResponse;
  /** Update any row on the 'BorrowedBooks' collection using the 'id' key */
  updateBorrowedBooksById: UpdateBorrowedBooksByIdResponse;
  /** Update any row on the 'Complaines' collection using the 'id' key */
  updateComplainesById: UpdateComplainesByIdResponse;
  /** Update any row on the 'DormitaryPlacement' collection using the 'id' key */
  updateDormitaryPlacementById: UpdateDormitaryPlacementByIdResponse;
  /** Update any row on the 'GetwayEixtLog' collection using the 'id' key */
  updateGetwayEixtLogById: UpdateGetwayEixtLogByIdResponse;
  /** Update any row on the 'GetwayEntryLog' collection using the 'id' key */
  updateGetwayEntryLogById: UpdateGetwayEntryLogByIdResponse;
  /** Update any row on the 'LibraryEixtLog' collection using the 'id' key */
  updateLibraryEixtLogById: UpdateLibraryEixtLogByIdResponse;
  /** Update any row on the 'LibraryEntryLog' collection using the 'id' key */
  updateLibraryEntryLogById: UpdateLibraryEntryLogByIdResponse;
  /** Update any row on the 'RegisterdItems' collection using the 'id' key */
  updateRegisterdItemsById: UpdateRegisterdItemsByIdResponse;
  /** Update any row on the 'ReturnedBooks' collection using the 'id' key */
  updateReturnedBooksById: UpdateReturnedBooksByIdResponse;
  /** Update any row on the 'Suspensions' collection using the 'id' key */
  updateSuspensionsById: UpdateSuspensionsByIdResponse;
  /** Update any row on the 'Users' collection using the 'id' key */
  updateUsersById: UpdateUsersByIdResponse;
  /** Update any row on the 'Warnings' collection using the 'id' key */
  updateWarningsById: UpdateWarningsByIdResponse;
};


export type MutationCreateAuthorArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteBooksByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<BooksBoolExp>;
};


export type MutationDeleteBorrowedBooksByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<BorrowedBooksBoolExp>;
};


export type MutationDeleteComplainesByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<ComplainesBoolExp>;
};


export type MutationDeleteDormitaryPlacementByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<DormitaryPlacementBoolExp>;
};


export type MutationDeleteGetwayEixtLogByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<GetwayEixtLogBoolExp>;
};


export type MutationDeleteGetwayEntryLogByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<GetwayEntryLogBoolExp>;
};


export type MutationDeleteLibraryEixtLogByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<LibraryEixtLogBoolExp>;
};


export type MutationDeleteLibraryEntryLogByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<LibraryEntryLogBoolExp>;
};


export type MutationDeleteRegisterdItemsByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<RegisterdItemsBoolExp>;
};


export type MutationDeleteReturnedBooksByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<ReturnedBooksBoolExp>;
};


export type MutationDeleteSuspensionsByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<SuspensionsBoolExp>;
};


export type MutationDeleteUsersByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<UsersBoolExp>;
};


export type MutationDeleteWarningsByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  preCheck?: InputMaybe<WarningsBoolExp>;
};


export type MutationInsertBooksArgs = {
  objects: Array<InsertBooksObjectInput>;
  postCheck?: InputMaybe<BooksBoolExp>;
};


export type MutationInsertBorrowedBooksArgs = {
  objects: Array<InsertBorrowedBooksObjectInput>;
  postCheck?: InputMaybe<BorrowedBooksBoolExp>;
};


export type MutationInsertComplainesArgs = {
  objects: Array<InsertComplainesObjectInput>;
  postCheck?: InputMaybe<ComplainesBoolExp>;
};


export type MutationInsertDormitaryPlacementArgs = {
  objects: Array<InsertDormitaryPlacementObjectInput>;
  postCheck?: InputMaybe<DormitaryPlacementBoolExp>;
};


export type MutationInsertGetwayEixtLogArgs = {
  objects: Array<InsertGetwayEixtLogObjectInput>;
  postCheck?: InputMaybe<GetwayEixtLogBoolExp>;
};


export type MutationInsertGetwayEntryLogArgs = {
  objects: Array<InsertGetwayEntryLogObjectInput>;
  postCheck?: InputMaybe<GetwayEntryLogBoolExp>;
};


export type MutationInsertLibraryEixtLogArgs = {
  objects: Array<InsertLibraryEixtLogObjectInput>;
  postCheck?: InputMaybe<LibraryEixtLogBoolExp>;
};


export type MutationInsertLibraryEntryLogArgs = {
  objects: Array<InsertLibraryEntryLogObjectInput>;
  postCheck?: InputMaybe<LibraryEntryLogBoolExp>;
};


export type MutationInsertRegisterdItemsArgs = {
  objects: Array<InsertRegisterdItemsObjectInput>;
  postCheck?: InputMaybe<RegisterdItemsBoolExp>;
};


export type MutationInsertReturnedBooksArgs = {
  objects: Array<InsertReturnedBooksObjectInput>;
  postCheck?: InputMaybe<ReturnedBooksBoolExp>;
};


export type MutationInsertSuspensionsArgs = {
  objects: Array<InsertSuspensionsObjectInput>;
  postCheck?: InputMaybe<SuspensionsBoolExp>;
};


export type MutationInsertUsersArgs = {
  objects: Array<InsertUsersObjectInput>;
  postCheck?: InputMaybe<UsersBoolExp>;
};


export type MutationInsertWarningsArgs = {
  objects: Array<InsertWarningsObjectInput>;
  postCheck?: InputMaybe<WarningsBoolExp>;
};


export type MutationUpdateBooksByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<BooksBoolExp>;
  preCheck?: InputMaybe<BooksBoolExp>;
  updateColumns: UpdateBooksByIdUpdateColumnsInput;
};


export type MutationUpdateBorrowedBooksByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<BorrowedBooksBoolExp>;
  preCheck?: InputMaybe<BorrowedBooksBoolExp>;
  updateColumns: UpdateBorrowedBooksByIdUpdateColumnsInput;
};


export type MutationUpdateComplainesByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<ComplainesBoolExp>;
  preCheck?: InputMaybe<ComplainesBoolExp>;
  updateColumns: UpdateComplainesByIdUpdateColumnsInput;
};


export type MutationUpdateDormitaryPlacementByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<DormitaryPlacementBoolExp>;
  preCheck?: InputMaybe<DormitaryPlacementBoolExp>;
  updateColumns: UpdateDormitaryPlacementByIdUpdateColumnsInput;
};


export type MutationUpdateGetwayEixtLogByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<GetwayEixtLogBoolExp>;
  preCheck?: InputMaybe<GetwayEixtLogBoolExp>;
  updateColumns: UpdateGetwayEixtLogByIdUpdateColumnsInput;
};


export type MutationUpdateGetwayEntryLogByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<GetwayEntryLogBoolExp>;
  preCheck?: InputMaybe<GetwayEntryLogBoolExp>;
  updateColumns: UpdateGetwayEntryLogByIdUpdateColumnsInput;
};


export type MutationUpdateLibraryEixtLogByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<LibraryEixtLogBoolExp>;
  preCheck?: InputMaybe<LibraryEixtLogBoolExp>;
  updateColumns: UpdateLibraryEixtLogByIdUpdateColumnsInput;
};


export type MutationUpdateLibraryEntryLogByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<LibraryEntryLogBoolExp>;
  preCheck?: InputMaybe<LibraryEntryLogBoolExp>;
  updateColumns: UpdateLibraryEntryLogByIdUpdateColumnsInput;
};


export type MutationUpdateRegisterdItemsByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<RegisterdItemsBoolExp>;
  preCheck?: InputMaybe<RegisterdItemsBoolExp>;
  updateColumns: UpdateRegisterdItemsByIdUpdateColumnsInput;
};


export type MutationUpdateReturnedBooksByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<ReturnedBooksBoolExp>;
  preCheck?: InputMaybe<ReturnedBooksBoolExp>;
  updateColumns: UpdateReturnedBooksByIdUpdateColumnsInput;
};


export type MutationUpdateSuspensionsByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<SuspensionsBoolExp>;
  preCheck?: InputMaybe<SuspensionsBoolExp>;
  updateColumns: UpdateSuspensionsByIdUpdateColumnsInput;
};


export type MutationUpdateUsersByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<UsersBoolExp>;
  preCheck?: InputMaybe<UsersBoolExp>;
  updateColumns: UpdateUsersByIdUpdateColumnsInput;
};


export type MutationUpdateWarningsByIdArgs = {
  keyId: Scalars['Uuid']['input'];
  postCheck?: InputMaybe<WarningsBoolExp>;
  preCheck?: InputMaybe<WarningsBoolExp>;
  updateColumns: UpdateWarningsByIdUpdateColumnsInput;
};

export enum OrderBy {
  /** Sorts the data in ascending order */
  Asc = 'Asc',
  /** Sorts the data in descending order */
  Desc = 'Desc'
}

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Books>>;
  booksAggregate?: Maybe<BooksAggExp>;
  booksById?: Maybe<Books>;
  borrowedBooks?: Maybe<Array<BorrowedBooks>>;
  borrowedBooksAggregate?: Maybe<BorrowedBooksAggExp>;
  borrowedBooksById?: Maybe<BorrowedBooks>;
  complaines?: Maybe<Array<Complaines>>;
  complainesAggregate?: Maybe<ComplainesAggExp>;
  complainesById?: Maybe<Complaines>;
  dormitaryPlacement?: Maybe<Array<DormitaryPlacement>>;
  dormitaryPlacementAggregate?: Maybe<DormitaryPlacementAggExp>;
  dormitaryPlacementById?: Maybe<DormitaryPlacement>;
  getwayEixtLog?: Maybe<Array<GetwayEixtLog>>;
  getwayEixtLogAggregate?: Maybe<GetwayEixtLogAggExp>;
  getwayEixtLogById?: Maybe<GetwayEixtLog>;
  getwayEntryLog?: Maybe<Array<GetwayEntryLog>>;
  getwayEntryLogAggregate?: Maybe<GetwayEntryLogAggExp>;
  getwayEntryLogById?: Maybe<GetwayEntryLog>;
  /** sends a hello message Function is an operation type of query, the name of function will be `hello`  Example:  curl http://localhost:8080/query -H 'content-type: application/json' -d \ '{ "collection": "hello", "arguments": { "greeting": { "type": "literal", "value": "Hello world!" } }, "collection_relationships": {}, "query": { "fields": { "reply": { "type": "column", "column": "reply" }, "count": { "type": "column", "column": "count" } } } }' */
  hello?: Maybe<HelloResult>;
  libraryEixtLog?: Maybe<Array<LibraryEixtLog>>;
  libraryEixtLogAggregate?: Maybe<LibraryEixtLogAggExp>;
  libraryEixtLogById?: Maybe<LibraryEixtLog>;
  libraryEntryLog?: Maybe<Array<LibraryEntryLog>>;
  libraryEntryLogAggregate?: Maybe<LibraryEntryLogAggExp>;
  libraryEntryLogById?: Maybe<LibraryEntryLog>;
  registerdItems?: Maybe<Array<RegisterdItems>>;
  registerdItemsAggregate?: Maybe<RegisterdItemsAggExp>;
  registerdItemsById?: Maybe<RegisterdItems>;
  returnedBooks?: Maybe<Array<ReturnedBooks>>;
  returnedBooksAggregate?: Maybe<ReturnedBooksAggExp>;
  returnedBooksById?: Maybe<ReturnedBooks>;
  suspensions?: Maybe<Array<Suspensions>>;
  suspensionsAggregate?: Maybe<SuspensionsAggExp>;
  suspensionsById?: Maybe<Suspensions>;
  users?: Maybe<Array<Users>>;
  usersAggregate?: Maybe<UsersAggExp>;
  usersById?: Maybe<Users>;
  warnings?: Maybe<Array<Warnings>>;
  warningsAggregate?: Maybe<WarningsAggExp>;
  warningsById?: Maybe<Warnings>;
};


export type QueryBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BooksOrderByExp>>;
  where?: InputMaybe<BooksBoolExp>;
};


export type QueryBooksAggregateArgs = {
  filter_input?: InputMaybe<BooksFilterInput>;
};


export type QueryBooksByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryBorrowedBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BorrowedBooksOrderByExp>>;
  where?: InputMaybe<BorrowedBooksBoolExp>;
};


export type QueryBorrowedBooksAggregateArgs = {
  filter_input?: InputMaybe<BorrowedBooksFilterInput>;
};


export type QueryBorrowedBooksByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryComplainesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComplainesOrderByExp>>;
  where?: InputMaybe<ComplainesBoolExp>;
};


export type QueryComplainesAggregateArgs = {
  filter_input?: InputMaybe<ComplainesFilterInput>;
};


export type QueryComplainesByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryDormitaryPlacementArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DormitaryPlacementOrderByExp>>;
  where?: InputMaybe<DormitaryPlacementBoolExp>;
};


export type QueryDormitaryPlacementAggregateArgs = {
  filter_input?: InputMaybe<DormitaryPlacementFilterInput>;
};


export type QueryDormitaryPlacementByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryGetwayEixtLogArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GetwayEixtLogOrderByExp>>;
  where?: InputMaybe<GetwayEixtLogBoolExp>;
};


export type QueryGetwayEixtLogAggregateArgs = {
  filter_input?: InputMaybe<GetwayEixtLogFilterInput>;
};


export type QueryGetwayEixtLogByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryGetwayEntryLogArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GetwayEntryLogOrderByExp>>;
  where?: InputMaybe<GetwayEntryLogBoolExp>;
};


export type QueryGetwayEntryLogAggregateArgs = {
  filter_input?: InputMaybe<GetwayEntryLogFilterInput>;
};


export type QueryGetwayEntryLogByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryHelloArgs = {
  count?: InputMaybe<Scalars['Int32']['input']>;
  greeting: Scalars['String']['input'];
};


export type QueryLibraryEixtLogArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LibraryEixtLogOrderByExp>>;
  where?: InputMaybe<LibraryEixtLogBoolExp>;
};


export type QueryLibraryEixtLogAggregateArgs = {
  filter_input?: InputMaybe<LibraryEixtLogFilterInput>;
};


export type QueryLibraryEixtLogByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryLibraryEntryLogArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LibraryEntryLogOrderByExp>>;
  where?: InputMaybe<LibraryEntryLogBoolExp>;
};


export type QueryLibraryEntryLogAggregateArgs = {
  filter_input?: InputMaybe<LibraryEntryLogFilterInput>;
};


export type QueryLibraryEntryLogByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryRegisterdItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RegisterdItemsOrderByExp>>;
  where?: InputMaybe<RegisterdItemsBoolExp>;
};


export type QueryRegisterdItemsAggregateArgs = {
  filter_input?: InputMaybe<RegisterdItemsFilterInput>;
};


export type QueryRegisterdItemsByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryReturnedBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ReturnedBooksOrderByExp>>;
  where?: InputMaybe<ReturnedBooksBoolExp>;
};


export type QueryReturnedBooksAggregateArgs = {
  filter_input?: InputMaybe<ReturnedBooksFilterInput>;
};


export type QueryReturnedBooksByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QuerySuspensionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SuspensionsOrderByExp>>;
  where?: InputMaybe<SuspensionsBoolExp>;
};


export type QuerySuspensionsAggregateArgs = {
  filter_input?: InputMaybe<SuspensionsFilterInput>;
};


export type QuerySuspensionsByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderByExp>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryUsersAggregateArgs = {
  filter_input?: InputMaybe<UsersFilterInput>;
};


export type QueryUsersByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type QueryWarningsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WarningsOrderByExp>>;
  where?: InputMaybe<WarningsBoolExp>;
};


export type QueryWarningsAggregateArgs = {
  filter_input?: InputMaybe<WarningsFilterInput>;
};


export type QueryWarningsByIdArgs = {
  id: Scalars['Uuid']['input'];
};

export type RegisterdItems = {
  __typename?: 'RegisterdItems';
  id: Scalars['Uuid']['output'];
  itemType?: Maybe<Scalars['Varchar']['output']>;
  model?: Maybe<Scalars['Varchar']['output']>;
  serial?: Maybe<Scalars['Text']['output']>;
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Uuid']['output']>;
};

export type RegisterdItemsAggExp = {
  __typename?: 'RegisterdItemsAggExp';
  _count: Scalars['Int']['output'];
  id: UuidAggExp;
  itemType: VarcharAggExp;
  model: VarcharAggExp;
  serial: TextAggExp;
  userId: UuidAggExp;
};

export type RegisterdItemsBoolExp = {
  _and?: InputMaybe<Array<RegisterdItemsBoolExp>>;
  _not?: InputMaybe<RegisterdItemsBoolExp>;
  _or?: InputMaybe<Array<RegisterdItemsBoolExp>>;
  id?: InputMaybe<UuidBoolExp>;
  itemType?: InputMaybe<VarcharBoolExp>;
  model?: InputMaybe<VarcharBoolExp>;
  serial?: InputMaybe<TextBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidBoolExp>;
};

export type RegisterdItemsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RegisterdItemsOrderByExp>>;
  where?: InputMaybe<RegisterdItemsBoolExp>;
};

export type RegisterdItemsOrderByExp = {
  id?: InputMaybe<OrderBy>;
  itemType?: InputMaybe<OrderBy>;
  model?: InputMaybe<OrderBy>;
  serial?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userId?: InputMaybe<OrderBy>;
};

export type ReturnedBooks = {
  __typename?: 'ReturnedBooks';
  book?: Maybe<Books>;
  bookId?: Maybe<Scalars['Uuid']['output']>;
  id: Scalars['Uuid']['output'];
  time: Scalars['Timestamp']['output'];
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['Uuid']['output']>;
};

export type ReturnedBooksAggExp = {
  __typename?: 'ReturnedBooksAggExp';
  _count: Scalars['Int']['output'];
  bookId: UuidAggExp;
  id: UuidAggExp;
  time: TimestampAggExp;
  userId: UuidAggExp;
};

export type ReturnedBooksBoolExp = {
  _and?: InputMaybe<Array<ReturnedBooksBoolExp>>;
  _not?: InputMaybe<ReturnedBooksBoolExp>;
  _or?: InputMaybe<Array<ReturnedBooksBoolExp>>;
  book?: InputMaybe<BooksBoolExp>;
  bookId?: InputMaybe<UuidBoolExp>;
  id?: InputMaybe<UuidBoolExp>;
  time?: InputMaybe<TimestampBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidBoolExp>;
};

export type ReturnedBooksFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ReturnedBooksOrderByExp>>;
  where?: InputMaybe<ReturnedBooksBoolExp>;
};

export type ReturnedBooksOrderByExp = {
  book?: InputMaybe<BooksOrderByExp>;
  bookId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  userId?: InputMaybe<OrderBy>;
};

export type Subscription = {
  __typename?: 'Subscription';
  books?: Maybe<Array<Books>>;
  booksAggregate?: Maybe<BooksAggExp>;
  booksById?: Maybe<Books>;
  borrowedBooks?: Maybe<Array<BorrowedBooks>>;
  borrowedBooksAggregate?: Maybe<BorrowedBooksAggExp>;
  borrowedBooksById?: Maybe<BorrowedBooks>;
  complaines?: Maybe<Array<Complaines>>;
  complainesAggregate?: Maybe<ComplainesAggExp>;
  complainesById?: Maybe<Complaines>;
  dormitaryPlacement?: Maybe<Array<DormitaryPlacement>>;
  dormitaryPlacementAggregate?: Maybe<DormitaryPlacementAggExp>;
  dormitaryPlacementById?: Maybe<DormitaryPlacement>;
  getwayEixtLog?: Maybe<Array<GetwayEixtLog>>;
  getwayEixtLogAggregate?: Maybe<GetwayEixtLogAggExp>;
  getwayEixtLogById?: Maybe<GetwayEixtLog>;
  getwayEntryLog?: Maybe<Array<GetwayEntryLog>>;
  getwayEntryLogAggregate?: Maybe<GetwayEntryLogAggExp>;
  getwayEntryLogById?: Maybe<GetwayEntryLog>;
  libraryEixtLog?: Maybe<Array<LibraryEixtLog>>;
  libraryEixtLogAggregate?: Maybe<LibraryEixtLogAggExp>;
  libraryEixtLogById?: Maybe<LibraryEixtLog>;
  libraryEntryLog?: Maybe<Array<LibraryEntryLog>>;
  libraryEntryLogAggregate?: Maybe<LibraryEntryLogAggExp>;
  libraryEntryLogById?: Maybe<LibraryEntryLog>;
  registerdItems?: Maybe<Array<RegisterdItems>>;
  registerdItemsAggregate?: Maybe<RegisterdItemsAggExp>;
  registerdItemsById?: Maybe<RegisterdItems>;
  returnedBooks?: Maybe<Array<ReturnedBooks>>;
  returnedBooksAggregate?: Maybe<ReturnedBooksAggExp>;
  returnedBooksById?: Maybe<ReturnedBooks>;
  suspensions?: Maybe<Array<Suspensions>>;
  suspensionsAggregate?: Maybe<SuspensionsAggExp>;
  suspensionsById?: Maybe<Suspensions>;
  users?: Maybe<Array<Users>>;
  usersAggregate?: Maybe<UsersAggExp>;
  usersById?: Maybe<Users>;
  warnings?: Maybe<Array<Warnings>>;
  warningsAggregate?: Maybe<WarningsAggExp>;
  warningsById?: Maybe<Warnings>;
};


export type SubscriptionBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BooksOrderByExp>>;
  where?: InputMaybe<BooksBoolExp>;
};


export type SubscriptionBooksAggregateArgs = {
  filter_input?: InputMaybe<BooksFilterInput>;
};


export type SubscriptionBooksByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionBorrowedBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BorrowedBooksOrderByExp>>;
  where?: InputMaybe<BorrowedBooksBoolExp>;
};


export type SubscriptionBorrowedBooksAggregateArgs = {
  filter_input?: InputMaybe<BorrowedBooksFilterInput>;
};


export type SubscriptionBorrowedBooksByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionComplainesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComplainesOrderByExp>>;
  where?: InputMaybe<ComplainesBoolExp>;
};


export type SubscriptionComplainesAggregateArgs = {
  filter_input?: InputMaybe<ComplainesFilterInput>;
};


export type SubscriptionComplainesByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionDormitaryPlacementArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DormitaryPlacementOrderByExp>>;
  where?: InputMaybe<DormitaryPlacementBoolExp>;
};


export type SubscriptionDormitaryPlacementAggregateArgs = {
  filter_input?: InputMaybe<DormitaryPlacementFilterInput>;
};


export type SubscriptionDormitaryPlacementByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionGetwayEixtLogArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GetwayEixtLogOrderByExp>>;
  where?: InputMaybe<GetwayEixtLogBoolExp>;
};


export type SubscriptionGetwayEixtLogAggregateArgs = {
  filter_input?: InputMaybe<GetwayEixtLogFilterInput>;
};


export type SubscriptionGetwayEixtLogByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionGetwayEntryLogArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GetwayEntryLogOrderByExp>>;
  where?: InputMaybe<GetwayEntryLogBoolExp>;
};


export type SubscriptionGetwayEntryLogAggregateArgs = {
  filter_input?: InputMaybe<GetwayEntryLogFilterInput>;
};


export type SubscriptionGetwayEntryLogByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionLibraryEixtLogArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LibraryEixtLogOrderByExp>>;
  where?: InputMaybe<LibraryEixtLogBoolExp>;
};


export type SubscriptionLibraryEixtLogAggregateArgs = {
  filter_input?: InputMaybe<LibraryEixtLogFilterInput>;
};


export type SubscriptionLibraryEixtLogByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionLibraryEntryLogArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LibraryEntryLogOrderByExp>>;
  where?: InputMaybe<LibraryEntryLogBoolExp>;
};


export type SubscriptionLibraryEntryLogAggregateArgs = {
  filter_input?: InputMaybe<LibraryEntryLogFilterInput>;
};


export type SubscriptionLibraryEntryLogByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionRegisterdItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RegisterdItemsOrderByExp>>;
  where?: InputMaybe<RegisterdItemsBoolExp>;
};


export type SubscriptionRegisterdItemsAggregateArgs = {
  filter_input?: InputMaybe<RegisterdItemsFilterInput>;
};


export type SubscriptionRegisterdItemsByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionReturnedBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ReturnedBooksOrderByExp>>;
  where?: InputMaybe<ReturnedBooksBoolExp>;
};


export type SubscriptionReturnedBooksAggregateArgs = {
  filter_input?: InputMaybe<ReturnedBooksFilterInput>;
};


export type SubscriptionReturnedBooksByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionSuspensionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SuspensionsOrderByExp>>;
  where?: InputMaybe<SuspensionsBoolExp>;
};


export type SubscriptionSuspensionsAggregateArgs = {
  filter_input?: InputMaybe<SuspensionsFilterInput>;
};


export type SubscriptionSuspensionsByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderByExp>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionUsersAggregateArgs = {
  filter_input?: InputMaybe<UsersFilterInput>;
};


export type SubscriptionUsersByIdArgs = {
  id: Scalars['Uuid']['input'];
};


export type SubscriptionWarningsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WarningsOrderByExp>>;
  where?: InputMaybe<WarningsBoolExp>;
};


export type SubscriptionWarningsAggregateArgs = {
  filter_input?: InputMaybe<WarningsFilterInput>;
};


export type SubscriptionWarningsByIdArgs = {
  id: Scalars['Uuid']['input'];
};

export type Suspensions = {
  __typename?: 'Suspensions';
  complainId?: Maybe<Scalars['Uuid']['output']>;
  complaine?: Maybe<Complaines>;
  id: Scalars['Uuid']['output'];
  suspensionApprover?: Maybe<Scalars['Uuid']['output']>;
  suspensionPeriod?: Maybe<Scalars['Text']['output']>;
  time?: Maybe<Scalars['Timestamp']['output']>;
  user?: Maybe<Users>;
};

export type SuspensionsAggExp = {
  __typename?: 'SuspensionsAggExp';
  _count: Scalars['Int']['output'];
  complainId: UuidAggExp;
  id: UuidAggExp;
  suspensionApprover: UuidAggExp;
  suspensionPeriod: TextAggExp;
  time: TimestampAggExp;
};

export type SuspensionsBoolExp = {
  _and?: InputMaybe<Array<SuspensionsBoolExp>>;
  _not?: InputMaybe<SuspensionsBoolExp>;
  _or?: InputMaybe<Array<SuspensionsBoolExp>>;
  complainId?: InputMaybe<UuidBoolExp>;
  complaine?: InputMaybe<ComplainesBoolExp>;
  id?: InputMaybe<UuidBoolExp>;
  suspensionApprover?: InputMaybe<UuidBoolExp>;
  suspensionPeriod?: InputMaybe<TextBoolExp>;
  time?: InputMaybe<TimestampBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
};

export type SuspensionsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SuspensionsOrderByExp>>;
  where?: InputMaybe<SuspensionsBoolExp>;
};

export type SuspensionsOrderByExp = {
  complainId?: InputMaybe<OrderBy>;
  complaine?: InputMaybe<ComplainesOrderByExp>;
  id?: InputMaybe<OrderBy>;
  suspensionApprover?: InputMaybe<OrderBy>;
  suspensionPeriod?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
};

export type TextAggExp = {
  __typename?: 'TextAggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  max?: Maybe<Scalars['Text']['output']>;
  min?: Maybe<Scalars['Text']['output']>;
};

export type TextBoolExp = {
  _and?: InputMaybe<Array<TextBoolExp>>;
  _eq?: InputMaybe<Scalars['Text']['input']>;
  _gt?: InputMaybe<Scalars['Text']['input']>;
  _gte?: InputMaybe<Scalars['Text']['input']>;
  _ilike?: InputMaybe<Scalars['Text']['input']>;
  _in?: InputMaybe<Array<Scalars['Text']['input']>>;
  _iregex?: InputMaybe<Scalars['Text']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['Text']['input']>;
  _lt?: InputMaybe<Scalars['Text']['input']>;
  _lte?: InputMaybe<Scalars['Text']['input']>;
  _neq?: InputMaybe<Scalars['Text']['input']>;
  _nilike?: InputMaybe<Scalars['Text']['input']>;
  _niregex?: InputMaybe<Scalars['Text']['input']>;
  _nlike?: InputMaybe<Scalars['Text']['input']>;
  _not?: InputMaybe<TextBoolExp>;
  _nregex?: InputMaybe<Scalars['Text']['input']>;
  _or?: InputMaybe<Array<TextBoolExp>>;
  _regex?: InputMaybe<Scalars['Text']['input']>;
  starts_with?: InputMaybe<Scalars['Text']['input']>;
  ts_match_tt?: InputMaybe<Scalars['Text']['input']>;
};

export type TimestampAggExp = {
  __typename?: 'TimestampAggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  max?: Maybe<Scalars['Timestamp']['output']>;
  min?: Maybe<Scalars['Timestamp']['output']>;
};

export type TimestampBoolExp = {
  _and?: InputMaybe<Array<TimestampBoolExp>>;
  _eq?: InputMaybe<Scalars['Timestamp']['input']>;
  _gt?: InputMaybe<Scalars['Timestamp']['input']>;
  _gte?: InputMaybe<Scalars['Timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Timestamp']['input']>;
  _lte?: InputMaybe<Scalars['Timestamp']['input']>;
  _neq?: InputMaybe<Scalars['Timestamp']['input']>;
  _not?: InputMaybe<TimestampBoolExp>;
  _or?: InputMaybe<Array<TimestampBoolExp>>;
};

/** Responses from the 'update_Books_by_id' procedure */
export type UpdateBooksByIdResponse = {
  __typename?: 'UpdateBooksByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Books>;
};

/** Update the columns of the 'Books' collection */
export type UpdateBooksByIdUpdateColumnsInput = {
  /** Update the 'amount' column in the 'Books' collection. */
  amount?: InputMaybe<UpdateColumnBooksAmountInput>;
  /** Update the 'id' column in the 'Books' collection. */
  id?: InputMaybe<UpdateColumnBooksIdInput>;
  /** Update the 'title' column in the 'Books' collection. */
  title?: InputMaybe<UpdateColumnBooksTitleInput>;
};

/** Responses from the 'update_BorrowedBooks_by_id' procedure */
export type UpdateBorrowedBooksByIdResponse = {
  __typename?: 'UpdateBorrowedBooksByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<BorrowedBooks>;
};

/** Update the columns of the 'BorrowedBooks' collection */
export type UpdateBorrowedBooksByIdUpdateColumnsInput = {
  /** Update the 'book_id' column in the 'BorrowedBooks' collection. */
  bookId?: InputMaybe<UpdateColumnBorrowedBooksBookIdInput>;
  /** Update the 'id' column in the 'BorrowedBooks' collection. */
  id?: InputMaybe<UpdateColumnBorrowedBooksIdInput>;
  /** Update the 'time' column in the 'BorrowedBooks' collection. */
  time?: InputMaybe<UpdateColumnBorrowedBooksTimeInput>;
  /** Update the 'user_id' column in the 'BorrowedBooks' collection. */
  userId?: InputMaybe<UpdateColumnBorrowedBooksUserIdInput>;
};

/** Update the 'amount' column in the 'Books' collection */
export type UpdateColumnBooksAmountInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Int2']['input']>;
};

/** Update the 'id' column in the 'Books' collection */
export type UpdateColumnBooksIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'title' column in the 'Books' collection */
export type UpdateColumnBooksTitleInput = {
  /** Set the column to this value */
  set: Scalars['Varchar']['input'];
};

/** Update the 'book_id' column in the 'BorrowedBooks' collection */
export type UpdateColumnBorrowedBooksBookIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'id' column in the 'BorrowedBooks' collection */
export type UpdateColumnBorrowedBooksIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'time' column in the 'BorrowedBooks' collection */
export type UpdateColumnBorrowedBooksTimeInput = {
  /** Set the column to this value */
  set: Scalars['Timestamp']['input'];
};

/** Update the 'user_id' column in the 'BorrowedBooks' collection */
export type UpdateColumnBorrowedBooksUserIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'accused_id' column in the 'Complaines' collection */
export type UpdateColumnComplainesAccusedIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'accuser_id' column in the 'Complaines' collection */
export type UpdateColumnComplainesAccuserIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'description' column in the 'Complaines' collection */
export type UpdateColumnComplainesDescriptionInput = {
  /** Set the column to this value */
  set: Scalars['Text']['input'];
};

/** Update the 'id' column in the 'Complaines' collection */
export type UpdateColumnComplainesIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'status' column in the 'Complaines' collection */
export type UpdateColumnComplainesStatusInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Varchar']['input']>;
};

/** Update the 'block_number' column in the 'DormitaryPlacement' collection */
export type UpdateColumnDormitaryPlacementBlockNumberInput = {
  /** Set the column to this value */
  set: Scalars['Int2']['input'];
};

/** Update the 'id' column in the 'DormitaryPlacement' collection */
export type UpdateColumnDormitaryPlacementIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'room_number' column in the 'DormitaryPlacement' collection */
export type UpdateColumnDormitaryPlacementRoomNumberInput = {
  /** Set the column to this value */
  set: Scalars['Int2']['input'];
};

/** Update the 'status' column in the 'DormitaryPlacement' collection */
export type UpdateColumnDormitaryPlacementStatusInput = {
  /** Set the column to this value */
  set: Scalars['Varchar']['input'];
};

/** Update the 'user_id' column in the 'DormitaryPlacement' collection */
export type UpdateColumnDormitaryPlacementUserIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'id' column in the 'GetwayEixtLog' collection */
export type UpdateColumnGetwayEixtLogIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'time' column in the 'GetwayEixtLog' collection */
export type UpdateColumnGetwayEixtLogTimeInput = {
  /** Set the column to this value */
  set: Scalars['Timestamp']['input'];
};

/** Update the 'user_id' column in the 'GetwayEixtLog' collection */
export type UpdateColumnGetwayEixtLogUserIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'id' column in the 'GetwayEntryLog' collection */
export type UpdateColumnGetwayEntryLogIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'time' column in the 'GetwayEntryLog' collection */
export type UpdateColumnGetwayEntryLogTimeInput = {
  /** Set the column to this value */
  set: Scalars['Timestamp']['input'];
};

/** Update the 'user_id' column in the 'GetwayEntryLog' collection */
export type UpdateColumnGetwayEntryLogUserIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'id' column in the 'LibraryEixtLog' collection */
export type UpdateColumnLibraryEixtLogIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'time' column in the 'LibraryEixtLog' collection */
export type UpdateColumnLibraryEixtLogTimeInput = {
  /** Set the column to this value */
  set: Scalars['Timestamp']['input'];
};

/** Update the 'user_id' column in the 'LibraryEixtLog' collection */
export type UpdateColumnLibraryEixtLogUserIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'id' column in the 'LibraryEntryLog' collection */
export type UpdateColumnLibraryEntryLogIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'time' column in the 'LibraryEntryLog' collection */
export type UpdateColumnLibraryEntryLogTimeInput = {
  /** Set the column to this value */
  set: Scalars['Timestamp']['input'];
};

/** Update the 'user_id' column in the 'LibraryEntryLog' collection */
export type UpdateColumnLibraryEntryLogUserIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'id' column in the 'RegisterdItems' collection */
export type UpdateColumnRegisterdItemsIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'item_type' column in the 'RegisterdItems' collection */
export type UpdateColumnRegisterdItemsItemTypeInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Varchar']['input']>;
};

/** Update the 'model' column in the 'RegisterdItems' collection */
export type UpdateColumnRegisterdItemsModelInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Varchar']['input']>;
};

/** Update the 'serial' column in the 'RegisterdItems' collection */
export type UpdateColumnRegisterdItemsSerialInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Text']['input']>;
};

/** Update the 'user_id' column in the 'RegisterdItems' collection */
export type UpdateColumnRegisterdItemsUserIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'book_id' column in the 'ReturnedBooks' collection */
export type UpdateColumnReturnedBooksBookIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'id' column in the 'ReturnedBooks' collection */
export type UpdateColumnReturnedBooksIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'time' column in the 'ReturnedBooks' collection */
export type UpdateColumnReturnedBooksTimeInput = {
  /** Set the column to this value */
  set: Scalars['Timestamp']['input'];
};

/** Update the 'user_id' column in the 'ReturnedBooks' collection */
export type UpdateColumnReturnedBooksUserIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'complain_id' column in the 'Suspensions' collection */
export type UpdateColumnSuspensionsComplainIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'id' column in the 'Suspensions' collection */
export type UpdateColumnSuspensionsIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'suspension_approver' column in the 'Suspensions' collection */
export type UpdateColumnSuspensionsSuspensionApproverInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'suspension_period' column in the 'Suspensions' collection */
export type UpdateColumnSuspensionsSuspensionPeriodInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Text']['input']>;
};

/** Update the 'time' column in the 'Suspensions' collection */
export type UpdateColumnSuspensionsTimeInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** Update the 'email' column in the 'Users' collection */
export type UpdateColumnUsersEmailInput = {
  /** Set the column to this value */
  set: Scalars['Varchar']['input'];
};

/** Update the 'id' column in the 'Users' collection */
export type UpdateColumnUsersIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'name' column in the 'Users' collection */
export type UpdateColumnUsersNameInput = {
  /** Set the column to this value */
  set: Scalars['Text']['input'];
};

/** Update the 'phone_number' column in the 'Users' collection */
export type UpdateColumnUsersPhoneNumberInput = {
  /** Set the column to this value */
  set: Scalars['Int4']['input'];
};

/** Update the 'role' column in the 'Users' collection */
export type UpdateColumnUsersRoleInput = {
  /** Set the column to this value */
  set: Scalars['Varchar']['input'];
};

/** Update the 'complain_id' column in the 'Warnings' collection */
export type UpdateColumnWarningsComplainIdInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Update the 'id' column in the 'Warnings' collection */
export type UpdateColumnWarningsIdInput = {
  /** Set the column to this value */
  set: Scalars['Uuid']['input'];
};

/** Update the 'time' column in the 'Warnings' collection */
export type UpdateColumnWarningsTimeInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** Update the 'warning_approver' column in the 'Warnings' collection */
export type UpdateColumnWarningsWarningApproverInput = {
  /** Set the column to this value */
  set?: InputMaybe<Scalars['Uuid']['input']>;
};

/** Responses from the 'update_Complaines_by_id' procedure */
export type UpdateComplainesByIdResponse = {
  __typename?: 'UpdateComplainesByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Complaines>;
};

/** Update the columns of the 'Complaines' collection */
export type UpdateComplainesByIdUpdateColumnsInput = {
  /** Update the 'accused_id' column in the 'Complaines' collection. */
  accusedId?: InputMaybe<UpdateColumnComplainesAccusedIdInput>;
  /** Update the 'accuser_id' column in the 'Complaines' collection. */
  accuserId?: InputMaybe<UpdateColumnComplainesAccuserIdInput>;
  /** Update the 'description' column in the 'Complaines' collection. */
  description?: InputMaybe<UpdateColumnComplainesDescriptionInput>;
  /** Update the 'id' column in the 'Complaines' collection. */
  id?: InputMaybe<UpdateColumnComplainesIdInput>;
  /** Update the 'status' column in the 'Complaines' collection. */
  status?: InputMaybe<UpdateColumnComplainesStatusInput>;
};

/** Responses from the 'update_DormitaryPlacement_by_id' procedure */
export type UpdateDormitaryPlacementByIdResponse = {
  __typename?: 'UpdateDormitaryPlacementByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<DormitaryPlacement>;
};

/** Update the columns of the 'DormitaryPlacement' collection */
export type UpdateDormitaryPlacementByIdUpdateColumnsInput = {
  /** Update the 'block_number' column in the 'DormitaryPlacement' collection. */
  blockNumber?: InputMaybe<UpdateColumnDormitaryPlacementBlockNumberInput>;
  /** Update the 'id' column in the 'DormitaryPlacement' collection. */
  id?: InputMaybe<UpdateColumnDormitaryPlacementIdInput>;
  /** Update the 'room_number' column in the 'DormitaryPlacement' collection. */
  roomNumber?: InputMaybe<UpdateColumnDormitaryPlacementRoomNumberInput>;
  /** Update the 'status' column in the 'DormitaryPlacement' collection. */
  status?: InputMaybe<UpdateColumnDormitaryPlacementStatusInput>;
  /** Update the 'user_id' column in the 'DormitaryPlacement' collection. */
  userId?: InputMaybe<UpdateColumnDormitaryPlacementUserIdInput>;
};

/** Responses from the 'update_GetwayEixtLog_by_id' procedure */
export type UpdateGetwayEixtLogByIdResponse = {
  __typename?: 'UpdateGetwayEixtLogByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<GetwayEixtLog>;
};

/** Update the columns of the 'GetwayEixtLog' collection */
export type UpdateGetwayEixtLogByIdUpdateColumnsInput = {
  /** Update the 'id' column in the 'GetwayEixtLog' collection. */
  id?: InputMaybe<UpdateColumnGetwayEixtLogIdInput>;
  /** Update the 'time' column in the 'GetwayEixtLog' collection. */
  time?: InputMaybe<UpdateColumnGetwayEixtLogTimeInput>;
  /** Update the 'user_id' column in the 'GetwayEixtLog' collection. */
  userId?: InputMaybe<UpdateColumnGetwayEixtLogUserIdInput>;
};

/** Responses from the 'update_GetwayEntryLog_by_id' procedure */
export type UpdateGetwayEntryLogByIdResponse = {
  __typename?: 'UpdateGetwayEntryLogByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<GetwayEntryLog>;
};

/** Update the columns of the 'GetwayEntryLog' collection */
export type UpdateGetwayEntryLogByIdUpdateColumnsInput = {
  /** Update the 'id' column in the 'GetwayEntryLog' collection. */
  id?: InputMaybe<UpdateColumnGetwayEntryLogIdInput>;
  /** Update the 'time' column in the 'GetwayEntryLog' collection. */
  time?: InputMaybe<UpdateColumnGetwayEntryLogTimeInput>;
  /** Update the 'user_id' column in the 'GetwayEntryLog' collection. */
  userId?: InputMaybe<UpdateColumnGetwayEntryLogUserIdInput>;
};

/** Responses from the 'update_LibraryEixtLog_by_id' procedure */
export type UpdateLibraryEixtLogByIdResponse = {
  __typename?: 'UpdateLibraryEixtLogByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<LibraryEixtLog>;
};

/** Update the columns of the 'LibraryEixtLog' collection */
export type UpdateLibraryEixtLogByIdUpdateColumnsInput = {
  /** Update the 'id' column in the 'LibraryEixtLog' collection. */
  id?: InputMaybe<UpdateColumnLibraryEixtLogIdInput>;
  /** Update the 'time' column in the 'LibraryEixtLog' collection. */
  time?: InputMaybe<UpdateColumnLibraryEixtLogTimeInput>;
  /** Update the 'user_id' column in the 'LibraryEixtLog' collection. */
  userId?: InputMaybe<UpdateColumnLibraryEixtLogUserIdInput>;
};

/** Responses from the 'update_LibraryEntryLog_by_id' procedure */
export type UpdateLibraryEntryLogByIdResponse = {
  __typename?: 'UpdateLibraryEntryLogByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<LibraryEntryLog>;
};

/** Update the columns of the 'LibraryEntryLog' collection */
export type UpdateLibraryEntryLogByIdUpdateColumnsInput = {
  /** Update the 'id' column in the 'LibraryEntryLog' collection. */
  id?: InputMaybe<UpdateColumnLibraryEntryLogIdInput>;
  /** Update the 'time' column in the 'LibraryEntryLog' collection. */
  time?: InputMaybe<UpdateColumnLibraryEntryLogTimeInput>;
  /** Update the 'user_id' column in the 'LibraryEntryLog' collection. */
  userId?: InputMaybe<UpdateColumnLibraryEntryLogUserIdInput>;
};

/** Responses from the 'update_RegisterdItems_by_id' procedure */
export type UpdateRegisterdItemsByIdResponse = {
  __typename?: 'UpdateRegisterdItemsByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<RegisterdItems>;
};

/** Update the columns of the 'RegisterdItems' collection */
export type UpdateRegisterdItemsByIdUpdateColumnsInput = {
  /** Update the 'id' column in the 'RegisterdItems' collection. */
  id?: InputMaybe<UpdateColumnRegisterdItemsIdInput>;
  /** Update the 'item_type' column in the 'RegisterdItems' collection. */
  itemType?: InputMaybe<UpdateColumnRegisterdItemsItemTypeInput>;
  /** Update the 'model' column in the 'RegisterdItems' collection. */
  model?: InputMaybe<UpdateColumnRegisterdItemsModelInput>;
  /** Update the 'serial' column in the 'RegisterdItems' collection. */
  serial?: InputMaybe<UpdateColumnRegisterdItemsSerialInput>;
  /** Update the 'user_id' column in the 'RegisterdItems' collection. */
  userId?: InputMaybe<UpdateColumnRegisterdItemsUserIdInput>;
};

/** Responses from the 'update_ReturnedBooks_by_id' procedure */
export type UpdateReturnedBooksByIdResponse = {
  __typename?: 'UpdateReturnedBooksByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<ReturnedBooks>;
};

/** Update the columns of the 'ReturnedBooks' collection */
export type UpdateReturnedBooksByIdUpdateColumnsInput = {
  /** Update the 'book_id' column in the 'ReturnedBooks' collection. */
  bookId?: InputMaybe<UpdateColumnReturnedBooksBookIdInput>;
  /** Update the 'id' column in the 'ReturnedBooks' collection. */
  id?: InputMaybe<UpdateColumnReturnedBooksIdInput>;
  /** Update the 'time' column in the 'ReturnedBooks' collection. */
  time?: InputMaybe<UpdateColumnReturnedBooksTimeInput>;
  /** Update the 'user_id' column in the 'ReturnedBooks' collection. */
  userId?: InputMaybe<UpdateColumnReturnedBooksUserIdInput>;
};

/** Responses from the 'update_Suspensions_by_id' procedure */
export type UpdateSuspensionsByIdResponse = {
  __typename?: 'UpdateSuspensionsByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Suspensions>;
};

/** Update the columns of the 'Suspensions' collection */
export type UpdateSuspensionsByIdUpdateColumnsInput = {
  /** Update the 'complain_id' column in the 'Suspensions' collection. */
  complainId?: InputMaybe<UpdateColumnSuspensionsComplainIdInput>;
  /** Update the 'id' column in the 'Suspensions' collection. */
  id?: InputMaybe<UpdateColumnSuspensionsIdInput>;
  /** Update the 'suspension_approver' column in the 'Suspensions' collection. */
  suspensionApprover?: InputMaybe<UpdateColumnSuspensionsSuspensionApproverInput>;
  /** Update the 'suspension_period' column in the 'Suspensions' collection. */
  suspensionPeriod?: InputMaybe<UpdateColumnSuspensionsSuspensionPeriodInput>;
  /** Update the 'time' column in the 'Suspensions' collection. */
  time?: InputMaybe<UpdateColumnSuspensionsTimeInput>;
};

/** Responses from the 'update_Users_by_id' procedure */
export type UpdateUsersByIdResponse = {
  __typename?: 'UpdateUsersByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Users>;
};

/** Update the columns of the 'Users' collection */
export type UpdateUsersByIdUpdateColumnsInput = {
  /** Update the 'email' column in the 'Users' collection. */
  email?: InputMaybe<UpdateColumnUsersEmailInput>;
  /** Update the 'id' column in the 'Users' collection. */
  id?: InputMaybe<UpdateColumnUsersIdInput>;
  /** Update the 'name' column in the 'Users' collection. */
  name?: InputMaybe<UpdateColumnUsersNameInput>;
  /** Update the 'phone_number' column in the 'Users' collection. */
  phoneNumber?: InputMaybe<UpdateColumnUsersPhoneNumberInput>;
  /** Update the 'role' column in the 'Users' collection. */
  role?: InputMaybe<UpdateColumnUsersRoleInput>;
};

/** Responses from the 'update_Warnings_by_id' procedure */
export type UpdateWarningsByIdResponse = {
  __typename?: 'UpdateWarningsByIdResponse';
  /** The number of rows affected by the mutation */
  affectedRows: Scalars['Int4']['output'];
  /** Data from rows affected by the mutation */
  returning: Array<Warnings>;
};

/** Update the columns of the 'Warnings' collection */
export type UpdateWarningsByIdUpdateColumnsInput = {
  /** Update the 'complain_id' column in the 'Warnings' collection. */
  complainId?: InputMaybe<UpdateColumnWarningsComplainIdInput>;
  /** Update the 'id' column in the 'Warnings' collection. */
  id?: InputMaybe<UpdateColumnWarningsIdInput>;
  /** Update the 'time' column in the 'Warnings' collection. */
  time?: InputMaybe<UpdateColumnWarningsTimeInput>;
  /** Update the 'warning_approver' column in the 'Warnings' collection. */
  warningApprover?: InputMaybe<UpdateColumnWarningsWarningApproverInput>;
};

export type Users = {
  __typename?: 'Users';
  borrowedBooks?: Maybe<Array<BorrowedBooks>>;
  borrowedBooksAggregate: BorrowedBooksAggExp;
  complaines?: Maybe<Array<Complaines>>;
  complainesAggregate: ComplainesAggExp;
  complainesByAccuserId?: Maybe<Array<Complaines>>;
  complainesByAccuserIdAggregate: ComplainesAggExp;
  dormitaryPlacements?: Maybe<Array<DormitaryPlacement>>;
  dormitaryPlacementsAggregate: DormitaryPlacementAggExp;
  email: Scalars['Varchar']['output'];
  getwayEixtLogs?: Maybe<Array<GetwayEixtLog>>;
  getwayEixtLogsAggregate: GetwayEixtLogAggExp;
  getwayEntryLogs?: Maybe<Array<GetwayEntryLog>>;
  getwayEntryLogsAggregate: GetwayEntryLogAggExp;
  id: Scalars['Uuid']['output'];
  libraryEixtLogs?: Maybe<Array<LibraryEixtLog>>;
  libraryEixtLogsAggregate: LibraryEixtLogAggExp;
  libraryEntryLogs?: Maybe<Array<LibraryEntryLog>>;
  libraryEntryLogsAggregate: LibraryEntryLogAggExp;
  name: Scalars['Text']['output'];
  phoneNumber: Scalars['Int4']['output'];
  registerdItems?: Maybe<Array<RegisterdItems>>;
  registerdItemsAggregate: RegisterdItemsAggExp;
  returnedBooks?: Maybe<Array<ReturnedBooks>>;
  returnedBooksAggregate: ReturnedBooksAggExp;
  role: Scalars['Varchar']['output'];
  suspensions?: Maybe<Array<Suspensions>>;
  suspensionsAggregate: SuspensionsAggExp;
  warnings?: Maybe<Array<Warnings>>;
  warningsAggregate: WarningsAggExp;
};


export type UsersBorrowedBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BorrowedBooksOrderByExp>>;
  where?: InputMaybe<BorrowedBooksBoolExp>;
};


export type UsersBorrowedBooksAggregateArgs = {
  filter_input?: InputMaybe<BorrowedBooksFilterInput>;
};


export type UsersComplainesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComplainesOrderByExp>>;
  where?: InputMaybe<ComplainesBoolExp>;
};


export type UsersComplainesAggregateArgs = {
  filter_input?: InputMaybe<ComplainesFilterInput>;
};


export type UsersComplainesByAccuserIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ComplainesOrderByExp>>;
  where?: InputMaybe<ComplainesBoolExp>;
};


export type UsersComplainesByAccuserIdAggregateArgs = {
  filter_input?: InputMaybe<ComplainesFilterInput>;
};


export type UsersDormitaryPlacementsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DormitaryPlacementOrderByExp>>;
  where?: InputMaybe<DormitaryPlacementBoolExp>;
};


export type UsersDormitaryPlacementsAggregateArgs = {
  filter_input?: InputMaybe<DormitaryPlacementFilterInput>;
};


export type UsersGetwayEixtLogsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GetwayEixtLogOrderByExp>>;
  where?: InputMaybe<GetwayEixtLogBoolExp>;
};


export type UsersGetwayEixtLogsAggregateArgs = {
  filter_input?: InputMaybe<GetwayEixtLogFilterInput>;
};


export type UsersGetwayEntryLogsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<GetwayEntryLogOrderByExp>>;
  where?: InputMaybe<GetwayEntryLogBoolExp>;
};


export type UsersGetwayEntryLogsAggregateArgs = {
  filter_input?: InputMaybe<GetwayEntryLogFilterInput>;
};


export type UsersLibraryEixtLogsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LibraryEixtLogOrderByExp>>;
  where?: InputMaybe<LibraryEixtLogBoolExp>;
};


export type UsersLibraryEixtLogsAggregateArgs = {
  filter_input?: InputMaybe<LibraryEixtLogFilterInput>;
};


export type UsersLibraryEntryLogsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LibraryEntryLogOrderByExp>>;
  where?: InputMaybe<LibraryEntryLogBoolExp>;
};


export type UsersLibraryEntryLogsAggregateArgs = {
  filter_input?: InputMaybe<LibraryEntryLogFilterInput>;
};


export type UsersRegisterdItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RegisterdItemsOrderByExp>>;
  where?: InputMaybe<RegisterdItemsBoolExp>;
};


export type UsersRegisterdItemsAggregateArgs = {
  filter_input?: InputMaybe<RegisterdItemsFilterInput>;
};


export type UsersReturnedBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ReturnedBooksOrderByExp>>;
  where?: InputMaybe<ReturnedBooksBoolExp>;
};


export type UsersReturnedBooksAggregateArgs = {
  filter_input?: InputMaybe<ReturnedBooksFilterInput>;
};


export type UsersSuspensionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SuspensionsOrderByExp>>;
  where?: InputMaybe<SuspensionsBoolExp>;
};


export type UsersSuspensionsAggregateArgs = {
  filter_input?: InputMaybe<SuspensionsFilterInput>;
};


export type UsersWarningsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WarningsOrderByExp>>;
  where?: InputMaybe<WarningsBoolExp>;
};


export type UsersWarningsAggregateArgs = {
  filter_input?: InputMaybe<WarningsFilterInput>;
};

export type UsersAggExp = {
  __typename?: 'UsersAggExp';
  _count: Scalars['Int']['output'];
  email: VarcharAggExp;
  id: UuidAggExp;
  name: TextAggExp;
  phoneNumber: Int4AggExp;
  role: VarcharAggExp;
};

export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  borrowedBooks?: InputMaybe<BorrowedBooksBoolExp>;
  complaines?: InputMaybe<ComplainesBoolExp>;
  complainesByAccuserId?: InputMaybe<ComplainesBoolExp>;
  dormitaryPlacements?: InputMaybe<DormitaryPlacementBoolExp>;
  email?: InputMaybe<VarcharBoolExp>;
  getwayEixtLogs?: InputMaybe<GetwayEixtLogBoolExp>;
  getwayEntryLogs?: InputMaybe<GetwayEntryLogBoolExp>;
  id?: InputMaybe<UuidBoolExp>;
  libraryEixtLogs?: InputMaybe<LibraryEixtLogBoolExp>;
  libraryEntryLogs?: InputMaybe<LibraryEntryLogBoolExp>;
  name?: InputMaybe<TextBoolExp>;
  phoneNumber?: InputMaybe<Int4BoolExp>;
  registerdItems?: InputMaybe<RegisterdItemsBoolExp>;
  returnedBooks?: InputMaybe<ReturnedBooksBoolExp>;
  role?: InputMaybe<VarcharBoolExp>;
  suspensions?: InputMaybe<SuspensionsBoolExp>;
  warnings?: InputMaybe<WarningsBoolExp>;
};

export type UsersFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderByExp>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type UsersOrderByExp = {
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
};

export type UuidAggExp = {
  __typename?: 'UuidAggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
};

export type UuidBoolExp = {
  _and?: InputMaybe<Array<UuidBoolExp>>;
  _eq?: InputMaybe<Scalars['Uuid']['input']>;
  _gt?: InputMaybe<Scalars['Uuid']['input']>;
  _gte?: InputMaybe<Scalars['Uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['Uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Uuid']['input']>;
  _lte?: InputMaybe<Scalars['Uuid']['input']>;
  _neq?: InputMaybe<Scalars['Uuid']['input']>;
  _not?: InputMaybe<UuidBoolExp>;
  _or?: InputMaybe<Array<UuidBoolExp>>;
};

export type VarcharAggExp = {
  __typename?: 'VarcharAggExp';
  _count: Scalars['Int']['output'];
  _count_distinct: Scalars['Int']['output'];
  max?: Maybe<Scalars['Text']['output']>;
  min?: Maybe<Scalars['Text']['output']>;
};

export type VarcharBoolExp = {
  _and?: InputMaybe<Array<VarcharBoolExp>>;
  _eq?: InputMaybe<Scalars['Varchar']['input']>;
  _gt?: InputMaybe<Scalars['Varchar']['input']>;
  _gte?: InputMaybe<Scalars['Varchar']['input']>;
  _ilike?: InputMaybe<Scalars['Varchar']['input']>;
  _in?: InputMaybe<Array<Scalars['Varchar']['input']>>;
  _iregex?: InputMaybe<Scalars['Varchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['Varchar']['input']>;
  _lt?: InputMaybe<Scalars['Varchar']['input']>;
  _lte?: InputMaybe<Scalars['Varchar']['input']>;
  _neq?: InputMaybe<Scalars['Varchar']['input']>;
  _nilike?: InputMaybe<Scalars['Varchar']['input']>;
  _niregex?: InputMaybe<Scalars['Varchar']['input']>;
  _nlike?: InputMaybe<Scalars['Varchar']['input']>;
  _not?: InputMaybe<VarcharBoolExp>;
  _nregex?: InputMaybe<Scalars['Varchar']['input']>;
  _or?: InputMaybe<Array<VarcharBoolExp>>;
  _regex?: InputMaybe<Scalars['Varchar']['input']>;
  starts_with?: InputMaybe<Scalars['Varchar']['input']>;
  ts_match_tt?: InputMaybe<Scalars['Varchar']['input']>;
};

export type Warnings = {
  __typename?: 'Warnings';
  complainId?: Maybe<Scalars['Uuid']['output']>;
  complaine?: Maybe<Complaines>;
  id: Scalars['Uuid']['output'];
  time?: Maybe<Scalars['Timestamp']['output']>;
  user?: Maybe<Users>;
  warningApprover?: Maybe<Scalars['Uuid']['output']>;
};

export type WarningsAggExp = {
  __typename?: 'WarningsAggExp';
  _count: Scalars['Int']['output'];
  complainId: UuidAggExp;
  id: UuidAggExp;
  time: TimestampAggExp;
  warningApprover: UuidAggExp;
};

export type WarningsBoolExp = {
  _and?: InputMaybe<Array<WarningsBoolExp>>;
  _not?: InputMaybe<WarningsBoolExp>;
  _or?: InputMaybe<Array<WarningsBoolExp>>;
  complainId?: InputMaybe<UuidBoolExp>;
  complaine?: InputMaybe<ComplainesBoolExp>;
  id?: InputMaybe<UuidBoolExp>;
  time?: InputMaybe<TimestampBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  warningApprover?: InputMaybe<UuidBoolExp>;
};

export type WarningsFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WarningsOrderByExp>>;
  where?: InputMaybe<WarningsBoolExp>;
};

export type WarningsOrderByExp = {
  complainId?: InputMaybe<OrderBy>;
  complaine?: InputMaybe<ComplainesOrderByExp>;
  id?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderByExp>;
  warningApprover?: InputMaybe<OrderBy>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'Users', id: any, name: any, email: any }> | null };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;