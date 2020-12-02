import assert from 'assert';
import { getPartnerAttributes } from '../../src/services/toplistResponseService';
import { PartnerAttributes } from '../../src/types';
import testPartnersResponse from '../test-data/testPartnersResponse';

const expectedPartnersResponse = (): PartnerAttributes[] => (
  [
    {
      id: 133,
      rank: 0,
      name: 'Mansion Casino',
      affiliateLink: '/casinos/mansion/casino',
      bonus: '£500',
      bullets: [
        'Live Dealer Available',
        '200  high quality games',
        '24/7 Customer support',
        'Mobile friendly casino gaming'
      ],
      logo: {
        desktopPath: '/casino/mansion.png',
        mobilePath: '/casino/mansion.png',
        altText: 'Mansion Casino Logo',
      }
    },
    {
      id: 29,
      rank: 1,
      name: 'Betway',
      affiliateLink: '/casinos/betway/casino',
      bonus: '£50',
      bullets: [
        'Claim a large 1500 bonus',
        'Play more than 400 games',
        'Casino, Sports Betting, Live Dealer, Mobile &amp; more',
        'Accepts PayPal'
      ],
      logo: {
        desktopPath: '/casino/betway.png',
        mobilePath: '/casino/betway.png',
        altText: 'Betway Logo',
      }
    },
    {
      id: 471,
      rank: 2,
      name: 'Casimba Casino',
      affiliateLink: '/casinos/casimba/casino',
      bonus: '£500',
      bullets: [
        'Superb selection of games',
        '37 different progressive jackpots',
        'One of the biggest welcome bonuses',
        'Fully regulated by the UK Gambling Commission'
      ],
      logo: {
        desktopPath: '/casino/casimba.png',
        mobilePath: '/casino/casimba.png',
        altText: 'Casimba Casino Logo',
      }
    },
    {
      id: 116,
      rank: 3,
      name: 'Karamba Casino',
      affiliateLink: '/casinos/karamba/casino',
      bonus: '£200',
      bullets: [
        'Exclusive bonus offer for UK',
        'Multiple Banking Options',
        'Monthly Promotions',
        'Around the Clock Support'
      ],
      logo: {
        desktopPath: '/casino/karamba.png',
        mobilePath: '/casino/karamba.png',
        altText: 'Karamba Casino Logo',
      }
    },
    {
      id: 143,
      rank: 4,
      name: 'Party Casino',
      affiliateLink: '/casinos/partycasino/casino',
      bonus: '£120',
      bullets: [
        'Massive selection of games',
        'Fantastic mobile site and app',
        'Huge progressive jackpot prizes',
        'Incredibly safe place to play'
      ],
      logo: {
        desktopPath: '/casino/partycasino.png',
        mobilePath: '/casino/partycasino.png',
        altText: 'Party Casino Logo',
      }
    },
    {
      id: 332,
      rank: 5,
      name: 'Yeti Casino',
      affiliateLink: '/casinos/yeti/casino',
      bonus: '£111',
      bullets: [
        'Over  600 Slots',
        'Live Dealer Games Available',
        'Excellent Customer Support',
        'Powered by Novomatic'
      ],
      logo: {
        desktopPath: '/casino/yeti-casino.png',
        mobilePath: '/casino/yeti-casino.png',
        altText: 'Yeti Casino Logo',
      }
    },
    {
      id: 10,
      rank: 6,
      name: 'All British Casino',
      affiliateLink: '/casinos/allbritish/casino',
      bonus: '£100',
      bullets: [
        '100% UK Focused',
        'Always 10% Cashback',
        'Hundreds of Netent slots & casino games',
        'Live casino platform available'
      ],
      logo: {
        desktopPath: '/casino/allbritish.png',
        mobilePath: '/casino/allbritish.png',
        altText: 'All British Casino Logo',
      }
    },
    {
      id: 30,
      rank: 7,
      name: 'BGO',
      affiliateLink: '/casinos/bgo/casino',
      bonus: 'Win Up To 500 Spins',
      bullets: [
        'Authentic live casino games',
        'Fast withdrawals with no fees',
        'Over 1000 games to play',
        'VIP program offers multiple rewards'
      ],
      logo: {
        desktopPath: '/casino/bgo.png',
        mobilePath: '/casino/bgo.png',
        altText: 'BGO Logo',
      }
    },
    {
      id: 5,
      rank: 8,
      name: '888 Casino',
      affiliateLink: '/casinos/888/casino',
      bonus: '£200',
      bullets: [
        'Exclusive Deposit Bonus',
        'Huge selection of Games',
        '24/7 Email and Phone Support',
        'Reputable Brand'
      ],
      logo: {
        desktopPath: '/casino/888-logo.png',
        mobilePath: '/casino/888-logo.png',
        altText: '888 Casino Logo',
      }
    },
    {
      id: 456,
      rank: 9,
      name: 'Play Zee',
      affiliateLink: '/casinos/play-zee/casino',
      bonus: '&pound;300 &plus; 100 Spins',
      bullets: [
        'Enjoy a 100% welcome bonus up to £300',
        'Over 2000 slot games, many exclusive to PlayZee',
        'Variety of live dealer titles to choose from',
        'Rewarding VIP program'
      ],
      logo: {
        desktopPath: '/casino/playzee.png',
        mobilePath: '/casino/playzee.png',
        altText: 'Play Zee Logo',
      }
    }
  ]
)

describe('getPartnerAttributes', () => {
  it('transforms partner data into an array of PartnerAttributes', () => {
    assert.deepStrictEqual(getPartnerAttributes(testPartnersResponse), expectedPartnersResponse());
  })
})
