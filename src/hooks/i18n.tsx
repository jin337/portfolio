import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/redux";

const translationsCache: any = {};

const useLocal = (key: string) => {
  const languageType = useAppSelector(state => state.common.languageType);
  const [translation, setTranslation] = useState();

  useEffect(() => {
    const loadTranslation = async () => {
      if (translationsCache[languageType]) {
        setTranslation(translationsCache[languageType][key] || key);
        return;
      }

      try {
        const response = await fetch(`/i18n/${languageType}/common.json`);
        if (!response.ok) {
          throw new Error(`Translation file not found: ${response.statusText}`);
        }
        const messages = await response.json();
        translationsCache[languageType] = messages;
        setTranslation(messages[key] || key);
      } catch (error) {
        console.error("Error loading translations", error);
      }
    };

    loadTranslation();
  }, [languageType, key]);

  return translation;
};

export { useLocal };
