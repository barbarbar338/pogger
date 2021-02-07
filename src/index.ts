import { cyan, green, red, yellowBright as yellow } from "chalk";
import * as utils from "./utils";

const {
    infoIcon,
    errorIcon,
    successIcon,
    warningIcon
} = utils.icons;

export const info = utils.createLogger(infoIcon, cyan);
export const success = utils.createLogger(successIcon, green);
export const warning = utils.createLogger(warningIcon, yellow);
export const error = utils.createLogger(errorIcon, red);
export { utils };
