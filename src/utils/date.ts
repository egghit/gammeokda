export const dateformat = (date: Date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().substring(0, 10);
};
