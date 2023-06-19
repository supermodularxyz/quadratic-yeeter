import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: number;
  BigInt: number;
  Bytes: number;
};

export interface BlockChangedFilter {
  number_gte: Scalars['Int'];
}

export interface BlockHeight {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
}

export interface MetaPtr {
  __typename?: 'MetaPtr';
  id: Scalars['ID'];
  pointer?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['Int']>;
}

export interface MetaPtrFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MetaPtrFilter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<MetaPtrFilter>>>;
  pointer?: InputMaybe<Scalars['String']>;
  pointer_contains?: InputMaybe<Scalars['String']>;
  pointer_contains_nocase?: InputMaybe<Scalars['String']>;
  pointer_ends_with?: InputMaybe<Scalars['String']>;
  pointer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pointer_gt?: InputMaybe<Scalars['String']>;
  pointer_gte?: InputMaybe<Scalars['String']>;
  pointer_in?: InputMaybe<Array<Scalars['String']>>;
  pointer_lt?: InputMaybe<Scalars['String']>;
  pointer_lte?: InputMaybe<Scalars['String']>;
  pointer_not?: InputMaybe<Scalars['String']>;
  pointer_not_contains?: InputMaybe<Scalars['String']>;
  pointer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pointer_not_ends_with?: InputMaybe<Scalars['String']>;
  pointer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pointer_not_in?: InputMaybe<Array<Scalars['String']>>;
  pointer_not_starts_with?: InputMaybe<Scalars['String']>;
  pointer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pointer_starts_with?: InputMaybe<Scalars['String']>;
  pointer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol?: InputMaybe<Scalars['Int']>;
  protocol_gt?: InputMaybe<Scalars['Int']>;
  protocol_gte?: InputMaybe<Scalars['Int']>;
  protocol_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol_lt?: InputMaybe<Scalars['Int']>;
  protocol_lte?: InputMaybe<Scalars['Int']>;
  protocol_not?: InputMaybe<Scalars['Int']>;
  protocol_not_in?: InputMaybe<Array<Scalars['Int']>>;
}

export enum MetaPtrOrderBy {
  ID = 'id',
  POINTER = 'pointer',
  PROTOCOL = 'protocol'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc'
}

export interface Program {
  __typename?: 'Program';
  accounts: Array<ProgramAccount>;
  createdAt: Scalars['BigInt'];
  id: Scalars['ID'];
  metaPtr: MetaPtr;
  roles: Array<ProgramRole>;
  rounds: Array<Round>;
  updatedAt: Scalars['BigInt'];
}


export type ProgramAccountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProgramAccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProgramAccountFilter>;
};


export type ProgramRolesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProgramRoleOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProgramRoleFilter>;
};


export type ProgramRoundsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoundFilter>;
};

export interface ProgramAccount {
  __typename?: 'ProgramAccount';
  address: Scalars['String'];
  id: Scalars['ID'];
  program: Program;
  role: ProgramRole;
}

export interface ProgramAccountFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  and?: InputMaybe<Array<InputMaybe<ProgramAccountFilter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ProgramAccountFilter>>>;
  program?: InputMaybe<Scalars['String']>;
  program_?: InputMaybe<ProgramFilter>;
  program_contains?: InputMaybe<Scalars['String']>;
  program_contains_nocase?: InputMaybe<Scalars['String']>;
  program_ends_with?: InputMaybe<Scalars['String']>;
  program_ends_with_nocase?: InputMaybe<Scalars['String']>;
  program_gt?: InputMaybe<Scalars['String']>;
  program_gte?: InputMaybe<Scalars['String']>;
  program_in?: InputMaybe<Array<Scalars['String']>>;
  program_lt?: InputMaybe<Scalars['String']>;
  program_lte?: InputMaybe<Scalars['String']>;
  program_not?: InputMaybe<Scalars['String']>;
  program_not_contains?: InputMaybe<Scalars['String']>;
  program_not_contains_nocase?: InputMaybe<Scalars['String']>;
  program_not_ends_with?: InputMaybe<Scalars['String']>;
  program_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  program_not_in?: InputMaybe<Array<Scalars['String']>>;
  program_not_starts_with?: InputMaybe<Scalars['String']>;
  program_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  program_starts_with?: InputMaybe<Scalars['String']>;
  program_starts_with_nocase?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  role_?: InputMaybe<ProgramRoleFilter>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_contains_nocase?: InputMaybe<Scalars['String']>;
  role_ends_with?: InputMaybe<Scalars['String']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']>;
  role_gt?: InputMaybe<Scalars['String']>;
  role_gte?: InputMaybe<Scalars['String']>;
  role_in?: InputMaybe<Array<Scalars['String']>>;
  role_lt?: InputMaybe<Scalars['String']>;
  role_lte?: InputMaybe<Scalars['String']>;
  role_not?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']>;
  role_not_ends_with?: InputMaybe<Scalars['String']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  role_not_in?: InputMaybe<Array<Scalars['String']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  role_starts_with?: InputMaybe<Scalars['String']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export enum ProgramAccountOrderBy {
  ADDRESS = 'address',
  ID = 'id',
  PROGRAM = 'program',
  PROGRAM__CREATEDAT = 'program__createdAt',
  PROGRAM__ID = 'program__id',
  PROGRAM__UPDATEDAT = 'program__updatedAt',
  ROLE = 'role',
  ROLE__ID = 'role__id',
  ROLE__ROLE = 'role__role'
}

export interface ProgramRole {
  __typename?: 'ProgramRole';
  accounts?: Maybe<Array<ProgramAccount>>;
  id: Scalars['ID'];
  program: Program;
  role: Scalars['String'];
}


export type ProgramRoleAccountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProgramAccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProgramAccountFilter>;
};

