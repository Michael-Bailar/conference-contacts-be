// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  profileField: (where?: ProfileFieldWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  profileField: (
    where: ProfileFieldWhereUniqueInput
  ) => ProfileFieldNullablePromise;
  profileFields: (args?: {
    where?: ProfileFieldWhereInput;
    orderBy?: ProfileFieldOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<ProfileField>;
  profileFieldsConnection: (args?: {
    where?: ProfileFieldWhereInput;
    orderBy?: ProfileFieldOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProfileFieldConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProfileField: (data: ProfileFieldCreateInput) => ProfileFieldPromise;
  updateProfileField: (args: {
    data: ProfileFieldUpdateInput;
    where: ProfileFieldWhereUniqueInput;
  }) => ProfileFieldPromise;
  updateManyProfileFields: (args: {
    data: ProfileFieldUpdateManyMutationInput;
    where?: ProfileFieldWhereInput;
  }) => BatchPayloadPromise;
  upsertProfileField: (args: {
    where: ProfileFieldWhereUniqueInput;
    create: ProfileFieldCreateInput;
    update: ProfileFieldUpdateInput;
  }) => ProfileFieldPromise;
  deleteProfileField: (
    where: ProfileFieldWhereUniqueInput
  ) => ProfileFieldPromise;
  deleteManyProfileFields: (
    where?: ProfileFieldWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  profileField: (
    where?: ProfileFieldSubscriptionWhereInput
  ) => ProfileFieldSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProfileFieldType =
  | "EMAIL"
  | "PHONE"
  | "SMS"
  | "INSTAGRAM"
  | "FACEBOOK"
  | "LINKEDIN"
  | "TWITTER";

export type ProfileFieldPrivacy = "PUBLIC" | "PRIVATE" | "CONNECTED";

export type ProfileFieldOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "value_ASC"
  | "value_DESC"
  | "type_ASC"
  | "type_DESC"
  | "privacy_ASC"
  | "privacy_DESC"
  | "preferredContact_ASC"
  | "preferredContact_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "authId_ASC"
  | "authId_DESC"
  | "name_ASC"
  | "name_DESC"
  | "picture_ASC"
  | "picture_DESC"
  | "birthdate_ASC"
  | "birthdate_DESC"
  | "location_ASC"
  | "location_DESC"
  | "industry_ASC"
  | "industry_DESC"
  | "jobtitle_ASC"
  | "jobtitle_DESC"
  | "bio_ASC"
  | "bio_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ProfileFieldUpdateInput {
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
  value?: Maybe<String>;
  type?: Maybe<ProfileFieldType>;
  privacy?: Maybe<ProfileFieldPrivacy>;
  preferredContact?: Maybe<Boolean>;
}

export type ProfileFieldWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ProfileFieldUpdateManyMutationInput {
  value?: Maybe<String>;
  type?: Maybe<ProfileFieldType>;
  privacy?: Maybe<ProfileFieldPrivacy>;
  preferredContact?: Maybe<Boolean>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  authId?: Maybe<String>;
  authId_not?: Maybe<String>;
  authId_in?: Maybe<String[] | String>;
  authId_not_in?: Maybe<String[] | String>;
  authId_lt?: Maybe<String>;
  authId_lte?: Maybe<String>;
  authId_gt?: Maybe<String>;
  authId_gte?: Maybe<String>;
  authId_contains?: Maybe<String>;
  authId_not_contains?: Maybe<String>;
  authId_starts_with?: Maybe<String>;
  authId_not_starts_with?: Maybe<String>;
  authId_ends_with?: Maybe<String>;
  authId_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  picture?: Maybe<String>;
  picture_not?: Maybe<String>;
  picture_in?: Maybe<String[] | String>;
  picture_not_in?: Maybe<String[] | String>;
  picture_lt?: Maybe<String>;
  picture_lte?: Maybe<String>;
  picture_gt?: Maybe<String>;
  picture_gte?: Maybe<String>;
  picture_contains?: Maybe<String>;
  picture_not_contains?: Maybe<String>;
  picture_starts_with?: Maybe<String>;
  picture_not_starts_with?: Maybe<String>;
  picture_ends_with?: Maybe<String>;
  picture_not_ends_with?: Maybe<String>;
  birthdate?: Maybe<String>;
  birthdate_not?: Maybe<String>;
  birthdate_in?: Maybe<String[] | String>;
  birthdate_not_in?: Maybe<String[] | String>;
  birthdate_lt?: Maybe<String>;
  birthdate_lte?: Maybe<String>;
  birthdate_gt?: Maybe<String>;
  birthdate_gte?: Maybe<String>;
  birthdate_contains?: Maybe<String>;
  birthdate_not_contains?: Maybe<String>;
  birthdate_starts_with?: Maybe<String>;
  birthdate_not_starts_with?: Maybe<String>;
  birthdate_ends_with?: Maybe<String>;
  birthdate_not_ends_with?: Maybe<String>;
  location?: Maybe<String>;
  location_not?: Maybe<String>;
  location_in?: Maybe<String[] | String>;
  location_not_in?: Maybe<String[] | String>;
  location_lt?: Maybe<String>;
  location_lte?: Maybe<String>;
  location_gt?: Maybe<String>;
  location_gte?: Maybe<String>;
  location_contains?: Maybe<String>;
  location_not_contains?: Maybe<String>;
  location_starts_with?: Maybe<String>;
  location_not_starts_with?: Maybe<String>;
  location_ends_with?: Maybe<String>;
  location_not_ends_with?: Maybe<String>;
  industry?: Maybe<String>;
  industry_not?: Maybe<String>;
  industry_in?: Maybe<String[] | String>;
  industry_not_in?: Maybe<String[] | String>;
  industry_lt?: Maybe<String>;
  industry_lte?: Maybe<String>;
  industry_gt?: Maybe<String>;
  industry_gte?: Maybe<String>;
  industry_contains?: Maybe<String>;
  industry_not_contains?: Maybe<String>;
  industry_starts_with?: Maybe<String>;
  industry_not_starts_with?: Maybe<String>;
  industry_ends_with?: Maybe<String>;
  industry_not_ends_with?: Maybe<String>;
  jobtitle?: Maybe<String>;
  jobtitle_not?: Maybe<String>;
  jobtitle_in?: Maybe<String[] | String>;
  jobtitle_not_in?: Maybe<String[] | String>;
  jobtitle_lt?: Maybe<String>;
  jobtitle_lte?: Maybe<String>;
  jobtitle_gt?: Maybe<String>;
  jobtitle_gte?: Maybe<String>;
  jobtitle_contains?: Maybe<String>;
  jobtitle_not_contains?: Maybe<String>;
  jobtitle_starts_with?: Maybe<String>;
  jobtitle_not_starts_with?: Maybe<String>;
  jobtitle_ends_with?: Maybe<String>;
  jobtitle_not_ends_with?: Maybe<String>;
  bio?: Maybe<String>;
  bio_not?: Maybe<String>;
  bio_in?: Maybe<String[] | String>;
  bio_not_in?: Maybe<String[] | String>;
  bio_lt?: Maybe<String>;
  bio_lte?: Maybe<String>;
  bio_gt?: Maybe<String>;
  bio_gte?: Maybe<String>;
  bio_contains?: Maybe<String>;
  bio_not_contains?: Maybe<String>;
  bio_starts_with?: Maybe<String>;
  bio_not_starts_with?: Maybe<String>;
  bio_ends_with?: Maybe<String>;
  bio_not_ends_with?: Maybe<String>;
  profile_every?: Maybe<ProfileFieldWhereInput>;
  profile_some?: Maybe<ProfileFieldWhereInput>;
  profile_none?: Maybe<ProfileFieldWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface ProfileFieldCreateInput {
  id?: Maybe<ID_Input>;
  user: UserCreateOneWithoutProfileInput;
  value: String;
  type: ProfileFieldType;
  privacy: ProfileFieldPrivacy;
  preferredContact?: Maybe<Boolean>;
}

export interface ProfileFieldCreateManyWithoutUserInput {
  create?: Maybe<
    ProfileFieldCreateWithoutUserInput[] | ProfileFieldCreateWithoutUserInput
  >;
  connect?: Maybe<
    ProfileFieldWhereUniqueInput[] | ProfileFieldWhereUniqueInput
  >;
}

export interface UserCreateOneWithoutProfileInput {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface ProfileFieldSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProfileFieldWhereInput>;
  AND?: Maybe<
    ProfileFieldSubscriptionWhereInput[] | ProfileFieldSubscriptionWhereInput
  >;
  OR?: Maybe<
    ProfileFieldSubscriptionWhereInput[] | ProfileFieldSubscriptionWhereInput
  >;
  NOT?: Maybe<
    ProfileFieldSubscriptionWhereInput[] | ProfileFieldSubscriptionWhereInput
  >;
}

export interface UserCreateWithoutProfileInput {
  id?: Maybe<ID_Input>;
  authId: String;
  name?: Maybe<String>;
  picture?: Maybe<String>;
  birthdate?: Maybe<String>;
  location?: Maybe<String>;
  industry?: Maybe<String>;
  jobtitle?: Maybe<String>;
  bio?: Maybe<String>;
}

export interface ProfileFieldUpdateManyDataInput {
  value?: Maybe<String>;
  type?: Maybe<ProfileFieldType>;
  privacy?: Maybe<ProfileFieldPrivacy>;
  preferredContact?: Maybe<Boolean>;
}

export interface ProfileFieldUpdateManyWithoutUserInput {
  create?: Maybe<
    ProfileFieldCreateWithoutUserInput[] | ProfileFieldCreateWithoutUserInput
  >;
  delete?: Maybe<ProfileFieldWhereUniqueInput[] | ProfileFieldWhereUniqueInput>;
  connect?: Maybe<
    ProfileFieldWhereUniqueInput[] | ProfileFieldWhereUniqueInput
  >;
  set?: Maybe<ProfileFieldWhereUniqueInput[] | ProfileFieldWhereUniqueInput>;
  disconnect?: Maybe<
    ProfileFieldWhereUniqueInput[] | ProfileFieldWhereUniqueInput
  >;
  update?: Maybe<
    | ProfileFieldUpdateWithWhereUniqueWithoutUserInput[]
    | ProfileFieldUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | ProfileFieldUpsertWithWhereUniqueWithoutUserInput[]
    | ProfileFieldUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<
    ProfileFieldScalarWhereInput[] | ProfileFieldScalarWhereInput
  >;
  updateMany?: Maybe<
    | ProfileFieldUpdateManyWithWhereNestedInput[]
    | ProfileFieldUpdateManyWithWhereNestedInput
  >;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  authId?: Maybe<String>;
}>;

export interface UserUpdateOneRequiredWithoutProfileInput {
  create?: Maybe<UserCreateWithoutProfileInput>;
  update?: Maybe<UserUpdateWithoutProfileDataInput>;
  upsert?: Maybe<UserUpsertWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface ProfileFieldUpsertWithWhereUniqueWithoutUserInput {
  where: ProfileFieldWhereUniqueInput;
  update: ProfileFieldUpdateWithoutUserDataInput;
  create: ProfileFieldCreateWithoutUserInput;
}

export interface UserUpdateWithoutProfileDataInput {
  authId?: Maybe<String>;
  name?: Maybe<String>;
  picture?: Maybe<String>;
  birthdate?: Maybe<String>;
  location?: Maybe<String>;
  industry?: Maybe<String>;
  jobtitle?: Maybe<String>;
  bio?: Maybe<String>;
}

export interface ProfileFieldUpdateWithWhereUniqueWithoutUserInput {
  where: ProfileFieldWhereUniqueInput;
  data: ProfileFieldUpdateWithoutUserDataInput;
}

export interface UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput;
  create: UserCreateWithoutProfileInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  authId: String;
  name?: Maybe<String>;
  picture?: Maybe<String>;
  birthdate?: Maybe<String>;
  location?: Maybe<String>;
  industry?: Maybe<String>;
  jobtitle?: Maybe<String>;
  bio?: Maybe<String>;
  profile?: Maybe<ProfileFieldCreateManyWithoutUserInput>;
}

export interface ProfileFieldCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  value: String;
  type: ProfileFieldType;
  privacy: ProfileFieldPrivacy;
  preferredContact?: Maybe<Boolean>;
}

export interface UserUpdateInput {
  authId?: Maybe<String>;
  name?: Maybe<String>;
  picture?: Maybe<String>;
  birthdate?: Maybe<String>;
  location?: Maybe<String>;
  industry?: Maybe<String>;
  jobtitle?: Maybe<String>;
  bio?: Maybe<String>;
  profile?: Maybe<ProfileFieldUpdateManyWithoutUserInput>;
}

export interface ProfileFieldWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  user?: Maybe<UserWhereInput>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  type?: Maybe<ProfileFieldType>;
  type_not?: Maybe<ProfileFieldType>;
  type_in?: Maybe<ProfileFieldType[] | ProfileFieldType>;
  type_not_in?: Maybe<ProfileFieldType[] | ProfileFieldType>;
  privacy?: Maybe<ProfileFieldPrivacy>;
  privacy_not?: Maybe<ProfileFieldPrivacy>;
  privacy_in?: Maybe<ProfileFieldPrivacy[] | ProfileFieldPrivacy>;
  privacy_not_in?: Maybe<ProfileFieldPrivacy[] | ProfileFieldPrivacy>;
  preferredContact?: Maybe<Boolean>;
  preferredContact_not?: Maybe<Boolean>;
  AND?: Maybe<ProfileFieldWhereInput[] | ProfileFieldWhereInput>;
  OR?: Maybe<ProfileFieldWhereInput[] | ProfileFieldWhereInput>;
  NOT?: Maybe<ProfileFieldWhereInput[] | ProfileFieldWhereInput>;
}

export interface UserUpdateManyMutationInput {
  authId?: Maybe<String>;
  name?: Maybe<String>;
  picture?: Maybe<String>;
  birthdate?: Maybe<String>;
  location?: Maybe<String>;
  industry?: Maybe<String>;
  jobtitle?: Maybe<String>;
  bio?: Maybe<String>;
}

export interface ProfileFieldUpdateWithoutUserDataInput {
  value?: Maybe<String>;
  type?: Maybe<ProfileFieldType>;
  privacy?: Maybe<ProfileFieldPrivacy>;
  preferredContact?: Maybe<Boolean>;
}

export interface ProfileFieldScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  type?: Maybe<ProfileFieldType>;
  type_not?: Maybe<ProfileFieldType>;
  type_in?: Maybe<ProfileFieldType[] | ProfileFieldType>;
  type_not_in?: Maybe<ProfileFieldType[] | ProfileFieldType>;
  privacy?: Maybe<ProfileFieldPrivacy>;
  privacy_not?: Maybe<ProfileFieldPrivacy>;
  privacy_in?: Maybe<ProfileFieldPrivacy[] | ProfileFieldPrivacy>;
  privacy_not_in?: Maybe<ProfileFieldPrivacy[] | ProfileFieldPrivacy>;
  preferredContact?: Maybe<Boolean>;
  preferredContact_not?: Maybe<Boolean>;
  AND?: Maybe<ProfileFieldScalarWhereInput[] | ProfileFieldScalarWhereInput>;
  OR?: Maybe<ProfileFieldScalarWhereInput[] | ProfileFieldScalarWhereInput>;
  NOT?: Maybe<ProfileFieldScalarWhereInput[] | ProfileFieldScalarWhereInput>;
}

export interface ProfileFieldUpdateManyWithWhereNestedInput {
  where: ProfileFieldScalarWhereInput;
  data: ProfileFieldUpdateManyDataInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  authId: String;
  name?: String;
  picture?: String;
  birthdate?: String;
  location?: String;
  industry?: String;
  jobtitle?: String;
  bio?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  authId: () => Promise<String>;
  name: () => Promise<String>;
  picture: () => Promise<String>;
  birthdate: () => Promise<String>;
  location: () => Promise<String>;
  industry: () => Promise<String>;
  jobtitle: () => Promise<String>;
  bio: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  authId: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  picture: () => Promise<AsyncIterator<String>>;
  birthdate: () => Promise<AsyncIterator<String>>;
  location: () => Promise<AsyncIterator<String>>;
  industry: () => Promise<AsyncIterator<String>>;
  jobtitle: () => Promise<AsyncIterator<String>>;
  bio: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProfileField {
  count: Int;
}

export interface AggregateProfileFieldPromise
  extends Promise<AggregateProfileField>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProfileFieldSubscription
  extends Promise<AsyncIterator<AggregateProfileField>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProfileFieldSubscriptionPayload {
  mutation: MutationType;
  node: ProfileField;
  updatedFields: String[];
  previousValues: ProfileFieldPreviousValues;
}

export interface ProfileFieldSubscriptionPayloadPromise
  extends Promise<ProfileFieldSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProfileFieldPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProfileFieldPreviousValuesPromise>() => T;
}

export interface ProfileFieldSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProfileFieldSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProfileFieldSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProfileFieldPreviousValuesSubscription>() => T;
}

export interface ProfileFieldEdge {
  node: ProfileField;
  cursor: String;
}

export interface ProfileFieldEdgePromise
  extends Promise<ProfileFieldEdge>,
    Fragmentable {
  node: <T = ProfileFieldPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProfileFieldEdgeSubscription
  extends Promise<AsyncIterator<ProfileFieldEdge>>,
    Fragmentable {
  node: <T = ProfileFieldSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ProfileField {
  id: ID_Output;
  value: String;
  type: ProfileFieldType;
  privacy: ProfileFieldPrivacy;
  preferredContact?: Boolean;
}

export interface ProfileFieldPromise
  extends Promise<ProfileField>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  value: () => Promise<String>;
  type: () => Promise<ProfileFieldType>;
  privacy: () => Promise<ProfileFieldPrivacy>;
  preferredContact: () => Promise<Boolean>;
}

export interface ProfileFieldSubscription
  extends Promise<AsyncIterator<ProfileField>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  value: () => Promise<AsyncIterator<String>>;
  type: () => Promise<AsyncIterator<ProfileFieldType>>;
  privacy: () => Promise<AsyncIterator<ProfileFieldPrivacy>>;
  preferredContact: () => Promise<AsyncIterator<Boolean>>;
}

export interface ProfileFieldNullablePromise
  extends Promise<ProfileField | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  value: () => Promise<String>;
  type: () => Promise<ProfileFieldType>;
  privacy: () => Promise<ProfileFieldPrivacy>;
  preferredContact: () => Promise<Boolean>;
}

