class SuperHero {
    getWeapons(herosName) {
      for(let index = 0; index < herosName.length; index++) {
         if(herosName[index].name === 'thor') {
            console.log('storm breaker');
         }
         if(herosName[index].name === 'captainamerica') {
            console.log('Shield');
         }
         if(herosName[index].name === 'Murthy') {
             console.log('Dagger');
          }
      }
    }
}

function getWeapons(a) {
    for (let index = 0 ; index < a.length; index++) {
        console.log(a[index].getWeapons());
    }
}

var thor = new SuperHero ();
let heroes = [{name : 'thor'}, {name : 'captainamerica'}, {name : 'Murthy'}];
thor.getWeapons(heroes);