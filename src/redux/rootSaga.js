export default function* rootSaga() {
    yield all([
        fork(authSaga),
    ]);
}