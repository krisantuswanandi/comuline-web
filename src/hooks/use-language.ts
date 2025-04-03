import { setDefaultOptions } from "date-fns";
import { enUS, id } from "date-fns/locale";
import React from "react";
import { useTranslation } from "react-i18next";
import "../libs/i18n/config";

export type Language = "en" | "id";

export const useLanguage = (
  props: {
    onSwitchLanguage?: (val: Language) => void;
  } = {},
) => {
  const [language, setLanguage] = React.useState<Language>("id");
  const { t, i18n } = useTranslation();

  const switchLanguage = (val: Language) => {
    setLanguage(val);
    i18n.changeLanguage(val);
    // Sync date-fns locale with language
    setDefaultOptions({ locale: val === "en" ? enUS : id });
    props.onSwitchLanguage?.(val);
  };

  return { language, switchLanguage, t };
};
