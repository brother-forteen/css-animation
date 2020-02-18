/**
 * @createDate: 2020/2/18
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/
window.onload = function () {
    function main(data) {
        let time = 2 / data.length;
        let middle = Math.floor(data.length / 2);

        for(let i = 0; i < data.length; i++){
            let span = document.createElement('span');
            span.style.animationDelay = `${1 + time * Math.abs((i - middle))}s`;
            span.innerHTML = data[i];
            document.getElementById('title').appendChild(span);
        }
    }

    let title = document.getElementById('title').innerText;
    let titleArr = title.split('');
    document.getElementById('title').innerText = '';

    main(titleArr);
};
