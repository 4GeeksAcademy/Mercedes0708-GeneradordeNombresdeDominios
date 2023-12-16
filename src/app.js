/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // Datos individuales de los dominios.
  let articles = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let exts = [".com"];

  let domainNames = [];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let ext of exts) {
          domainNames.push(`${article}${adjective}${noun}${exts}`);
        }
      }
    }
  }
  const generateButton = document.querySelector("#Generate");
  const domainContainer = document.querySelector("#Domain");
  generateButton.onclick = () => {
    domainContainer.innerHTML = "<h1>Generate a domain name ...</h1>";
    domainNames.forEach(domain => {
      const domainElement = document.createElement("p");
      domainElement.textContent = domain;
      domainContainer.appendChild(domainElement);
    });
  };
};
