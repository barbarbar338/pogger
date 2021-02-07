import { ChalkFunction, grey } from "chalk";
import { stdout } from "supports-color";

const log = (logs: unknown[], icon: string, color: ChalkFunction): void => console.log(generateDate(), color(icon), ...logs);

export type PoggerLogger = (...logs: unknown[]) => void;

export const icons = {
    infoIcon: stdout ? "ℹ" : "i",
    successIcon: stdout ? "✔" : "√",
    warningIcon: stdout ? "⚠" : "‼",
    errorIcon: stdout ? "✖" : "×",
}

export function generateDate(): string {
    const options: Intl.DateTimeFormatOptions = { 
        hour: "numeric", 
        minute: "numeric", 
        second: "numeric", 
        hour12: false 
    }
    const date = new Date().toLocaleString("en-US", options);
    const result = grey(date);
    return result;
}

export function createLogger(icon: string, color: ChalkFunction): PoggerLogger {
    return function logger(...logs: unknown[]): void {
        log(logs, icon, color);
    }
}
