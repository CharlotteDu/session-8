var app = new Vue({
  el: '#app',
  data: {
    firstName: "Charlotte",
    lastName: "Durand",
    description: "Je suis en alternance à l'AFP et élève à l'Ecole de Journalisme de Sciences Po",
    photo: "https://pbs.twimg.com/profile_images/799620785195335680/LtdftcHZ_400x400.jpg",
    twitter: "jChashimiD",
    github: "CharlotteDu",
    mail: "charlotte.durand@sciencespo.fr",
    experiences: [{
      dateBegin: "2016",
      dateEnd: "Today",
      name: "Agence France Presse",
      title: "Alternante",
      description: "Passée par les services Desk france, Infrographie, Société, Réseaux Sociaux et la rubrique cinéma"
    }, {
      dateBegin: "Été 2016",
      dateEnd: false,
      name: "Le Relève et la Peste",
      title: "Journaliste stagiaire",
      description: false
    }, {
      dateBegin: "Eté 2014",
      dateEnd: false,
      name: "La Croix",
      title: "Journaliste Stagiaire",
      description: false
    }],
    formations: [{
      dateBegin: "2016",
      dateEnd: "2018",
      name: "Master Journalisme",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2013",
      dateEnd: "2016",
      name: "Master d'Etudes Théâtrales",
      university: "Ecole Normale Supérieure de Lyon"
    }],
    languages: ["Anglais", "Russe", "Japonais"],
    skills: ["Première Pro", "Audition", "VueJS", "SCSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})