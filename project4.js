// Loading
$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.load').delay(1000).fadeOut('fast');
});

var postApi = 'https://gnews.io/api/v4/top-headlines?&token=71968feca1a4c26c7ddee8e8a5e28703&lang=en';

fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        console.log(posts);
        var htmls = [];
        htmls = posts.articles.map(function(element) {
            return (
            `<div id='sum__content'>
                <div class='box__1'>
                    <img src='${element.image}' id='image__conten'/>
                </div>
                <div class='box__2'>
                    <ul id='conten__ul'>
                        <li class='title__text'><a href='${element.url}' target='_blank'>${element.title}</a></li>
                        <li class='time__text'>${element.publishedAt}</li>
                        <li class='content__text'>${element.content}</li>
                    </ul>
                </div>
            </div>`);
        });
        var html = htmls.join('');
        document.getElementById('myDIV').innerHTML = html;
    });


// Xử lý phía sau

//Tìm kiếm
const Url = 'https://gnews.io/api/v4/search?q=example&from=begin_dateT00:00:00Z&to=end_dateT00:00:00Z&token=71968feca1a4c26c7ddee8e8a5e28703&lang=en';
$('#btn').click(function(){

    $('.box__3').css('display', 'none');
    $('.search__date').css('display', 'none');
    // Loading
    $('body').addClass('preloading');
    $('.load').removeAttr('style');
    $(document).ready(function(event) {
        $('body').removeClass('preloading');
        $('.load').delay(1000).fadeOut('fast');
    });
    //Get Data
    var date__01 = $('#from').val();
    var Url__from = Url.replace('begin_date', date__01);
    var date__02 = $('#to').val();
    var Url__to = Url__from.replace('end_date', date__02);
    var search__text = $('#myInput').val();
    var new__Url = Url__to.replace('example', search__text);
    fetch(new__Url)
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            var htmls_replace = [];
            htmls_replace = posts.articles.map(function(element) {
                return (
                `<div id='sum__content'>
                    <div class='box__1'>
                        <img src='${element.image}' id='image__conten'/>
                    </div>
                    <div class='box__2'>
                        <ul id='conten__ul'>
                            <li class='title__text'><a href='${element.url}' target='_blank'>${element.title}</a></li>
                            <li class='time__text'>${element.publishedAt}</li>
                            <li class='content__text'>${element.content}</li>
                        </ul>
                    </div>
                </div>`);
            });
            console.log(htmls_replace);
            
            if(htmls_replace.length === 0) {
                html_replace = `<p class='no__result'>Không có kết quả trả về với từ khóa: ${search__text}!</p>`;
            }
            else {
                var html_replace = htmls_replace.join('');
            }
            document.getElementById('myDIV').innerHTML = html_replace;
            
        });

});

// turn on search
 $('.icon__search').click(function() {
     $('.box__3').css('display', 'block');
     $('.search__date').css('display', 'block');
 })

//  xmark
 $('.xmark').click(function() {
    $('.box__3').css('display', 'none');
    $('.search__date').css('display', 'none');
 })

// MyNews
 $('.heading__text').click(function() {
    var postApi = 'https://gnews.io/api/v4/top-headlines?&token=71968feca1a4c26c7ddee8e8a5e28703&lang=en';

    fetch(postApi)
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            console.log(posts);
            var htmls = [];
            htmls = posts.articles.map(function(element) {
                return (
                `<div id='sum__content'>
                    <div class='box__1'>
                        <img src='${element.image}' id='image__conten'/>
                    </div>
                    <div class='box__2'>
                        <ul id='conten__ul'>
                            <li class='title__text'><a href='${element.url}' target='_blank'>${element.title}</a></li>
                            <li class='time__text'>${element.publishedAt}</li>
                            <li class='content__text'>${element.content}</li>
                        </ul>
                    </div>
                </div>`);
            });
            var html = htmls.join('');
            document.getElementById('myDIV').innerHTML = html;
        });
 })