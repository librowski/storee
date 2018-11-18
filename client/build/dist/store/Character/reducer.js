var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { CharacterActionTypes } from "./types";
var initialState = {
    data: [],
    isPendingFetch: false,
    isPendingUpdate: false,
};
export var charactersReduce = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CharacterActionTypes.CHARACTER_FETCH_REQUEST:
            return __assign({}, state, { isPendingFetch: true });
        case CharacterActionTypes.CHARACTER_FETCH_SUCCESS:
            return __assign({}, state, { isPendingFetch: false, data: action.payload });
        case CharacterActionTypes.CHARACTER_FETCH_FAILURE:
            return __assign({}, state, { isPendingFetch: false, error: action.payload });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map