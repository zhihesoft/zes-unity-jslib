import { singleton } from "tsyringe";
import { App } from "../app";
import { getLogger } from "../logger";
import { ResourceService } from "./resource_service";

export const i18n_zh_cn = "zh-cn";  // 简中
export const i18n_zh_hk = "zh-hk";  // 繁中
export const i18n_en_us = "en-us";  // 英文
export const i18n_ja_jp = "ja-jp";  // 日文
export const i18n_ko_kr = "ko-kr";  // 韩文

@singleton()
export class I18nService {

    public currentLanguage = i18n_zh_cn;

    private langs = new Map<string, Record<number, string>>();

    async load(language: string, assetPath: string): Promise<boolean> {
        logger.info(`i18n service load language ${language}`);
        const loader = App.container.resolve(ResourceService);
        await loader.loadBundle(CS.Au.App.config.bundleLanguage);
        const obj = await loader.loadAsset(assetPath, puer.$typeof(CS.UnityEngine.TextAsset));
        if (obj != null) {
            const txt = obj as CS.UnityEngine.TextAsset;
            this.langs.set(language, JSON.parse(txt.text));
            logger.info(`load language ${language} from ${assetPath} succ!`);
        } else {
            logger.error(`load language ${language} from ${assetPath} failed!`);
        }
        await loader.unloadBundle(CS.Au.App.config.bundleLanguage);
        return obj != null;
    }

    text(id: number): string {
        const obj = this.langs.get(this.currentLanguage);
        if (!obj) {
            return `${id}`;
        }
        return obj[id];
    }
}

const logger = getLogger(I18nService.name);