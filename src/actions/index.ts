import { createAccount } from "./createAccount";
import { loginAccount } from "./loginAccount";
import { logoutAccount } from "./logoutAccount";

export const server = {
    createAccount: createAccount,
    loginAccount: loginAccount,
    logoutAccount: logoutAccount,
}