export interface ProgramRoleFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<ProgramAccountFilter>;
  and?: InputMaybe<Array<InputMaybe<ProgramRoleFilter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ProgramRoleFilter>>>;
  program?: InputMaybe<Scalars['String']>;
  program_?: InputMaybe<ProgramFilter>;
  program_contains?: InputMaybe<Scalars['String']>;
  program_contains_nocase?: InputMaybe<Scalars['String']>;
  program_ends_with?: InputMaybe<Scalars['String']>;
  program_ends_with_nocase?: InputMaybe<Scalars['String']>;
  program_gt?: InputMaybe<Scalars['String']>;
  program_gte?: InputMaybe<Scalars['String']>;
  program_in?: InputMaybe<Array<Scalars['String']>>;
  program_lt?: InputMaybe<Scalars['String']>;
  program_lte?: InputMaybe<Scalars['String']>;
  program_not?: InputMaybe<Scalars['String']>;
  program_not_contains?: InputMaybe<Scalars['String']>;
  program_not_contains_nocase?: InputMaybe<Scalars['String']>;
  program_not_ends_with?: InputMaybe<Scalars['String']>;
  program_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  program_not_in?: InputMaybe<Array<Scalars['String']>>;
  program_not_starts_with?: InputMaybe<Scalars['String']>;
  program_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  program_starts_with?: InputMaybe<Scalars['String']>;
  program_starts_with_nocase?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_contains_nocase?: InputMaybe<Scalars['String']>;
  role_ends_with?: InputMaybe<Scalars['String']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']>;
  role_gt?: InputMaybe<Scalars['String']>;
  role_gte?: InputMaybe<Scalars['String']>;
  role_in?: InputMaybe<Array<Scalars['String']>>;
  role_lt?: InputMaybe<Scalars['String']>;
  role_lte?: InputMaybe<Scalars['String']>;
  role_not?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']>;
  role_not_ends_with?: InputMaybe<Scalars['String']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  role_not_in?: InputMaybe<Array<Scalars['String']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  role_starts_with?: InputMaybe<Scalars['String']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export enum ProgramRoleOrderBy {
  ACCOUNTS = 'accounts',
  ID = 'id',
  PROGRAM = 'program',
  PROGRAM__CREATEDAT = 'program__createdAt',
  PROGRAM__ID = 'program__id',
  PROGRAM__UPDATEDAT = 'program__updatedAt',
  ROLE = 'role'
}

export interface ProgramFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<ProgramAccountFilter>;
  and?: InputMaybe<Array<InputMaybe<ProgramFilter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metaPtr?: InputMaybe<Scalars['String']>;
  metaPtr_?: InputMaybe<MetaPtrFilter>;
  metaPtr_contains?: InputMaybe<Scalars['String']>;
  metaPtr_contains_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_ends_with?: InputMaybe<Scalars['String']>;
  metaPtr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_gt?: InputMaybe<Scalars['String']>;
  metaPtr_gte?: InputMaybe<Scalars['String']>;
  metaPtr_in?: InputMaybe<Array<Scalars['String']>>;
  metaPtr_lt?: InputMaybe<Scalars['String']>;
  metaPtr_lte?: InputMaybe<Scalars['String']>;
  metaPtr_not?: InputMaybe<Scalars['String']>;
  metaPtr_not_contains?: InputMaybe<Scalars['String']>;
  metaPtr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_not_ends_with?: InputMaybe<Scalars['String']>;
  metaPtr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_not_in?: InputMaybe<Array<Scalars['String']>>;
  metaPtr_not_starts_with?: InputMaybe<Scalars['String']>;
  metaPtr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_starts_with?: InputMaybe<Scalars['String']>;
  metaPtr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<ProgramFilter>>>;
  roles_?: InputMaybe<ProgramRoleFilter>;
  rounds_?: InputMaybe<RoundFilter>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
}

export enum ProgramOrderBy {
  ACCOUNTS = 'accounts',
  CREATEDAT = 'createdAt',
  ID = 'id',
  METAPTR = 'metaPtr',
  METAPTR__ID = 'metaPtr__id',
  METAPTR__POINTER = 'metaPtr__pointer',
  METAPTR__PROTOCOL = 'metaPtr__protocol',
  ROLES = 'roles',
  ROUNDS = 'rounds',
  UPDATEDAT = 'updatedAt'
}

export interface QfVote {
  __typename?: 'QFVote';
  amount: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  from: Scalars['String'];
  id: Scalars['ID'];
  projectId: Scalars['String'];
  to: Scalars['String'];
  token: Scalars['String'];
  version: Scalars['String'];
  votingStrategy: VotingStrategy;
}

export interface QfVoteFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<QfVoteFilter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<QfVoteFilter>>>;
  projectId?: InputMaybe<Scalars['String']>;
  projectId_contains?: InputMaybe<Scalars['String']>;
  projectId_contains_nocase?: InputMaybe<Scalars['String']>;
  projectId_ends_with?: InputMaybe<Scalars['String']>;
  projectId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_gt?: InputMaybe<Scalars['String']>;
  projectId_gte?: InputMaybe<Scalars['String']>;
  projectId_in?: InputMaybe<Array<Scalars['String']>>;
  projectId_lt?: InputMaybe<Scalars['String']>;
  projectId_lte?: InputMaybe<Scalars['String']>;
  projectId_not?: InputMaybe<Scalars['String']>;
  projectId_not_contains?: InputMaybe<Scalars['String']>;
  projectId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  projectId_not_ends_with?: InputMaybe<Scalars['String']>;
  projectId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_not_in?: InputMaybe<Array<Scalars['String']>>;
  projectId_not_starts_with?: InputMaybe<Scalars['String']>;
  projectId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectId_starts_with?: InputMaybe<Scalars['String']>;
  projectId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy?: InputMaybe<Scalars['String']>;
  votingStrategy_?: InputMaybe<VotingStrategyFilter>;
  votingStrategy_contains?: InputMaybe<Scalars['String']>;
  votingStrategy_contains_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_ends_with?: InputMaybe<Scalars['String']>;
  votingStrategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_gt?: InputMaybe<Scalars['String']>;
  votingStrategy_gte?: InputMaybe<Scalars['String']>;
  votingStrategy_in?: InputMaybe<Array<Scalars['String']>>;
  votingStrategy_lt?: InputMaybe<Scalars['String']>;
  votingStrategy_lte?: InputMaybe<Scalars['String']>;
  votingStrategy_not?: InputMaybe<Scalars['String']>;
  votingStrategy_not_contains?: InputMaybe<Scalars['String']>;
  votingStrategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_not_ends_with?: InputMaybe<Scalars['String']>;
  votingStrategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  votingStrategy_not_starts_with?: InputMaybe<Scalars['String']>;
  votingStrategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_starts_with?: InputMaybe<Scalars['String']>;
  votingStrategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export enum QfVoteOrderBy {
  AMOUNT = 'amount',
  CREATEDAT = 'createdAt',
  FROM = 'from',
  ID = 'id',
  PROJECTID = 'projectId',
  TO = 'to',
  TOKEN = 'token',
  VERSION = 'version',
  VOTINGSTRATEGY = 'votingStrategy',
  VOTINGSTRATEGY__ID = 'votingStrategy__id',
  VOTINGSTRATEGY__STRATEGYADDRESS = 'votingStrategy__strategyAddress',
  VOTINGSTRATEGY__STRATEGYNAME = 'votingStrategy__strategyName',
  VOTINGSTRATEGY__VERSION = 'votingStrategy__version'
}

