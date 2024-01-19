import { useEffect, useState } from "react";
import { useAppSelector } from "./redux";

const useLocal = (key: string) => {
  const langageType: string = useAppSelector(state => state.common.langageType)
  const [translation, setTranslation] = useState()

  const loadTranslation = async () => {
    const response = await fetch(`/i18n/${langageType}/common.json`);
    if (!response.ok) {
      throw new Error(`Translation file not found: ${response.statusText}`);
    }
    const messages = await response.json();
    setTranslation(messages[key] || key);
  }

  useEffect(() => {
    loadTranslation()
  }, [langageType, key])

  return translation
}

export { useLocal }
