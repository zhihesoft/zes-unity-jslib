
const loggers = new Map<string, Logger>();

export function getLogger(name: string): Logger {

    let ret = loggers.get(name);
    if (!ret) {
        ret = new Logger(name);
        loggers.set(name, ret);
    }
    return ret;
}

export class Logger {

    constructor(private name: string) { }

    debug(message: string | object) {
        console.log(this.getMessage("[DEBUG]", message));
    }

    info(message: string | object) {
        console.log(this.getMessage("[INFO]", message));
    }

    warn(message: string | object) {
        console.log(this.getMessage("[WARN]", message));
    }

    error(message: string | object) {
        console.log(this.getMessage("[ERROR]", message));
    }

    private getMessage(type: string, message: string | object) {
        return `${type} [${this.name}] ${message}`;
    }

}