import type { Schema, Struct } from '@strapi/strapi';

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

export interface PageSeo extends Struct.ComponentSchema {
  collectionName: 'components_page_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    descricao: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    titulo: Schema.Attribute.String;
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

export interface SectionsBeneficiosSecao extends Struct.ComponentSchema {
  collectionName: 'components_sections_beneficios_secaos';
  info: {
    displayName: 'Benef\u00EDcios Se\u00E7\u00E3o';
  };
  attributes: {
    beneficios: Schema.Attribute.Component<'ui.beneficios', true>;
    descricao: Schema.Attribute.Text & Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    descricao: Schema.Attribute.Text & Schema.Attribute.Required;
    textoBotao: Schema.Attribute.String & Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    urlBotao: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsDepoimentos extends Struct.ComponentSchema {
  collectionName: 'components_sections_depoimentos';
  info: {
    displayName: 'Depoimentos';
  };
  attributes: {
    depoimentos: Schema.Attribute.Component<'ui.card-testimonial', true>;
  };
}

export interface SectionsEducacaoHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_educacao_heroes';
  info: {
    displayName: 'Educa\u00E7\u00E3o Hero';
  };
  attributes: {
    descricao: Schema.Attribute.Text & Schema.Attribute.Required;
    icone: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    publicoAlvo: Schema.Attribute.String & Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHeroBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_banner_sections';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    ativo: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    imagemFundo: Schema.Attribute.Media<'images'>;
    subtitulo: Schema.Attribute.String & Schema.Attribute.Required;
    textoCta: Schema.Attribute.String;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    urlCta: Schema.Attribute.String;
  };
}

export interface SectionsSolucoes extends Struct.ComponentSchema {
  collectionName: 'components_sections_solucoes';
  info: {
    displayName: 'Solu\u00E7\u00F5es';
  };
  attributes: {
    cardSolucao: Schema.Attribute.Component<'ui.card-solution', true> &
      Schema.Attribute.Required;
    descricao: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface UiBeneficios extends Struct.ComponentSchema {
  collectionName: 'components_ui_beneficios';
  info: {
    displayName: 'Beneficios';
  };
  attributes: {
    texto: Schema.Attribute.String;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    textoBotao: Schema.Attribute.String & Schema.Attribute.Required;
    urlBotao: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiCardSolution extends Struct.ComponentSchema {
  collectionName: 'components_ui_card_solutions';
  info: {
    displayName: 'CardSolution';
  };
  attributes: {
    beneficios: Schema.Attribute.Component<'ui.beneficios', true>;
    botoes: Schema.Attribute.Component<'ui.button', true>;
    descricaoBreve: Schema.Attribute.String;
    descricaoCompleta: Schema.Attribute.Text;
    destaque: Schema.Attribute.Boolean & Schema.Attribute.Required;
    icone: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    nome: Schema.Attribute.String & Schema.Attribute.Required;
    publicoAlvo: Schema.Attribute.String;
  };
}

export interface UiCardTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_ui_card_testimonials';
  info: {
    displayName: 'CardTestimonial';
  };
  attributes: {
    avaliacao: Schema.Attribute.Integer & Schema.Attribute.Required;
    cargoEmpresa: Schema.Attribute.String & Schema.Attribute.Required;
    foto: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    nomeAutor: Schema.Attribute.String & Schema.Attribute.Required;
    texto: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.menu-item': PageMenuItem;
      'page.seo': PageSeo;
      'page.social-link': PageSocialLink;
      'sections.beneficios-secao': SectionsBeneficiosSecao;
      'sections.cta': SectionsCta;
      'sections.depoimentos': SectionsDepoimentos;
      'sections.educacao-hero': SectionsEducacaoHero;
      'sections.hero-banner-section': SectionsHeroBannerSection;
      'sections.solucoes': SectionsSolucoes;
      'ui.beneficios': UiBeneficios;
      'ui.button': UiButton;
      'ui.card-solution': UiCardSolution;
      'ui.card-testimonial': UiCardTestimonial;
    }
  }
}
