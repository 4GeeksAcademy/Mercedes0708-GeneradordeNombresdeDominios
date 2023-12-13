/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com"];

  let domainNames = [];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let ext of ext) {
          domainNames.push(`${pronoun}${adj}${noun}${ext}`);
        }
      }
    }
  }
  document.querySelector("#Generate").onclick = () => {
    document.querySelector("#Domain").innerHTML = `<h1>${
      domainNames[Math.floor(Math.random() * domainNames.length)]
    }</h1>`;
  };
};
