class Task {
    constructor(id, done, title, dueDate, desc) {
        this.id = id;
        this.done = done;
        this.title = title;
        this.dueDate = dueDate;
        this.desc = desc;
    }

    toogle() {
        this.done = !this.done; return;
    }

    isOverdue() {
        if(typeof this.dueDate.getDate === 'function'){ // Check if isDate && if a correct date object
            if(this.dueDate.getTime() < new Date().getTime()){
                return true;
            }
        }
        return false;
    }

    toString() {
        let options = { month: 'short', day: 'numeric' };
        console.log( 
            `${this.id}. ` + 
            `[${this.done == true? "x": " "}] ` +
            `${this.title} ` +
            `${typeof this.dueDate.getDate === 'function'? "(" + this.dueDate.toLocaleDateString('en-US', options) + ")" : null}`
        );
        console.log(`   ${this.desc}`);
    }

    postponeHour( hours ) {
        this.dueDate.setHours(this.dueDate.getHours() + hours);
    }
    postponeDay( days ) {
        this.dueDate.setDate(this.dueDate.getDate() + 1);
    }
}
let yesterday = new Date(), tomorow = new Date();
yesterday.setDate( yesterday.getDate() - 1  );
tomorow.setDate( tomorow.getDate() + 1  );

let task = new Task(0, false, "test1", yesterday, "Here the test desc.");
let task2 = new Task(1, false, "test2", tomorow, "Here the test desc.");
task.toogle();
console.log("task1", task.isOverdue());
console.log("task2", task2.isOverdue());
task.toString();
task2.toString();
