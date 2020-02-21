/**
 * @createDate: 2020/2/19
 * @author: wen_dell
 * @email: wendell.chen@chinaentropy.com
 * **/
window.onload = () => {
    let textDom = document.querySelectorAll('.light');
    textDom.forEach(text => {
        let letters = text.textContent.split('');
        text.textContent = '';

        letters.forEach((letter, i) => {
            let span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`;
            text.append(span);
        })
    });
};

