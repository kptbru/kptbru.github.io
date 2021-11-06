let menuLinks = [
    {
      main: 'index.html',
      about: 'about.html',
      posts: 'posts.html',
      articles: 'articles.html',
      serbia: 'https://www.instagram.com/kptb_srb/?hl=ru',
      ukraine: 'https://www.instagram.com/mptb_ukraina/?hl=ru',
      germany: 'https://www.instagram.com/kpam_de/',
      tvorchestvo: 'https://www.instagram.com/souz_proletarskogo_tvorchestva/',
      italy: 'https://www.instagram.com/kptb_italia/',
      newzealand: 'https://www.instagram.com/kptb_nz_aotearoa/',
      videos: 'videos.html',
      joint: 'join.html',
      kirgiz: 'https://www.instagram.com/kekp_kyrgyzstan/?utm_medium=copy_link',
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

const menu = document.querySelector('.menu');
    let content1 = menuLinks.map(link => `
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

menu.innerHTML = content1.join('');

const ground = document.querySelector('.ground');
let content2 = downLinks.map(linke => `
    <ul>
        <li class="nazwa">${linke.name}</li>
        <li><a href="${linke.youtube}">Наш Youtube</a></li>
        <li><a href="${linke.telegram}">Наш Telegram</a></li>
        <li><a href="${linke.instagram}">Наш Instagram</a></li>
        <li><a href="${linke.vk}">Наша группа Вконтакте</a></li>
    </ul>
    `);

ground.innerHTML = content2.join('');

const tabs = document.querySelectorAll('.tabsWrap a');
const sections = document.querySelectorAll('.tabsWrap section');

for(let i=0; i<tabs.length; i++){
  tabs[i].addEventListener('click',function showTabs(e){
      // otmena standartnogo sobitia
      e.preventDefault();
      //console.log(i)
      for(let j=0; j<sections.length; j++){
          if(i == j){
              sections[j].style.display = "block";
          }
          else{
              sections[j].style.display = "none";
          }
      }
  });
}

const rusVerse = document.querySelector('.rusVerse');
    let content3 = (`
    <br>
    <br>
    <strong>Здравствуйте, товарищи!</strong>
    <br>
    <br>
    <p>Сегодня мы расскажем про Великую Октябрьскую социалистическую революцию. Она произошла в ноябре 1917 года в ночь с 6 по 7 число. По ее итогам было свергнуто временное правительство и начался процесс установления советской власти на 1/6 части суши, было создано передовое социалистическое государство, где власть впервые в истории принадлежала рабочему классу.</p>
    <br>
    <br>
    <strong>Предыстория</strong>
    <br>
    <br>
    <p>Осень 1917 года. Российская Империя ведет войну с Центральными державами. Немецкие войска уже стояли у ворот Риги. Царская Россия потеряла Польшу, Западную Белоруссию и часть Прибалтики. Народ устал от войны. Промышленность и сельское хозяйство страны оказались на грани коллапса.</p>
    <br>
    <div class="article-photo">
        <img src="images/russian_front.png" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <p>В стране был катастрофический финансовый кризис. Крестьяне обнищали из-за войны и нещадной эксплуатации со стороны помещиков и кулаков. Социально-экономические реформы либо вообще не проводились, либо были неуспешны. Царь Николай II отрекся от престола и власть перешла к временному правительству, которое не очень хотело идти на уступки рабочему классу и продолжало кровопролитную империалистическую войну "до победного конца", что не устраивало подавляющее большинство населения. Власть была ослаблена противоречиями между разными политическими силами. Произошел Корниловский мятеж, который хоть и был подавлен, но все-таки еще больше подорвал авторитет правительства Керенского. Сложилась революционная ситуация:<br>1) Верхи не могли управлять по-старому — невозможность господствующего класса сохранять в неизменном виде своё управление;<br>2) Низы не хотят жить по-старому — резкое обострение выше обычной нужды и бедствий угнетённых классов и их настойчивое желание изменений своей жизни в лучшую сторону;<br>3) Значительное повышение активности масс, привлекаемых как всей обстановкой кризиса, так и самими «верхами» к самостоятельному историческому выступлению.</p>
    <br>
    <div class="article-photo">
        <img src="images/odno_ugnetenie.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <br>
    <strong>Основные события</strong>
    <br>
    <br>
    <p>3 июля 1917 в Петрограде начались волнения с требованием свержения Временного правительства. Контрреволюционные части по указу правительства для подавления мирной демонстрации применили оружие. Начались аресты, восстановлена смертная казнь.</p>
    <br>
    <p>Двоевластие окончилось победой буржуазии. События 3-5 июля показали, что буржуазное Временное правительство не намерено выполнять требования трудящихся, и большевикам стало ясно, что мирным путем взять власть уже нельзя.</p>
    <br>
    <p>На VI съезде РСДРП(б), который состоялся с 26 июля по 3 августа 1917 г., партия взяла ориентир на социалистическую революцию путем вооруженного восстания</p>
    <br>
    <p>На августовском Государственном совещании в Москве буржуазия намеревалась объявить Л.Г. Корнилова военным диктатором и приурочить к этому событию разгон Советов. Но активное революционное выступление сорвало планы буржуазии. Тогда Корнилов 23 августа двинул войска на Петроград.</p>
    <br>
    <p>Большевики, проводя большую агитационную работу среди трудящихся масс и солдат, разъясняли смысл заговора и создавали революционные центры для борьбы с корниловщиной. Мятеж был подавлен, а народ окончательно понял, что большевистская партия – это единственная партия, которая последовательно и бескомпромиссно отстаивает интересы трудящихся.</p>
    <br>
    <p>24 сентября большевики получили 51% голосов в районные думы. Буржуазные партии и Временное правительство терпели глубокий кризис, не имея опоры в массах.</p>
    <br>
    <p>В середине сентября В.И. Ленин разработал план вооруженного восстания и пути его осуществления. Главной целью октябрьской революции было завоевание власти Советами.</p>
    <br>
    <div class="article-photo">
        <img src="images/sovetskaya_vlast.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <br>
    <strong>Красный Октябрь</strong>
    <br>
    <br>
    <p>12 октября был создан Военно-революционный комитет (ВРК) – центр по подготовке вооруженного восстания. Зиновьев и Каменев, противники социалистической революции, выдали сроки восстания Временному правительству.</p>
    <br>
    <p>Восстание началось в ночь на 24 октября за день открытия II съезда Советов. Правительство сразу же удалось изолировать от верных ему вооруженных частей.</p>
    <br>
    <p>25 октября В.И. Ленин прибыл в Смольный и лично руководил восстанием в Петрограде. В ходе октябрьской революции были захвачены важнейшие объекты такие, как мосты, телеграф, правительственные учреждения.</p>
    <br>
    <p>Утром 25 октября 1917 г. ВРК объявил о свержении Временного правительства и передаче власти Петроградскому Совету рабочих и солдатских депутатов. 26 октября был захвачен Зимний дворец и арестованы члены Временного правительства.</p>
    <br>
    <p>Октябрьская революция в России свершилась при полной поддержке народных масс. Союз рабочего класса и крестьянства, переход вооруженной армии на сторону революции, слабость буржуазии определили итоги октябрьской революции 1917 года.</p>
    <br>
    <div class="article-photo">
        <img src="images/vsa_vlast_sovietam.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <p>25 и 26 октября 1917 г. прошел II Всероссийский съезд Советов, на котором был избран Всероссийский Центральный Исполнительный Комитет (ВЦИК) и образовано первое Советское правительство - Совет Народных Комиссаров (СНК). Председателем СНК был избран В.И. Ленин. Он выдвинул два Декрета: «Декрет о мире», который призывал воюющие страны прекратить военные действия, и «Декрет о земле», выражающий интересы крестьян.</p>
    <br>
    <p>Принятые Декреты способствовали победе Советской власти в регионах страны.</p>
    <br>
    <p>Бои в Москве продолжались до 3 ноября, когда Комитет общественной безопасности согласился сложить оружие. Октябрьская революция была сразу поддержана в Центральном промышленном районе, где местные Советы рабочих депутатов уже фактически установили свою власть, в Прибалтике и Белоруссии Советская власть утвердилась в октябре – ноябре 1917 года.</p>
    <br>
    <p>Революционная борьба в Сибири Закавказье затянулась до конца гражданской войны (1920-1921 гг.), которая явилась последствием октябрьской революции 1917 года.</p>
    <br>
    <div class="article-photo">
        <img src="images/da_zdravstvuet_revolucia.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <br>
    <strong>Последствия</strong>
    <br>
    <br>
    <p><ol type="1">
        <li>Последующие создание СССР;</li>
        <li>Буржуазная идеология "Православие. Самодержавие. Народность" сменялась коммунистической;</li>
        <li>СССР в течении нескольких лет превратилась из отсталой аграрной в передовую мощную сверхдержаву;</li>
        <li>СССР добился вывода образования и медицинского обслуживания из системы товарно-денежных отношений. Ликбез, создание всеобщей бесплатной системы образования. Создание эффективной медицинской системы Семашко, преодоление эпидемии «испанки»;</li>
        <li>Количество безработный людей снизилось до минимальных размеров;</li>
        <li>8-часовой рабочий день;</li>
        <li>Ликвидированы сословия, чины и звания;</li>
        <li>Церковь отделена от государства, школа — от церкви;</li>
        <li>Женщины получили равные права с мужчинами во всех областях общественной жизни;</li>
        <li>Впервые за всю мировую историю власть перешла к рабочему классу. Создано первое в мире социалистическое государство.</li>
    </ol></p>
    <br>
    <div class="article-photo">
        <img src="images/te_zhe_gody.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <p>Несмотря на распад и контрреволюцию в 1991 году, СССР остается примером для всего мира, как самый успешный проект по построению коммунистического общества. И Октябрьская революция остается историческим примером для всего рабочего движения и доказывает, что рабочие могут жить без капиталистов, а капиталисты без эксплуатации труда пролетариев не могут. История про Красный Октябрь 17-го года — четкая инструкция и исторический пример для всего рабочего класса и его авангарда - коммунистической партии.</p>
    <br>
    <br>
    <strong>Пролетарии всех стран, соединяйтесь!</strong>
    <br>
    <br>
    <i>Спасибо за внимание!</i>
    <br>
    `);

rusVerse.innerHTML = content3;

const gerVerse = document.querySelector('.gerVerse');
    let content4 = (`
    <br>
    <br>
    <strong>Guten Tag, Genossen!</strong>
    <br>
    <br>
    <p>Heute sprechen wir über die Große sozialistische Oktoberrevolution. Sie fand in der Nacht vom 6. Auf den 7. November 1917 statt. Zum Ende dieser wurde die Provisorische Regierung abgesetzt und es begann der Prozess des Aufbaus der Sowjetischen Macht auf einem sechstel der Erdoberfläche. Geschaffen wurde der erste Staat geschaffen, in dem die Arbeiterklasse die Macht hatte.</p>
    <br>
    <br>
    <strong>Vorgeschichte</strong>
    <br>
    <br>
    <p>Herbst 1917. Das russische Imperium führt Krieg mit den Zentralen Mächten. Die deutschen Truppen stehen schon an den Toren Rigas. Das zaristische Russland hat schon Polen, West-Belarus und einen Teil des Baltikums verloren. Das Volk hat den schon drei Jahre gehenden Krieg satt. </p>
    <br>
    <div class="article-photo">
        <img src="images/russian_front.png" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <p>Die Industrie und die Landwirtschaft sind nahe einem Kollaps. Im Land herrschte eine totale finanzielle Krise. Die Bauern verarmten aufgrund des Krieges und der gnadenlosen Ausbeutung durch die Gutsbesitzer und wohlhabende Herren. Sozial-Ökonomische Reformen wurden entweder nicht durchgeführt, oder scheiterten. Zar Nikolai II trat zurück und an die Macht kam die Provisorische Regierung, welche nicht in der Stimmung war der Arbeiterklasse irgendwelche Zugeständnisse zu machen und welche den blutigen Imperialistischen Krieg bis zum „siegreichen Ende“ führte, was den Großteil der Bevölkerung nicht zufrieden stellte. Die Regierung war durch die Wiedersprüche der verschiedenen politischen Kräfte geschwächt. Es gab den Karnilow-Aufstand, welcher zwar bewältigt wurde, jedoch das Ansehen der Regierung von Kerenski sehr verschlechterte. Es entstand eine revolutionäre Situation:<br>1) Die Oberen können das Land nicht auf alte Weise regieren- die Unfähigkeit der herrschenden Klasse unverändert die Macht zu erhalten;<br>2) Die Unteren wollen nicht nach Alten Regeln leben- blitzartige Verschärfung über den normalen Bedarf und die Untätigkeit der Ausgebeuteten Klassen und Ihr Wünsch ihr Leben zu verbessern;<br>3) Bedeutender Anstieg der aktiven Massen durch die Situation der Krise aber auch durch die "oberen" zum historischen Auftritt.</p>
    <br>
    <div class="article-photo">
        <img src="images/unterdruckung.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <br>
    <strong>Hauptereignisse</strong>
    <br>
    <br>
    <p>3. Juli 1917 begannen in Petrograd Unruhen mit der Forderung die Provisorische Regierung zu beseitigen. Konterrevolutionäre Abteilungen bekamen von der Regierung den Befehl die friedliche Demonstration mit Gewalt aufzulösen. Es begannen festnahmen und die Todesstrafe wurde wiederhergestellt.</p>
    <br>
    <p>Die Doppelmacht endete mit dem Sieg der Bourgeoisie. Die Ereignisse vom 3.-5. Juli zeigten, dass die bürgerliche Provisorische Regierung nicht die Absicht hatte Forderungen der Arbeiter umzusetzen und den Bolschewiki wurde klar, dass eine friedliche Machterlangung nun nicht mehr möglich ist.</p>
    <br>
    <p>Auf dem VI Parteitag der SDAPR, welcher vom 26. Juli bis zum 3. August 1917 stattfand, nahm die Partei Kurs auf eine sozialistische Revolution durch einen bewaffneten Aufstand.</p>
    <br>
    <p>Bei der August-Staatsversammlung in Moskau versuchte die Bourgeoisie L. G. Kornilov als einen militärischen Diktator darzustellen und mit diesem Ereignis die Räte aufzulösen. Doch der aktive revolutionäre Auftritt zerstörte die Pläne der Bourgeoisie. Danach zog Kornilov seine Truppen auf Petrograd.</p>
    <br>
    <p>Die Bolschewiken, welche eine große Agitationsarbeit unter den Arbeitermassen und Soldaten durchführten, beschrieben den Sinn der Verschwörung und begannen revolutionäre Zentren für den Kampf gegen Kornilov zu öffnen. Die Meuterei wurde niedergeschlagen und das Volk verstand, dass die bolschewistische Partei die einzige Partei ist, die konsequent und kompromisslos die Interessen der Werktätigen vertritt.</p>
    <br>
    <p>Am 24. September erhielten die Bolschewiki 51% der Stimmen in den Bezirksräten. Bürgerliche Parteien und Provisorische Regierung waren in einer tiefen Krise ohne Unterstützung in der Masse.</p>
    <br>
    <p>Mitte September erarbeitete W. I. Lenin den Plan des bewaffneten Aufstandes und die Wege zu seiner Umsetzung. Wichtigstes Ziel der Oktoberrevolution war es, die Machterlangung durch die Sowjets. </p>
    <br>
    <div class="article-photo">
        <img src="images/sovetskaya_vlast.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <br>
    <strong>Roter Oktober</strong>
    <br>
    <br>
    <p>Am 12. Oktober fand die Gründung des Revolutionären Militär-Komitees statt- Zentrum für die Vorbereitung des bewaffneten Aufstandes. Sinowjew und Kamenew, Gegner der sozialistischen Revolution gaben die Frist des Aufstandes an die Provisorische Regierung weiter.</p>
    <br>
    <p>Der Aufstand begann in der Nacht zum 24 Oktober, einen Tag vor der Eröffnung des II Kongress der Sowjets. Die Regierung konnte sich sofort von den ihr treu ergebenen, bewaffneten Einheiten isolieren.</p>
    <br>
    <p>Am 25. Oktober kam W. I. Lenin in Smolny an und führte persönlich den Aufstand in Petrograd. Im Verlauf der Revolution wurden wichtige Objekte, wie Brücken, Telegrafe, Regierungsgebäude eingenommen.</p>
    <br>
    <p>Am Morgen des 25. Oktober 1917 gab das Revolutionäre Militär-Komitee den Sturz der Provisorischen Regierung und die Machtübergabe an den Petrograder Rat der Arbeiter und Soldaten bekannt. Am 26. Oktober wurde der Winterpalast gestürmt und die Mittglieder der Provisorischen Regierung festgenommen.</p>
    <br>
    <p>Die Oktoberrevolution endete mit der vollen Unterstützung der Volksmassen. Das Bündnis der Arbeiterklasse und der Bauern, der Übergang der bewaffneten Armee auf die Seite der Revolution, die Schwäche der Bourgeoisie bestimmten das Ergebnis der Oktoberrevolution 1917.</p>
    <br>
    <div class="article-photo">
        <img src="images/vsa_vlast_sovietam.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <p>Am 25. und 26. Oktober 1917 verlief der II allrussische Sowjetkongress, auf dem das allrussische Zentrale Exekutivkomitee gewählt und die erste sowjetische Regierung- der Rat der Volkskommissare gebildet wurde. Als Vorsitzender des Rates der Volkskommissare würde W. I. Lenin gewählt. Er legte zwei Dekrete vor: „Dekret des Friedens“, welcher die Krieg führenden Länder aufrief die militärischen Handlungen zu beenden und das „Dekret des Bodens“, welcher den Interessen der Bauern nachging.</p>
    <br>
    <p>Die Annahme der Dekrete führte den Sieg der Sowjetischen Regierung in den Regionen des Landes mit sich.</p>
    <br>
    <p>Die Kämpfe in Moskau gingen bis zum 3. November, an dem sich der Ausschuss für öffentliche Sicherheit bereit erklärte die Waffen nieder zu legen. Die Oktoberrevolution fand sofort Unterstützung im zentralen Industriellen Gebiet, wo die lokalen Räte der Arbeiter-Deputate schon faktisch ihre Regierung aufstellten. Im Baltikum und in Belarus festigte sich die Sowjetische Regierung im Oktober- November 1917.</p>
    <br>
    <p>Der Revolutionskrieg in Sibirien und hinter dem Kaukasus zog sich bis zum Ende der Bürgerkriegs (1920-1921), welcher als Folge der Oktoberrevolution entstand. </p>
    <br>
    <div class="article-photo">
        <img src="images/da_zdravstvuet_revolucia.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <br>
    <strong>Folgen</strong>
    <br>
    <br>
    <p><ol type="1">
        <li>Anschließende Gründung der Sowjetunion; </li>
        <li>Die bürgerliche Ideologie „Orthodoxie. Autokratie. Nationalität“, wurde durch die kommunistische ersetzt;</li>
        <li>Die UdSSR wurde im Verlauf einiger Jahre aus einem zurückgebliebenen Agra-Kulturellem Land zu einer fortschrittlichen, strakten Supermacht; </li>
        <li>Die UdSSR erreichte den Rückzug von Bildung und medizinischen Dienstleistungen aus dem System der Waren- Geld- Beziehungen. Bildungsprogramm, Schaffung eines universellen kostenlosen Bildungssystems. Schaffung eines wirksamen medizinischen Systems, Überwindung der Spanischen Grippe;</li>
        <li>Die Arbeitslosenzahl ging auf ein Minimum;</li>
        <li>8-Stunden Arbeitstag;</li>
        <li>Stände, Ränge und Titel wurden liquidiert;</li>
        <li>Die Kirche ist vom Staat getrennt, die Schule- von der Kirche;</li>
        <li>Frauen bekamen in allen Bereichen des öffentlichen Lebens dieselben Rechte wie Männer;</li>
        <li>Zum ersten Mal in der Weltgeschichte erlang die Arbeiterklasse die Macht. Der erste sozialistische Staat der Welt wurde gegründet.</li>
    </ol></p>
    <br>
    <div class="article-photo">
        <img src="images/te_zhe_gody.jpg" class="main-photo" alt="Великая Октябрьская социалистическая революция">
    </div>
    <br>
    <p>Trotz des Zusammenbruchs und der Konterrevolution im Jahr 1991, bleibt die Sowjetunion ein Beispiel für die ganze Welt als erfolgreichstes Projekt im Aufbau einer kommunistischen Gesellschaft und die Oktoberrevolution bleibt ein historisches Beispiel für die ganze Arbeiterbewegung und beweist, dass Arbeiter ohne Kapitalisten leben können, jedoch die Kapitalisten ohne die Ausbeutung der Arbeit der Proletarier nicht. Die Geschichte des Roten Oktobers 1917 ist eine genaue Anleitung und das historische Beispiel für die ganze Arbeiterklasse und seine Avantgarde- die Kommunistische Partei.</p>
    <br>
    <br>
    <strong>Proletarier aller Länder, vereinigt euch!</strong>
    <br>
    <br>
    <i>Vielen Dank für Ihre Aufmerksamkeit!</i>
    <br>
    `);
gerVerse.innerHTML = content4;

const engVerse = document.querySelector('.engVerse');
    let content5 = (``);
engVerse.innerHTML = content5;

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