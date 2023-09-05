export { alertError };
import { Notify } from 'notiflix';

function alertError(text) {
  Notify.failure(text);
}
