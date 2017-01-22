# Личный проект «Пинк»

Как запустить локальную сборку проекта:

1. Установить node.js:

  OS X

  a) Через терминал установаить Homebrew [ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ];

  b) Установить node.js [ brew install node ].

  Win

  a) Скачать текущую версию с сайта: https://nodejs.org/en/, установить.

2. Проверить, установлен ли [ node -v ] - покажет текущую установленную версию.

3. Устновить grunt [ npm install -g grunt grunt-cli ].

4. Проверить, установлен ли [ grunt --version ] - покажет текущую установленную версию.

5. Перейти в директорию проекта.

6. Установить grunt локально [ npm install grunt --save-dev ].

7. Установить препроцессор less [ npm install grunt-contrib-less --save-dev ].

8. Запустить сборку less [ grunt less ].

9. Установить все необходимые зависимости [ npm i ].

10. Собрать билд [ npm run build ] - опционально.

11. Запустить на локальном хосте [ npm start ] - автоматически соберет билд и запустит.




_Не удаляйте и не обращайте внимание на файлы:_<br>
_`.editorconfig`, `.gitignore`, `.travis.yml`, `package.json`._



<a href="https://htmlacademy.ru/intensive/adaptive"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/adaptive/logo-for-github.svg"></a>


[travis-image]: https://travis-ci.org/htmlacademy-adaptive/87862-pink.svg?branch=master
[travis-url]: https://travis-ci.org/htmlacademy-adaptive/87862-pink
[dependency-image]: https://david-dm.org/htmlacademy-adaptive/87862-pink.svg?style=flat-square
[dependency-url]: https://david-dm.org/htmlacademy-adaptive/87862-pink

pink: development pink-adaptive
