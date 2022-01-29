import {
  FETCH_RECOMMENDPRODUCT_START,
  FETCH_RECOMMENDPRODUCT_SUCCESS,
  FETCH_RECOMMENDPRODUCT_FAIL,
  RecommendProductActionState,
} from './recommendProductActions';

interface RecommendProductState {
  isLoading: boolean;
  error: string | null;
  productList: any[];
}

const defaultProductState: RecommendProductState = {
  isLoading: true,
  error: null,
  productList: [],
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (
  state = defaultProductState,
  action: RecommendProductActionState
) => {
  switch (action.type) {
    case FETCH_RECOMMENDPRODUCT_START:
      return { ...state, isLoading: true };
    case FETCH_RECOMMENDPRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productList: action.payload,
        error: null,
      };
    case FETCH_RECOMMENDPRODUCT_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
