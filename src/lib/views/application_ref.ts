import { inject } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";
import { getLogger } from "../logger";
import { component } from "../metadata/decorator_view";
import { OnInit } from "./view_interfaces";
import { ViewRef, ZES_VIEW_DATA } from "./view_ref";

/**
 * Application Ref
 */
@component()
export class ApplicationRef implements OnInit {

    constructor(
        private view: ViewRef,
        @inject(ZES_VIEW_DATA) public startupInfo: ApplicationStartupInfo
    ) { }

    async zesOnInit() {
        this.view.container.registerInstance(CS.Au.Worlds.World, this.startupInfo.world);
        this.view.container.registerInstance(CS.Au.AssetSet, this.startupInfo.world.assets);
        const root = new ViewRef(this.startupInfo.component, this.view); // App.view.createChild(app);
        await root.attach(this.startupInfo.root);
        logger.info(`Application ${this.startupInfo.world.id} started ~`);
    }
}

/**
 * Application Startup Info
 */
export interface ApplicationStartupInfo {
    root: CS.UnityEngine.GameObject,
    world: CS.Au.Worlds.World,
    component: constructor<unknown>,
}

const logger = getLogger(ApplicationRef.name);