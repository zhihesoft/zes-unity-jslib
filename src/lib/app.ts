import { container } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";
import { RootComponent } from "./components/root";
import { getLogger } from "./logger";
import { I18nService } from "./services/i18n_service";
import { assert } from "./util_common";
import { ViewRef } from "./view_ref";

export class App {
    
    public static version: string = CS.UnityEngine.Application.version;
    public static view: ViewRef;
    private static languageService: I18nService;

    public static async bootstrap<T>(app: constructor<T>, path: string) {
        logger.info(`app@${App.version} bootstrap on ${path} with ${app.name}`);
        App.view = await ViewRef.createRootView(RootComponent, path);

        const appview = App.view.createChild(app);
        assert(App.view.host);
        appview.attach(App.view.host);
    }

    public static i18n(id: number) {
        if (this.languageService == null) {
            this.languageService = container.resolve(I18nService);
        }
        return this.languageService.text(id); // `i18n=${id}`;
    }
}

const logger = getLogger(App.name);
