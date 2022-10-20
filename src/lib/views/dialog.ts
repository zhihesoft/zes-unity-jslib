import { injectable } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";
import { DialogRef } from "./dialog_ref";
import { ViewRef } from "./view_ref";

export const ZES_DIALOG_DATA = Symbol("zes-dialog-data");

@injectable()
export class Dialog {
    constructor(
        private view: ViewRef
    ) { }

    async open<T = unknown>(cls: constructor<T>, data: unknown): Promise<DialogRef> {
        this.view.container.register(ZES_DIALOG_DATA, { useValue: data });
        const child = this.view.createChild(cls);
        const dlgRef = new DialogRef(child);
        child.container.register(DialogRef, { useValue: dlgRef });
        await child.show();
        return dlgRef;
    }
}