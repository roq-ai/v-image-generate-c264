interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Content Creator', 'Owner'],
  tenantName: 'Organization',
  applicationName: 'V image generater',
  addOns: ['chat', 'notifications', 'file'],
};
