var prepositions = ['Campaign for', 'Campaign against', 'Friends Of'];
var randomPrep = prepositions[Math.floor(Math.random() * prepositions.length)];
var nouns = ['the Trots', 'Drug Addiction','the End of the World','Monorails','Tonty Blair','Fracking','More Bloody Houses','the DLR','Marcia Falkender','Dabbing','Progress','Misquoting Nye Bevan','Inflation','The Post Office','Concorde','Keir Hardie','North Korea','Tankies','the Libs','Electric Skateboards','Disney','Nuclear Holocaust'];
var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

function campaignName() {
    document.write('Labour' + ' ' + randomPrep + ' ' + randomNoun);
}
