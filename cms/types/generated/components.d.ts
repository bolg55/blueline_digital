import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
    description: '';
  };
  attributes: {
    logolink: Schema.Attribute.Component<'elements.logo-link', false>;
    link: Schema.Attribute.Component<'elements.link', true>;
    button: Schema.Attribute.Component<'elements.button', true>;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
    href: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    children: Schema.Attribute.Relation<'oneToOne', 'api::section.section'>;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    title: Schema.Attribute.String;
    href: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.top-nav': LayoutTopNav;
      'elements.logo-link': ElementsLogoLink;
      'elements.link': ElementsLink;
      'elements.button': ElementsButton;
    }
  }
}
