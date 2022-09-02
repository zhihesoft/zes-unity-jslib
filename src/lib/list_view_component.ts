import { UnityEngine } from "csharp";
import { BehaviorSubject, Subject } from "rxjs";
import { inject } from "tsyringe";
import { BindListViewExtra } from "./metadata_bind";
import { assert } from "./util";
import { component } from "./view_decorators";
import { isOnSelected, OnInit } from "./view_interfaces";
import { ViewRef, VIEW_DATA } from "./view_ref";

@component()
export class ListViewComponent<D> implements OnInit {

    constructor(
        @inject(VIEW_DATA) public data: BindListViewExtra,
        public view: ViewRef,
    ) { }


    private template?: UnityEngine.GameObject;
    private onItemSelected = new Subject<D>(); //  item click event
    private items = new BehaviorSubject<D[]>([]);
    private pool: UnityEngine.GameObject[] = [];

    zesOnInit(): void {
        assert(this.data, "list view data cannot be null");
        assert(this.data.itemClass, "list view item class cannot be null");
        this.template = this.view.host?.find(this.data.template ?? "template");
        assert(this.template, `list view template cannot be null: ${this.data.template}`);

        this.template.SetActive(false);
        this.items.subscribe(this.onItemsChanged.bind(this));
    }

    setData(newItems: D[]) {
        this.items.next(newItems);
    }

    private onItemsChanged(items: D[]) {
        assert(this.template, "onItemsChanged failed: template cannot be null");
        this.view.destroy(false);
        const newCount = items.length - this.pool.length;
        for (let i = 0; i < newCount; i++) {
            const go = UnityEngine.GameObject.Instantiate(this.template, this.template.transform.parent);
            // logger.debug(`create go at ${i}`);
            this.pool.push(<UnityEngine.GameObject>go);
        }

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const host = this.pool[i];
            host.SetActive(true);
            const cv = this.view.createChild(this.data.itemClass);
            cv.attach(host, item).then(v => {
                if (isOnSelected(v.component)) {
                    (v.component.zesOnSelected as Subject<D>).subscribe(this.onItemSelected);
                }
            });
        }

        for (let i = items.length; i < this.pool.length; i++) {
            this.pool[i].SetActive(false);
        }
    }
}