/*
 ****************************************************************
 ******************    ALL APP CONSTANTS   **********************
 ****************************************************************
 */

import appInfo from "../../package.json";

/**
 * extending app global constants for app name
 * @constant APP_NAME default value
 */
export const APP_NAME: string = appInfo.name.toUpperCase();

/**
 * extending app global constants for app version
 * @constant APP_VERSION default value
 */
export const APP_VERSION = Number(appInfo.version);

/**
 * extending app local storage
 * @constant USER_FIRST_LAUNCH default value
 */
export const USER_FIRST_LAUNCH: string = `@${APP_NAME}_FIRST_TIME_LAUNCH`;

/**
 * extending app global constants for app language
 * @constant LANGUAGE_DEFAULT default value
 */
export const LANGUAGE_DEFAULT: string = "en";

/**
 * extending app global constants for page loading
 * @constant DEFAULT_PAGINATION default value
 */
export const DEFAULT_PAGINATION: number = 8;

/**
 * extending app global constants
 * @constant CACHE_TIME default value
 */
export const CACHE_TIME: number = 1000 * 60; // 1 minute for testing;

/**
 * extending app global constants
 * @constant CACHE_VERSION default value
 */
export const CACHE_VERSION: number = 1; // version 1

/**
 * extending app global constants
 * @constant __ROOT_REDUX_STATE_KEY__ default value
 */
export const __ROOT_REDUX_STATE_KEY__: string = `@${APP_NAME}_REDUX_LOCAL_STATE_PERSIST_KEY`;

/**
 * extending app global constants
 * @constant __AUTHENTICATION_REDUX_STATE_KEY__ default value
 */
export const __AUTHENTICATION_REDUX_STATE_KEY__: string = `@${APP_NAME}_REDUX_LOCAL_AUTHENTICATION_KEY`;
