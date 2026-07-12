export const defaultLocale = 'en';

// Only approved English business copy is published today. Add a locale here
// after its copy has been professionally reviewed; routing, direction and SEO
// can then consume the same central configuration.
export const locales = {
  en: { code: 'en', label: 'English', dir: 'ltr', locale: 'en-GB', published: true },
  ar: { code: 'ar', label: 'العربية', dir: 'rtl', locale: 'ar-BH', published: false },
};

export const messages = {
  en: {
    navigation: { services: 'Services', work: 'Work', process: 'Process', about: 'About', insights: 'Insights', startProject: 'Start a Project' },
    forms: { required: 'This field is required.', sending: 'Sending…', error: 'Please review the form and try again.' },
  },
};

export const getLocale = (code = defaultLocale) => locales[code] ?? locales[defaultLocale];
export const getMessage = (locale, group, key) => messages[locale]?.[group]?.[key] ?? messages[defaultLocale]?.[group]?.[key] ?? key;
