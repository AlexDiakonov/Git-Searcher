import { UserDataInterface } from "./getUser.dto";

const API_KEY = process.env.REACT_APP_TOKEN_KEY

export const getUserData = (userName: string): Promise<UserDataInterface> => {
    return fetch(`https://api.github.com/users/${userName}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }
        return response.json();
    });
};
