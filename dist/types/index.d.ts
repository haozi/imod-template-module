export default class HelloWorld {
    whoami: string;
    constructor(whoami: string);
    say(): Promise<string>;
}
