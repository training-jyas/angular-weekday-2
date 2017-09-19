import {
    A
} from './a';

class B {
    greet: string;

    greetTogether(): void {
        this.greet = 'hello from B';
        console.log(this.greet);
        // i want to use the greet method of class a here.
        let a = new A();
        a.greet();
    }
}

let b = new B();
b.greetTogether();