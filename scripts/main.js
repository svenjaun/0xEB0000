var nails = new Nails({
    el: "body", //Start with # to specify id
    data: {
        title: "0xEB0000",
    },
    methods: {
        onInit() {},
        onMounted(currentState) {
            currentState.data.photoInfos = [{
                    "name": "Dominic Jaermann",
                    "title": "Briefkasten",
                    "text": "Ein Briefkasten eines einheimischen",
                    "ISO": "100",
                    "Brennweite": "4.8mm",
                    "Blende": "f/3.2",
                    "Verschlusszeit": "1/100 Sek.",
                    "Link": "raw_briefkasten.RW2"
                },
                {
                    "name": "Dominic Jaermann",
                    "title": "Grill",
                    "text": "Text zu Grill",
                    "ISO": "100",
                    "Brennweite": "11.5mm",
                    "Blende": "f\/3.4",
                    "Verschlusszeit": "1/50 Sek.",
                    "Link": "raw_grill.RW2"
                },
                {
                    "name": "Dominic Jaermann",
                    "title": "Monolith",
                    "text": "Ein Monolith",
                    "ISO": "100",
                    "Brennweite": "4.8mm",
                    "Blende": "f\/2.8",
                    "Verschlusszeit": "1/30 Sek.",
                    "Link": "raw_monolith.RW2"
                },
                {
                    "name": "Mladen Brankovic",
                    "title": "Giraffe",
                    "text": "Eine Giraffe",
                    "ISO": "100",
                    "Brennweite": "4.8mm",
                    "Blende": "f\/2.8",
                    "Verschlusszeit": "1/80 Sek.",
                    "Link": "raw_giraffe.RW2"
                },
                {
                    "name": "Mladen Brankovic",
                    "title": "Skulptur",
                    "text": "Eine Skulptur",
                    "ISO": "100",
                    "Brennweite": "4.8mm",
                    "Blende": "f\/4.0",
                    "Verschlusszeit": "1/200 Sek.",
                    "Link": "raw_skulptur.RW2"
                },
                {
                    "name": "Mladen Brankovic",
                    "title": "Verkehrshut",
                    "text": "Ein Verkehrshut",
                    "ISO": "100",
                    "Brennweite": "8.5mm",
                    "Blende": "f\/3.2",
                    "Verschlusszeit": "1/80 Sek.",
                    "Link": "raw_verkehrshut.RW2"
                },
                {
                    "name": "Sven Jaun",
                    "title": "Fanta",
                    "text": "Eine Fanta",
                    "ISO": "100",
                    "Brennweite": "9.2mm",
                    "Blende": "f\/3.2",
                    "Verschlusszeit": "1/40 Sek.",
                    "Link": "raw_fanta.RW2"
                },
                {
                    "name": "Sven Jaun",
                    "title": "Trottinett",
                    "text": "Ein Trottinett",
                    "ISO": "100",
                    "Brennweite": "8mm",
                    "Blende": "f\/3.0",
                    "Verschlusszeit": "1/100 Sek.",
                    "Link": "raw_trottinett.RW2"
                },
                {
                    "name": "Sven Jaun",
                    "title": "Türschloss",
                    "text": "Eine Tuerschloss",
                    "ISO": "100",
                    "Brennweite": "38.5mm",
                    "Blende": "f\/3.7",
                    "Verschlusszeit": "1/60 Sek.",
                    "Link": "raw_tuerschloss.RW2"
                }
            ]
        }
    },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function() {

    $(".navbar-brand").click(function() {
        $(".navbar-brand").removeClass("active");
        $(this).addClass("active");
    });
});

function checkNav() {
    $('#navigation').find('a').each(function() {
        $(this).removeClass('active')
    });
    document.getElementById(mostVisible('.pagesection').getAttribute('id') + "nav").className += " active"
}
