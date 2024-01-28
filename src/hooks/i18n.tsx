import { useAppSelector } from '@/hooks/redux';

const useLocal = (key: string) => {
  const languageType = useAppSelector(state => state.common.languageType);
  const i18nContent = useAppSelector(state => state.common.i18nContent[languageType]);
  return i18nContent ? i18nContent[key] || ' ' : ' ';
};

export { useLocal };
