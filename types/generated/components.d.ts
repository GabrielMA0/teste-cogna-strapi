import type { Schema, Struct } from '@strapi/strapi';

export interface PageHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_hero_banners';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    ativo: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    imagemFundo: Schema.Attribute.Media<'images'>;
    subtitulo: Schema.Attribute.String;
    textoCta: Schema.Attribute.String;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    urlCta: Schema.Attribute.String;
  };
}

export interface PageImagemHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_page_imagem_hero_banners';
  info: {
    displayName: 'Imagem Hero Banner';
  };
  attributes: {
    media: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface PageMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_page_menu_items';
  info: {
    displayName: 'Menu item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_page_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    socialNetwork: Schema.Attribute.Enumeration<
      ['Facebook', 'Linkedin', 'Instagram']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.hero-banner': PageHeroBanner;
      'page.imagem-hero-banner': PageImagemHeroBanner;
      'page.menu-item': PageMenuItem;
      'page.social-link': PageSocialLink;
    }
  }
}
