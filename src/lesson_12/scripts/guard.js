import { Persone } from './persone';

export class Guard extends Persone {
  constructor(name, age, gender) {
    super(name, age, gender)
  }

  fight() {
    console.log('Fight with other!!!');
  }
}