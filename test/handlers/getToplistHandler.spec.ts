import assert from 'assert';
import { getCountryCode, getPage } from '../../src/handlers/getToplistHandler';
import { ALBEvent } from 'aws-lambda';

const awsEventWithQueryString = (countryCode: string): ALBEvent => ({
  queryStringParameters: {
    countryCode: countryCode,
  },
} as unknown as ALBEvent)

const awsEventWithoutQueryString = (): ALBEvent => ({
  queryStringParameters:  undefined
} as unknown as ALBEvent)

describe('getCountryCode', () => {
  it('extracts country code from query string', () => {
    const countryCode = 'GB';

    assert.strictEqual(getCountryCode(awsEventWithQueryString(countryCode)), 'GB')
  })

  it('should throw an error if country code query string is undefined', () => {
    assert.throws(
      () => getCountryCode(awsEventWithoutQueryString()),
      { message: 'country code query string must be specified'}
    );
  })

  it('should throw an error if country code query string is invalid', () => {
    const invalidCountryCode = 'RAYS';

    assert.throws(
      () => getCountryCode(awsEventWithQueryString(invalidCountryCode)),
      { message: `country code '${invalidCountryCode}' is invalid`}
    );
  })
})

describe('getPage', () => {
  it('should throw an error if page code query string is undefined', () => {
    assert.throws(
      () => getPage(awsEventWithoutQueryString()),
      { message: 'page query string must be specified'}
    );
  })
})