import { Client, Account, Avatars } from "appwrite";

export const client = new Client();

client.setEndpoint("https://nyc.cloud.appwrite.io/v1").setProject("flamality");

export const avatars = new Avatars(client);
