import './lesson_11.scss';
import { Button } from './scripts/button';
import {TrafficLighter} from './scripts/trafficLighter';
const test = [];

function showModal () {
  const str = prompt('Enter text');
  test.push(str);
}

const btn1 = new Button('Hello ', showModal);
const Lighter = new TrafficLighter();