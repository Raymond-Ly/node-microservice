/* eslint-disable @typescript-eslint/no-explicit-any */

export interface PartnerAttributes {
  id: string|number,
  rank: number,
  name: string,
  bonus: string,
  bullets: string[]
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
  verticalbullets: []
}
