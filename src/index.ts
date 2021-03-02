import { cyan, green, grey, magenta, red, yellowBright as yellow } from "chalk";
import * as utils from "./utils";
export * as mock from "./mock";

const {
	infoIcon,
	errorIcon,
	successIcon,
	warningIcon,
	eventIcon,
	debugIcon,
	logIcon,
} = utils.icons;

export const log = utils.createLogger(logIcon, grey);
export const info = utils.createLogger(infoIcon, cyan);
export const success = utils.createLogger(successIcon, green);
export const warning = utils.createLogger(warningIcon, yellow);
export const error = utils.createLogger(errorIcon, red);
export const event = utils.createLogger(eventIcon, magenta);
export const debug = utils.createLogger(debugIcon, yellow);
export { utils };
