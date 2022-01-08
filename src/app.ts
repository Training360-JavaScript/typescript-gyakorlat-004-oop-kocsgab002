// Importáld be a HumanHero és TransformerHero osztályokat.
import { TransformerHero } from './transformer';
import { HumanHero } from './hero';


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 1,
        name: 'Superman',
        sex: 'male',
        age: 28,
        health: 100
    },
    {
        id: 2,
        name: 'Batmen',
        sex: 'male',
        age: 39,
        health: 50
    },
    {
        id: 3,
        name: 'Hulk',
        sex: 'male',
        age: 50,
        health: 1000
    },

];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {
        id: 1,
        name: 'Bumblebee',
        wings: 0,
        wheels: 16,
        clan: 'Autobots'
    },
    {
        id: 2,
        name: 'Trailbreaker',
        wings: 0,
        wheels: 46,
        clan: 'Autobots'
    },
    {
        id: 3,
        name: 'Bluestreak',
        wings: 0,
        wheels: 4,
        clan: 'Autobots'
    }
];
