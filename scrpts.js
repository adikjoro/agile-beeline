const data = {
  handbooks: [
    {
      title: 'Scrum Революционный метод управления проектами. Автор Джефф Сазерленд',
      desc: '275 стр',
      href: 'https://drive.google.com/drive/folders/1_GgkLu6VLxUMo28zI1AKTp2uixl6l9QC?usp=sharing'
    },
    {
      title: 'Scrum Guide. Автор Джефф Сазерлен и Кен Швабер',
      desc: '26 стр',
      href: 'https://drive.google.com/drive/folders/1_GgkLu6VLxUMo28zI1AKTp2uixl6l9QC?usp=sharing'
    },
    {
      title: 'Agile Manifesto',
      desc: '1 стр',
      href: 'http://agilemanifesto.org/iso/ru/manifesto.html'
    },
    {
      title: 'Agile Principles',
      desc: '1 стр',
      href: 'http://agilemanifesto.org/iso/ru/principles.html'
    },
    {
      title: 'Глоссарий по agile/scrum',
      desc: '5 стр',
      href: 'https://www.scrumstudy.com/freeresources/scrum-agile-glossary'
    },
    {
      title: 'Путь Скрам мастера',
      desc: '225 стр',
      href: 'http://agilemanifesto.org/iso/ru/manifesto.html'
    },
    {
      title: 'Коучинг agile команд',
      desc: 'epub',
      href: 'http://agilemanifesto.org/iso/ru/manifesto.html'
    },
  ],
  recommendations: [
    {
      title: '«Искусство программирования». Дональд Кнут',
      desc: 'Рекомендует Билл Гейтс',
      href: 'https://www.ozon.ru/context/detail/id/1335648/'
    },
    {
      title: '«Источник». Айн Рэнд',
      desc: 'Рекомендует Трэвис Каланик',
      href: 'https://www.ozon.ru/context/detail/id/4432885/'
    },
    {
      title: '«Основание». Айзек Азимов',
      desc: 'Рекомендует Илон Маск',
      href: 'https://www.ozon.ru/context/detail/id/26082214/'
    },
    {
      title: 'Мальчики в лодке',
      desc: 'Рекомендует Сатья Наделла',
      href: 'https://www.ozon.ru/context/detail/id/141139341/'
    },
    {
      title: 'Автобиография Николы Теслы',
      desc: 'Рекомендует Ларри Пейдж',
      href: 'http://biographera.net/biography.php?id=13'
    },
    {
      title: 'Автобиография Ричарда Фейнмана',
      desc: 'Рекомендует Сергей Брин',
      href:
        'https://ru.wikipedia.org/wiki/%D0%A4%D0%B5%D0%B9%D0%BD%D0%BC%D0%B0%D0%BD,_%D0%A0%D0%B8%D1%87%D0%B0%D1%80%D0%B4_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81'
    },
    {
      title: 'Биография Наполеона Бонапарта',
      desc: 'Рекомендует Ларри Эллисон',
      href: 'https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%BF%D0%BE%D0%BB%D0%B5%D0%BE%D0%BD_I'
    },
    {
      title: 'Харизма. Как влиять, убеждать и вдохновлять',
      desc: 'Рекомендует Марисса Майер',
      href: 'https://www.ozon.ru/context/detail/id/20266767/'
    },
    {
      title: '«На исходе дня». Кадзуо Исигуро',
      desc: 'Рекомендует Джефф Безос',
      href: 'https://mybook.ru/author/kadzuo-isiguro/ostatok-dnya/read/'
    },
    {
      title: '«Илиада» и «Одиссея» Гомера. «Энеида» Вергилия.',
      desc: 'Рекомендует Марк Цукенберг',
      href: ''
    },
    {
      title: '«Бизнес с нуля» Эрик Рис и «Раскройте свои силы» Маркуса Бакингема.',
      desc: 'Рекомендует Шерил Сэндберг',
      href: ''
    },
    {
      title: '«Состязание со временем». Джордж Сталк',
      desc: 'Рекомендует Тим Кук',
      href: ''
    },
    {
      title: '«Будь здесь и сейчас». Рам Дасса',
      desc: 'Рекомендует Стив Джобс',
      href: ''
    }
  ],
  online: [
    {
      title: 'Предпосылки появления agile. Курс читает Дмитрий Павлов ',
      desc: '2 часа 20 минут',
      href: 'https://drive.google.com/open?id=14J0SLLM2maX9_p7uqPq8aM24IbRSruEx'
    },
    {
      title: 'Agile Requirements Foundations. Angela Wick.',
      desc: '1 час 43 минуты',
      href: 'https://www.linkedin.com/learning/agile-requirements-foundations/welcome?u=2195290'
    },
    {
      title: 'Learn scrum online.',
      desc: '',
      href: 'https://edu.vivifyscrum.com/chapters'
    },
    { title: 'Agile для новичков', desc: '', href: 'http://www.agilebasics.ru/' },
    {
      title: 'Agile & Scrum – знакомство и легкое погружение. Курс читает Артем Быковец',
      desc: '1 час 37 минут',
      href: 'https://www.youtube.com/watch?v=2uFA3f74D0Q&t=353s'
    },
    {
      title: "Transitioning from Waterfall to Agile Project Management. Kelley O'Connell.",
      desc: '1 час 32 минут',
      href:
        'https://www.linkedin.com/learning/transitioning-from-waterfall-to-agile-project-management?u=2195290'
    },
    {
      title: "Scrum Basic. Kelley O'Connell",
      desc: '1 час 2 минуты',
      href: 'https://www.linkedin.com/learning/scrum-the-basics'
    },
    {
      title: 'Agile Project Management Principles. Bob McGannon',
      desc: '1 час 16 минуты',
      href: 'https://www.linkedin.com/learning/agile-project-management-principles?u=2195290'
    },
    {
      title: 'Free online Scrum Training Series',
      desc: '1 час 20 минут',
      href: 'http://scrumtrainingseries.com/'
    },
    {
      title:
        'Introduction to Agile - Transformation, Best Practices and Common Problems. Martin DuPont.',
      desc: '1 час 29 минут',
      href: 'https://www.youtube.com/watch?v=fCE1PmtbGXQ'
    },
    {
      title: '30 Minutes Free Agile Scrum Training',
      desc: '30 минут',
      href: 'https://masterofproject.com/p/agile-scrum-overview-agile-scrum-certification-info'
    },
    {
      title: 'Мультик - what is Agile? Марк Шед',
      desc: '12 минут',
      href: 'https://www.youtube.com/watch?v=Z9QbYZh1YXY'
    },
    {
      title: 'Мультик - what is Scrum? Стив Стедман',
      desc: '8 минут',
      href: 'https://www.youtube.com/watch?v=9TycLR0TqFA&t=4s'
    },
    {
      title: 'Гибкое управление продуктом в двух словах',
      desc: '16 минут',
      href: 'https://www.youtube.com/watch?v=mIVRFYjIZ5A&feature=youtu.be'
    },
    {
      title: 'Agile Product Ownership in a Nutshell',
      desc: '16 минут',
      href: 'https://www.youtube.com/watch?v=502ILHjX9EE&feature=youtu.be'
    },
    {
      title: 'Scrum и Kanban: Выжимаем максимум',
      desc: '78 стр',
      href: 'https://eurasia.veon.com/docs/DOC-9403-scrumandkanbanrufinalpdf'
    },
    {
      title: 'Introduction to Scrum',
      desc: '8 минут',
      href: 'https://www.youtube.com/watch?v=9TycLR0TqFA&feature=youtu.be'
    },
    {
      title: "What is a 'Scrum Master'? - Scrum Guide",
      desc: '4 минуты',
      href:
        'https://www.youtube.com/watch?v=QbPkcfzi2HI&index=1&list=PLpiOR7CBNvlqPjsa3vsB6BhhDDeUJOeyZ'
    },
    {
      title: 'Олег Бахмутов, Михаил Плотников, Илья Емельянов. Три кита Agile',
      desc: '1 час 5 минут',
      href: 'https://www.youtube.com/watch?v=0PLBnPZNZN4&feature=youtu.be'
    }
  ],
  presents: [
    {
      href: 'https://www.atlassian.com/agile',
      title: 'What is Agile?',
      desc: '5 стр'
    },

    {
      href: 'http://www.myshared.ru/slide/548116/',
      title: 'Презентация agile/scrum.',
      desc: '22 слайда'
    },

    {
      href: 'https://www.scrumstudy.com/pdf/Scrumstudy%20Process%20Chart-2-%2018-10-2012.pdf',
      title: 'Презентация. Scrum one pager.',
      desc: '2 слайда'
    },

    {
      href:
        'https://kaktus.media/doc/362616_nikolay_borisov:_kak_delat_za_2_nedeli_to_chto_drygie_yspevaut_za_polgoda.html',
      title: 'Интервью с Николаем Борисовым.',
      desc: '1 стр'
    },

    {
      href: 'https://www.atlassian.com/agile/scrum',
      title: 'What is Scrum? Dan Radigan',
      desc: '5 стр'
    },

    {
      href:
        'https://eurasia.veon.com/community/eurasia/kg/journey-2017/journey-2017-archive/future-om/agile-sky-journey/blog/2017/11/18/agile-%D0%BF%D0%BE%D0%B4%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D1%82%D0%BE%D0%B3%D0%BE%D0%B2-agile-kyrgyzstan-meetup1',
      title: '[AGILE] Подведение итогов Agile Kyrgyzstan Meetup#1',
      desc: ''
    },

    {
      href:
        'https://www.forbes.com/sites/stevedenning/2016/11/26/can-big-organizations-be-agile/#e8c0e7b38e79',
      title: ' Can Big Organizations Be Agile? Steve Denning',
      desc: ''
    },

    {
      href:
        'https://www.forbes.com/sites/stevedenning/2015/10/27/surprise-microsoft-is-agile/#603c0e6c2867',
      title: 'Surprise: Microsoft Is Agile. Steve Denning.',
      desc: ''
    },

    {
      href:
        'https://www.forbes.com/sites/stevedenning/2015/10/29/microsofts-sixteen-keys-to-becoming-agile-at-scale/#cfc0ec515ce7',
      title: "Microsoft's 16 Keys To Being Agile At Scale. Steve Denning,",
      desc: ''
    }
  ]
}
$("document").ready(function() {
    $(".education__item").click(function() {
        dataType = data[$(this).attr("data-title")]
        $(".education__dialog .list").html("")
        for (const p in dataType) {
            $(".education__dialog .list").append(
                "<li>" +
                "<a href='" + dataType[p].href + "' class='list__title' target='_blank'>" + dataType[p].title + "</a> \
                        <div class='list__desc'>"+ dataType[p].desc + "</div> \
                    </li>"
            )
        }
        $(".education__dialog").css({ visibility: "visible", opacity: 1 })
    })

    $(".close").click(function(e) {
        $(".education__dialog").css({
          opacity: 0,
          visibility: "hidden"
        });
    })

    $(".anchor").click(function() {
        // var link = document.createElement("a");
        if ($(this).attr("data-link")) {
            var target = $(this).attr("data-link")
            $target = $(target)
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function() {
                window.location.hash = target
            })
        }
    })

    $(".page-link").click(function(e) {
        if ($(this).attr("data-link")) {
            var link = document.createElement("a")
            link.target = "_blank"
            link.href = $(this).attr("data-link")
            link.click()
        }
    })
});