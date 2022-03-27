# Сайт КПТБ

Коммунистическая платформа Трудящегося Большинства основана 12 марта 2020
года. Мы принимаемся за создание рабочей партии, которой в России сейчас нет.

# Структура сайта

## HTML Файлы

Все HTML Файлы находятся в корневой папке, на высшем уровне сайта.

- `index.html` - Главная страница
- `articles.html` - Список статей
- `posts.html` - Список постов
- `fetch-article.html` - Вспомогательный файл для обзора конкретной статьи
- `fetch-post.html` - Вспомогательный файл для обзора конкретного поста
- `programme.html` - Программа
- `sections.html` - Отделы КПТБ
- `videos.html` - Видео

## Папки 

### `/static`

- `static/ru/posts/` - Посты
- `static/ru/articles` - Статьи

### `/img`

- `img` - Папка картинок
- `img/old` - Папка с картинками с постов со старого сайта
- `img/articles` - Папка с картинками для статей
- `img/logos` - Папка с логотипами

### `/js` и `/css`

В этих папках JavaScript и стили сайта.

# Примечания

Список постов в файле `posts.html`  
Список статей в файле `articles.html`

Оба списка есть просто элементы `<div>` с полем `id="[название файла статьи]"`,
при том `.md` не включается

Все посты в папке `static/ru/posts/`  
Все статьи в папке `static/ru/articles/`

Например, если добавляется статья `14.md` в папку статей, то в список статей
(`articles.html`) добавляется элемент:`<div class="post" id="14"></div>`

    /
    +-- articles.html
    |   [...]
    +-- static/
    |   +-- ru/
    |       +-- articles/
    |           +-- 14.md
    

# Названия файлов

При добавлении статей файлы называть просто числами, то есть в формате:

    [число].md

При добавлении постов файлы называть следующим образом:

    kptb-post-[число].md

В названии картинок все буквы должны быть строчными и слова должны быть
разделены тире (`-`).

Неправильно:

    leninMap.jpg
    LeninMap.jpg
    leninmap.jpg
    
Правильно:

    lenin-map.jpg

# Картинки и ссылки на файлы на сайте

Ссылаемся на картинки в интернете следующим образом:

    ![Альтернативный текст](https://ссылка.к/картинке.jpg)

Но если нужно сослаться на картинку с сайта, то мы будем использовать:
    
    ![](img/articles/lenin-map.jpg)

Обратите внимание, **независимо** от реального положения файла на сайте, путь к
картинке проходит от корневой папки, то есть через `img/articles/lenin-map.jpg`
а не `../../../img/articles/lenin-map.jpg`.

Когда рисуется наша статья, корневой папкой является высшая папка нашего сайта,
не относительно файла статьи.

    /
    +-- img
    |   +-- articles
    |       +-- lenin-map.jpg <-- #1
    +-- articles.html
    |   [...]
    +-- static
    |   +-- ru
    |       +-- articles
    |           +-- 14.md <-- тут ссылка к файлу #1, через ![](img/articles/lenin-map.jpg)
