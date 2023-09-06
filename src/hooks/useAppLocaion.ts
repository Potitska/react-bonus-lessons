import {useLocation, Location} from "react-router-dom";
import exp from "constants";


interface ILocation<StateType> extends Location {
    state: StateType
}

const useAppLocation = <State>() => useLocation() as ILocation<State>

export {
    useAppLocation
}