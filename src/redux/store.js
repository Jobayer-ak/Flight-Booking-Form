import { createStore } from "redux";
import flightReducer from "./flightBooking/flightReducer";


const store = createStore(flightReducer);

export default store;