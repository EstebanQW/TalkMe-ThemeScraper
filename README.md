# Для чего этот скрипт

Этот скрипт позволяет скопировать все тематики (категории вопросов) с личного кабинета TalkMe. Скрипт нужно вставить в консоль разработчика в браузере, и результатом его выполнения будет массив всех тем.

## Запуск скрипта

1.	Откройте веб-страницу с категориями вопроса в личном кабинете TalkMe<br>
![image](https://github.com/user-attachments/assets/211bd5de-0ae2-4c18-95fc-7052525c123f)

2.	Откройте консоль разработчика:
    * В Chrome или Edge: нажмите F12 или Ctrl+Shift+I, затем перейдите на вкладку "Console".
    * В Firefox: нажмите F12 или Ctrl+Shift+K.<br>
    ![image](https://github.com/user-attachments/assets/52865e1c-4ed4-469c-9967-bae4769450e3)


3.	Вставьте код в консоль и нажмите «Запустить».<br>
![image](https://github.com/user-attachments/assets/3815b079-b1f7-452b-a775-0d9554e66ae0)

4.	После выполнения скрипта в консоли будет выведен массив всех тематик<br>
![image](https://github.com/user-attachments/assets/8bfe3dbf-b39e-4ab2-b18e-f14557d99aa3)

Тематики можно скопировать, нажав ПКМ – «Копировать объект»<br>
![image](https://github.com/user-attachments/assets/3d1a473b-bcf7-4f99-8dfe-a7b5b5f61b59)

С помощью сайта https://snipp.ru/tools/text-array можно получить список без лишних символов:<br>
![image](https://github.com/user-attachments/assets/2d6103a7-d5a8-4c71-8549-c3dc71188092)

Получаем:
```
________ЗАКАЗ________
1.1.1 Оформление заказа - Удобно через КЦ
1.1.2 Оформление заказа - Переоформить заказ с учетом прошлых скидок
1.1.3 Оформление заказа - Отложить товар в магазине
1.2.1 Обращение по недозвону - Подтвердить заказ
…
…
…
```

## Код скрипта:
```
function extractTopics() {
    // Получаем все элементы, которые содержат тематики
    const topicElements = document.getElementsByClassName('el-input__inner');
    
    // Массив для хранения тем
    let topics = [];
    
    // Проходим по всем элементам и добавляем их значение в массив
    for (let i = 0; i < topicElements.length; i++) {
        topics.push(topicElements[i].value);
    }
    
    // Возвращаем массив всех тематик
    return topics;
}

// Запуск функции и вывод результата в консоль
console.log(extractTopics());

```
