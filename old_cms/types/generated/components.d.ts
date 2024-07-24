import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'cube';
  };
  attributes: {
    heroText: Attribute.String;
    heroDescription: Attribute.Text;
  };
}

export interface LayoutAbout extends Schema.Component {
  collectionName: 'components_layout_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    aboutText: Attribute.String;
    aboutPhoto: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface NavigationNavLink extends Schema.Component {
  collectionName: 'components_navigation_nav_links';
  info: {
    displayName: 'NavLink';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface NavigationMenuButton extends Schema.Component {
  collectionName: 'components_navigation_menu_buttons';
  info: {
    displayName: 'MenuButton';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['secondary', 'primary']>;
  };
}

export interface NavigationDropdown extends Schema.Component {
  collectionName: 'components_navigation_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    children: Attribute.Relation<
      'navigation.dropdown',
      'oneToOne',
      'api::navigation-section.navigation-section'
    >;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.hero': LayoutHero;
      'layout.about': LayoutAbout;
      'navigation.nav-link': NavigationNavLink;
      'navigation.menu-button': NavigationMenuButton;
      'navigation.dropdown': NavigationDropdown;
    }
  }
}
