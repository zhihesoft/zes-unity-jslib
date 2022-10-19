import { singleton } from "tsyringe";
import { getLogger } from "../logger";
import { EaseType } from "../tween/ease_type";
import { tween } from "../tween/tween";
import { assert } from "../utils";

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
        const canvas = this.canvas;
        await tween(0).to(1, this.speed).setEase(EaseType.Smooth)
            .onUpdate(a => canvas.alpha = Math.max(a, canvas.alpha))
            .run();
    }

    async in(): Promise<void> {
        assert(this.canvas, "fade canvas is not set");
        const canvas = this.canvas;
        await tween(1).to(0, this.speed).setEase(EaseType.Smooth)
            .onUpdate(a => canvas.alpha = Math.min(a, canvas.alpha))
            .run();
        this.canvas.gameObject.SetActive(false);
    }
}

const logger = getLogger(FadeService.name);