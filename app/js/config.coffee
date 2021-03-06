define([],
() ->
    skills = [
      {
        id: "me",
        src: "look-me",
        link: "about-me",
        page_title: {en: "About me", ru: "Обо мне"},
        thumbnail: "/images/man.png",
        background: "#333",
        active: true
        quality: [
          {title: "Усидчивость"},
          {title: "Трудолюбие"},
          {title: "Обучаемость"},
          {title: "Коммуникабельность"}
          {title: "Работа в комманде"}
          {title: "DRY"}
        ]
      },
      {
        id: "php",
        src: "look-php",
        link: "php",
        page_title: {en: "My PHP skills", ru: "Мои PHP навыки"},
        thumbnail: "/images/php.png",
        background: "",
        quality: [
          {title: "Symfony 2"},
          {title: "Doctrine"},
          {title: "Composer"},
          {title: "Smarty"},
          {title: "Kohana"}
          {title: "Laravel"}
          {title: "Code Ingniter"}
          {title: "Zend Framework"}
          {title: "Doctrine Mongoose-ODM"}
          {title: "SimpleHTMLDom"}
          {title: "PHPExcel"}
        ]
      },
      {
        id: "database",
        src: "look-database",
        link: "database",
        page_title: {en: "Database knowledge", ru: "Знания баз данных"},
        thumbnail: "/images/database.png",
        background: "",
        quality: [
          {title: "Mysql"},
          {title: "MongoDB"}
        ]
      }
      {
        id: "node",
        src: "look-node",
        link: "node.js",
        page_title: {en: "Node.JS learning", ru: "Изучение Node.JS"},
        thumbnail: "/images/node.png",
        background: "",
        quality: [
          {title: "ExpressJS"},
          {title: "Socket.IO"},
          {title: "Mongoose"},
          {title: "Jade"}
          {title: "REST API"}
        ]
      }
      {
        id: "javascript",
        src: "look-js",
        link: "javascript",
        page_title: {en: "Javascript", ru: "Javascript"},
        thumbnail: "/images/javascript.png",
        background: "",
        quality: [
          {title: "JQuery"},
          {title: "BackboneJS"},
          {title: "RequireJS"},
          {title: "CoffeeScript"}
        ]
      },
      {
        id: "linux",
        src: "look-linux",
        link: "linux",
        page_title: {en: "Linux usage", ru: "Использование linux"},
        thumbnail: "/images/ubuntu.png",
        background: "",
        quality: [
          {title: "unix-console"}
        ]
      },
      {
        id: "portfolio"
        src: "portfolio-look"
        link: "portfolio"
        page_title: {en: "My portfolio", ru: "Мое портфолио"},
        thumbnail: "/images/papka.png",
        background: ""
        quality: [
          {title: "Сайт-визитка"}
          {title: "Likedimion"}
          {title: "flvto.com"}
          {title: "olyrics.com"}
          {title: "britanium.com"}
        ]
      }
      {
        id: "git",
        src: "look-git",
        link: "git",
        page_title: {en: "Use system version controll", ru: "Использование системы контролля версий"},
        thumbnail: "/images/cvs.png",
        background: "",
        quality: [
          {title: "Github"},
          {title: "Bitbucket"}
        ]
      }
      {
        id: "contacts"
        src: "contacts-look"
        link: "contact-me"
        page_title: {en: "My contacts", ru: "Мои контакты"},
        thumbnail: "/images/contacts.png"
        background: ""
        quality: [
          {title: "Обратная связь"}
        ]
      }
        #{name: "html", src: "html",  thumbnail: "/images/page_html.png", w: 128, h:128},
        #{name: "css", src: "css",  thumbnail: "/images/page_css.png", w: 128, h: 128}
    ]
    _.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g
    }
    return skills
)



