export { alertError, alertSuccess };
import { Notify } from 'notiflix';

function alertError(text) {
  Notify.failure(text);
}

function alertSuccess(text) {
  Notify.success(text);
}
