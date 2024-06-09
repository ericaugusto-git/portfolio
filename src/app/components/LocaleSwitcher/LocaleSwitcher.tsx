import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale.replace('-', '_')} label={t('label')}>
      {['en', 'pt_BR'].map((cur) => (
        <option key={cur} value={cur} className='bg-black text-white text-center'>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}