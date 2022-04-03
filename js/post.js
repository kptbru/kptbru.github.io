function getUrlVars() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function main(folder) {
    let quit = false;
    let vars = getUrlVars();
    let postId = vars["p"];
    if (postId === undefined) {
        return;
    }
    postId = postId.replace(/#.*/g, '');

    let articleHolder = document.getElementById("articleHolder");
    let postContent = fetch(['static/ru/', folder, '/', postId, '.md'].join(''))
        .then(result => result.text())
        .then(data => {
            articleHolder.classList.toggle("nojs");
            articleHolder.classList.toggle("markdown");
            let converter = new showdown.Converter();
            converter.setFlavor('github');
            converter.setOption('simpleLineBreaks', false);

            articleHolder.innerHTML = converter.makeHtml(data);
            document.title = [
                window.articleHolder.querySelector("h1").textContent,
                ' | КПТБ'].join('');
        });
}