export interface ProfileFieldConnection {
  pageInfo: PageInfo;
  edges: ProfileFieldEdge[];
}

export interface ProfileFieldConnectionPromise
  extends Promise<ProfileFieldConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProfileFieldEdge>>() => T;
  aggregate: <T = AggregateProfileFieldPromise>() => T;
}

export interface ProfileFieldConnectionSubscription
  extends Promise<AsyncIterator<ProfileFieldConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProfileFieldEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProfileFieldSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProfileFieldPreviousValues {
  id: ID_Output;
  value: String;
  type: ProfileFieldType;
  privacy: ProfileFieldPrivacy;
  preferredContact?: Boolean;
}

export interface ProfileFieldPreviousValuesPromise
  extends Promise<ProfileFieldPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  value: () => Promise<String>;
  type: () => Promise<ProfileFieldType>;
  privacy: () => Promise<ProfileFieldPrivacy>;
  preferredContact: () => Promise<Boolean>;
}

export interface ProfileFieldPreviousValuesSubscription
  extends Promise<AsyncIterator<ProfileFieldPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  value: () => Promise<AsyncIterator<String>>;
  type: () => Promise<AsyncIterator<ProfileFieldType>>;
  privacy: () => Promise<AsyncIterator<ProfileFieldPrivacy>>;
  preferredContact: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface User {
  id: ID_Output;
  authId: String;
  name?: String;
  picture?: String;
  birthdate?: String;
  location?: String;
  industry?: String;
  jobtitle?: String;
  bio?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  authId: () => Promise<String>;
  name: () => Promise<String>;
  picture: () => Promise<String>;
  birthdate: () => Promise<String>;
  location: () => Promise<String>;
  industry: () => Promise<String>;
  jobtitle: () => Promise<String>;
  bio: () => Promise<String>;
  profile: <T = FragmentableArray<ProfileField>>(args?: {
    where?: ProfileFieldWhereInput;
    orderBy?: ProfileFieldOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  authId: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  picture: () => Promise<AsyncIterator<String>>;
  birthdate: () => Promise<AsyncIterator<String>>;
  location: () => Promise<AsyncIterator<String>>;
  industry: () => Promise<AsyncIterator<String>>;
  jobtitle: () => Promise<AsyncIterator<String>>;
  bio: () => Promise<AsyncIterator<String>>;
  profile: <T = Promise<AsyncIterator<ProfileFieldSubscription>>>(args?: {
    where?: ProfileFieldWhereInput;
    orderBy?: ProfileFieldOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  authId: () => Promise<String>;
  name: () => Promise<String>;
  picture: () => Promise<String>;
  birthdate: () => Promise<String>;
  location: () => Promise<String>;
  industry: () => Promise<String>;
  jobtitle: () => Promise<String>;
  bio: () => Promise<String>;
  profile: <T = FragmentableArray<ProfileField>>(args?: {
    where?: ProfileFieldWhereInput;
    orderBy?: ProfileFieldOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "ProfileField",
    embedded: false
  },
  {
    name: "ProfileFieldType",
    embedded: false
  },
  {
    name: "ProfileFieldPrivacy",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
