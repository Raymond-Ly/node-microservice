import assert from 'assert';
import { getCountryCode } from '../../src/handlers/getToplistHandler';
import { ALBEvent, ALBResult } from 'aws-lambda';

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
