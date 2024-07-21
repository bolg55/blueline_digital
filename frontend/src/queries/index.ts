import qs from 'qs';

export const mainMenuQuery = qs.stringify({
  populate:
    'MainMenuItems,MainMenuItems.children,MainMenuItems.children.links,MainMenuItems.children.links.icon',
});
