import assert from 'assert';
import { getPartners } from '../../src/clients/toplistClient';
import { getPartnerAttributes } from '../../src/services/toplistResponseService';
import { OriginalPartnerAttributes, PartnerAttributes, ToplistApiResponse } from '../../src/types';
import testPartnersResponse from '../test-data/testPartnersResponse';

const expectedPartnersResponse = (): PartnerAttributes[] => (
  [
    {
      id: 133,
      rank: 0,
      name: 'Mansion Casino',
      bonus: '£500',
      bullets: [
        'Live Dealer Available',
        '200  high quality games',
        '24/7 Customer support',
        'Mobile friendly casino gaming'
      ]
    },
    {
      id: 29,
      rank: 1,
      name: 'Betway',
      bonus: '£50',
      bullets: [
        'Claim a large 1500 bonus',
        'Play more than 400 games',
        'Casino, Sports Betting, Live Dealer, Mobile &amp; more',
        'Accepts PayPal'
      ]
    },
    {
      id: 471,
      rank: 2,
      name: 'Casimba Casino',
      bonus: '£500',
      bullets: [
        'Superb selection of games',
        '37 different progressive jackpots',
        'One of the biggest welcome bonuses',
        'Fully regulated by the UK Gambling Commission'
      ]
    },
    {
      id: 116,
      rank: 3,
      name: 'Karamba Casino',
      bonus: '£200',
      bullets: [
        'Exclusive bonus offer for UK',
        'Multiple Banking Options',
        'Monthly Promotions',
        'Around the Clock Support'
      ]
    },
    {
      id: 143,
      rank: 4,
      name: 'Party Casino',
      bonus: '£120',
      bullets: [
        'Massive selection of games',
        'Fantastic mobile site and app',
        'Huge progressive jackpot prizes',
        'Incredibly safe place to play'
      ]
    },
    {
      id: 332,
      rank: 5,
      name: 'Yeti Casino',
      bonus: '£111',
      bullets: [
        'Over  600 Slots',
        'Live Dealer Games Available',
        'Excellent Customer Support',
        'Powered by Novomatic'
      ]
    },
    {
      id: 10,
      rank: 6,
      name: 'All British Casino',
      bonus: '£100',
      bullets: [
        '100% UK Focused',
        'Always 10% Cashback',
        'Hundreds of Netent slots & casino games',
        'Live casino platform available'
      ]
    },
    {
      id: 30,
      rank: 7,
      name: 'BGO',
      bonus: 'Win Up To 500 Spins',
      bullets: [
        'Authentic live casino games',
        'Fast withdrawals with no fees',
        'Over 1000 games to play',
        'VIP program offers multiple rewards'
      ]
    },
    {
      id: 5,
      rank: 8,
      name: '888 Casino',
      bonus: '£200',
      bullets: [
        'Exclusive Deposit Bonus',
        'Huge selection of Games',
        '24/7 Email and Phone Support',
        'Reputable Brand'
      ]
    },
    {
      id: 456,
      rank: 9,
      name: 'Play Zee',
      bonus: '&pound;300 &plus; 100 Spins',
      bullets: [
        'Enjoy a 100% welcome bonus up to £300',
        'Over 2000 slot games, many exclusive to PlayZee',
        'Variety of live dealer titles to choose from',
        'Rewarding VIP program'
      ]
    }
  ]
)

describe('getPartnerAttributes', () => {
  it('transforms partner data into an array of PartnerAttributes', () => {
    assert.deepStrictEqual(getPartnerAttributes(testPartnersResponse), expectedPartnersResponse());
  })
})

describe('getToplistResponse', () => {
  it('returns the transformed toplist response', () => {

  })
})
