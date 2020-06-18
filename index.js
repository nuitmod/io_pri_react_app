//import './news-article.js';
//import { topHeadlinesUrl } from './newsApi.js';

window.addEventListener('load', () => {
  registerSW();
});
/*
async function getNews() {
  const res = await fetch(topHeadlinesUrl);
  const json = await res.json();

  const main = document.querySelector('main');

}
*/
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
