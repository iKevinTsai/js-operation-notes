
document.addEventListener('DOMContentLoaded', function () {
    // 在事件監聽器中呼叫 sendTrackingData 函式
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', event => {
            // 防止默認超連結行為
            event.preventDefault();
            const data = {
                eventType: 'linkClick',
                url: link.href
            };
            console.log(`使用者點擊了連結，網址為：${link.href}`);

            sendTrackingData(data);
            
        });
    });

    // 在事件監聽器中呼叫 sendTrackingData 函式
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const data = {
                eventType: 'buttonClick',
                text: button.innerText
            };
            console.log(`使用者點擊了按鈕，文字為：${button.innerText}`);
            sendTrackingData(data);
        });
    });

    function sendTrackingData(data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/tracking', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }

});


