class Human {
    constructor (name) {
        this.name = name;
    }
    getName() {
        console.log(`Name is ${this.name}.`);
    }
}

class Developer extends Human {
    constructor (name, language) {
        super(name);
        this.language = language;
    }
    getLanguage () {
        console.log(`I know ${this.language}.`);
    } 
}

class Employee extends Developer {
    constructor (name, language, title) {
        super(name, language);
        this.title = title;
    }
    getInformation () {
        console.log(`My name is ${this.name}. I am ${this.title} ${this.language} developer.`);
    }
}

const olga = new Employee('Olga', 'JS', 'Junior');
olga.getName();
olga.getLanguage();
olga.getInformation();

const vadim = new Employee('Vadim', 'JS', 'Junior');
vadim.getName();
vadim.getLanguage();
vadim.getInformation();
