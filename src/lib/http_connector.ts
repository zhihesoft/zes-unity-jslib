import http from "http";
import https from "https";
import { forIn } from "lodash";
import { getLogger } from "./logger";
import { assert } from "./utils";

export const HttpMethod = {
    get: "GET",
    post: "POST",
    delete: "DELETE",
    head: "HEAD",
    options: "OPTIONS",
    put: "PUT",
    patch: "PATCH"
}

export class HttpConnector {

    constructor(
        private baseURL: string
    ) {
        assert(baseURL && baseURL.toLowerCase().startsWith("http"), "baseURL should be a string start with http");
        this.isHttps = baseURL.toLowerCase().startsWith("https");
    }

    private readonly isHttps: boolean;
    private token = "";

    clearAuthToken() {
        this.token = "";
    }

    setAuthToken(token: string): void {
        assert(token && token.length > 0, "token cannot be null or empty");
        this.token = token;
    }

    async get<T>(path: string, args?: unknown): Promise<T> {
        return this.send(path, args, HttpMethod.get);
    }

    async post<T>(path: string, args?: unknown): Promise<T> {
        return this.send(path, args, HttpMethod.post);
    }

    async send<T>(path: string): Promise<T>;
    async send<T>(path: string, args: unknown): Promise<T>;
    async send<T>(path: string, args: unknown, method: string): Promise<T>;
    async send<T>(path: string, args?: unknown, method?: string): Promise<T> {
        const url = new URL(path, this.baseURL);
        const postData = (args && method == HttpMethod.post) ? JSON.stringify(args) : undefined;
        if (method == HttpMethod.get && args) {
            forIn(args, (v, k) => url.searchParams.append(k, v));
        }
        const request = this.isHttps ? https.request : http.request;
        const headers: Record<string, number | string> = { "Content-Type": "application/json" };
        if (this.token.length > 0) {
            headers["Authorization"] = `Bearer ${this.token}`;
        }
        if (postData) {
            headers["Content-Length"] = Buffer.byteLength(postData);
        }

        return new Promise<T>((resolve, reject) => {
            const req = request(url, { method, headers }, (res) => {
                const { statusCode } = res;
                const contentType = res.headers["content-type"];
                if (statusCode != 200) {
                    logger.error(`${url} response ${statusCode}`);
                    res.resume();
                    return reject(new Error(`${statusCode}`));
                }
                if (!this.isJsonContentType(contentType)) {
                    logger.error(`${url} response type is not json: ${contentType}`);
                    res.resume();
                    return reject(new Error(`Invalid content-type: ${contentType}`));
                }
                res.setEncoding("utf8");
                let raw = "";
                res.on("data", chunk => raw += chunk);
                res.on("end", () => {
                    try {
                        const ret = JSON.parse(raw);
                        resolve(ret);
                    } catch (e) {
                        logger.error(`${url} parse json failed, response is: ${raw} `);
                        reject(e);
                    }
                });
            });
            req.on("error", (err) => {
                reject(err);
            });
            if (postData) {
                req.write(postData);
            }
            req.end();
        });
    }

    private isJsonContentType(contentType?: string) {
        if (!contentType) {
            return false;
        }
        if (!/^application\/json/.test(contentType)) {
            return false;
        }
        return true;
    }
}

const logger = getLogger(HttpConnector.name);