import { Client, Account, ID } from 'react-native-appwrite';

const client = new Client()
    .setProject('studius')
    .setPlatform('com.company.studius');

export const account = new Account(client);
export const appwriteID = ID;