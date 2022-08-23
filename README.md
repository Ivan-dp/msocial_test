# Сайт OLTERMANNI

## Подготовил - Литовченко Иван

### Технологии:

- PUG
- SCSS
- JS
- Webpack

## Быстрый старт

#### `npm i` – установить зависимости проекта

#### `npm start` – запуск devServer на http://localhost:8080/

## Скрипты

#### `npm run build` – production сборка проекта

#### `npm start` – запуск devServer на http://localhost:8080/

### Структура проекта

```
├── dist/                                         # Готовая сборка
├── src/                                          # Исходники
│   ├── blocks/                                   # Папка с блоками проекта
│   ├── fonts/                                    # Шрифты используемые в проекте
│   ├── img/                                      # Изображения используемые в проекте
│   ├── pages/                                    # Папка страниц проекта
│   ├── pug/                                      # Папка с шаблонами и миксинами используемыми в проекте
│   │   └── mixins/                               # Папка с миксинами проекта
│   │       └── card.pug                          # Миксин
│   ├── scss/                                     # Папка с миксинами и миксами проекта
│   │   ├── media-queries/                        # Папка с медиазапросами
│   │   └── mixins/                               # Папка с миксинами проекта
│   │       └── PFDinTextCondPro.scss             # Миксин
├── package.json                                  # Список модулей и прочей информации
├── postcss.config.js                             # Конфигурация postcss
├── webpack.config.js                             # Конфигурация Webpack.js
└── README.md                                     # Документация проекта
```

### Макет

#### https://www.figma.com/file/BxdVxW1jdIJ2uHXE8UkVJi/?node-id=0%3A1

### Нужно сверстать:

- Шапку (с адаптивом и мобильным меню)
- Главное большое изображение
- Заголовок «Нам 40 лет — вам подарки»
- Правила акции («Покупайте сыр > Регистрируйте чеки > итд.)
- Блок «В акции участвуют» со слайдером
- Футер (самый нижний блок сайта)

### Требования к вёрстке:

- Семантическая валидная вёрстка, проходящая валидатор без критических ошибок (незакрытые тэги, дублирующиеся id). Некритические ошибки и варнинги допускаются.
- Адаптивная вёрстка макета с мобильным меню. Планшетная вёрстка на своё усмотрение.
- Шрифты должны быть подключены «семьёй» и конвертированы в необходимые для этого форматы (приложены к заданию).
- Совпадение вёрстки с макетом должно быть достаточно убедительным.
- Pixel Perfect делать не нужно. Должны совпадать расстояния, шрифты, размеры, отступы, градиенты, размеры изображений и.т.д.
- Вся графика, которую можно сделать в векторе — сделать в векторе. Растр — только для растровых изображений.
- Растровые изображения для мобильной версии сайта должны быть вставлены retina-ready (большие изображения с ограничением размера до маленького для экранов с высокой плотностью пикселей).
- Ссылки в верхнем и мобильном меню должны проматывать страницу до соответствующего блока (Призы и победители могут проматывать страницу просто до футера). Внешние ссылки можно просто заглушить решёткой или локальной ссылкой на эту же страницу.
- У всех интерактивных элементов на десктопе должен быть ховер. Ховер можно делать на своё усмотрение.
- Если не будет получаться данный макет сделать на всю ширину браузера — можно ограничить ширину вёрстки 1440px. Это не будет считаться ошибкой. Если получится сделать на всю ширину — будет большой плюс.
- Минимальное мобильное разрешение — 320px. Макет нарисован на 360px, но и на 320px не должно быть серьёзных артефактов вроде горизонтального скролла. На 320px вёрстка может отличаться от макета в разумных пределах.
- Мобильное меню при скролле должно скрываться автоматически.
- По кнопке «Вход» или «Регистрация» показывать пустое модальное окно с кнопкой «Закрыть» и крестиком закрытия (дизайн не нужен, просто белый блок).
- Слайдер «В акции участвуют» сделать с помощью библиотеки Swiper. (технически, можно использовать Slick или Owl, но Swiper предпочтительнее)

### Требования к проекту:

- Необходимо при сдаче работы указать время, которое вы потратили на вёрстку. Сильно торопиться не нужно — качество работы в приоритете, но время нужно учитывать.
- Весь проект можно залить в репозиторий на github, bitbucket или любой удобный вам репозиторий со стандартными возможностями, в том числе и возможностью просто скачать проект. Если с этим есть сложности — можно прислать просто архив с проектом.
- Необходимо писать css используя sass-препроцессор, для сборки можно использовать Gulp или Webpack.
- Сборка фронта должна быть залита на github вместе с проектом.
- Проект должен иметь в качестве главной страницы index.html и все ресурсы должны быть подключены относительными локальными путями, чтобы можно было просто открыть index.html в браузере и увидеть результат.
- Все растровые изображения должны быть минифицированы с помощью сборки или с помощью сервисов минификации изображений: tinypng, squoosh.
- Если в макете не получается что-то реализовать точно (например, дизайнер не сделал возможность выбора конкретного шрифта в блоке), то надо сделать на глаз и описать этот момент в сопроводительном тексте в работе. В целом, вы можете по любому блоку написать комментарий в сопроводительном тексте и там описать если нужно, какие-то специфические моменты связанные с вёрсткой.
