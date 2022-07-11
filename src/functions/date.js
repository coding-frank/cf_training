const DATE_OPTIONS_SHORT_FORMAT = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const formatDatestringToLocale = (datestring, locale = "en-EN") => {
  if (!datestring) return null;

  return new Date(datestring).toLocaleDateString(
    locale,
    DATE_OPTIONS_SHORT_FORMAT
  );
};
