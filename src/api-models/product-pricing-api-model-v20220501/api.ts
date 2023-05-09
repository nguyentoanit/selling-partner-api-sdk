/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, see the [Product Pricing v2022-05-01 Use Case Guide](doc:product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
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
 * The common properties for individual requests within a batch.
 * @export
 * @interface BatchRequest
 */
export interface BatchRequest {
    /**
     * The URI associated with an individual request within a batch. For FeaturedOfferExpectedPrice, this should be \'/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice\'.
     * @type {string}
     * @memberof BatchRequest
     */
    uri: string;
    /**
     * 
     * @type {HttpMethod}
     * @memberof BatchRequest
     */
    method: HttpMethod;
    /**
     * Additional HTTP body information associated with an individual request within a batch.
     * @type {{ [key: string]: object; }}
     * @memberof BatchRequest
     */
    body?: { [key: string]: object; };
    /**
     * A mapping of additional HTTP headers to send/receive for an individual request within a batch.
     * @type {{ [key: string]: string; }}
     * @memberof BatchRequest
     */
    headers?: { [key: string]: string; };
}
/**
 * The common properties for responses to individual requests within a batch.
 * @export
 * @interface BatchResponse
 */
export interface BatchResponse {
    /**
     * A mapping of additional HTTP headers to send/receive for an individual request within a batch.
     * @type {{ [key: string]: string; }}
     * @memberof BatchResponse
     */
    headers: { [key: string]: string; };
    /**
     * 
     * @type {HttpStatusLine}
     * @memberof BatchResponse
     */
    status: HttpStatusLine;
}
/**
 * The condition of the item.
 * @export
 * @enum {string}
 */
export enum Condition {
    New = 'New',
    Used = 'Used',
    Collectible = 'Collectible',
    Refurbished = 'Refurbished',
    Club = 'Club'
}

/**
 * A list of error responses returned when a request is unsuccessful.
 * @export
 * @interface Errors
 */
export interface Errors {
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof Errors
     */
    errors: Array<Error>;
}
/**
 * 
 * @export
 * @interface FeaturedOffer
 */
export interface FeaturedOffer {
    /**
     * 
     * @type {OfferIdentifier}
     * @memberof FeaturedOffer
     */
    offerIdentifier: OfferIdentifier;
    /**
     * 
     * @type {Condition}
     * @memberof FeaturedOffer
     */
    condition?: Condition;
    /**
     * 
     * @type {Price}
     * @memberof FeaturedOffer
     */
    price?: Price;
}
/**
 * The item price at or below which the target offer may be featured.
 * @export
 * @interface FeaturedOfferExpectedPrice
 */
export interface FeaturedOfferExpectedPrice {
    /**
     * 
     * @type {MoneyType}
     * @memberof FeaturedOfferExpectedPrice
     */
    listingPrice: MoneyType;
    /**
     * 
     * @type {Points}
     * @memberof FeaturedOfferExpectedPrice
     */
    points?: Points;
}
/**
 * An individual featured offer expected price request for a particular SKU.
 * @export
 * @interface FeaturedOfferExpectedPriceRequest
 */
export interface FeaturedOfferExpectedPriceRequest {
    /**
     * The URI associated with an individual request within a batch. For FeaturedOfferExpectedPrice, this should be \'/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice\'.
     * @type {string}
     * @memberof FeaturedOfferExpectedPriceRequest
     */
    uri: string;
    /**
     * 
     * @type {HttpMethod}
     * @memberof FeaturedOfferExpectedPriceRequest
     */
    method: HttpMethod;
    /**
     * Additional HTTP body information associated with an individual request within a batch.
     * @type {{ [key: string]: object; }}
     * @memberof FeaturedOfferExpectedPriceRequest
     */
    body?: { [key: string]: object; };
    /**
     * A mapping of additional HTTP headers to send/receive for an individual request within a batch.
     * @type {{ [key: string]: string; }}
     * @memberof FeaturedOfferExpectedPriceRequest
     */
    headers?: { [key: string]: string; };
    /**
     * A marketplace identifier. Specifies the marketplace for which data is returned.
     * @type {string}
     * @memberof FeaturedOfferExpectedPriceRequest
     */
    marketplaceId: string;
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof FeaturedOfferExpectedPriceRequest
     */
    sku: string;
}
/**
 * The parameters for an individual request.
 * @export
 * @interface FeaturedOfferExpectedPriceRequestParams
 */
export interface FeaturedOfferExpectedPriceRequestParams {
    /**
     * A marketplace identifier. Specifies the marketplace for which data is returned.
     * @type {string}
     * @memberof FeaturedOfferExpectedPriceRequestParams
     */
    marketplaceId: string;
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof FeaturedOfferExpectedPriceRequestParams
     */
    sku: string;
}
/**
 * 
 * @export
 * @interface FeaturedOfferExpectedPriceResponse
 */
export interface FeaturedOfferExpectedPriceResponse {
    /**
     * A mapping of additional HTTP headers to send/receive for an individual request within a batch.
     * @type {{ [key: string]: string; }}
     * @memberof FeaturedOfferExpectedPriceResponse
     */
    headers: { [key: string]: string; };
    /**
     * 
     * @type {HttpStatusLine}
     * @memberof FeaturedOfferExpectedPriceResponse
     */
    status: HttpStatusLine;
    /**
     * 
     * @type {FeaturedOfferExpectedPriceRequestParams}
     * @memberof FeaturedOfferExpectedPriceResponse
     */
    request: FeaturedOfferExpectedPriceRequestParams;
    /**
     * 
     * @type {FeaturedOfferExpectedPriceResponseBody}
     * @memberof FeaturedOfferExpectedPriceResponse
     */
    body?: FeaturedOfferExpectedPriceResponseBody;
}
/**
 * 
 * @export
 * @interface FeaturedOfferExpectedPriceResponseAllOf
 */
export interface FeaturedOfferExpectedPriceResponseAllOf {
    /**
     * 
     * @type {FeaturedOfferExpectedPriceRequestParams}
     * @memberof FeaturedOfferExpectedPriceResponseAllOf
     */
    request: FeaturedOfferExpectedPriceRequestParams;
    /**
     * 
     * @type {FeaturedOfferExpectedPriceResponseBody}
     * @memberof FeaturedOfferExpectedPriceResponseAllOf
     */
    body?: FeaturedOfferExpectedPriceResponseBody;
}
/**
 * The featured offer expected price response data for a requested SKU.
 * @export
 * @interface FeaturedOfferExpectedPriceResponseBody
 */
export interface FeaturedOfferExpectedPriceResponseBody {
    /**
     * 
     * @type {OfferIdentifier}
     * @memberof FeaturedOfferExpectedPriceResponseBody
     */
    offerIdentifier: OfferIdentifier;
    /**
     * A list of featured offer expected price results for the requested offer.
     * @type {Array<FeaturedOfferExpectedPriceResult>}
     * @memberof FeaturedOfferExpectedPriceResponseBody
     */
    featuredOfferExpectedPriceResults?: Array<FeaturedOfferExpectedPriceResult>;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof FeaturedOfferExpectedPriceResponseBody
     */
    errors?: Array<Error>;
}
/**
 * The featured offer expected price result data for the requested offer.
 * @export
 * @interface FeaturedOfferExpectedPriceResult
 */
export interface FeaturedOfferExpectedPriceResult {
    /**
     * 
     * @type {FeaturedOfferExpectedPrice}
     * @memberof FeaturedOfferExpectedPriceResult
     */
    featuredOfferExpectedPrice?: FeaturedOfferExpectedPrice;
    /**
     * The status of the featured offer expected price computation. Possible values include VALID_FOEP, NO_COMPETING_OFFER, OFFER_NOT_ELIGIBLE, OFFER_NOT_FOUND.
     * @type {string}
     * @memberof FeaturedOfferExpectedPriceResult
     */
    resultStatus: string;
    /**
     * 
     * @type {FeaturedOffer}
     * @memberof FeaturedOfferExpectedPriceResult
     */
    competingFeaturedOffer?: FeaturedOffer;
    /**
     * 
     * @type {FeaturedOffer}
     * @memberof FeaturedOfferExpectedPriceResult
     */
    currentFeaturedOffer?: FeaturedOffer;
}
/**
 * Indicates whether the item is fulfilled by Amazon or by the seller (merchant).
 * @export
 * @enum {string}
 */
export enum FulfillmentType {
    Afn = 'AFN',
    Mfn = 'MFN'
}

/**
 * The request body for the getFeaturedOfferExpectedPriceBatch operation.
 * @export
 * @interface GetFeaturedOfferExpectedPriceBatchRequest
 */
export interface GetFeaturedOfferExpectedPriceBatchRequest {
    /**
     * A batched list of featured offer expected price requests.
     * @type {Array<FeaturedOfferExpectedPriceRequest>}
     * @memberof GetFeaturedOfferExpectedPriceBatchRequest
     */
    requests?: Array<FeaturedOfferExpectedPriceRequest>;
}
/**
 * The response schema for the getFeaturedOfferExpectedPriceBatch operation.
 * @export
 * @interface GetFeaturedOfferExpectedPriceBatchResponse
 */
export interface GetFeaturedOfferExpectedPriceBatchResponse {
    /**
     * A batched list of featured offer expected price responses.
     * @type {Array<FeaturedOfferExpectedPriceResponse>}
     * @memberof GetFeaturedOfferExpectedPriceBatchResponse
     */
    responses?: Array<FeaturedOfferExpectedPriceResponse>;
}
/**
 * The HTTP method associated with an individual request within a batch.
 * @export
 * @enum {string}
 */
export enum HttpMethod {
    Get = 'GET',
    Put = 'PUT',
    Patch = 'PATCH',
    Delete = 'DELETE',
    Post = 'POST'
}

/**
 * The HTTP status line associated with the response to an individual request within a batch. For more information, consult [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html).
 * @export
 * @interface HttpStatusLine
 */
export interface HttpStatusLine {
    /**
     * The HTTP response Status-Code.
     * @type {number}
     * @memberof HttpStatusLine
     */
    statusCode?: number;
    /**
     * The HTTP response Reason-Phase.
     * @type {string}
     * @memberof HttpStatusLine
     */
    reasonPhrase?: string;
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
     * Additional information that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}
/**
 * 
 * @export
 * @interface MoneyType
 */
export interface MoneyType {
    /**
     * The currency code in ISO 4217 format.
     * @type {string}
     * @memberof MoneyType
     */
    currencyCode?: string;
    /**
     * The monetary value.
     * @type {number}
     * @memberof MoneyType
     */
    amount?: number;
}
/**
 * Identifies an offer from a particular seller on an ASIN.
 * @export
 * @interface OfferIdentifier
 */
export interface OfferIdentifier {
    /**
     * A marketplace identifier. Specifies the marketplace for which data is returned.
     * @type {string}
     * @memberof OfferIdentifier
     */
    marketplaceId: string;
    /**
     * The seller identifier for the offer.
     * @type {string}
     * @memberof OfferIdentifier
     */
    sellerId?: string;
    /**
     * The seller stock keeping unit (SKU) of the item. This will only be present for the target offer, which belongs to the requesting seller.
     * @type {string}
     * @memberof OfferIdentifier
     */
    sku?: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof OfferIdentifier
     */
    asin: string;
    /**
     * 
     * @type {FulfillmentType}
     * @memberof OfferIdentifier
     */
    fulfillmentType?: FulfillmentType;
}
/**
 * 
 * @export
 * @interface Points
 */
export interface Points {
    /**
     * The number of points.
     * @type {number}
     * @memberof Points
     */
    pointsNumber?: number;
    /**
     * 
     * @type {MoneyType}
     * @memberof Points
     */
    pointsMonetaryValue?: MoneyType;
}
/**
 * 
 * @export
 * @interface Price
 */
export interface Price {
    /**
     * 
     * @type {MoneyType}
     * @memberof Price
     */
    listingPrice: MoneyType;
    /**
     * 
     * @type {MoneyType}
     * @memberof Price
     */
    shippingPrice?: MoneyType;
    /**
     * 
     * @type {Points}
     * @memberof Price
     */
    points?: Points;
}

/**
 * ProductPricingApi - axios parameter creator
 * @export
 */
export const ProductPricingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeaturedOfferExpectedPriceBatch: async (getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'getFeaturedOfferExpectedPriceBatchRequestBody' is not null or undefined
            assertParamExists('getFeaturedOfferExpectedPriceBatch', 'getFeaturedOfferExpectedPriceBatchRequestBody', getFeaturedOfferExpectedPriceBatchRequestBody)
            const localVarPath = `/batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(getFeaturedOfferExpectedPriceBatchRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductPricingApi - functional programming interface
 * @export
 */
export const ProductPricingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductPricingApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFeaturedOfferExpectedPriceBatchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductPricingApi - factory interface
 * @export
 */
export const ProductPricingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductPricingApiFp(configuration)
    return {
        /**
         * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
         * @param {GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest, options?: any): AxiosPromise<GetFeaturedOfferExpectedPriceBatchResponse> {
            return localVarFp.getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getFeaturedOfferExpectedPriceBatch operation in ProductPricingApi.
 * @export
 * @interface ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest
 */
export interface ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest {
    /**
     * 
     * @type {GetFeaturedOfferExpectedPriceBatchRequest}
     * @memberof ProductPricingApiGetFeaturedOfferExpectedPriceBatch
     */
    readonly getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest
}

/**
 * ProductPricingApi - object-oriented interface
 * @export
 * @class ProductPricingApi
 * @extends {BaseAPI}
 */
export class ProductPricingApi extends BaseAPI {
    /**
     * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPricingApi
     */
    public getFeaturedOfferExpectedPriceBatch(requestParameters: ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest, options?: any) {
        return ProductPricingApiFp(this.configuration).getFeaturedOfferExpectedPriceBatch(requestParameters.getFeaturedOfferExpectedPriceBatchRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}


