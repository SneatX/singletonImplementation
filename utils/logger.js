export class Logger {
    static #instance = null;

    constructor() {
        if (Logger.#instance) {
            throw new Error("No se puede crear más de una instancia del Logger. Use Logger.getInstance().");
        }
        this.logs = [];
    }

    static getInstance() {
        if (Logger.#instance === null) {
            Logger.#instance = new Logger();
        }
        return Logger.#instance;
    }

    logInfo(message) {
        this.logs.push(`INFO: ${message}`);
        console.log(`INFO: ${message}`);
    }

    logWarning(message) {
        this.logs.push(`WARNING: ${message}`);
        console.log(`WARNING: ${message}`);
    }

    logError(message) {
        this.logs.push(`ERROR: ${message}`);
        console.log(`ERROR: ${message}`);
    }

    showLogs() {
        console.log(this.logs);
    }
}
