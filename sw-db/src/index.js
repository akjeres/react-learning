import SWAPIService from './services/swapi-service';

const swapi = new SWAPIService();

// swapi.getAllPeople().then((people) => {
//     people.map((i) => {
//         console.log(i['name']);
//     });
// });
swapi.getPerson(10).then((person) => {
    console.log(person.name);
});