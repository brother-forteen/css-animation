window.onload = function () {
    let title = document.getElementById('title').innerText;
    let titleArr = title.split('');
    document.getElementById('title').innerText = '';

    let time = 2 / titleArr.length;
    for(let i = 0; i < titleArr.length; i++){
        let span = document.createElement('span');
        span.style.animationDelay = `${time * i}s`;
        span.innerHTML = titleArr[i];
        document.getElementById('title').appendChild(span);
    }
};