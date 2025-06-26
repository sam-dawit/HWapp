import { UserContext } from "@/contexts/useContext";
import { useContext } from "react";

export const useUser = () => {
    const Context = useContext(UserContext);
    if (!Context) {
        throw new Error("User Must be Used within User Provider");
    }
    return Context;
};
