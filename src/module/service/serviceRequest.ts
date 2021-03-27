/**
 * Calling REST API
 */

import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

class ServiceRquest {
    public request = async (args: AxiosRequestConfig) => {
        const options: AxiosRequestConfig = {
            ...args
        };

        return new Promise((resolve, reject) => {

            const controledAxios = Axios(options);

            controledAxios.then(async (Response: AxiosResponse) => {
                resolve({ success: Response });
            }).catch(async (error: AxiosError) => {
                // tslint:disable no-console
                console.log('API error', error);

                const exceptionHandler = new Error();
                let result = {};

                result = [{
                    errorCode: 'errorCode',
                    header: 'errorHeader',
                    message: 'error message'
                }];

                exceptionHandler.message = JSON.stringify(result);

                reject(exceptionHandler);
            });
        });
    }
}

const XHRInstance = new ServiceRquest();

export { XHRInstance as serviceRequest };