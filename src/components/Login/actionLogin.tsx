"use server";

import { handleLogin } from "@/app/services/login";

export const onLogin = async (formData: FormData) => {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const data = { username, password };
    try {
        const res = await handleLogin(data);
        return res;
    } catch (error) {
        console.log("error", error);
        return { error: "Login failed" };
    }

};