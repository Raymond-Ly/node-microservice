/* eslint-disable @typescript-eslint/no-explicit-any */

interface ApiSingleResponse <T> {
  data: T
}

interface ApiMultiResponse <T> {
  data: T[]
}

interface Image {
  desktopPath: string,
  mobilePath: string,
  altText: string
}

export interface PartnerAttributes {
  id: string|number,
  rank: number,
  name: string,
  affiliateLink: string,
  bonus: string,
  bullets: string[],
  logo: Image
}

export interface ToplistApiAttributes {
  toplistGroupId: number,
  countryCode: string,
  partners: PartnerAttributes[];
}

export type ToplistApiResponse = ApiSingleResponse<ToplistApiAttributes>;

export type ToplistApiResponses = ApiMultiResponse<ToplistApiAttributes>;

export interface OriginalPartnerAttributes {
  id: string,
  rank: string,
  sitename: string,
  bonusvalue: string,
  verticalbullets: [],
  /* eslint-disable camelcase */
  affiliate_link: string,
  logo: string
}
