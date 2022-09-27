import { singleton } from "tsyringe";
import { EaseType } from "../tween/ease_type";
import { tween } from "../tween/tween";
import { assert } from "../util_common";

@singleton()
export class FadeService {

    speed = 0.2;
    private canvas: CS.UnityEngine.CanvasGroup | undefined;

    setFadeImage(canvas: CS.UnityEngine.CanvasGroup) {
        this.canvas = canvas;
    }

    async out(): Promise<void> {
        assert(this.canvas);
        this.canvas.gameObject.SetActive(true);
        await tween(0).to(1, this.speed).setEase(EaseType.Smooth)
            .onUpdate(a => {
                if (this.canvas) {
                    this.canvas.alpha = a;
                }
            })
            .run();
    }

    async in(): Promise<void> {
        assert(this.canvas);
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