let proletSlovo = [
    'woPWjvfbslg',
    'hFijqVw4QBY',
    'woPWjvfbslg',
    'hFijqVw4QBY',
    'aRJGxiVcJVc',
    'ik7VoSaGRig',
    'ybP3DFBH-bE',
    'yOhXfIxALTA',
    '_EtUdeBTJEs',
    'wIQ4VJKijoY',
    '_jyWh8dzTBU',
    'rAXxmT7MN2Q',
    'mUKZI3bjSsw',
    'D0-h1Ptwp8c',
    'gBhJAtwjEBw',
    'lB6smXcKoOI',
    'rtcvBshz8LY',
    'uZgjebCByCM'
];

let translation = [
    'YYuOSlppeZ4'
];

let teorija = [
    'ANk1ysBH2tU',
    'RyxoJz25_KU',
    'ls9iJvnBFis',
    '4WDgMs0hq1U',
    'ezHvclXiUF0',
    'Q5ln7_Y1Rw4'

];

let cytaty = [
    'Xz3w8hj59-g',
    'yz15bKgiahY',
    '9moDkbMmgow',
    '6S5JCY84zfY'

];

let music = [
    'bYV-u8gFUB0',
    '53DZr8d8Nd4'

];

let other = [
    'AR8fmnHVQ7s',
    'Y8o0SKCSiKo',
    'k-_QbiIJ1H8s',
    'muPfH6EV5Fo',
    'fDie_R949lE',
    'rdEpfaCMFtE'

];

let spt = [
    'D9nO9AaltmE',
    '_-Kh5wBJkqg',
    'VOJFlMekcRY',
    '29VXXeT5oeM',
    'OnlYfCgTdjo',
    'QQvthUciMfE'

];

let all = [
    'ANk1ysBH2tU',
    'RyxoJz25_KU',
    'D9nO9AaltmE',
    'Xz3w8hj59-g',
    'yz15bKgiahY',
    'AR8fmnHVQ7s',
    'kKjFTzzQlwQ',
    'ywIfOTaLZpE',
    'DFe9FxoFqJs',
    'woPWjvfbslg',
    '_-Kh5wBJkqg',
    'hFijqVw4QBY',
    'aRJGxiVcJVc',
    'VOJFlMekcRY',
    'ik7VoSaGRig',
    '29VXXeT5oeM',
    'ybP3DFBH-bE',
    'yOhXfIxALTA',
    '_EtUdeBTJEs',
    'OnlYfCgTdjo',
    'wIQ4VJKijoY',
    'nTcmnU_YGOA',
    'QQvthUciMfE',
    'YYuOSlppeZ4',
    '_jyWh8dzTBU',
    'bYV-u8gFUB0',
    '9moDkbMmgow',
    '6S5JCY84zfY',
    'rAXxmT7MN2Q',
    'mUKZI3bjSsw',
    'D0-h1Ptwp8c',
    'gBhJAtwjEBw',
    'Y8o0SKCSiKo',
    'lB6smXcKoOI',
    'rtcvBshz8LY',
    'uZgjebCByCM',
    'k-_QbiIJ1H8',
    'muPfH6EV5Fo',
    'fDie_R949lE',
    'rdEpfaCMFtE',
    '4WDgMs0hq1U',
    'ezHvclXiUF0',
    'Q5ln7_Y1Rw4',
    '53DZr8d8Nd4'
];

function collect(selector, collection) {
    let videoIds = collection.join(',');
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds}&key=AIzaSyC404xlkIgNMlt8-mL7onyKghNk51ecJV4`,
          {
              method: "GET",
              headers: new Headers({
                  'Accept': "application/json"
              })
          })
        .then(result => {
            if (result.ok) {
                return result.json()
            } else {
                throw new Error("Request error")
            }
        })
        .then(json => {
            let content = json.items.map(video => {
                let videoId = video.id;
                let thumbnails = video.snippet.thumbnails;
                let videoThumbnailURL =
                    thumbnails.maxres ? thumbnails.maxres.url
                    : thumbnails.standard ? thumbnails.standard.url
                    : thumbnails.high ? thumbnails.high.url
                    : thumbnails.medium ? thumbnails.medium.url
                    : thumbnails.default ? thumbnails.default.url
                    : '';
                let videoTitle = video.snippet.localized.title;
                let videoDescription = video.snippet.localized.description.substr(0, 600);
                videoDescription = videoDescription.replace(/(https:..(\w+\.\w+)\/?.*)/g, '<a class="desc-link" href="$1">$2</a>');
                videoDescription = videoDescription.replace(/[\n\r]/g, "<br>");
                return `<div class='video'>
                    <div class='image-column'><a href='https://youtube.com/watch?v=${videoId}'><img src='${videoThumbnailURL}'></a></div>
                    <div class='video-text'>
                      <h1 class='video-title'>${videoTitle}</h1>
                      <p>${videoDescription}...</p>
                      <a class='continue-reading' href='https://youtube.com/watch?v=${videoId}'>Смотреть Видео</a>
                    </div>
                </div>`;
            });
            let sectionHeading = document.querySelector([selector, ' h2.section-name'].join(''));
            let sectionContent = document.querySelector([selector, ' .content'].join(''));
            sectionContent.innerHTML = content.join('');
            sectionContent.style.display = 'none';
            sectionHeading.addEventListener('click', event => {
                if (sectionContent.style.display !== 'none') {
                    sectionContent.style.display = 'none';
                } else {
                    sectionContent.style.display = '';
                }
            });
        });
}

collect('.all', all);
collect('.proletarskoe-slovo', proletSlovo);
collect('.translation', translation);
collect('.cytaty', cytaty);
collect('.teorija', teorija);
collect('.spt', spt);
collect('.music', music);
collect('.other', other);
