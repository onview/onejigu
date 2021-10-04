var lis = document.getElementsByClassName('other_nav')[0].getElementsByTagName('li');
// console.log(lis);
var dg_new_list = document.getElementById('dg_new_list');
var dg_hot_list = document.getElementById('dg_hot_list');
var jiazai_donghua = document.getElementById('jiazai_donghua');

function hide_() {
    jiazai_donghua.style.display = 'block';
    dg_new_list.style.display = 'none';
    dg_hot_list.style.display = 'none';
    click_more.style.display = 'none';
}

lis[0].onclick = function () {
    hide_();
    lis[0].className = 'active';
    lis[1].className = '';
    setTimeout(function () {
        jiazai_donghua.style.display = 'none';
        dg_new_list.style.display = 'block';
        click_more.style.display = 'block';
    }, 500)
}
lis[1].onclick = function () {
    hide_();
    lis[1].className = 'active';
    lis[0].className = '';
    setTimeout(function () {
        jiazai_donghua.style.display = 'none';
        dg_hot_list.style.display = 'block';
        click_more.style.display = 'block';
    }, 500);
}