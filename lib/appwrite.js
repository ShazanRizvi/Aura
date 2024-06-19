import { Alert } from "react-native";
import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "6671ef10002db023e37f",
  platform: "com.practice.aura",
  databaseId: "6671f256001db7f34925",
  usersCollectionId: "6671f2740009c34ed7d4",
  videosCollectionId: "6671f28f0027f7c0ccf8",
  storageBucketId: "6671f4ae002d9af0238a",
};

// Init your React Native SDK
const client = new Client();
const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatar.getInitials(username);

    await signIn(email, password);
    //console.log("account ID",newAccount.$id)

    const newUser = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};
export const signIn = async (email, password) => {
  try {
    await account.createEmailPasswordSession(email, password).then(
      function (session) {
        console.log(session);
        return session;
      },
      function (error) {
        console.log(error);
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    //console.log("current account from getCurrentUser: ", currentAccount);

    const currentUser = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
