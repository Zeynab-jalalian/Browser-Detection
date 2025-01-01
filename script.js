let browser=document.getElementById('browser');
let user=navigator.userAgent;

if(user.match(/firefox/i)){
    browser.innerHTML='شما از مرورگر فایرفاکس استفاده می کنید.';
}else if(user.match(/chrome/i)){
    browser.innerHTML='شما از مرورگر کروم استفاده می کنید.';
}else{
    browser.innerHTML='شما از مرورگری خارج از موارد تعیین شده استفاده می کنید.';
}