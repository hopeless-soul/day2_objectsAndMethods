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
            if(this.dueDate.getDate() < new Date().getDate()){
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
}
let yesterday = new Date( new Date() );
yesterday.setDate( yesterday.getDate() - 1  );

let task = new Task(0, false, "test", yesterday, "Here the test desc.");
task.toogle();
task.toString();