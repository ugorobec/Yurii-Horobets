const DEFAULT_TARGET = document.querySelector('body');
export class NewTaskForm {
    constructor(target = DEFAULT_TARGET) {
        this.target = target;
    }
}