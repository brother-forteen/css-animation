/**
 * @createDate: 2020/2/17
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/
window.onload = function () {
    function main(data) {
        let time = 2 / data.length;
        for(let i = 0; i < data.length; i++){
            let span = document.createElement('span');
            span.style.animationDelay = `${time * i}s`;
            span.innerHTML = data[i];
            document.getElementById('title').appendChild(span);
        }
    }

    let title = document.getElementById('title').innerText;
    let titleArr = title.split('');
    document.getElementById('title').innerText = '';

    main(titleArr);
};
