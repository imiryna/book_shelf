// import axios from 'axios';
import { markupModal } from './templateCard.js';
import { getBookById } from '../api.js';

const modalCard = document.getElementById('modalCard');

getBookById('643282b1e85766588626a0b4').then(res => console.log(res));
console.log(markupModal(res));
