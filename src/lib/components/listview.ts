import { BehaviorSubject, Subject } from "rxjs";
import { inject } from "tsyringe";
import { component } from "../metadata/decorator_view";
import { BindListViewExtra } from "../metadata/metadata_bind";
import { assert } from "../utils";
import { isOnSelected, OnInit } from "../views/view_interfaces";
import { ViewRef, ZES_VIEW_DATA } from "../views/view_ref";

import GameObject = CS.UnityEngine.GameObject;

@component()
export class ListViewComponent<D> implements OnInit {

    constructor(
        @inject(ZES_VIEW_DATA) public data: BindListViewExtra,
        public view: ViewRef,
    ) { }


    private template?: GameObject;
    private onItemSelected = new Subject<D>(); //  item click event
    private items = new BehaviorSubject<D[]>([]);
    private pool: GameObject[] = [];

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
        this.view.destroyChildren(false);
        // this.view.destroy(false);
        const newCount = items.length - this.pool.length;
        for (let i = 0; i < newCount; i++) {
            assert(this.view.outlet, "list view outlet cannot be empty");
            const go = GameObject.Instantiate(this.template, this.view.outlet.transform);
            // logger.debug(`create go at ${i}`);
            this.pool.push(<GameObject>go);
        }

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const host = this.pool[i];
            host.SetActive(true);
            const cv = new ViewRef(this.data.itemClass, this.view);
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