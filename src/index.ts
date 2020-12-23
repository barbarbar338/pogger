import { cyan, green, grey, red, yellowBright as yellow } from "chalk";
import { stdout } from "supports-color";

const infoIcon = stdout ? "ℹ" : "i";
const successIcon = stdout ? "✔" : "√";
const warningIcon = stdout ? "⚠" : "‼";
const errorIcon = stdout ? "✖" : "×";

export const info = (message: string): string => log(message, infoIcon, cyan);
export const success = (message: string): string => log(message, successIcon, green);
export const warning = (message: string): string => log(message, warningIcon, yellow);
export const error = (message: string): string => log(message, errorIcon, red);

function log(message: string, icon: string, color: (text: unknown) => string): string {
    const date = generateDate();
    const log = `${date} ${color(icon)} ${message}`;
    console.log(log);
    return log;
}

function generateDate(): string {
    const date = new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    });
    const colored = grey(date);
    return colored;
}
