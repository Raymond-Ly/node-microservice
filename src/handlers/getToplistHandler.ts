import '../helpers/handlerSetUp';
import { ALBEvent, ALBResult } from 'aws-lambda';
import { getToplistResponse } from '../services/toplistResponseService';
import { errorResponse, successResponse } from '../helpers/responseHelper';
import { BadRequestError } from '../errors';

export const getCountryCode = (event: ALBEvent): string => {
  const queryString = event.queryStringParameters;
  const countryCode = event.queryStringParameters?.countryCode;

  if (!queryString || !countryCode) {
    throw new BadRequestError('country code query string must be specified');
  }

  if (countryCode.length > 3) {
    throw new BadRequestError(`country code '${countryCode}' is invalid`);
  }

  return countryCode;
};

export const getPage = (event: ALBEvent): string => {
  const queryString = event.queryStringParameters;
  const page = event.queryStringParameters?.page;

  if (!queryString || !page) {
    throw new BadRequestError('page query string must be specified');
  }

  return page;
};

module.exports.get = async (event: ALBEvent): Promise<ALBResult> => {
  try {
    const countryCode = getCountryCode(event);
    const page = getPage(event);
    console.info(`Received request for ${event.queryStringParameters?.page} ${event.queryStringParameters?.countryCode}'s Toplist data`);
    const toplistResponse = await getToplistResponse(countryCode, page);

    return successResponse(toplistResponse);
  } catch (err) {
    return errorResponse(err);
  }
};
