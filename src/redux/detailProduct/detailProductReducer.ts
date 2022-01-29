import {
  FETCH_DETAILPRODUCT_START,
  FETCH_DETAILPRODUCT_SUCCESS,
  FETCH_DETAILPRODUCT_FAIL,
  DetailProductActionState,
} from './detailProductActions';

interface DetailProductState {
  isLoading: boolean;
  error: string | null;
  productOne: any[];
}

const defaultProductState: DetailProductState = {
  isLoading: true,
  error: null,
  productOne: [],
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (
  state = defaultProductState,
  action: DetailProductActionState
) => {
  switch (action.type) {
    case FETCH_DETAILPRODUCT_START:
      return { ...state, isLoading: true };
    case FETCH_DETAILPRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productOne: action.payload,
        error: null,
      };
    case FETCH_DETAILPRODUCT_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
