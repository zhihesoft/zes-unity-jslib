import { inject } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";
import { getLogger } from "../logger";
import { component } from "../metadata/decorator_view";
import { OnInit } from "./view_interfaces";
import { ViewRef, ZES_VIEW_DATA } from "./view_ref";
import GameObject = CS.UnityEngine.GameObject;

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
        this.view.container.registerInstance(CS.Au.AssetSet, this.startupInfo.assets);
        const root = new ViewRef(this.startupInfo.rootComponent, this.view); // App.view.createChild(app);
        await root.attach(this.startupInfo.rootGO);
        logger.info(`Application ${this.startupInfo.id} started ~`);
    }
}

/**
 * Application Startup Info
 */
export interface ApplicationStartupInfo {
    id: string;
    assets: CS.Au.AssetSet;
    rootComponent: constructor<unknown>;
    rootGO: GameObject;
}

const logger = getLogger(ApplicationRef.name);