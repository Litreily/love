const ap = new APlayer({
    element: document.getElementById('aplayer'),
    autoplay: true,
    mutex: true,
    theme: '#ad7a86',
    order: 'random',
    preload: 'metadata',
    lrcType: 3,
    fixed: true,
});
$.ajax({
    url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=3189048139',
    success: function (list) {
        custom = [{
            name: 'zcz-月亮代表我的心',
            artist: '张陈增',
            url: 'http://storage.live.com/items/3D70E52B449B0AAC!4635:/zcz-月亮代表我的心.mp3?authkey=AEGb_w5cA14AQto',
            cover: 'http://storage.live.com/items/3D70E52B449B0AAC!4636:/zcz.jpg',
            theme: '#ebd0c2'
        }]
        ap.list.add(custom.concat(JSON.parse(list)))
    }
});