export interface Query {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<Meta>;
  metaPtr?: Maybe<MetaPtr>;
  metaPtrs: Array<MetaPtr>;
  program?: Maybe<Program>;
  programAccount?: Maybe<ProgramAccount>;
  programAccounts: Array<ProgramAccount>;
  programRole?: Maybe<ProgramRole>;
  programRoles: Array<ProgramRole>;
  programs: Array<Program>;
  qfvote?: Maybe<QfVote>;
  qfvotes: Array<QfVote>;
  round?: Maybe<Round>;
  roundAccount?: Maybe<RoundAccount>;
  roundAccounts: Array<RoundAccount>;
  roundProject?: Maybe<RoundProject>;
  roundProjects: Array<RoundProject>;
  roundRole?: Maybe<RoundRole>;
  roundRoles: Array<RoundRole>;
  rounds: Array<Round>;
  votingStrategies: Array<VotingStrategy>;
  votingStrategy?: Maybe<VotingStrategy>;
}


export type QueryMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type QueryMetaPtrArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryMetaPtrsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaPtrOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<MetaPtrFilter>;
};


export type QueryProgramArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryProgramAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryProgramAccountsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProgramAccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ProgramAccountFilter>;
};


export type QueryProgramRoleArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryProgramRolesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProgramRoleOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ProgramRoleFilter>;
};


export type QueryProgramsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProgramOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ProgramFilter>;
};


export type QueryQfvoteArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryQfvotesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<QfVoteOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<QfVoteFilter>;
};


export type QueryRoundArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryRoundAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryRoundAccountsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundAccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<RoundAccountFilter>;
};


export type QueryRoundProjectArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryRoundProjectsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundProjectOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<RoundProjectFilter>;
};


export type QueryRoundRoleArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryRoundRolesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundRoleOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<RoundRoleFilter>;
};


export type QueryRoundsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<RoundFilter>;
};


export type QueryVotingStrategiesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VotingStrategyOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<VotingStrategyFilter>;
};


export type QueryVotingStrategyArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};

export interface Round {
  __typename?: 'Round';
  accounts: Array<RoundAccount>;
  applicationMetaPtr: MetaPtr;
  applicationsEndTime: Scalars['String'];
  applicationsStartTime: Scalars['String'];
  createdAt: Scalars['BigInt'];
  id: Scalars['ID'];
  payoutStrategy: Scalars['String'];
  program: Program;
  projects?: Maybe<Array<RoundProject>>;
  projectsMetaPtr?: Maybe<MetaPtr>;
  roles: Array<RoundRole>;
  roundEndTime: Scalars['String'];
  roundMetaPtr: MetaPtr;
  roundStartTime: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['BigInt'];
  votingStrategy: VotingStrategy;
}


export type RoundAccountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundAccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoundAccountFilter>;
};


export type RoundProjectsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundProjectOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoundProjectFilter>;
};


export type RoundRolesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundRoleOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoundRoleFilter>;
};

export interface RoundAccount {
  __typename?: 'RoundAccount';
  address: Scalars['String'];
  id: Scalars['ID'];
  role: RoundRole;
  round: Round;
}

export interface RoundAccountFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  and?: InputMaybe<Array<InputMaybe<RoundAccountFilter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<RoundAccountFilter>>>;
  role?: InputMaybe<Scalars['String']>;
  role_?: InputMaybe<RoundRoleFilter>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_contains_nocase?: InputMaybe<Scalars['String']>;
  role_ends_with?: InputMaybe<Scalars['String']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']>;
  role_gt?: InputMaybe<Scalars['String']>;
  role_gte?: InputMaybe<Scalars['String']>;
  role_in?: InputMaybe<Array<Scalars['String']>>;
  role_lt?: InputMaybe<Scalars['String']>;
  role_lte?: InputMaybe<Scalars['String']>;
  role_not?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']>;
  role_not_ends_with?: InputMaybe<Scalars['String']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  role_not_in?: InputMaybe<Array<Scalars['String']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  role_starts_with?: InputMaybe<Scalars['String']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['String']>;
  round_?: InputMaybe<RoundFilter>;
  round_contains?: InputMaybe<Scalars['String']>;
  round_contains_nocase?: InputMaybe<Scalars['String']>;
  round_ends_with?: InputMaybe<Scalars['String']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']>;
  round_gt?: InputMaybe<Scalars['String']>;
  round_gte?: InputMaybe<Scalars['String']>;
  round_in?: InputMaybe<Array<Scalars['String']>>;
  round_lt?: InputMaybe<Scalars['String']>;
  round_lte?: InputMaybe<Scalars['String']>;
  round_not?: InputMaybe<Scalars['String']>;
  round_not_contains?: InputMaybe<Scalars['String']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']>;
  round_not_ends_with?: InputMaybe<Scalars['String']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  round_not_in?: InputMaybe<Array<Scalars['String']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  round_starts_with?: InputMaybe<Scalars['String']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export enum RoundAccountOrderBy {
  ADDRESS = 'address',
  ID = 'id',
  ROLE = 'role',
  ROLE__ID = 'role__id',
  ROLE__ROLE = 'role__role',
  ROUND = 'round',
  ROUND__APPLICATIONSENDTIME = 'round__applicationsEndTime',
  ROUND__APPLICATIONSSTARTTIME = 'round__applicationsStartTime',
  ROUND__CREATEDAT = 'round__createdAt',
  ROUND__ID = 'round__id',
  ROUND__PAYOUTSTRATEGY = 'round__payoutStrategy',
  ROUND__ROUNDENDTIME = 'round__roundEndTime',
  ROUND__ROUNDSTARTTIME = 'round__roundStartTime',
  ROUND__TOKEN = 'round__token',
  ROUND__UPDATEDAT = 'round__updatedAt'
}

