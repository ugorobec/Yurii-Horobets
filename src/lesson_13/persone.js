export class Persone {
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

        great () {
            return 'Hello my name is' + $(this.name);
    }
}
