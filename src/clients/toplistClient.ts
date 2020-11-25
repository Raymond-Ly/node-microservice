/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import config from '../config';
import { errorResponse } from '../helpers/responseHelper';

export const getPartners = (countryCode: string): any => {
  const url = `${config.baseUrl}/api/pages/?url=gambling&country=${countryCode}`;
  const headers = {
    Authorization: config.authKey,
  };

  const getPage = async (): Promise<any> => {
    try {
      return await axios.get(url, { headers });
    } catch (err) {
      return errorResponse(err);
    }
  };

  return getPage().then(result => result?.data);
};