export interface RoundProject {
  __typename?: 'RoundProject';
  createdAt: Scalars['BigInt'];
  id: Scalars['ID'];
  metaPtr: MetaPtr;
  payoutAddress?: Maybe<Scalars['String']>;
  project: Scalars['String'];
  round: Round;
  status: Scalars['String'];
  updatedAt: Scalars['BigInt'];
}

export interface RoundProjectFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoundProjectFilter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metaPtr?: InputMaybe<Scalars['String']>;
  metaPtr_?: InputMaybe<MetaPtrFilter>;
  metaPtr_contains?: InputMaybe<Scalars['String']>;
  metaPtr_contains_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_ends_with?: InputMaybe<Scalars['String']>;
  metaPtr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_gt?: InputMaybe<Scalars['String']>;
  metaPtr_gte?: InputMaybe<Scalars['String']>;
  metaPtr_in?: InputMaybe<Array<Scalars['String']>>;
  metaPtr_lt?: InputMaybe<Scalars['String']>;
  metaPtr_lte?: InputMaybe<Scalars['String']>;
  metaPtr_not?: InputMaybe<Scalars['String']>;
  metaPtr_not_contains?: InputMaybe<Scalars['String']>;
  metaPtr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_not_ends_with?: InputMaybe<Scalars['String']>;
  metaPtr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_not_in?: InputMaybe<Array<Scalars['String']>>;
  metaPtr_not_starts_with?: InputMaybe<Scalars['String']>;
  metaPtr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaPtr_starts_with?: InputMaybe<Scalars['String']>;
  metaPtr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<RoundProjectFilter>>>;
  payoutAddress?: InputMaybe<Scalars['String']>;
  payoutAddress_contains?: InputMaybe<Scalars['String']>;
  payoutAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutAddress_ends_with?: InputMaybe<Scalars['String']>;
  payoutAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutAddress_gt?: InputMaybe<Scalars['String']>;
  payoutAddress_gte?: InputMaybe<Scalars['String']>;
  payoutAddress_in?: InputMaybe<Array<Scalars['String']>>;
  payoutAddress_lt?: InputMaybe<Scalars['String']>;
  payoutAddress_lte?: InputMaybe<Scalars['String']>;
  payoutAddress_not?: InputMaybe<Scalars['String']>;
  payoutAddress_not_contains?: InputMaybe<Scalars['String']>;
  payoutAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  payoutAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  payoutAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  payoutAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutAddress_starts_with?: InputMaybe<Scalars['String']>;
  payoutAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<Scalars['String']>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['String']>;
  round_?: InputMaybe<RoundFilter>;
  round_contains?: InputMaybe<Scalars['String']>;
  round_contains_nocase?: InputMaybe<Scalars['String']>;
  round_ends_with?: InputMaybe<Scalars['String']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']>;
  round_gt?: InputMaybe<Scalars['String']>;
  round_gte?: InputMaybe<Scalars['String']>;
  round_in?: InputMaybe<Array<Scalars['String']>>;
  round_lt?: InputMaybe<Scalars['String']>;
  round_lte?: InputMaybe<Scalars['String']>;
  round_not?: InputMaybe<Scalars['String']>;
  round_not_contains?: InputMaybe<Scalars['String']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']>;
  round_not_ends_with?: InputMaybe<Scalars['String']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  round_not_in?: InputMaybe<Array<Scalars['String']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  round_starts_with?: InputMaybe<Scalars['String']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  status_contains?: InputMaybe<Scalars['String']>;
  status_contains_nocase?: InputMaybe<Scalars['String']>;
  status_ends_with?: InputMaybe<Scalars['String']>;
  status_ends_with_nocase?: InputMaybe<Scalars['String']>;
  status_gt?: InputMaybe<Scalars['String']>;
  status_gte?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<Scalars['String']>>;
  status_lt?: InputMaybe<Scalars['String']>;
  status_lte?: InputMaybe<Scalars['String']>;
  status_not?: InputMaybe<Scalars['String']>;
  status_not_contains?: InputMaybe<Scalars['String']>;
  status_not_contains_nocase?: InputMaybe<Scalars['String']>;
  status_not_ends_with?: InputMaybe<Scalars['String']>;
  status_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  status_not_in?: InputMaybe<Array<Scalars['String']>>;
  status_not_starts_with?: InputMaybe<Scalars['String']>;
  status_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status_starts_with?: InputMaybe<Scalars['String']>;
  status_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
}

export enum RoundProjectOrderBy {
  CREATEDAT = 'createdAt',
  ID = 'id',
  METAPTR = 'metaPtr',
  METAPTR__ID = 'metaPtr__id',
  METAPTR__POINTER = 'metaPtr__pointer',
  METAPTR__PROTOCOL = 'metaPtr__protocol',
  PAYOUTADDRESS = 'payoutAddress',
  PROJECT = 'project',
  ROUND = 'round',
  ROUND__APPLICATIONSENDTIME = 'round__applicationsEndTime',
  ROUND__APPLICATIONSSTARTTIME = 'round__applicationsStartTime',
  ROUND__CREATEDAT = 'round__createdAt',
  ROUND__ID = 'round__id',
  ROUND__PAYOUTSTRATEGY = 'round__payoutStrategy',
  ROUND__ROUNDENDTIME = 'round__roundEndTime',
  ROUND__ROUNDSTARTTIME = 'round__roundStartTime',
  ROUND__TOKEN = 'round__token',
  ROUND__UPDATEDAT = 'round__updatedAt',
  STATUS = 'status',
  UPDATEDAT = 'updatedAt'
}

