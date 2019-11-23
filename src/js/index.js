import { helloUtil } from './shared/utils';

const names = ['Wing', 'Peter', 'Sammy', 'Michelle'];
const greeting = names.reduce(
  (acc, element) => acc += `<li>${helloUtil(element)}</li>`, ''
);

const app = document.getElementById('main');
app.innerHTML = greeting;