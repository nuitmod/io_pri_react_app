//import './news-article.js';
//import { topHeadlinesUrl } from './newsApi.js';
//
// window.addEventListener('load', () => {
//   registerSW();
// });
// /*
// async function getNews() {
//   const res = await fetch(topHeadlinesUrl);
//   const json = await res.json();
//
//   const main = document.querySelector('main');
//
// }
// */
// async function registerSW() {
//   if ('serviceWorker' in navigator) {
//     try {
//       await navigator.serviceWorker.register('./sw.js');
//     } catch (e) {
//       console.log(`SW registration failed`);
//     }
//   }
// }

$('.mobile-tab').hide();

$('#burg').on('click', function(){
  $('.mobile-tab').slideToggle(299)
})

$('#podr_info').hide();
  $('#podr').on('click', function(){
    $('#podr_main').hide(1200);
    $('#podr_info').slideDown(1300)
  })

  $('#open_to_listen').hide();

    $('#listen').on('click', function(){
//      $(this).hide(1888);
      $('#open_to_listen').slideToggle(1000)
    })

  // $('#main_name').on('hover', function(){
  // //  $(this).fadeOut(100);
  //   $(this).fadeIn(500);
  // })
