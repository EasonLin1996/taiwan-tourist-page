import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import jsSHA from 'jssha';
import axios from 'axios';

export const FETCH_DETAILPRODUCT_START = 'FETCH_DETAILPRODUCT_START';
export const FETCH_DETAILPRODUCT_SUCCESS = 'FETCH_DETAILPRODUCT_SUCCESS';
export const FETCH_DETAILPRODUCT_FAIL = 'FETCH_DETAILPRODUCT_FAIL';

interface FetchProductStartActionState {
  type: typeof FETCH_DETAILPRODUCT_START;
}

interface FetchProductSuccessActionState {
  type: typeof FETCH_DETAILPRODUCT_SUCCESS;
  payload: any;
}

interface FetchProductFailActionState {
  type: typeof FETCH_DETAILPRODUCT_FAIL;
  payload: any;
}

interface DetailProductParamsType {
  category: string | null;
  id: string | null;
}

export type DetailProductActionState =
  | FetchProductStartActionState
  | FetchProductSuccessActionState
  | FetchProductFailActionState;

export const fetchProductStartActionCreator =
  (): FetchProductStartActionState => {
    return {
      type: FETCH_DETAILPRODUCT_START,
    };
  };

export const fetchProductSuccessActionCreator = (
  data
): FetchProductSuccessActionState => {
  return {
    type: FETCH_DETAILPRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchProductFailActionCreator = (
  error
): FetchProductFailActionState => {
  return {
    type: FETCH_DETAILPRODUCT_FAIL,
    payload: error,
  };
};

export const getDetailProductCreator =
  (
    params: DetailProductParamsType
  ): ThunkAction<void, RootState, unknown, DetailProductActionState> =>
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
      const { id, category } = params;
      const { data } = await axios.get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/${category}?$format=JSON&$filter=${category}ID eq '${id}'`,
        {
          headers: getAuthorizationHeader(),
        }
      );
      dispatch(fetchProductSuccessActionCreator(data));
    } catch (error) {
      dispatch(fetchProductFailActionCreator(error));
    }
  };
