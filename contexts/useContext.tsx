import { account } from "@/lib/appwrite";
import { createContext, ReactNode, useEffect, useState } from "react";
import { AppwriteException, ID } from "react-native-appwrite";

export const UserContext = createContext(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);
    async function Register(email: string, password: string) {
        try {
            await account.create(ID.unique(), email, password);
            return await Login(email, password);
        } catch (error) {
            const message =
                error instanceof AppwriteException
                    ? error.message
                    : error instanceof Error
                    ? error.message
                    : String(error);
            throw new Error(message);
        }
    }
    async function Login(email: string, password: string) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
            return response;
        } catch (error) {
            const message =
                error instanceof AppwriteException
                    ? error.message
                    : error instanceof Error
                    ? error.message
                    : String(error);
            throw new Error(message);
        }
    }

    async function logout() {
        try {
            await account.deleteSession("current");
            console.log("LogOut");
        } catch (error) {
            const message =
                error instanceof AppwriteException
                    ? error.message
                    : error instanceof Error
                    ? error.message
                    : String(error);
            throw new Error(message);
        }
    }

    async function getInitialUserValue() {
        try {
            const response = await account.get();
            setUser(response);
            console.log(user);
        } catch (error) {}
    }

    useEffect(() => {
        getInitialUserValue();
    }, []);

    return (
        <UserContext.Provider
            value={{ user, Register, Login, logout, authChecked }}
        >
            {children}
        </UserContext.Provider>
    );
};
