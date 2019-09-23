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

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Cound not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    getList = async (path_without_covering_slashes) => {
        const res = await this.getResource(`/${path_without_covering_slashes}/`);

        return this._transformArr(res.results);
    }
    
    getSingle = async (path_without_covering_slashes, id) => {
        const res = await this.getResource(`/${path_without_covering_slashes}/${id}/`);

        return this._transformArr(res.results);
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);

        return this._transformArr(res.results);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);

        return this._transformObj(person);
    }

    getAllFilms = async () => {
        const res = await this.getResource(`/films/`);

        return this._transformArr(res.results);
    }

    getFilm = async (id) => {
        const film = await this.getResource(`/films/${id}/`);

        return this._transformObj(film);
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);

        return this._transformArr(res.results);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);

        return this._transformObj(starship);
    }

    getAllVehicles = async () => {
        const res = await this.getResource(`/vehicles/`);

        return this._transformArr(res.results);
    }

    getVehicle = async (id) => {
        const vehicle = await this.getResource(`/vehicles/${id}/`);

        return this._transformObj(vehicle);
    }

    getAllSpecies = async () => {
        const res = await this.getResource(`/species/`);

        return this._transformArr(res.results);
    }

    getSpecie = async (id) => {
        const specie = await this.getResource(`/species/${id}/`);

        return this._transformObj(specie);
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);

        return this._transformArr(res.results);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);

        return this._transformObj(planet);
    }
}