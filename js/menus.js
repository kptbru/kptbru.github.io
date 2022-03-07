let menuLinks = [
    {
      main: 'index.html',
      about: 'about.html',
      posts: 'posts.html',
      articles: 'articles.html',
      serbia: 'https://www.instagram.com/kptb_srb/?hl=ru',
      ukraine: 'https://www.instagram.com/mptb_ukraina/?hl=ru',
      germany: 'https://www.instagram.com/kpam_de/',
      moldova: 'https://instagram.com/pcmm.ro.rm?utm_medium=copy_link',
      poland: 'https://instagram.com/kpwp_pl?utm_medium=copy_link',
      tvorchestvo: 'https://www.instagram.com/souz_proletarskogo_tvorchestva/',
      italy: 'https://www.instagram.com/kptb_italia/',
      newzealand: 'https://www.instagram.com/kptb_nz_aotearoa/',
      videos: 'videos.html',
      joint: 'join.html',
      kirgiz: 'https://www.instagram.com/kekp_kyrgyzstan/?utm_medium=copy_link',
    }
]

const menu = document.querySelector('.menu');
let topLinksContent = menuLinks.map(link => `
    <a class="brand kptbIcon" href="${link.main}"><img src="images/kptbIcon.jpg" alt="kptbIcon"></a>
    <ul class="navigation-list">
        <li><a href="${link.main}">Главная страница</a></li>
        <li><a href="${link.about}">О нас</a></li>
        <li><a href="#">Новости</a>
            <ul class="dropdown">
                <li><a href="${link.posts}">Посты</a></li>
                <li><a href="${link.articles}">Статьи</a></li>
            </ul>
        </li>
        <li><a href="#">Наши отделы</a>
            <ul class="dropdown">
                <li><a href="${link.serbia}">КПТБ Сербии</a></li>
                <li><a href="${link.kirgiz}">КПТБ Киргизии</a></li>
                <li><a href="${link.ukraine}">МПТБ Украины</a></li>
                <li><a href="${link.germany}">КПТБ Германии</a></li>
                <li><a href="${link.moldova}">КПТБ Молдовы и Румынии</a></li>
                <li><a href="${link.poland}">КПТБ Польши</a></li>
                <li><a href="${link.tvorchestvo}">Союз Пролетарского Творчества</a></li>
                <li><a href="${link.italy}">КПТБ Италии</a></li>
                <li><a href="${link.newzealand}">КПТБ Новой Зеландии</a></li>
            </ul>
        </li>
        <li><a href="${link.videos}">Наши видео</a></li>
        <li><a href="${link.joint}">Присоединиться к нам</a></li>
    </ul>
`);

menu.innerHTML = topLinksContent.join('');


let bottomLinks = [
    {
      name: 'НАШИ КОНТАКТЫ',
      youtube: 'https://www.youtube.com/channel/UCvO2vXE3fLN8W5QiRsMFP6g/featured',
      telegram: 'https://t.me/kptb_org',
      instagram: 'https://www.instagram.com/kptb_russia/?igshid=tzl9uephxohe',
      vk: 'https://vk.com/club180844773',
    }
]

const ground = document.querySelector('.ground');
let bottomLinksContent = bottomLinks.map(linke => `
    <ul>
        <li class="nazwa">${linke.name}</li>
        <li><a href="${linke.youtube}">Наш Youtube</a></li>
        <li><a href="${linke.telegram}">Наш Telegram</a></li>
        <li><a href="${linke.instagram}">Наш Instagram</a></li>
        <li><a href="${linke.vk}">Наша группа Вконтакте</a></li>
    </ul>
    `);

ground.innerHTML = bottomLinksContent.join('');

function addLink() {
  var body_element = document.getElementsByTagName('body')[0];
  var selection;
  selection = window.getSelection();
  var pagelink = "<br /><br /> Источник: <a href='"+document.location.href+"'>"+document.location.href+"</a><br />";
  var copytext = selection + pagelink;
  var newdiv = document.createElement('div');
  newdiv.style.position='absolute';
  newdiv.style.left='-99999px';
  body_element.appendChild(newdiv);
  newdiv.innerHTML = copytext;
  selection.selectAllChildren(newdiv);
  window.setTimeout(function() {body_element.removeChild(newdiv)},0);
}
document.oncopy = addLink;
