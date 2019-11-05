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
                    "text": "Eine Briefempfangsbox eines Einheimischen.",
                    "ISO": "100",
                    "Brennweite": "4.8mm",
                    "Blende": "f/3.2",
                    "Verschlusszeit": "1/100 Sek.",
                    "Link": "raw_briefkasten.RW2"
                },
                {
                    "name": "Dominic Jaermann",
                    "title": "Grill",
                    "text": "Ein verlassenes Nahrungsgerät.",
                    "ISO": "100",
                    "Brennweite": "11.5mm",
                    "Blende": "f\/3.4",
                    "Verschlusszeit": "1/50 Sek.",
                    "Link": "raw_grill.RW2"
                },
                {
                    "name": "Dominic Jaermann",
                    "title": "Monolith",
                    "text": "Ein Monolith aus Stein.",
                    "ISO": "100",
                    "Brennweite": "4.8mm",
                    "Blende": "f\/2.8",
                    "Verschlusszeit": "1/30 Sek.",
                    "Link": "raw_monolith.RW2"
                },
                {
                    "name": "Mladen Brankovic",
                    "title": "Giraffe",
                    "text": "Ein zurückgebliebenes Kinderspielzeug.",
                    "ISO": "100",
                    "Brennweite": "4.8mm",
                    "Blende": "f\/2.8",
                    "Verschlusszeit": "1/80 Sek.",
                    "Link": "raw_giraffe.RW2"
                },
                {
                    "name": "Mladen Brankovic",
                    "title": "Skulptur",
                    "text": "Eine silberne Skulptur. Ihr Zweck ist unbekannt.",
                    "ISO": "100",
                    "Brennweite": "4.8mm",
                    "Blende": "f\/4.0",
                    "Verschlusszeit": "1/200 Sek.",
                    "Link": "raw_skulptur.RW2"
                },
                {
                    "name": "Mladen Brankovic",
                    "title": "Verkehrshut",
                    "text": "Ein gelagertes Strassenverkehrsutensil.",
                    "ISO": "100",
                    "Brennweite": "8.5mm",
                    "Blende": "f\/3.2",
                    "Verschlusszeit": "1/80 Sek.",
                    "Link": "raw_verkehrshut.RW2"
                },
                {
                    "name": "Sven Jaun",
                    "title": "Fanta",
                    "text": "Zurückgelassene Aluminiumdose.",
                    "ISO": "100",
                    "Brennweite": "9.2mm",
                    "Blende": "f\/3.2",
                    "Verschlusszeit": "1/40 Sek.",
                    "Link": "raw_fanta.RW2"
                },
                {
                    "name": "Sven Jaun",
                    "title": "Trottinett",
                    "text": "Fortbewegungsmittel eines einheimischen Jünglings.",
                    "ISO": "100",
                    "Brennweite": "8mm",
                    "Blende": "f\/3.0",
                    "Verschlusszeit": "1/100 Sek.",
                    "Link": "raw_trottinett.RW2"
                },
                {
                    "name": "Sven Jaun",
                    "title": "Türschloss",
                    "text": "Verschluss zu einer Tür. Der Inhalt des Gebäudes bleibt unbekannt.",
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
