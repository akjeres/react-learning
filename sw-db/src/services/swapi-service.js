export default class SWAPIService {
    _apiBase = 'https://swapi.co/api';
    _getID(item) {
        return item.url.match(/\/(\d+)\/$/i)[1];
    }
    _transformObj(obj) {
        const result = {
            id: this._getID(obj),
        };
        for (let key in obj) {
            if ( ~['url', 'edited', 'created', 'episode_id'].indexOf(key) ) continue;
            result[key] = obj[key];
        }

        return result;
    }

    _transformArr(arr) {
        return arr.map((i) => this._transformObj(i));
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Cound not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);

        return this._transformArr(res.results);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);

        return this._transformObj(person);
    }

    async getAllFilms() {
        const res = await this.getResource(`/films/`);

        return this._transformArr(res.results);
    }

    async getFilm(id) {
        const film = await this.getResource(`/films/${id}/`);

        return this._transformObj(film);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);

        return this._transformArr(res.results);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}/`);

        return this._transformObj(starship);
    }

    async getAllVehicles() {
        const res = await this.getResource(`/vehicles/`);

        return this._transformArr(res.results);
    }

    async getVehicle(id) {
        const vehicle = await this.getResource(`/vehicles/${id}/`);

        return this._transformObj(vehicle);
    }

    async getAllSpecies() {
        const res = await this.getResource(`/species/`);

        return this._transformArr(res.results);
    }

    async getSpecie(id) {
        const specie = await this.getResource(`/species/${id}/`);

        return this._transformObj(specie);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);

        return this._transformArr(res.results);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);

        return this._transformObj(planet);
    }
}