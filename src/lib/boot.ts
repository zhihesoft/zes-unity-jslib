import { container } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";
import { ApplicationRef } from "./views/application_ref";
import { ViewRef } from "./views/view_ref";

export const rootContainer = container;

export async function bootstrap<T = unknown>(
    root: CS.UnityEngine.GameObject,
    world: CS.Au.Worlds.World,
    component: constructor<T>
) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const view = new ViewRef(ApplicationRef, null as any); // trick, root view has no parent
    await view.attach(root, { world, component, root });
}