export interface RoundRole {
  __typename?: 'RoundRole';
  accounts?: Maybe<Array<RoundAccount>>;
  id: Scalars['ID'];
  role: Scalars['String'];
  round: Round;
}


export type RoundRoleAccountsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundAccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoundAccountFilter>;
};

export interface RoundRoleFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<RoundAccountFilter>;
  and?: InputMaybe<Array<InputMaybe<RoundRoleFilter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<RoundRoleFilter>>>;
  role?: InputMaybe<Scalars['String']>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_contains_nocase?: InputMaybe<Scalars['String']>;
  role_ends_with?: InputMaybe<Scalars['String']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']>;
  role_gt?: InputMaybe<Scalars['String']>;
  role_gte?: InputMaybe<Scalars['String']>;
  role_in?: InputMaybe<Array<Scalars['String']>>;
  role_lt?: InputMaybe<Scalars['String']>;
  role_lte?: InputMaybe<Scalars['String']>;
  role_not?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']>;
  role_not_ends_with?: InputMaybe<Scalars['String']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  role_not_in?: InputMaybe<Array<Scalars['String']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  role_starts_with?: InputMaybe<Scalars['String']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<Scalars['String']>;
  round_?: InputMaybe<RoundFilter>;
  round_contains?: InputMaybe<Scalars['String']>;
  round_contains_nocase?: InputMaybe<Scalars['String']>;
  round_ends_with?: InputMaybe<Scalars['String']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']>;
  round_gt?: InputMaybe<Scalars['String']>;
  round_gte?: InputMaybe<Scalars['String']>;
  round_in?: InputMaybe<Array<Scalars['String']>>;
  round_lt?: InputMaybe<Scalars['String']>;
  round_lte?: InputMaybe<Scalars['String']>;
  round_not?: InputMaybe<Scalars['String']>;
  round_not_contains?: InputMaybe<Scalars['String']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']>;
  round_not_ends_with?: InputMaybe<Scalars['String']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  round_not_in?: InputMaybe<Array<Scalars['String']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  round_starts_with?: InputMaybe<Scalars['String']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export enum RoundRoleOrderBy {
  ACCOUNTS = 'accounts',
  ID = 'id',
  ROLE = 'role',
  ROUND = 'round',
  ROUND__APPLICATIONSENDTIME = 'round__applicationsEndTime',
  ROUND__APPLICATIONSSTARTTIME = 'round__applicationsStartTime',
  ROUND__CREATEDAT = 'round__createdAt',
  ROUND__ID = 'round__id',
  ROUND__PAYOUTSTRATEGY = 'round__payoutStrategy',
  ROUND__ROUNDENDTIME = 'round__roundEndTime',
  ROUND__ROUNDSTARTTIME = 'round__roundStartTime',
  ROUND__TOKEN = 'round__token',
  ROUND__UPDATEDAT = 'round__updatedAt'
}

