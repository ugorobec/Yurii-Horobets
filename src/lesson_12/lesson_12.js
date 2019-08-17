import './lesson_12.scss';
import { LighterController } from './scripts/lighterController';
import { Light } from './scripts/light';

const control = new LighterController(document.querySelector('body'));
const someLight = new Light (document.querySelector('body'));