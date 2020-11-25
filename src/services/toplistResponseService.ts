import { getPartners } from '../clients/toplistClient';
import { OriginalPartnerAttributes, PartnerAttributes, ToplistApiResponse } from '../types';

export const getPartnerAttributes = (
  partners: OriginalPartnerAttributes[],
): PartnerAttributes[] => partners.flatMap((partner, index) => ({
  id: partner.id,
  rank: index,
  name: partner.sitename,
  bonus: partner.bonusvalue,
  bullets: partner.verticalbullets,
}));

export const getToplistResponse = async (countryCode: string): Promise<ToplistApiResponse> => {
  const pageResponse = await getPartners(countryCode);
  const partners = Object.values(pageResponse.toplist.partners);
  const allPartners = getPartnerAttributes(partners as OriginalPartnerAttributes[]);

  return {
    data: {
      toplistGroupId: pageResponse.toplist.id,
      partners: allPartners,
    },
  };
};
