import { UnityEngine } from "csharp";
import { singleton } from "tsyringe";
import { EaseType } from "../tween/ease_type";
import { tween } from "../tween/tween";
import { assert } from "../util_common";

@singleton()
export class FadeService {

    speed = 0.2;
    private image: UnityEngine.UI.Image | undefined;

    setFadeImage(image: UnityEngine.UI.Image) {
        this.image = image;
    }

    async out(): Promise<void> {
        assert(this.image);
        this.image.gameObject.SetActive(true);
        await tween(0).to(1, this.speed).setEase(EaseType.Smooth)
            .onUpdate(a => {
                if (this.image) {
                    this.image.color = new UnityEngine.Color(this.image.color.r, this.image.color.g, this.image.color.b, a);
                }
            })
            .run();
    }

    async in(): Promise<void> {
        assert(this.image);
        await tween(1).to(0, this.speed).setEase(EaseType.Smooth)
            .onUpdate(a => {
                if (this.image) {
                    this.image.color = new UnityEngine.Color(this.image.color.r, this.image.color.g, this.image.color.b, a);
                }
            })
            .run();
        this.image.gameObject.SetActive(false);
    }
}