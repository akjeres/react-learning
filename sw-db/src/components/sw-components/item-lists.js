import ItemsList from '../items-list/';
import { withData } from '../hoc-helpers/';
import SWAPIService from '../../services/swapi-service';

const swapi = new SWAPIService();
const {
    getList,
} = swapi;

const List = withData(ItemsList, getList);

export {
    List,
};