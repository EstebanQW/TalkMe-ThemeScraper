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