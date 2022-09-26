import { $typeof } from "puerts";
import { container, singleton } from "tsyringe";
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

    async load(language: string, assetPath: string) {
        const loader = container.resolve(ResourceService);
        const obj = await loader.loadAsset(assetPath, $typeof(CS.UnityEngine.TextAsset));
        const txt = obj as CS.UnityEngine.TextAsset;
        this.langs.set(language, JSON.parse(txt.text));
    }

    text(id: number): string {
        const obj = this.langs.get(this.currentLanguage);
        if (!obj) {
            return `${id}`;
        }
        return obj[id];
    }
}