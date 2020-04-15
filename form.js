import nodes from "./nodes";
import {getFirebaseData} from "./firebase"

const fromSelector = document.querySelector(
  "body > form > p.from > datetime-picker"
);
const toSelector = document.querySelector(
  "body > form > p.to > datetime-picker"
);
const fetchSelector = document.querySelector(
    "body > form > button.fetch"
  );

let now = new Date();
const hour = 1000 * 60 * 60;
let hourAgo = new Date(now - hour);

fromSelector.value = hourAgo.valueOf();
toSelector.value = now.valueOf();
export let from = hourAgo.valueOf();
export let to = now.valueOf();

fromSelector.addEventListener("blur", event => {
  console.log("from: orig", from);
  from = new Date(event.target.value).valueOf();
  console.log("from new", from);
});

toSelector.addEventListener("blur", event => {
  console.log("to: orig", to);
  to = new Date(event.target.value).valueOf();
  console.log("to: new", to);
});

fetchSelector.addEventListener("click", event => {
    event.preventDefault();
    updateChart();
})

function updateChart() {
  nodes.forEach((node, index) => {
    getFirebaseData(node, index, from, to, true);
  });
}
