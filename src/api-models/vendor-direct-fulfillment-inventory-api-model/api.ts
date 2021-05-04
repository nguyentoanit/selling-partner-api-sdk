/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor\'s inventory updates.
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
 * 
 * @export
 * @interface InventoryUpdate
 */
export interface InventoryUpdate {
    /**
     * 
     * @type {PartyIdentification}
     * @memberof InventoryUpdate
     */
    sellingParty: PartyIdentification;
    /**
     * When true, this request contains a full feed. Otherwise, this request contains a partial feed. When sending a full feed, you must send information about all items in the warehouse. Any items not in the full feed are updated as not available. When sending a partial feed, only include the items that need an update to inventory. The status of other items will remain unchanged.
     * @type {boolean}
     * @memberof InventoryUpdate
     */
    isFullUpdate: boolean;
    /**
     * A list of inventory items with updated details, including quantity available.
     * @type {Array<ItemDetails>}
     * @memberof InventoryUpdate
     */
    items: Array<ItemDetails>;
}
/**
 * Updated inventory details for an item.
 * @export
 * @interface ItemDetails
 */
export interface ItemDetails {
    /**
     * The buyer selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.
     * @type {string}
     * @memberof ItemDetails
     */
    buyerProductIdentifier?: string;
    /**
     * The vendor selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.
     * @type {string}
     * @memberof ItemDetails
     */
    vendorProductIdentifier?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof ItemDetails
     */
    availableQuantity: ItemQuantity;
    /**
     * When true, the item is permanently unavailable.
     * @type {boolean}
     * @memberof ItemDetails
     */
    isObsolete?: boolean;
}
/**
 * Details of item quantity.
 * @export
 * @interface ItemQuantity
 */
export interface ItemQuantity {
    /**
     * Quantity of units available for a specific item.
     * @type {number}
     * @memberof ItemQuantity
     */
    amount?: number;
    /**
     * Unit of measure for the available quantity.
     * @type {string}
     * @memberof ItemQuantity
     */
    unitOfMeasure: string;
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
 * 
 * @export
 * @interface PartyIdentification
 */
export interface PartyIdentification {
    /**
     * Assigned identification for the party.
     * @type {string}
     * @memberof PartyIdentification
     */
    partyId: string;
}
/**
 * The request body for the submitInventoryUpdate operation.
 * @export
 * @interface SubmitInventoryUpdateRequest
 */
export interface SubmitInventoryUpdateRequest {
    /**
     * 
     * @type {InventoryUpdate}
     * @memberof SubmitInventoryUpdateRequest
     */
    inventory?: InventoryUpdate;
}
/**
 * The response schema for the submitInventoryUpdate operation.
 * @export
 * @interface SubmitInventoryUpdateResponse
 */
export interface SubmitInventoryUpdateResponse {
    /**
     * 
     * @type {TransactionReference}
     * @memberof SubmitInventoryUpdateResponse
     */
    payload?: TransactionReference;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof SubmitInventoryUpdateResponse
     */
    errors?: Array<Error>;
}
/**
 * 
 * @export
 * @interface TransactionReference
 */
export interface TransactionReference {
    /**
     * GUID to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction.
     * @type {string}
     * @memberof TransactionReference
     */
    transactionId?: string;
}

/**
 * UpdateInventoryApi - axios parameter creator
 * @export
 */
export const UpdateInventoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} warehouseId Identifier for the warehouse for which to update inventory.
         * @param {SubmitInventoryUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInventoryUpdate: async (warehouseId: string, body: SubmitInventoryUpdateRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'warehouseId' is not null or undefined
            assertParamExists('submitInventoryUpdate', 'warehouseId', warehouseId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('submitInventoryUpdate', 'body', body)
            const localVarPath = `/vendor/directFulfillment/inventory/v1/warehouses/{warehouseId}/items`
                .replace(`{${"warehouseId"}}`, encodeURIComponent(String(warehouseId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * UpdateInventoryApi - functional programming interface
 * @export
 */
export const UpdateInventoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UpdateInventoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} warehouseId Identifier for the warehouse for which to update inventory.
         * @param {SubmitInventoryUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitInventoryUpdate(warehouseId: string, body: SubmitInventoryUpdateRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubmitInventoryUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitInventoryUpdate(warehouseId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UpdateInventoryApi - factory interface
 * @export
 */
export const UpdateInventoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UpdateInventoryApiFp(configuration)
    return {
        /**
         * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} warehouseId Identifier for the warehouse for which to update inventory.
         * @param {SubmitInventoryUpdateRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInventoryUpdate(warehouseId: string, body: SubmitInventoryUpdateRequest, options?: any): AxiosPromise<SubmitInventoryUpdateResponse> {
            return localVarFp.submitInventoryUpdate(warehouseId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for submitInventoryUpdate operation in UpdateInventoryApi.
 * @export
 * @interface UpdateInventoryApiSubmitInventoryUpdateRequest
 */
export interface UpdateInventoryApiSubmitInventoryUpdateRequest {
    /**
     * Identifier for the warehouse for which to update inventory.
     * @type {string}
     * @memberof UpdateInventoryApiSubmitInventoryUpdate
     */
    readonly warehouseId: string

    /**
     * 
     * @type {SubmitInventoryUpdateRequest}
     * @memberof UpdateInventoryApiSubmitInventoryUpdate
     */
    readonly body: SubmitInventoryUpdateRequest
}

/**
 * UpdateInventoryApi - object-oriented interface
 * @export
 * @class UpdateInventoryApi
 * @extends {BaseAPI}
 */
export class UpdateInventoryApi extends BaseAPI {
    /**
     * Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {UpdateInventoryApiSubmitInventoryUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UpdateInventoryApi
     */
    public submitInventoryUpdate(requestParameters: UpdateInventoryApiSubmitInventoryUpdateRequest, options?: any) {
        return UpdateInventoryApiFp(this.configuration).submitInventoryUpdate(requestParameters.warehouseId, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}


