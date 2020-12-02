/* eslint-disable @typescript-eslint/no-explicit-any */

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

interface ToplistApiAttributes {
  toplistGroupId: number,
  partners: PartnerAttributes[];
}

export type ToplistApiData = ToplistApiAttributes;

export type ToplistApiResponse = {
  data: ToplistApiAttributes
}

export interface OriginalPartnerAttributes {
  id: string,
  rank: string,
  sitename: string,
  bonusvalue: string,
  verticalbullets: [],
  affiliate_link: string,
  logo: string
}
