import { Observable, Subject } from "rxjs";
import { ViewRef } from "./views/view_ref";

export class DialogRef<R = unknown>{
    constructor(
        private view: ViewRef
    ) { }

    private closeNotify: Subject<R | undefined> = new Subject();

    afterClosed(): Observable<R | undefined> {
        return this.closeNotify;
    }

    close(): void;
    close(result: R): void;
    close(result?: R): void {
        this.view.destroy();
        this.closeNotify.next(result);
    }

}