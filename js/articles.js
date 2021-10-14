let blocks = [
    {
      name: 'Про Социализм',
      photo: 'images/ivanFranko',
      discription:'Социализм - это соревнование устранить всякую общественное неравенство, всякий эксплуатация и всякое вбожество, ввести справедливый, счастливее настоящего строй, а именно таким способом, чтобы настоящее продукционный капитал, то есть почвы, фабрики, машины и другие орудия труда, а так же всякая сырье, вместо быть частной собственностью нескольких людей, должно перейти в собственность общественности.',
      source:'franko.html',
    },
    {
      name: 'Национальный вопрос в Киргизии',
      photo: 'images/not_white_power_not_black_power_but_workers_power_poster',
      discription:'Здравствуйте товарищи читатели!<br><br>Сегодня на повестке дня в Кыргызстане стоит национальный вопрос. Поводом тому стали две ситуации: В августе мужчина напал на женщину вследствие разговора с ним на кыргызском языке, в июне старшеклассники напали на мальчика причиной тому стала - по версии родителей- межнациональная и даже межрелигиозная рознь.<br>Чтобы внести ясность в этой ситуации в Кыргызстане, и объяснить  явление в принципе, мы обратимся к марксистской  науке и будем её  использовать . В конце  выведем заключение.',
      source:'kirgizArticle.html',
    },
    {
      name: 'В чем же единство российских и украинских пролетариев?',
      photo: 'images/rusukrPlakat',
      discription:'Здравствуйте, товарищи. Недавно президент Российской Федерации, Владимир Владимирович Путин, написал свою, не побоюсь этого слова, скандальную статью о том, что украинцы и русские – один народ, которая почти мгновенно вызвала большое негодование у официального Киева и украинских националистов. Так давайте же и мы выразим свое мнение по данному вопросу с марксистской точки зрения.',
      source:'ukraineArticle.html',
    },
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
    tvorchestvo: 'https://www.instagram.com/souz_proletarskogo_tvorchestva/',
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
                <li><a href="${link.tvorchestvo}">Союз Пролетарского Творчества</a></li>
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
