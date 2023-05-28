import { createStoreHook } from "react-redux";
import rootReducers from ".";

const store = createStoreHook(rootReducers);

export default store;