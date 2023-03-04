import { tabCreation } from './tabCreation';

const main = document.querySelector('.mainContent');
const inboxTab = tabCreation('Inbox');

main.appendChild(inboxTab.content);
