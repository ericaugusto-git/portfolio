import {Pathnames, createLocalizedPathnamesNavigation} from 'next-intl/navigation';

const localePrefix = undefined;
export const locales = ['en', 'pt-BR']
const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    de: '/pfadnamen'
  }
} satisfies Pathnames<typeof locales>;
export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix
  });
