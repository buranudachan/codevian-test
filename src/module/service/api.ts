import { serviceRequest } from "./serviceRequest";

export function getUserDetails() {
    const options: any = {
        method: 'get',
        url: ''
    };
    return serviceRequest.request(options);
}