export interface RoundFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accounts_?: InputMaybe<RoundAccountFilter>;
  and?: InputMaybe<Array<InputMaybe<RoundFilter>>>;
  applicationMetaPtr?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_?: InputMaybe<MetaPtrFilter>;
  applicationMetaPtr_contains?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_contains_nocase?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_ends_with?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_gt?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_gte?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_in?: InputMaybe<Array<Scalars['String']>>;
  applicationMetaPtr_lt?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_lte?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_not?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_not_contains?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_not_ends_with?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_not_in?: InputMaybe<Array<Scalars['String']>>;
  applicationMetaPtr_not_starts_with?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_starts_with?: InputMaybe<Scalars['String']>;
  applicationMetaPtr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  applicationsEndTime?: InputMaybe<Scalars['String']>;
  applicationsEndTime_contains?: InputMaybe<Scalars['String']>;
  applicationsEndTime_contains_nocase?: InputMaybe<Scalars['String']>;
  applicationsEndTime_ends_with?: InputMaybe<Scalars['String']>;
  applicationsEndTime_ends_with_nocase?: InputMaybe<Scalars['String']>;
  applicationsEndTime_gt?: InputMaybe<Scalars['String']>;
  applicationsEndTime_gte?: InputMaybe<Scalars['String']>;
  applicationsEndTime_in?: InputMaybe<Array<Scalars['String']>>;
  applicationsEndTime_lt?: InputMaybe<Scalars['String']>;
  applicationsEndTime_lte?: InputMaybe<Scalars['String']>;
  applicationsEndTime_not?: InputMaybe<Scalars['String']>;
  applicationsEndTime_not_contains?: InputMaybe<Scalars['String']>;
  applicationsEndTime_not_contains_nocase?: InputMaybe<Scalars['String']>;
  applicationsEndTime_not_ends_with?: InputMaybe<Scalars['String']>;
  applicationsEndTime_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  applicationsEndTime_not_in?: InputMaybe<Array<Scalars['String']>>;
  applicationsEndTime_not_starts_with?: InputMaybe<Scalars['String']>;
  applicationsEndTime_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  applicationsEndTime_starts_with?: InputMaybe<Scalars['String']>;
  applicationsEndTime_starts_with_nocase?: InputMaybe<Scalars['String']>;
  applicationsStartTime?: InputMaybe<Scalars['String']>;
  applicationsStartTime_contains?: InputMaybe<Scalars['String']>;
  applicationsStartTime_contains_nocase?: InputMaybe<Scalars['String']>;
  applicationsStartTime_ends_with?: InputMaybe<Scalars['String']>;
  applicationsStartTime_ends_with_nocase?: InputMaybe<Scalars['String']>;
  applicationsStartTime_gt?: InputMaybe<Scalars['String']>;
  applicationsStartTime_gte?: InputMaybe<Scalars['String']>;
  applicationsStartTime_in?: InputMaybe<Array<Scalars['String']>>;
  applicationsStartTime_lt?: InputMaybe<Scalars['String']>;
  applicationsStartTime_lte?: InputMaybe<Scalars['String']>;
  applicationsStartTime_not?: InputMaybe<Scalars['String']>;
  applicationsStartTime_not_contains?: InputMaybe<Scalars['String']>;
  applicationsStartTime_not_contains_nocase?: InputMaybe<Scalars['String']>;
  applicationsStartTime_not_ends_with?: InputMaybe<Scalars['String']>;
  applicationsStartTime_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  applicationsStartTime_not_in?: InputMaybe<Array<Scalars['String']>>;
  applicationsStartTime_not_starts_with?: InputMaybe<Scalars['String']>;
  applicationsStartTime_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  applicationsStartTime_starts_with?: InputMaybe<Scalars['String']>;
  applicationsStartTime_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<RoundFilter>>>;
  payoutStrategy?: InputMaybe<Scalars['String']>;
  payoutStrategy_contains?: InputMaybe<Scalars['String']>;
  payoutStrategy_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutStrategy_ends_with?: InputMaybe<Scalars['String']>;
  payoutStrategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutStrategy_gt?: InputMaybe<Scalars['String']>;
  payoutStrategy_gte?: InputMaybe<Scalars['String']>;
  payoutStrategy_in?: InputMaybe<Array<Scalars['String']>>;
  payoutStrategy_lt?: InputMaybe<Scalars['String']>;
  payoutStrategy_lte?: InputMaybe<Scalars['String']>;
  payoutStrategy_not?: InputMaybe<Scalars['String']>;
  payoutStrategy_not_contains?: InputMaybe<Scalars['String']>;
  payoutStrategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutStrategy_not_ends_with?: InputMaybe<Scalars['String']>;
  payoutStrategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutStrategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  payoutStrategy_not_starts_with?: InputMaybe<Scalars['String']>;
  payoutStrategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutStrategy_starts_with?: InputMaybe<Scalars['String']>;
  payoutStrategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  program?: InputMaybe<Scalars['String']>;
  program_?: InputMaybe<ProgramFilter>;
  program_contains?: InputMaybe<Scalars['String']>;
  program_contains_nocase?: InputMaybe<Scalars['String']>;
  program_ends_with?: InputMaybe<Scalars['String']>;
  program_ends_with_nocase?: InputMaybe<Scalars['String']>;
  program_gt?: InputMaybe<Scalars['String']>;
  program_gte?: InputMaybe<Scalars['String']>;
  program_in?: InputMaybe<Array<Scalars['String']>>;
  program_lt?: InputMaybe<Scalars['String']>;
  program_lte?: InputMaybe<Scalars['String']>;
  program_not?: InputMaybe<Scalars['String']>;
  program_not_contains?: InputMaybe<Scalars['String']>;
  program_not_contains_nocase?: InputMaybe<Scalars['String']>;
  program_not_ends_with?: InputMaybe<Scalars['String']>;
  program_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  program_not_in?: InputMaybe<Array<Scalars['String']>>;
  program_not_starts_with?: InputMaybe<Scalars['String']>;
  program_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  program_starts_with?: InputMaybe<Scalars['String']>;
  program_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectsMetaPtr?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_?: InputMaybe<MetaPtrFilter>;
  projectsMetaPtr_contains?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_contains_nocase?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_ends_with?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_gt?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_gte?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_in?: InputMaybe<Array<Scalars['String']>>;
  projectsMetaPtr_lt?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_lte?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_not?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_not_contains?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_not_ends_with?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_not_in?: InputMaybe<Array<Scalars['String']>>;
  projectsMetaPtr_not_starts_with?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_starts_with?: InputMaybe<Scalars['String']>;
  projectsMetaPtr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projects_?: InputMaybe<RoundProjectFilter>;
  roles_?: InputMaybe<RoundRoleFilter>;
  roundEndTime?: InputMaybe<Scalars['String']>;
  roundEndTime_contains?: InputMaybe<Scalars['String']>;
  roundEndTime_contains_nocase?: InputMaybe<Scalars['String']>;
  roundEndTime_ends_with?: InputMaybe<Scalars['String']>;
  roundEndTime_ends_with_nocase?: InputMaybe<Scalars['String']>;
  roundEndTime_gt?: InputMaybe<Scalars['String']>;
  roundEndTime_gte?: InputMaybe<Scalars['String']>;
  roundEndTime_in?: InputMaybe<Array<Scalars['String']>>;
  roundEndTime_lt?: InputMaybe<Scalars['String']>;
  roundEndTime_lte?: InputMaybe<Scalars['String']>;
  roundEndTime_not?: InputMaybe<Scalars['String']>;
  roundEndTime_not_contains?: InputMaybe<Scalars['String']>;
  roundEndTime_not_contains_nocase?: InputMaybe<Scalars['String']>;
  roundEndTime_not_ends_with?: InputMaybe<Scalars['String']>;
  roundEndTime_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  roundEndTime_not_in?: InputMaybe<Array<Scalars['String']>>;
  roundEndTime_not_starts_with?: InputMaybe<Scalars['String']>;
  roundEndTime_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  roundEndTime_starts_with?: InputMaybe<Scalars['String']>;
  roundEndTime_starts_with_nocase?: InputMaybe<Scalars['String']>;
  roundMetaPtr?: InputMaybe<Scalars['String']>;
  roundMetaPtr_?: InputMaybe<MetaPtrFilter>;
  roundMetaPtr_contains?: InputMaybe<Scalars['String']>;
  roundMetaPtr_contains_nocase?: InputMaybe<Scalars['String']>;
  roundMetaPtr_ends_with?: InputMaybe<Scalars['String']>;
  roundMetaPtr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  roundMetaPtr_gt?: InputMaybe<Scalars['String']>;
  roundMetaPtr_gte?: InputMaybe<Scalars['String']>;
  roundMetaPtr_in?: InputMaybe<Array<Scalars['String']>>;
  roundMetaPtr_lt?: InputMaybe<Scalars['String']>;
  roundMetaPtr_lte?: InputMaybe<Scalars['String']>;
  roundMetaPtr_not?: InputMaybe<Scalars['String']>;
  roundMetaPtr_not_contains?: InputMaybe<Scalars['String']>;
  roundMetaPtr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  roundMetaPtr_not_ends_with?: InputMaybe<Scalars['String']>;
  roundMetaPtr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  roundMetaPtr_not_in?: InputMaybe<Array<Scalars['String']>>;
  roundMetaPtr_not_starts_with?: InputMaybe<Scalars['String']>;
  roundMetaPtr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  roundMetaPtr_starts_with?: InputMaybe<Scalars['String']>;
  roundMetaPtr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  roundStartTime?: InputMaybe<Scalars['String']>;
  roundStartTime_contains?: InputMaybe<Scalars['String']>;
  roundStartTime_contains_nocase?: InputMaybe<Scalars['String']>;
  roundStartTime_ends_with?: InputMaybe<Scalars['String']>;
  roundStartTime_ends_with_nocase?: InputMaybe<Scalars['String']>;
  roundStartTime_gt?: InputMaybe<Scalars['String']>;
  roundStartTime_gte?: InputMaybe<Scalars['String']>;
  roundStartTime_in?: InputMaybe<Array<Scalars['String']>>;
  roundStartTime_lt?: InputMaybe<Scalars['String']>;
  roundStartTime_lte?: InputMaybe<Scalars['String']>;
  roundStartTime_not?: InputMaybe<Scalars['String']>;
  roundStartTime_not_contains?: InputMaybe<Scalars['String']>;
  roundStartTime_not_contains_nocase?: InputMaybe<Scalars['String']>;
  roundStartTime_not_ends_with?: InputMaybe<Scalars['String']>;
  roundStartTime_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  roundStartTime_not_in?: InputMaybe<Array<Scalars['String']>>;
  roundStartTime_not_starts_with?: InputMaybe<Scalars['String']>;
  roundStartTime_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  roundStartTime_starts_with?: InputMaybe<Scalars['String']>;
  roundStartTime_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votingStrategy?: InputMaybe<Scalars['String']>;
  votingStrategy_?: InputMaybe<VotingStrategyFilter>;
  votingStrategy_contains?: InputMaybe<Scalars['String']>;
  votingStrategy_contains_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_ends_with?: InputMaybe<Scalars['String']>;
  votingStrategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_gt?: InputMaybe<Scalars['String']>;
  votingStrategy_gte?: InputMaybe<Scalars['String']>;
  votingStrategy_in?: InputMaybe<Array<Scalars['String']>>;
  votingStrategy_lt?: InputMaybe<Scalars['String']>;
  votingStrategy_lte?: InputMaybe<Scalars['String']>;
  votingStrategy_not?: InputMaybe<Scalars['String']>;
  votingStrategy_not_contains?: InputMaybe<Scalars['String']>;
  votingStrategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_not_ends_with?: InputMaybe<Scalars['String']>;
  votingStrategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  votingStrategy_not_starts_with?: InputMaybe<Scalars['String']>;
  votingStrategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votingStrategy_starts_with?: InputMaybe<Scalars['String']>;
  votingStrategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export enum RoundOrderBy {
  ACCOUNTS = 'accounts',
  APPLICATIONMETAPTR = 'applicationMetaPtr',
  APPLICATIONMETAPTR__ID = 'applicationMetaPtr__id',
  APPLICATIONMETAPTR__POINTER = 'applicationMetaPtr__pointer',
  APPLICATIONMETAPTR__PROTOCOL = 'applicationMetaPtr__protocol',
  APPLICATIONSENDTIME = 'applicationsEndTime',
  APPLICATIONSSTARTTIME = 'applicationsStartTime',
  CREATEDAT = 'createdAt',
  ID = 'id',
  PAYOUTSTRATEGY = 'payoutStrategy',
  PROGRAM = 'program',
  PROGRAM__CREATEDAT = 'program__createdAt',
  PROGRAM__ID = 'program__id',
  PROGRAM__UPDATEDAT = 'program__updatedAt',
  PROJECTS = 'projects',
  PROJECTSMETAPTR = 'projectsMetaPtr',
  PROJECTSMETAPTR__ID = 'projectsMetaPtr__id',
  PROJECTSMETAPTR__POINTER = 'projectsMetaPtr__pointer',
  PROJECTSMETAPTR__PROTOCOL = 'projectsMetaPtr__protocol',
  ROLES = 'roles',
  ROUNDENDTIME = 'roundEndTime',
  ROUNDMETAPTR = 'roundMetaPtr',
  ROUNDMETAPTR__ID = 'roundMetaPtr__id',
  ROUNDMETAPTR__POINTER = 'roundMetaPtr__pointer',
  ROUNDMETAPTR__PROTOCOL = 'roundMetaPtr__protocol',
  ROUNDSTARTTIME = 'roundStartTime',
  TOKEN = 'token',
  UPDATEDAT = 'updatedAt',
  VOTINGSTRATEGY = 'votingStrategy',
  VOTINGSTRATEGY__ID = 'votingStrategy__id',
  VOTINGSTRATEGY__STRATEGYADDRESS = 'votingStrategy__strategyAddress',
  VOTINGSTRATEGY__STRATEGYNAME = 'votingStrategy__strategyName',
  VOTINGSTRATEGY__VERSION = 'votingStrategy__version'
}

