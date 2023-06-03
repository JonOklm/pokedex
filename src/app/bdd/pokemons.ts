import { Pokemon } from "../models/pokemon";


//le mot clés export rend exportable la constante n'importe ou dans le projet
export const LISTDEPOKEMONS: Array<Pokemon> = [
    {
        id:1,
        name: 'Bulbuzarre',
        types: 'Herbe',
        cp: 5,
        hp: 25,
        pictures: 'assets/001.png',
        created: new Date()
    },
    {
        id:2,
        name: 'Salaméche',
        types: 'Feu',
        cp: 9,
        hp: 29,
        pictures: 'assets/004.png',
        created: new Date()
    },
    {
        id:3,
        name: 'Carapuce',
        types: 'Eau',
        cp: 7,
        hp: 27,
        pictures: 'assets/007.png',
        created: new Date()
    },
    {
        id:4,
        name: 'Aspicot',
        types: 'Inspecte',
        cp: 4,
        hp: 18,
        pictures: 'assets/013.png',
        created: new Date()
    },
    {
        id:5,
        name: 'Roucool',
        types: 'Normal',
        cp: 3,
        hp: 29,
        pictures: 'assets/016.png',
        created: new Date()
    },
    {
        id:6,
        name: 'Rattata',
        types: 'Normal',
        cp: 3,
        hp: 16,
        pictures: 'assets/019.png',
        created: new Date()
    },
    {
        id:7,
        name: 'Piafabec',
        types: 'Vol',
        cp: 5,
        hp: 25,
        pictures: 'assets/021.png',
        created: new Date()
    },
    {
        id:8,
        name: 'Abo',
        types: 'Poison',
        cp: 3,
        hp: 4,
        pictures: 'assets/023.png',
        created: new Date()
    },
    {
        id:9,
        name: 'Pikachu',
        types: 'Electrik',
        cp: 9,
        hp: 30,
        pictures: 'assets/025.png',
        created: new Date()
    },
    {
        id:10,
        name: 'Sablette',
        types: 'Roche',
        cp: 16,
        hp: 23,
        pictures: 'assets/027.png',
        created: new Date()
    },
    {
        id:11,
        name: 'Mélofée',
        types: 'Fée',
        cp: 16,
        hp: 23,
        pictures: 'assets/035.png',
        created: new Date()
    },
    {
        id:12,
        name: 'Goupix',
        types: 'Feu',
        cp: 17,
        hp: 25,
        pictures: 'assets/037.png',
        created: new Date()
    },

];