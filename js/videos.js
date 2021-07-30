let blocks = [
    {
      name: 'ПРОЛЕТАРСКОЕ СЛОВО #8: протесты украинских врачей, ряд забастовок в Казахстане',
      source:'_jyWh8dzTBU',
    },
    {
      name: 'Пролетарский Гимн - ВАРШАВЯНКА',
      source:'bYV-u8gFUB0',
    },
    {
      name: 'Владимир Ильич Ленин - Что такое Советская власть?(1919)',
      source:'9moDkbMmgow',
    },
    {
      name: 'Владимир Ильич Ленин - О крестьянах середняках (1919)',
      source:'6S5JCY84zfY',
    },
    {
      name: 'ПРОЛЕТАРСКОЕ СЛОВО #7: ЗАБАСТОВКА МЕДИКОВ, ОБРАЩЕНИЯ К ПРЕЗИДЕНТУ',
      source:'rAXxmT7MN2Q',
    },
    {
      name: 'ПРОЛЕТАРСКОЕ СЛОВО #6: ПРОТЕСТЫ В СЕЛЬСКОМ ХОЗЯЙСТВЕ, ЗАБАСТОВКА УКРАИНСКИХ ГОРНЯКОВ',
      source:'mUKZI3bjSsw',
    },
    {
      name: 'ПРОЛЕТАРСКОЕ СЛОВО #5: ГИБЕЛЬ рабочего в БУРЯТИИ, усиление ПРОИЗВОЛА капиталистов',
      source:'D0-h1Ptwp8c',
    },
    {
      name: 'ПРОЛЕТАРСКОЕ СЛОВО #4: забастовки в ГРУЗИИ и РОССИИ',
      source:'gBhJAtwjEBw',
    },
    {
      name: 'ПРОЛЕТАРСКОЕ СЛОВО #3: волна ЗАБАСТОВОК шахтёров в Украине, произвол предпринимателей',
      source:'lB6smXcKoOI&t=33s',
    },
    {
      name: 'ПРОЛЕТАРСКОЕ СЛОВО #2: ЗАБАСТОВКА крановщика, молдавских железнодорожников, увольнения медсестёр',
      source:'rtcvBshz8LY&t=10s',
    },
    {
      name: 'ПРОЛЕТАРСКОЕ СЛОВО #1:забастовки в Армении и Грузии; смерть рабочего.',
      source:'uZgjebCByCM',
    }
]
const vidios = document.querySelector('.vidios');
    let content = blocks.map(block => `
        <div class='vidik'>
            <h4>${block.name}</h4>
            <br>
            <iframe width="500" height="380" src="https://www.youtube.com/embed/${block.source}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <br>
    `);

    vidios.innerHTML = content.join('');
