import { createStore } from 'redux';
import appStore from './reducers';

export default function configureStore() {
  return createStore(appStore);
}
