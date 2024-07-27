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
  /** Rating custom scalar type for values between 0 and 5 */
  Rating: { input: any; output: any; }
};

export type Book = {
  __typename?: 'Book';
  authorId?: Maybe<Scalars['String']['output']>;
  authorName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  rate?: Maybe<Scalars['Rating']['output']>;
  status?: Maybe<Status>;
  title: Scalars['String']['output'];
};

export type BookOrError = Book | Error;

export type Error = {
  __typename?: 'Error';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Array<Maybe<Book>>>;
  bookById?: Maybe<BookOrError>;
  hello?: Maybe<Scalars['String']['output']>;
  readingBooks?: Maybe<Array<Maybe<Book>>>;
  recipeTagByTitle?: Maybe<RecipeTagsOrError>;
  recipeTags?: Maybe<Array<Maybe<RecipeTag>>>;
  wait?: Maybe<Scalars['String']['output']>;
};


export type QueryBookByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRecipeTagByTitleArgs = {
  title: Scalars['String']['input'];
};


export type QueryWaitArgs = {
  ms: Scalars['Int']['input'];
};

export type RecipeRelation = {
  __typename?: 'RecipeRelation';
  id: Scalars['ID']['output'];
};

export type RecipeTag = {
  __typename?: 'RecipeTag';
  id: Scalars['ID']['output'];
  relatedRecipes?: Maybe<Array<Maybe<RecipeRelation>>>;
  title: Scalars['String']['output'];
};

export type RecipeTagsOrError = Error | RecipeTag;

export enum Status {
  Read = 'read',
  Reading = 'reading',
  Unread = 'unread'
}

export type BookQueryVariables = Exact<{ [key: string]: never; }>;


export type BookQuery = { __typename?: 'Query', book?: Array<{ __typename?: 'Book', id: string, title: string, authorName?: string | null, rate?: any | null, status?: Status | null } | null> | null };


export const BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<BookQuery, BookQueryVariables>;