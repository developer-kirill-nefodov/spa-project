export const getLocaleDate = (date: string, options?: any) => {
  const option = options ? options :
    {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return new Date(+date).toLocaleDateString("en-US", option);
}