import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      ['Waterval', 'De persoon die de kaart trekt begint met drinken de persoon rechts naast hem begint ook met drinken, de persoon rechst naast hem ook. etc. Je mag pas stoppen met drinken als de persoon links naast je stopt met drinken.'],
      ['Geef 2', 'Je mag 2 slokken uitdelen'],
      ['Neem 3', 'Je moet zelf 3 slokken drinken'],
      // ['Geef 2, neem 2', 'Je moet zelf 2 slokken drinken, en je mag 2 slokken uitdelen'],
      // ['Regel', 'Je mag een regel bedenken waar ieder zich aan moet houden. Wie zich niet aan deze regel houd, drinkt 2 slokken'],
      // ['👍', 'Leg je duim op tafel, de laatste die dit doet, drinkt 2 slokken'],
      // ['Categorie', ' De speler die deze kaart pakt moet een merk noemen. Alle andere spelers moeten dan een merk uit dezelfde categorie noemen.'],
      // ['Juffen', '1, 2, 3, 4, 5, 6, JUF, 8, 9...13, JUF, 15, 16, JUF, 18... Enzovoort'],
      // ['Question queen', 'Deze persoon mag geen vragen meer beantwoorden, doe je dat wel? 2 slokken. (Je bent question queen totdat iemand anders deze kaart weer trekt)'],
      // ['Wijzen', ' Alle spelers houden hun hand in de lucht en wijzen na 5 seconden naar een willekeurige medespeler. Deze persoon drinkt 2 slokken.'],
      // ['De Lenn', 'Gedraag je als een kakker tot de volgende naamkaart getrokken wordt'],
      // ['De Thimo', 'Onthoud dit goed, want dit is belangrijk voor straks. Je bent nu joods, je wordt alvast gecondoleerd voor als de Duitsers weer komen.'],
      // ['De duitsers zijn gekomen', 'Als je in een in een van je voorgaande beurten een \'Thimo\' kaart hebt getrokken, moet je nu je glas leegatten.'],
      // ['De Coen', 'Ga op de foto met een verkeersdrempel en deel een bitchslap uit (vrije interpretatie van deze vraag is aangeraden)'],
      // ['De Tjalle', 'Maak een bedevaart naar Meddo, ga niet langs start en ontvang dus geen 200 euro.'],
      // ['De Mika', 'Word dronken, doe je shirt uit doe iets wat lijkt op een koprol en klim in een boom.'],
      // ['De Daan', 'Daan (is er niemand met de naam Daan aanwezig; dan iemand anders) maakt een cocktail voor je, in de vrijste zin van het woord.'],
      // ['Long live the king', 'De speler die deze kaart trekt, mag 1 keer op een willekeurige tijd zijn hand in de lucht steken en roept dan: \'Long live the king!\'. Iedereen volgt. Degene die dit als laatste doet neemt 2 slokken.'],
      // ['Truth or Dare', 'Kies een van de beiden, je medespelers zullen iets voor je bedenken. Beantwoord je de truth niet of doe je dare niet, dan zul je een atje moeten gooien!'],
      // ['Atten', 'Gefeliciteerd, je hebt verloren, at je drankje op binnen 10 seconden, lukt dit niet? At er dan nog maar een. (Hier mag je wel zo lang over doen als je wil)'],
      // ['Met de squad', 'Iedereen drinkt 5 slokken'],
      // ['Rijmen', 'Je noemt een woord waarna om de beurt de spelers moeten rijmen. De speler die dat niet (snel) doet, moet drinken (Als je begint met het woord herfst, dan mag je je drankje leegatten)'],
      // ['Never have I ever', 'Noem iets wat je nog nooit hebt gedaan. Iedereen die dit wel heeft gedaan, moet drinken.'],
      // ['Daten', 'Kies een drinkbuddy, als een van jullie twee moet drinken, drinkt de ander ook. (Vervalt bij de volgende persoon die deze kaart pakt)'],
      // ['The floor isn\'t lava 🌋', 'de persoon die als laatste de vloer aantikt neemt 2 slokken'],
      // ['Lingo', 'De persoon die als eerste keihard \'GROEEEEEEEEN\' schreeuwt terwijl hij/zij zijn drankje in de lucht houd mag 2 slokken uitdelen.'],
      // ['Jokes on you', 'Vertel een grap, als er niemand lacht, drink jij 5 slokken, als er iemand lacht, drinkt de rest 5 slokken'],
      // ['Bussonnn', 'Gooi een dobbelsteen, de uitkomst van je worp is de lengte van je bus (alle kaarten dichtleggen)'],
      // ['Vies geluk', 'Je hoeft niet te drinken! 🎉🎉🎉🎉'],
      // ['Shotssss', 'Jullie doen met zijn allen een shotje. Zijn er geen shotjes? Drink allemaal 15 slokken.'],
      // ['Hydrohomie', 'Drink water 💦💦', ],
      // ['Je bent ook nooit stil', 'Je mag een ronde lang niets zeggen. Je drinkt 2 slokken per overtreding'],
      // ['Anderhalvemeter', 'Neem eens wat afstand, je moet een ronde lang 1,5 meter van de tafel afzitten'],
      // ['🔀', 'We gaan de andere kant op!'],
      // ['🔀', 'We gaan de andere kant op!'],
      // ['🔀', 'We gaan de andere kant op!'],
    ],
  },
  mutations: {
    remove(state, {
      arrayEntry
    }) {
      let index = state.cards.indexOf(arrayEntry);
      state.cards.splice(index, 1);
    },
    reset(state) {
      let thosecards = [
          ['Waterval', 'De persoon die de kaart trekt begint met drinken de persoon rechts naast hem begint ook met drinken, de persoon rechst naast hem ook. etc. Je mag pas stoppen met drinken als de persoon links naast je stopt met drinken.'],
          ['Geef 2', 'Je mag 2 slokken uitdelen'],
          ['Neem 3', 'Je moet zelf 3 slokken drinken'],
          ['Geef 2, neem 2', 'Je moet zelf 2 slokken drinken, en je mag 2 slokken uitdelen'],
          ['Regel', 'Je mag een regel bedenken waar ieder zich aan moet houden. Wie zich niet aan deze regel houd, drinkt 2 slokken'],
          ['👍', 'Leg je duim op tafel, de laatste die dit doet, drinkt 2 slokken'],
          ['Categorie', ' De speler die deze kaart pakt moet een merk noemen. Alle andere spelers moeten dan een merk uit dezelfde categorie noemen.'],
          ['Juffen', '1, 2, 3, 4, 5, 6, JUF, 8, 9...13, JUF, 15, 16, JUF, 18... Enzovoort'],
          ['Question queen', 'Deze persoon mag geen vragen meer beantwoorden, doe je dat wel? 2 slokken. (Je bent question queen totdat iemand anders deze kaart weer trekt)'],
          ['Wijzen', ' Alle spelers houden hun hand in de lucht en wijzen na 5 seconden naar een willekeurige medespeler. Deze persoon drinkt 2 slokken.'],
          ['De Lenn', 'Gedraag je als een kakker tot de volgende naamkaart getrokken wordt'],
          ['De Thimo', 'Onthoud dit goed, want dit is belangrijk voor straks. Je bent nu joods, je wordt alvast gecondoleerd voor als de Duitsers weer komen.'],
          ['De duitsers zijn gekomen', 'Als je in een in een van je voorgaande beurten een \'Thimo\' kaart hebt getrokken, moet je nu je glas leegatten.'],
          ['De Coen', 'Ga op de foto met een verkeersdrempel en deel een bitchslap uit (vrije interpretatie van deze vraag is aangeraden)'],
          ['De Tjalle', 'Maak een bedevaart naar Meddo, ga niet langs start en ontvang dus geen 200 euro.'],
          ['De Mika', 'Word dronken, doe je shirt uit doe iets wat lijkt op een koprol en klim in een boom.'],
          ['De Daan', 'Daan (is er niemand met de naam Daan aanwezig; dan iemand anders) maakt een cocktail voor je, in de vrijste zin van het woord.'],
          ['Long live the king', 'De speler die deze kaart trekt, mag 1 keer op een willekeurige tijd zijn hand in de lucht steken en roept dan: \'Long live the king!\'. Iedereen volgt. Degene die dit als laatste doet neemt 2 slokken.'],
          ['Truth or Dare', 'Kies een van de beiden, je medespelers zullen iets voor je bedenken. Beantwoord je de truth niet of doe je dare niet, dan zul je een atje moeten gooien!'],
          ['Atten', 'Gefeliciteerd, je hebt verloren, at je drankje op binnen 10 seconden, lukt dit niet? At er dan nog maar een. (Hier mag je wel zo lang over doen als je wil)'],
          ['Met de squad', 'Iedereen drinkt 5 slokken'],
          ['Rijmen', 'Je noemt een woord waarna om de beurt de spelers moeten rijmen. De speler die dat niet (snel) doet, moet drinken (Als je begint met het woord herfst, dan mag je je drankje leegatten)'],
          ['Never have I ever', 'Noem iets wat je nog nooit hebt gedaan. Iedereen die dit wel heeft gedaan, moet drinken.'],
          ['Daten', 'Kies een drinkbuddy, als een van jullie twee moet drinken, drinkt de ander ook. (Vervalt bij de volgende persoon die deze kaart pakt)'],
          ['The floor isn\'t lava 🌋', 'de persoon die als laatste de vloer aantikt neemt 2 slokken'],
          ['Lingo', 'De persoon die als eerste keihard \'GROEEEEEEEEN\' schreeuwt terwijl hij/zij zijn drankje in de lucht houd mag 2 slokken uitdelen.'],
          ['Jokes on you', 'Vertel een grap, als er niemand lacht, drink jij 5 slokken, als er iemand lacht, drinkt de rest 5 slokken'],
          ['Bussonnn', 'Gooi een dobbelsteen, de uitkomst van je worp is de lengte van je bus (alle kaarten dichtleggen)'],
          ['Vies geluk', 'Je hoeft niet te drinken! 🎉🎉🎉🎉'],
          ['Shotssss', 'Jullie doen met zijn allen een shotje. Zijn er geen shotjes? Drink allemaal 15 slokken.'],
          ['Hydrohomie', 'Drink water 💦💦', ],
          ['Je bent ook nooit stil', 'Je mag een ronde lang niets zeggen. Je drinkt 2 slokken per overtreding'],
          ['Anderhalvemeter', 'Neem eens wat afstand, je moet een ronde lang 1,5 meter van de tafel afzitten'],
          ['🔀', 'We gaan de andere kant op!'],
          ['🔀', 'We gaan de andere kant op!'],
          ['🔀', 'We gaan de andere kant op!'],
        ];
        state.cards = thosecards;
    }
  },
  actions: {},
  modules: {},
  getters: {
    allCards() {
      return this.state.cards;
    },
  },
  plugins: [createPersistedState()],
});