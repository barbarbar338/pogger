import { cyan, green, grey, magenta, red, yellowBright as yellow } from "chalk";
import * as utils from "./utils";

const {
	infoIcon,
	errorIcon,
	successIcon,
	warningIcon,
	eventIcon,
	debugIcon,
	logIcon,
} = utils.icons;

export const log = utils.createMockLogger(logIcon, grey);
export const info = utils.createMockLogger(infoIcon, cyan);
export const success = utils.createMockLogger(successIcon, green);
export const warning = utils.createMockLogger(warningIcon, yellow);
export const error = utils.createMockLogger(errorIcon, red);
export const event = utils.createMockLogger(eventIcon, magenta);
export const debug = utils.createMockLogger(debugIcon, yellow);
export { utils };
