var nails = new Nails({
    el: "body", //Start with # to specify id
    data: {
      title: "FotoDB",
    },
    methods: {
      onInit() {
        // This method is called during early construction of the State. As a result, there no state supplied as an argument.
        // You may use this, to trigger your own scripts. Beware, that the dom is not rendert at this time, so use OnMounted for any DOM operations.

      },
      onMounted(currentState) {
        currentState.data.photoInfos = [{
          "name": "Dominic Jaermann",
          "title": "Briefkasten",
          "text": "Ein Briefkasten eines einheimischen",
          "ISO": "100",
          "Brennweite": "4.8mm",
          "Blende": "f/3.2",
          "Verschlusszeit": "1/100 Sek."
      },
      {
          "name": "Dominic Jaermann",
          "title": "Grill",
          "text": "Text zu Grill",
          "ISO": "100",
          "Brennweite": "11.5mm",
          "Blende": "f\/3.4",
          "Verschlusszeit": "1/50 Sek."
      },
      {
          "name": "Dominic Jaermann",
          "title": "Monolith",
          "text": "Ein Monolith",
          "ISO": "100",
          "Brennweite": "4.8mm",
          "Blende": "f\/2.8",
          "Verschlusszeit": "1/30 Sek."
      },
      {
          "name": "Mladen Brankovic",
          "title": "Giraffe",
          "text": "Eine Giraffe",
          "ISO": "100",
          "Brennweite": "4.8mm",
          "Blende": "f\/2.8",
          "Verschlusszeit": "1/80 Sek."
      },
      {
          "name": "Mladen Brankovic",
          "title": "Skulptur",
          "text": "Eine Skulptur",
          "ISO": "100",
          "Brennweite": "4.8mm",
          "Blende": "f\/4.0",
          "Verschlusszeit": "1/200 Sek."
      },
      {
          "name": "Mladen Brankovic",
          "title": "Verkehrshut",
          "text": "Ein Verkehrshut",
          "ISO": "100",
          "Brennweite": "8.5mm",
          "Blende": "f\/3.2",
          "Verschlusszeit": "1/80 Sek."
      },
      {
          "name": "Sven Jaun",
          "title": "Fanta",
          "text": "Eine Fanta",
          "ISO": "100",
          "Brennweite": "9.2mm",
          "Blende": "f\/3.2",
          "Verschlusszeit": "1/40 Sek."
      },
      {
          "name": "Sven Jaun",
          "title": "Trottinett",
          "text": "Ein Trottinett",
          "ISO": "100",
          "Brennweite": "8mm",
          "Blende": "f\/3.0",
          "Verschlusszeit": "1/100 Sek."
      },
      {
          "name": "Sven Jaun",
          "title": "Tuerschloss",
          "text": "Eine Tuerschloss",
          "ISO": "100",
          "Brennweite": "38.5mm",
          "Blende": "f\/3.7",
          "Verschlusszeit": "1/60 Sek."
      }]

      }
    },
  });