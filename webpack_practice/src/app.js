import { showAlert } from "./messages";
import $ from 'jquery';
import uuid from 'uuid/v4';

import "./style.css";

document.getElementById('btn-alert')
    .addEventListener('click', showAlert);

$('#btn-jquery').click(() => alert(uuid()));