export interface Subscription {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<Meta>;
  metaPtr?: Maybe<MetaPtr>;
  metaPtrs: Array<MetaPtr>;
  program?: Maybe<Program>;
  programAccount?: Maybe<ProgramAccount>;
  programAccounts: Array<ProgramAccount>;
  programRole?: Maybe<ProgramRole>;
  programRoles: Array<ProgramRole>;
  programs: Array<Program>;
  qfvote?: Maybe<QfVote>;
  qfvotes: Array<QfVote>;
  round?: Maybe<Round>;
  roundAccount?: Maybe<RoundAccount>;
  roundAccounts: Array<RoundAccount>;
  roundProject?: Maybe<RoundProject>;
  roundProjects: Array<RoundProject>;
  roundRole?: Maybe<RoundRole>;
  roundRoles: Array<RoundRole>;
  rounds: Array<Round>;
  votingStrategies: Array<VotingStrategy>;
  votingStrategy?: Maybe<VotingStrategy>;
}


export type SubscriptionMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type SubscriptionMetaPtrArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionMetaPtrsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaPtrOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<MetaPtrFilter>;
};


export type SubscriptionProgramArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionProgramAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionProgramAccountsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProgramAccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ProgramAccountFilter>;
};


export type SubscriptionProgramRoleArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionProgramRolesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProgramRoleOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ProgramRoleFilter>;
};


export type SubscriptionProgramsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProgramOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ProgramFilter>;
};


