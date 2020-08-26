import { request } from "./request";

export function login(account, pass) {
    return request({
        method: "post",
        url: "/login",
        params: {
            account,
            pass
        }
    });
}
