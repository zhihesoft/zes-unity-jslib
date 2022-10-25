import { container } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";
import { assert } from "./utils";
import { ApplicationRef } from "./views/application_ref";
import { ViewRef } from "./views/view_ref";

export const rootContainer = container;

export async function bootstrap<T = unknown>(
    id: string,
    assets: CS.Au.AssetSet,
    rootComponent: constructor<T>,
    rootGO: CS.UnityEngine.GameObject
) {
    assert(rootGO != null, `root game object cannot be null`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const view = new ViewRef(ApplicationRef, null as any); // trick, root view has no parent
    await view.attach(rootGO, {
        appId: id,
        assets,
        rootComponent,
        rootGO,
    });
}
