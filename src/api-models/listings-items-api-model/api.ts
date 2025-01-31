/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listing Items API Use Case Guide](doc:listings-items-api-v2020-09-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2020-09-01
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
 * A list of error responses returned when a request is unsuccessful.
 * @export
 * @interface ErrorList
 */
export interface ErrorList {
    /**
     * 
     * @type {Array<Error>}
     * @memberof ErrorList
     */
    errors: Array<Error>;
}
/**
 * An issue with a listings item.
 * @export
 * @interface Issue
 */
export interface Issue {
    /**
     * An issue code that identifies the type of issue.
     * @type {string}
     * @memberof Issue
     */
    code: string;
    /**
     * A message that describes the issue.
     * @type {string}
     * @memberof Issue
     */
    message: string;
    /**
     * The severity of the issue.
     * @type {string}
     * @memberof Issue
     */
    severity: IssueSeverityEnum | 'ERROR' | 'WARNING' | 'INFO';
    /**
     * Name of the attribute associated with the issue, if applicable.
     * @type {string}
     * @memberof Issue
     */
    attributeName?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum IssueSeverityEnum {
    Error = 'ERROR',
    Warning = 'WARNING',
    Info = 'INFO'
}

/**
 * The request body schema for the patchListingsItem operation.
 * @export
 * @interface ListingsItemPatchRequest
 */
export interface ListingsItemPatchRequest {
    /**
     * The Amazon product type of the listings item.
     * @type {string}
     * @memberof ListingsItemPatchRequest
     */
    productType: string;
    /**
     * One or more JSON Patch operations to perform on the listings item.
     * @type {Array<PatchOperation>}
     * @memberof ListingsItemPatchRequest
     */
    patches: Array<PatchOperation>;
}
/**
 * The request body schema for the putListingsItem operation.
 * @export
 * @interface ListingsItemPutRequest
 */
export interface ListingsItemPutRequest {
    /**
     * The Amazon product type of the listings item.
     * @type {string}
     * @memberof ListingsItemPutRequest
     */
    productType: string;
    /**
     * The name of the requirements set for the provided data.
     * @type {string}
     * @memberof ListingsItemPutRequest
     */
    requirements?: ListingsItemPutRequestRequirementsEnum | 'LISTING' | 'LISTING_PRODUCT_ONLY' | 'LISTING_OFFER_ONLY';
    /**
     * JSON object containing structured listings item attribute data keyed by attribute name.
     * @type {object}
     * @memberof ListingsItemPutRequest
     */
    attributes: object;
}

/**
    * @export
    * @enum {string}
    */
export enum ListingsItemPutRequestRequirementsEnum {
    Listing = 'LISTING',
    ListingProductOnly = 'LISTING_PRODUCT_ONLY',
    ListingOfferOnly = 'LISTING_OFFER_ONLY'
}

/**
 * Response containing the results of a submission to the Selling Partner API for Listings Items.
 * @export
 * @interface ListingsItemSubmissionResponse
 */
export interface ListingsItemSubmissionResponse {
    /**
     * A selling partner provided identifier for an Amazon listing.
     * @type {string}
     * @memberof ListingsItemSubmissionResponse
     */
    sku: string;
    /**
     * The status of the listings item submission.
     * @type {string}
     * @memberof ListingsItemSubmissionResponse
     */
    status: ListingsItemSubmissionResponseStatusEnum | 'ACCEPTED' | 'INVALID';
    /**
     * The unique identifier of the listings item submission.
     * @type {string}
     * @memberof ListingsItemSubmissionResponse
     */
    submissionId: string;
    /**
     * Listings item issues related to the listings item submission.
     * @type {Array<Issue>}
     * @memberof ListingsItemSubmissionResponse
     */
    issues?: Array<Issue>;
}

/**
    * @export
    * @enum {string}
    */
export enum ListingsItemSubmissionResponseStatusEnum {
    Accepted = 'ACCEPTED',
    Invalid = 'INVALID'
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
 * Individual JSON Patch operation for an HTTP PATCH request.
 * @export
 * @interface PatchOperation
 */
export interface PatchOperation {
    /**
     * Type of JSON Patch operation. Supported JSON Patch operations include add, replace, and delete. See <https://tools.ietf.org/html/rfc6902>.
     * @type {string}
     * @memberof PatchOperation
     */
    op: PatchOperationOpEnum | 'add' | 'replace' | 'delete';
    /**
     * JSON Pointer path of the element to patch. See <https://tools.ietf.org/html/rfc6902>.
     * @type {string}
     * @memberof PatchOperation
     */
    path: string;
    /**
     * JSON value to add, replace, or delete.
     * @type {Array<object>}
     * @memberof PatchOperation
     */
    value?: Array<object>;
}

/**
    * @export
    * @enum {string}
    */
export enum PatchOperationOpEnum {
    Add = 'add',
    Replace = 'replace',
    Delete = 'delete'
}


/**
 * ListingsApi - axios parameter creator
 * @export
 */
export const ListingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteListingsItem: async (sellerId: string, sku: string, marketplaceIds: Array<string>, issueLocale?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerId' is not null or undefined
            assertParamExists('deleteListingsItem', 'sellerId', sellerId)
            // verify required parameter 'sku' is not null or undefined
            assertParamExists('deleteListingsItem', 'sku', sku)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('deleteListingsItem', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/listings/2020-09-01/items/{sellerId}/{sku}`
                .replace(`{${"sellerId"}}`, encodeURIComponent(String(sellerId)))
                .replace(`{${"sku"}}`, encodeURIComponent(String(sku)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (issueLocale !== undefined) {
                localVarQueryParameter['issueLocale'] = issueLocale;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPatchRequest} body The request body schema for the patchListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchListingsItem: async (sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPatchRequest, issueLocale?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerId' is not null or undefined
            assertParamExists('patchListingsItem', 'sellerId', sellerId)
            // verify required parameter 'sku' is not null or undefined
            assertParamExists('patchListingsItem', 'sku', sku)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('patchListingsItem', 'marketplaceIds', marketplaceIds)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('patchListingsItem', 'body', body)
            const localVarPath = `/listings/2020-09-01/items/{sellerId}/{sku}`
                .replace(`{${"sellerId"}}`, encodeURIComponent(String(sellerId)))
                .replace(`{${"sku"}}`, encodeURIComponent(String(sku)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (issueLocale !== undefined) {
                localVarQueryParameter['issueLocale'] = issueLocale;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPutRequest} body The request body schema for the putListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putListingsItem: async (sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPutRequest, issueLocale?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerId' is not null or undefined
            assertParamExists('putListingsItem', 'sellerId', sellerId)
            // verify required parameter 'sku' is not null or undefined
            assertParamExists('putListingsItem', 'sku', sku)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('putListingsItem', 'marketplaceIds', marketplaceIds)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('putListingsItem', 'body', body)
            const localVarPath = `/listings/2020-09-01/items/{sellerId}/{sku}`
                .replace(`{${"sellerId"}}`, encodeURIComponent(String(sellerId)))
                .replace(`{${"sku"}}`, encodeURIComponent(String(sku)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (issueLocale !== undefined) {
                localVarQueryParameter['issueLocale'] = issueLocale;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ListingsApi - functional programming interface
 * @export
 */
export const ListingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ListingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, issueLocale?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListingsItemSubmissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteListingsItem(sellerId, sku, marketplaceIds, issueLocale, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPatchRequest} body The request body schema for the patchListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPatchRequest, issueLocale?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListingsItemSubmissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchListingsItem(sellerId, sku, marketplaceIds, body, issueLocale, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPutRequest} body The request body schema for the putListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPutRequest, issueLocale?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListingsItemSubmissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putListingsItem(sellerId, sku, marketplaceIds, body, issueLocale, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ListingsApi - factory interface
 * @export
 */
export const ListingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ListingsApiFp(configuration)
    return {
        /**
         * Delete a listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, issueLocale?: string, options?: any): AxiosPromise<ListingsItemSubmissionResponse> {
            return localVarFp.deleteListingsItem(sellerId, sku, marketplaceIds, issueLocale, options).then((request) => request(axios, basePath));
        },
        /**
         * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPatchRequest} body The request body schema for the patchListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPatchRequest, issueLocale?: string, options?: any): AxiosPromise<ListingsItemSubmissionResponse> {
            return localVarFp.patchListingsItem(sellerId, sku, marketplaceIds, body, issueLocale, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPutRequest} body The request body schema for the putListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPutRequest, issueLocale?: string, options?: any): AxiosPromise<ListingsItemSubmissionResponse> {
            return localVarFp.putListingsItem(sellerId, sku, marketplaceIds, body, issueLocale, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteListingsItem operation in ListingsApi.
 * @export
 * @interface ListingsApiDeleteListingsItemRequest
 */
export interface ListingsApiDeleteListingsItemRequest {
    /**
     * A selling partner identifier, such as a merchant account or vendor code.
     * @type {string}
     * @memberof ListingsApiDeleteListingsItem
     */
    readonly sellerId: string

    /**
     * A selling partner provided identifier for an Amazon listing.
     * @type {string}
     * @memberof ListingsApiDeleteListingsItem
     */
    readonly sku: string

    /**
     * A comma-delimited list of Amazon marketplace identifiers for the request.
     * @type {Array<string>}
     * @memberof ListingsApiDeleteListingsItem
     */
    readonly marketplaceIds: Array<string>

    /**
     * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
     * @type {string}
     * @memberof ListingsApiDeleteListingsItem
     */
    readonly issueLocale?: string
}

/**
 * Request parameters for patchListingsItem operation in ListingsApi.
 * @export
 * @interface ListingsApiPatchListingsItemRequest
 */
export interface ListingsApiPatchListingsItemRequest {
    /**
     * A selling partner identifier, such as a merchant account or vendor code.
     * @type {string}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly sellerId: string

    /**
     * A selling partner provided identifier for an Amazon listing.
     * @type {string}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly sku: string

    /**
     * A comma-delimited list of Amazon marketplace identifiers for the request.
     * @type {Array<string>}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly marketplaceIds: Array<string>

    /**
     * The request body schema for the patchListingsItem operation.
     * @type {ListingsItemPatchRequest}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly body: ListingsItemPatchRequest

    /**
     * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
     * @type {string}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly issueLocale?: string
}

/**
 * Request parameters for putListingsItem operation in ListingsApi.
 * @export
 * @interface ListingsApiPutListingsItemRequest
 */
export interface ListingsApiPutListingsItemRequest {
    /**
     * A selling partner identifier, such as a merchant account or vendor code.
     * @type {string}
     * @memberof ListingsApiPutListingsItem
     */
    readonly sellerId: string

    /**
     * A selling partner provided identifier for an Amazon listing.
     * @type {string}
     * @memberof ListingsApiPutListingsItem
     */
    readonly sku: string

    /**
     * A comma-delimited list of Amazon marketplace identifiers for the request.
     * @type {Array<string>}
     * @memberof ListingsApiPutListingsItem
     */
    readonly marketplaceIds: Array<string>

    /**
     * The request body schema for the putListingsItem operation.
     * @type {ListingsItemPutRequest}
     * @memberof ListingsApiPutListingsItem
     */
    readonly body: ListingsItemPutRequest

    /**
     * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
     * @type {string}
     * @memberof ListingsApiPutListingsItem
     */
    readonly issueLocale?: string
}

/**
 * ListingsApi - object-oriented interface
 * @export
 * @class ListingsApi
 * @extends {BaseAPI}
 */
export class ListingsApi extends BaseAPI {
    /**
     * Delete a listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {ListingsApiDeleteListingsItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListingsApi
     */
    public deleteListingsItem(requestParameters: ListingsApiDeleteListingsItemRequest, options?: any) {
        return ListingsApiFp(this.configuration).deleteListingsItem(requestParameters.sellerId, requestParameters.sku, requestParameters.marketplaceIds, requestParameters.issueLocale, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {ListingsApiPatchListingsItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListingsApi
     */
    public patchListingsItem(requestParameters: ListingsApiPatchListingsItemRequest, options?: any) {
        return ListingsApiFp(this.configuration).patchListingsItem(requestParameters.sellerId, requestParameters.sku, requestParameters.marketplaceIds, requestParameters.body, requestParameters.issueLocale, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {ListingsApiPutListingsItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListingsApi
     */
    public putListingsItem(requestParameters: ListingsApiPutListingsItemRequest, options?: any) {
        return ListingsApiFp(this.configuration).putListingsItem(requestParameters.sellerId, requestParameters.sku, requestParameters.marketplaceIds, requestParameters.body, requestParameters.issueLocale, options).then((request) => request(this.axios, this.basePath));
    }
}


