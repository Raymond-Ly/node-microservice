import { getPartners } from '../clients/toplistClient';
import { OriginalPartnerAttributes, PartnerAttributes, ToplistApiResponse } from '../types';

export const getPartnerAttributes = (
  partners: OriginalPartnerAttributes[],
): PartnerAttributes[] => partners.flatMap((partner, index) => ({
  id: partner.id,
  rank: index,
  name: partner.sitename,
  affiliateLink: partner.affiliate_link,
  bonus: partner.bonusvalue,
  bullets: partner.verticalbullets,
  logo: {
    desktopPath: partner.logo,
    mobilePath: partner.logo,
    altText: `${partner.sitename} Logo`,
  },
}));

export const getToplistResponse = async (countryCode: string, page: string): Promise<ToplistApiResponse> => {
  const pageResponse = await getPartners(countryCode, page);
  const partners = Object.values(pageResponse.toplist.partners);
  const allPartners = getPartnerAttributes(partners as OriginalPartnerAttributes[]);

  return {
    data: {
      toplistGroupId: pageResponse.toplist.id,
      partners: allPartners,
    },
  };
};
