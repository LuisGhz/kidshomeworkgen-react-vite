export const buildQueryString = <T extends Record<string, unknown>>(
  path: string,
  values: T
) => {
  const params = new URLSearchParams();
  Object.entries(values).forEach(([key, value]) => {
    params.append(key, `${value}`);
  });

  return `${path}?${params.toString()}`;
};
