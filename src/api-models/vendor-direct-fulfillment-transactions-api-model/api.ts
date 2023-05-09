/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Transaction Status
 * The Selling Partner API for Direct Fulfillment Transaction Status provides programmatic access to a direct fulfillment vendor\'s transaction status.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * The response schema for the getTransactionStatus operation.
 * @export
 * @interface GetTransactionResponse
 */
export interface GetTransactionResponse {
    /**
     * 
     * @type {TransactionStatus}
     * @memberof GetTransactionResponse
     */
    payload?: TransactionStatus;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetTransactionResponse
     */
    errors?: Array<Error>;
}
/**
 * Error response returned when the request is unsuccessful.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof ModelError
     */
    code: string;
    /**
     * A message that describes the error condition.
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}
/**
 * The transaction status details.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * The unique identifier sent in the \'transactionId\' field in response to the post request of a specific transaction.
     * @type {string}
     * @memberof Transaction
     */
    transactionId: string;
    /**
     * Current processing status of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    status: TransactionStatusEnum;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof Transaction
     */
    errors?: Array<Error>;
}

/**
    * @export
    * @enum {string}
    */
export enum TransactionStatusEnum {
    Failure = 'Failure',
    Processing = 'Processing',
    Success = 'Success'
}

/**
 * The payload for the getTransactionStatus operation.
 * @export
 * @interface TransactionStatus
 */
export interface TransactionStatus {
    /**
     * 
     * @type {Transaction}
     * @memberof TransactionStatus
     */
    transactionStatus?: Transaction;
}

/**
 * VendorTransactionApi - axios parameter creator
 * @export
 */
export const VendorTransactionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the status of the transaction indicated by the specified transactionId.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} transactionId Previously returned in the response to the POST request of a specific transaction.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionStatus: async (transactionId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('getTransactionStatus', 'transactionId', transactionId)
            const localVarPath = `/vendor/directFulfillment/transactions/v1/transactions/{transactionId}`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VendorTransactionApi - functional programming interface
 * @export
 */
export const VendorTransactionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorTransactionApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the status of the transaction indicated by the specified transactionId.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} transactionId Previously returned in the response to the POST request of a specific transaction.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionStatus(transactionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTransactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionStatus(transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VendorTransactionApi - factory interface
 * @export
 */
export const VendorTransactionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorTransactionApiFp(configuration)
    return {
        /**
         * Returns the status of the transaction indicated by the specified transactionId.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} transactionId Previously returned in the response to the POST request of a specific transaction.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionStatus(transactionId: string, options?: any): AxiosPromise<GetTransactionResponse> {
            return localVarFp.getTransactionStatus(transactionId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getTransactionStatus operation in VendorTransactionApi.
 * @export
 * @interface VendorTransactionApiGetTransactionStatusRequest
 */
export interface VendorTransactionApiGetTransactionStatusRequest {
    /**
     * Previously returned in the response to the POST request of a specific transaction.
     * @type {string}
     * @memberof VendorTransactionApiGetTransactionStatus
     */
    readonly transactionId: string
}

/**
 * VendorTransactionApi - object-oriented interface
 * @export
 * @class VendorTransactionApi
 * @extends {BaseAPI}
 */
export class VendorTransactionApi extends BaseAPI {
    /**
     * Returns the status of the transaction indicated by the specified transactionId.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {VendorTransactionApiGetTransactionStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorTransactionApi
     */
    public getTransactionStatus(requestParameters: VendorTransactionApiGetTransactionStatusRequest, options?: any) {
        return VendorTransactionApiFp(this.configuration).getTransactionStatus(requestParameters.transactionId, options).then((request) => request(this.axios, this.basePath));
    }
}


