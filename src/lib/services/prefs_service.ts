import { assert } from "console";
import { isEmpty } from "lodash";
import { singleton } from "tsyringe";


@singleton()
export class PrefsService {
    private users = new Map<string, Prefs>();

    public readonly system = "__system";

    public get(): Prefs
    public get(name?: string): Prefs {
        name = name ?? this.system;
        let prefs = this.users.get(name);
        if (prefs) {
            return prefs;
        }
        prefs = new Prefs(name);
        this.users.set(name, prefs);
        return prefs;
    }
}

export class Prefs {
    constructor(
        public user: string
    ) { }

    get(key: string, defaultValue: string): string;
    get(key: string, defaultValue: number): number;
    get(key: string, defaultValue: boolean): boolean;
    get(key: string, defaultValue: string | number | boolean): string | number | boolean {
        return this.getOfUser(this.user, key, defaultValue);
    }

    set(key: string, value: string | number | boolean) {
        return this.setOfUser(this.user, key, value);
    }

    private getOfUser(user: string, key: string, defaultValue: string | number | boolean): string | number | boolean {
        key = this.getKey(user, key);
        if (typeof defaultValue == "string") {
            return CS.UnityEngine.PlayerPrefs.GetString(key, defaultValue);
        } else if (typeof defaultValue == "boolean") {
            return CS.UnityEngine.PlayerPrefs.GetInt(key, defaultValue ? 1 : 0) != 0;
        } else {
            return CS.UnityEngine.PlayerPrefs.GetInt(key, defaultValue);
        }
    }

    private setOfUser(user: string, key: string, value: string | number | boolean) {
        key = this.getKey(user, key);
        if (typeof value == "string") {
            CS.UnityEngine.PlayerPrefs.SetString(key, value);
        } else if (typeof value == "boolean") {
            CS.UnityEngine.PlayerPrefs.SetInt(key, value ? 1 : 0);
        } else {
            CS.UnityEngine.PlayerPrefs.SetInt(key, value);
        }
    }

    private getKey(user: string, key: string): string {
        assert(!isEmpty(user), "user cannot be empty");
        return `${user}/${key}`;
    }

}