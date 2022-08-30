
import { Subject } from "rxjs";

export interface OnInit {
    zesOnInit(): void;
}

export interface AfterViewInit {
    zesAfterViewInit(): void;
}

export interface OnDestroy {
    zesOnDestroy(): void;
}

export interface OnActiveChanged {
    zesOnActiveChanged(activeStatus: boolean): void;
}

export interface OnSelected<T = unknown> {
    ngOnSelected: Subject<T>;
}

export function isOnSelected(component: unknown): component is OnSelected {
    return (<OnSelected>component).ngOnSelected != undefined;
}

export function isOnInit(component: unknown): component is OnInit {
    return (<OnInit>component).zesOnInit != undefined;
}

export function isAfterViewInit(component: unknown): component is AfterViewInit {
    return (<AfterViewInit>component).zesAfterViewInit != undefined;
}

export function isOnDestroy(component: unknown): component is OnDestroy {
    return (<OnDestroy>component).zesOnDestroy != undefined;
}

export function isOnActiveChanged(component: unknown): component is OnActiveChanged {
    return (<OnActiveChanged>component).zesOnActiveChanged != undefined;
}
