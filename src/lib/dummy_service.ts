import { singleton } from "tsyringe";

@singleton()
export class DummyService {
    testFunc() {
        console.log("in test function");
    }
}