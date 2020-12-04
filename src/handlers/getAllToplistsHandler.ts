import '../helpers/handlerSetUp';
import { ALBEvent, ALBResult } from 'aws-lambda';
import { getAllToplistResponses } from '../services/toplistResponseService';
import { errorResponse, successResponse } from '../helpers/responseHelper';
import { getPage } from './getToplistHandler';

module.exports.get = async (event: ALBEvent): Promise<ALBResult> => {
  try {
    const page = getPage(event);
    console.info('Received request for all GEO Toplist data');
    const toplistResponse = await getAllToplistResponses(page);

    return successResponse(toplistResponse);
  } catch (err) {
    return errorResponse(err);
  }
};