export type SubscriptionQfvoteArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionQfvotesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<QfVoteOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<QfVoteFilter>;
};


export type SubscriptionRoundArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionRoundAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionRoundAccountsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundAccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<RoundAccountFilter>;
};


export type SubscriptionRoundProjectArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionRoundProjectsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundProjectOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<RoundProjectFilter>;
};


export type SubscriptionRoundRoleArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionRoundRolesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundRoleOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<RoundRoleFilter>;
};


export type SubscriptionRoundsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RoundOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<RoundFilter>;
};


export type SubscriptionVotingStrategiesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VotingStrategyOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<VotingStrategyFilter>;
};


export type SubscriptionVotingStrategyArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID'];
  subgraphError?: SubgraphErrorPolicy;
};

export interface VotingStrategy {
  __typename?: 'VotingStrategy';
  id: Scalars['ID'];
  round?: Maybe<Round>;
  strategyAddress: Scalars['String'];
  strategyName: Scalars['String'];
  version: Scalars['String'];
  votes?: Maybe<Array<QfVote>>;
}


export type VotingStrategyVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<QfVoteOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QfVoteFilter>;
};

export interface VotingStrategyFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VotingStrategyFilter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<VotingStrategyFilter>>>;
  round_?: InputMaybe<RoundFilter>;
  strategyAddress?: InputMaybe<Scalars['String']>;
  strategyAddress_contains?: InputMaybe<Scalars['String']>;
  strategyAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  strategyAddress_ends_with?: InputMaybe<Scalars['String']>;
  strategyAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategyAddress_gt?: InputMaybe<Scalars['String']>;
  strategyAddress_gte?: InputMaybe<Scalars['String']>;
  strategyAddress_in?: InputMaybe<Array<Scalars['String']>>;
  strategyAddress_lt?: InputMaybe<Scalars['String']>;
  strategyAddress_lte?: InputMaybe<Scalars['String']>;
  strategyAddress_not?: InputMaybe<Scalars['String']>;
  strategyAddress_not_contains?: InputMaybe<Scalars['String']>;
  strategyAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategyAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  strategyAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategyAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategyAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  strategyAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategyAddress_starts_with?: InputMaybe<Scalars['String']>;
  strategyAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategyName?: InputMaybe<Scalars['String']>;
  strategyName_contains?: InputMaybe<Scalars['String']>;
  strategyName_contains_nocase?: InputMaybe<Scalars['String']>;
  strategyName_ends_with?: InputMaybe<Scalars['String']>;
  strategyName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategyName_gt?: InputMaybe<Scalars['String']>;
  strategyName_gte?: InputMaybe<Scalars['String']>;
  strategyName_in?: InputMaybe<Array<Scalars['String']>>;
  strategyName_lt?: InputMaybe<Scalars['String']>;
  strategyName_lte?: InputMaybe<Scalars['String']>;
  strategyName_not?: InputMaybe<Scalars['String']>;
  strategyName_not_contains?: InputMaybe<Scalars['String']>;
  strategyName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategyName_not_ends_with?: InputMaybe<Scalars['String']>;
  strategyName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategyName_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategyName_not_starts_with?: InputMaybe<Scalars['String']>;
  strategyName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategyName_starts_with?: InputMaybe<Scalars['String']>;
  strategyName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
  votes_?: InputMaybe<QfVoteFilter>;
}

export enum VotingStrategyOrderBy {
  ID = 'id',
  ROUND = 'round',
  ROUND__APPLICATIONSENDTIME = 'round__applicationsEndTime',
  ROUND__APPLICATIONSSTARTTIME = 'round__applicationsStartTime',
  ROUND__CREATEDAT = 'round__createdAt',
  ROUND__ID = 'round__id',
  ROUND__PAYOUTSTRATEGY = 'round__payoutStrategy',
  ROUND__ROUNDENDTIME = 'round__roundEndTime',
  ROUND__ROUNDSTARTTIME = 'round__roundStartTime',
  ROUND__TOKEN = 'round__token',
  ROUND__UPDATEDAT = 'round__updatedAt',
  STRATEGYADDRESS = 'strategyAddress',
  STRATEGYNAME = 'strategyName',
  VERSION = 'version',
  VOTES = 'votes'
}

export interface Block {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
}

/** The type for the top-level _meta field */
export interface Meta {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Block;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
}

export enum SubgraphErrorPolicy {
  /** Data will be returned even if the subgraph has indexing errors */
  ALLOW = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  DENY = 'deny'
}

export type FetchMyProgramsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type FetchMyProgramsQueryResult = (
  { __typename?: 'Query' }
  & { programAccounts: Array<(
    { __typename?: 'ProgramAccount' }
    & Pick<ProgramAccount, 'id'>
    & { program: (
      { __typename?: 'Program' }
      & Pick<Program, 'id'>
      & { metaPtr: (
        { __typename?: 'MetaPtr' }
        & Pick<MetaPtr, 'protocol' | 'pointer'>
      ) }
    ) }
  )> }
);


export const FetchMyProgramsDocument = /*#__PURE__*/ gql`
    query fetchMyPrograms($address: String!) {
  programAccounts(where: {address: $address}) {
    id
    program {
      id
      metaPtr {
        protocol
        pointer
      }
    }
  }
}
    `;

/**
 * __useFetchMyProgramsQuery__
 *
 * To run a query within a React component, call `useFetchMyProgramsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMyProgramsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMyProgramsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useFetchMyProgramsQuery(baseOptions: Apollo.QueryHookOptions<FetchMyProgramsQueryResult, FetchMyProgramsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMyProgramsQueryResult, FetchMyProgramsQueryVariables>(FetchMyProgramsDocument, options);
      }
export function useFetchMyProgramsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMyProgramsQueryResult, FetchMyProgramsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMyProgramsQueryResult, FetchMyProgramsQueryVariables>(FetchMyProgramsDocument, options);
        }
export type FetchMyProgramsQueryHookResult = ReturnType<typeof useFetchMyProgramsQuery>;
export type FetchMyProgramsLazyQueryHookResult = ReturnType<typeof useFetchMyProgramsLazyQuery>;