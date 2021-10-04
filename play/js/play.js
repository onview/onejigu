var lis = document.getElementsByClassName('other_nav')[0].getElementsByTagName('li');
// console.log(lis);
var kw_new_list = document.getElementById('kw_new_list');
var kw_hot_list = document.getElementById('kw_hot_list');
var kw_pinlei = document.getElementById('kw_pinlei');
var jiazai_donghua = document.getElementById('jiazai_donghua');


function hide_() {
    jiazai_donghua.style.display = 'block';
    kw_new_list.style.display = 'none';
    kw_hot_list.style.display = 'none';
    kw_pinlei.style.display = 'none';
    click_more.style.display = 'none';
}

lis[0].onclick = function () {
    hide_();
    lis[0].className = 'active';
    lis[1].className = '';
    lis[2].className = '';
    setTimeout(function(){
        jiazai_donghua.style.display = 'none';
        kw_new_list.style.display = 'block';
        click_more.style.display = 'block';
    },500)
}
lis[1].onclick = function () {
    hide_();
    lis[1].className = 'active';
    lis[0].className = '';
    lis[2].className = '';
    setTimeout(function () {
        jiazai_donghua.style.display = 'none';
        kw_hot_list.style.display = 'block';
        click_more.style.display = 'block';
    },500);
}
lis[2].onclick = function () {
    hide_();
    lis[2].className = 'active';
    lis[0].className = '';
    lis[1].className = '';
    setTimeout(function () {
        jiazai_donghua.style.display = 'none';
        kw_pinlei.style.display = 'block';
    },500);
}