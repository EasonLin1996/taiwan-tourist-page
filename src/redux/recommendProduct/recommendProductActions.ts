import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import jsSHA from 'jssha';
import axios from 'axios';

export const FETCH_RECOMMENDPRODUCT_START = 'FETCH_RECOMMENDPRODUCT_START';
export const FETCH_RECOMMENDPRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_RECOMMENDPRODUCT_FAIL = 'FETCH_PRODUCT_FAIL';

interface FetchProductStartActionState {
  type: typeof FETCH_RECOMMENDPRODUCT_START;
}

interface FetchProductSuccessActionState {
  type: typeof FETCH_RECOMMENDPRODUCT_SUCCESS;
  payload: any;
}

interface FetchProductFailActionState {
  type: typeof FETCH_RECOMMENDPRODUCT_FAIL;
  payload: any;
}

interface ProductListParamsType {
  city: string | null;
  name: string | null;
  catrgory: string | null;
}

export type RecommendProductActionState =
  | FetchProductStartActionState
  | FetchProductSuccessActionState
  | FetchProductFailActionState;

export const fetchProductStartActionCreator =
  (): FetchProductStartActionState => {
    return {
      type: FETCH_RECOMMENDPRODUCT_START,
    };
  };

export const fetchProductSuccessActionCreator = (
  data
): FetchProductSuccessActionState => {
  return {
    type: FETCH_RECOMMENDPRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchProductFailActionCreator = (
  error
): FetchProductFailActionState => {
  return {
    type: FETCH_RECOMMENDPRODUCT_FAIL,
    payload: error,
  };
};

export const getRecommendProductCreator =
  (
    category,
    params: ProductListParamsType
  ): ThunkAction<void, RootState, unknown, RecommendProductActionState> =>
  async (dispatch, getState) => {
    try {
      dispatch(fetchProductStartActionCreator());
      const getAuthorizationHeader = () => {
        //  填入自己 ID、KEY 開始
        let AppID = '455bf564e4a84fc6bbc96e5845802df4';
        let AppKey = 'twRBBQTARSnebP3SpusMnH-mGx0';
        //  填入自己 ID、KEY 結束
        let GMTString = new Date().toUTCString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization =
          'hmac username="' +
          AppID +
          '", algorithm="hmac-sha1", headers="x-date", signature="' +
          HMAC +
          '"';
        return { Authorization: Authorization, 'X-Date': GMTString };
      };
      const { city, name } = params;
      const { data } = await axios.get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/${category}/${
          city ? city : ''
        }?$top=30&$format=JSON${
          name ? `&$filter=contains(${category}Name,'${name}')` : ''
        }`,
        // &$filter=contains(ID,'C1_315080500H_000068')
        {
          headers: getAuthorizationHeader(),
        }
      );
      dispatch(fetchProductSuccessActionCreator(data));
    } catch (error) {
      dispatch(fetchProductFailActionCreator(error));
    }
  };
