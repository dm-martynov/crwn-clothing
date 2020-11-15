import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

function* rootSaga() {
  yield all([call(shopSagas), call(cartSagas), call(userSagas)]);
}

export default rootSaga;
