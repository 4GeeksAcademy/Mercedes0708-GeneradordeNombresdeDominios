/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

string = ''
for (let x of pronoun) {
  for (let i of adj) {
    for (let z of noun) {
      string = x + i + z + '.com'
      console.log(string);
    }
  }
};
