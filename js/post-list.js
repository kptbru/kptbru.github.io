function processor(folder, fetchFile) {
    let articles = document.querySelectorAll(".post-list .post");

    articles.forEach(article => {
        let id = article.id;

        fetch(['static/ru/', folder, '/', id, '.md'].join(''))
            .then(result => {
                if (!result.ok) {
                    throw new Error("Ошибка сервера, пост не загружен.");
                }
                return result.text();
            })
            .then(data => {
                let converter = new showdown.Converter();
                article.innerHTML =
                    converter.makeHtml([data.substr(0, 600), '...'].join(''));
                let image = null;
                let title = null;
                let stack = Array.from(article.children).reverse();
                while (stack.length != 0) {
                    let child = stack.pop();

                    if (child.tagName == "IMG") {
                        let temp = child.parentNode.removeChild(child);
                        if (image == null) {
                            image = temp;
                        }
                    } else if (title == null && child.tagName == "H1") {
                        title = child.parentNode.removeChild(child);
                    }

                    Array.from(child.children).forEach(child => stack.push(child));
                }

                let imageColumn = document.createElement('div');
                if (image) {
                    imageColumn.classList.toggle('image-column');
                    imageColumn.appendChild(image);
                }

                let link = document.createElement('a');
                link.setAttribute("href", [fetchFile, '?p=', id].join(''));
                link.classList.toggle('continue-reading');
                link.innerHTML = "Читать дальше...";

                let text = document.createElement('div');
                text.classList.toggle('markdown-preview');
                text.innerHTML = article.innerHTML;
                title.classList.toggle('post-title');
                text.insertBefore(title, text.firstChild);
                text.appendChild(link);

                article.innerHTML = "";
                article.appendChild(imageColumn);
                article.appendChild(text);
            });
    });
}
