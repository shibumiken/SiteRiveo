const services = [
    {
        name: "Разработка ПО",
        title: "Разработка программного обеспечения",
        text: "Создание индивидуальных веб-, мобильных и десктопных приложений под задачи клиента. Поддерживаем развитие проектов на всех этапах.",
        icon: "styles/source/services/icon_dev.png"
    },
    {
        name: "Облачные сервисы",
        title: "Работа с облачными сервисами",
        text: "Настройка, миграция и сопровождение решений на базе облачных платформ. Оптимизируем инфраструктуру под рост и масштабирование.",
        icon: "styles/source/services/icon_cloud.png"
    },
    {
        name: "Защита данных",
        title: "Обеспечение защиты цифровой информации",
        text: "Комплексные меры по обеспечению безопасности информации: шифрование, резервное копирование, аудит и мониторинг.",
        icon: "styles/source/services/icon_protect.png"
    },
    {
        name: "Системная интеграция",
        title: "Системная интеграция",
        text: "Объединение различных IT-систем и сервисов компании в единую инфраструктуру. Повышаем эффективность за счёт автоматизации процессов.",
        icon: "styles/source/services/icon_integration.png"
    },
    {
        name: "ИТ-консалтинг",
        title: "ИТ-консалтинг",
        text: "Анализ текущих ИТ-процессов и рекомендации по их оптимизации и модернизации. Предлагаем стратегии для цифровой трансформации бизнеса.",
        icon: "styles/source/services/icon_consulting.png"
    },
    {
        name: "Техническая поддержка 24/7",
        title: "Техническая поддержка 24/7",
        text: "Круглосуточное сопровождение и решение технических проблем клиентов. Гарантируем стабильную работу без простоев и сбоев.",
        icon: "styles/source/services/icon_support.png"
    }
];

const nameBlocks = document.querySelectorAll('.name-service');
const cardTitle = document.querySelector('.title-service p');
const cardText = document.querySelector('.text-service p');
const cardIcon = document.querySelector('.icon-service img');

nameBlocks.forEach((block, idx) => {
    block.addEventListener('click', () => {
        // Убираем синие выделения со всех
        nameBlocks.forEach(b => b.classList.remove('name-active'));
        // Выделяем текущий
        block.classList.add('name-active');
        // Меняем содержимое карточки
        cardTitle.textContent = services[idx].title;
        cardText.textContent = services[idx].text;
        cardIcon.src = services[idx].icon;
        cardIcon.alt = services[idx].name;
    });
});
