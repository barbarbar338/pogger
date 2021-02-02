import { cyan, green, grey, red, yellowBright as yellow, ChalkFunction } from "chalk";
import { stdout } from "supports-color";

export type PoggerLogger = (...logs: unknown[]) => void;

export const utils = {
    infoIcon: stdout ? "ℹ" : "i",
    successIcon: stdout ? "✔" : "√",
    warningIcon: stdout ? "⚠" : "‼",
    errorIcon: stdout ? "✖" : "×",
    generateDate: (): string => grey(new Date().toLocaleString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: false }))
}

const log = (logs: unknown[], icon: string, color: ChalkFunction): void => console.log(utils.generateDate(), color(icon), ...logs);

export const createLogger = (icon: string, color: ChalkFunction): PoggerLogger => (...logs: unknown[]) => log(logs, icon, color);
export const info: PoggerLogger = (...logs: unknown[]): void => log(logs, utils.infoIcon, cyan);
export const success: PoggerLogger = (...logs: unknown[]): void => log(logs, utils.successIcon, green);
export const warning: PoggerLogger = (...logs: unknown[]): void => log(logs, utils.warningIcon, yellow);
export const error: PoggerLogger = (...logs: unknown[]): void => log(logs, utils.errorIcon, red);
