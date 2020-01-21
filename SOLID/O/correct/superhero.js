class SuperHero {
    constructor() { }
    getWeapons() { }
}

class Thor extends SuperHero {
     getWeapons() {          
        return 'storm breaker';
     }
}

class CaptainAmerica extends SuperHero {
     getWeapons() {        
        return 'Shield';
     }
}

class Ironman extends SuperHero {
     getWeapons() {
        return 'Suit';
     }
}

class Murthy extends SuperHero {
    getWeapons() {
       return 'Dagger';
    }
}

function getWeapons(a) {
        for (let index = 0 ; index < a.length; index++) {
            console.log(a[index].getWeapons());
        }
}

let superheros = [];
var a = new Ironman();
var b = new CaptainAmerica();
var c = new Thor();
var d = new Murthy();
superheros.push (a);
superheros.push (b);
superheros.push (c);
superheros.push (d);

getWeapons(superheros);

// When a new hero comes to project, create a new class for him and add him to Array of Heroes