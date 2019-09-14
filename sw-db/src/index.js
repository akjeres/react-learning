class SWAPIService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Cound not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);

        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllFilms() {
        const res = await this.getResource(`/films/`);

        return res.results;
    }

    getFilm(id) {
        return this.getResource(`/films/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);

        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }

    async getAllVehicles() {
        const res = await this.getResource(`/vehicles/`);

        return res.results;
    }

    getVehicle(id) {
        return this.getResource(`/vehicles/${id}/`);
    }

    async getAllSpecies() {
        const res = await this.getResource(`/species/`);

        return res.results;
    }

    getSpecie(id) {
        return this.getResource(`/species/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);

        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }
}

const swapi = new SWAPIService();

// swapi.getAllPeople().then((people) => {
//     people.map((i) => {
//         console.log(i['name']);
//     });
// });
swapi.getPerson(10).then((person) => {
    console.log(person.name);
});