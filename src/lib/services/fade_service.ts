import { singleton } from "tsyringe";
import { getLogger } from "../logger";
import { EaseType } from "../tween/ease_type";
import { tween } from "../tween/tween";
import { assert } from "../util_common";

@singleton()
export class FadeService {

    constructor() {
        logger.info(`fade service constructor`);
    }

    public speed = 0.2; // fade speed
    public canvas: CS.UnityEngine.CanvasGroup | undefined;

    async out(): Promise<void> {
        assert(this.canvas, "fade canvas is not set");
        this.canvas.gameObject.SetActive(true);
        await tween(0).to(1, this.speed).setEase(EaseType.Smooth)
            .onUpdate(a => {
                if (this.canvas) {
                    this.canvas.alpha = a;
                }
            }).run();
    }

    async in(): Promise<void> {
        assert(this.canvas, "fade canvas is not set");
        await tween(1).to(0, this.speed).setEase(EaseType.Smooth)
            .onUpdate(a => {
                if (this.canvas) {
                    this.canvas.alpha = a;
                }
            })
            .run();
        this.canvas.gameObject.SetActive(false);
    }
}

const logger = getLogger(FadeService.name);