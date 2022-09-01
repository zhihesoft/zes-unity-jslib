import { UnityEngine } from "csharp";
import { singleton } from "tsyringe";
import { assert, waitForSeconds } from "../util";

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
        if (this.speed <= 0) {
            return;
        }
        const delta = 1 / this.speed * (1 / 30);
        if (this.image.color.a < 1) {
            while (this.image) {
                let a = this.image.color.a;
                a += delta;
                this.image.color = new UnityEngine.Color(this.image.color.r, this.image.color.g, this.image.color.b, a);
                await waitForSeconds(1 / 30);
                if (a >= 1) {
                    break;
                }
            }
        }
    }

    async in(): Promise<void> {
        assert(this.image);
        if (this.speed <= 0) {
            return;
        }
        const delta = 1 / this.speed * (1 / 30);
        if (this.image.color.a > 0) {
            while (this.image) {
                let a = this.image.color.a;
                a -= delta;
                this.image.color = new UnityEngine.Color(this.image.color.r, this.image.color.g, this.image.color.b, a);
                await waitForSeconds(1 / 30);
                if (a <= 0) {
                    break;
                }
            }
        }
        this.image.gameObject.SetActive(false);
    }
}