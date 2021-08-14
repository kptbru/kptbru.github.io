let blocks = [
    {
      name: 'Сидор Артемьевич Ковпак',
      photo: 'images/sidorKovpak',
      discription:'<b>Здравствуйте, товарищи коммунисты!</b> <br><br> Сегодня мы вам расскажем про известного красного партизана, борца с фашистко-немецкими и бандеровскими окупантами, коммуниста и героя Сидора Артемьевича Ковпака.',
      source:'sidorkovpak.html',
    },
    {
      name: 'Отчуждение',
      photo: 'images/mptbLogo',
      discription:'<b>Здравствуйте, товарищи.</b> <br><br> Сегодня мы расскажем вам об отчуждении трудящегося от плодов его труда при капиталистической системе производства.',
      source:'otchuzhdenie.html',
    }
]

let menuLinks = [
  {
    main: 'index.html',
    about: 'about.html',
    posts: 'posts.html',
    articles: 'articles.html',
    serbia: 'https://www.instagram.com/kptb_srb/?hl=ru',
    kirgiz: 'https://www.instagram.com/kekp_kyrgyzstan/?utm_medium=copy_link',
    ukraine: 'https://www.instagram.com/mptb_ukraina/?hl=ru',
    germany: 'https://www.instagram.com/kpam_de/',
    italy: 'https://www.instagram.com/kptb_italia/',
    newzealand: 'https://www.instagram.com/kptb_nz_aotearoa/',
    videos: 'videos.html',
    joint: 'join.html',
  }
]

let downLinks = [
  {
    name: 'НАШИ КОНТАКТЫ',
    youtube: 'https://www.youtube.com/channel/UCvO2vXE3fLN8W5QiRsMFP6g/featured',
    telegram: 'https://t.me/kptb_org',
    instagram: 'https://www.instagram.com/kptb_russia/?igshid=tzl9uephxohe',
    vk: 'https://vk.com/club180844773',
  }
]

const containe = document.querySelector('.containe');
    let content1 = blocks.map(block => `
        <div class="item">
            <img src="${block.photo}\.jpg" class="photo" alt="photo">
            <br>
            <h2>${block.name}</h2>
            <br>
            <div class="info"><p>${block.discription}</p></div>
            <br>
            <i><a href="${block.source}">Читать подробнее...</a></i>
        </div>
    `);

containe.innerHTML = content1.join('');


const menu = document.querySelector('.menu');

let content2 = menuLinks.map(link => `
    <ul>
        <li class="logo"><a href="${link.main}"><img src="images/kptbIcon.jpg" class="kptbIcon" alt="kptbIcon"></a></li>
        <li><a href="${link.main}">Главная страница</a></li>
        <li><a href="${link.about}">О нас</a></li>
        <li><a href="#">Новости</a>
            <ul lass="dropdown">
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
                <li><a href="${link.italy}">КПТБ Италии</a></li>
                <li><a href="${link.newzealand}">КПТБ Новой Зеландии</a></li>
            </ul>
        </li>
        <li><a href="${link.videos}">Наши видео</a></li>
        <li><a href="${link.joint}">Присоединиться к нам</a></li>
    </ul>
    `);

menu.innerHTML = content2.join('');

const ground = document.querySelector('.ground');
let content3 = downLinks.map(linke => `
    <ul>
        <li class="nazwa">${linke.name}</li>
        <li><a href="${linke.youtube}">Наш Youtube</a></li>
        <li><a href="${linke.telegram}">Наш Telegram</a></li>
        <li><a href="${linke.instagram}">Наш Instagram</a></li>
        <li><a href="${linke.vk}">Наша группа Вконтакте</a></li>
    </ul>
    `);

ground.innerHTML = content3.join('');
