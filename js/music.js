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
            url: 'http://q4a9typwv.bkt.clouddn.com/zcz-月亮代表我的心.mp3',
            cover: 'http://q4a9typwv.bkt.clouddn.com/zcz.jpg',
            theme: '#ebd0c2'
        }]
        ap.list.add(custom.concat(JSON.parse(list)))
    }
});
