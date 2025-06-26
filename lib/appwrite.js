import { Account, Avatars, Client } from "react-native-appwrite";

export const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("684cfdfa0026478a1c65") // Your Project ID
    .setPlatform("com.sami.demo"); // Your package name / bundle identifier

export const account = new Account(client);

export const avatar = new Avatars(client);
