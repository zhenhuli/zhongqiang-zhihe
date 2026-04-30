export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[-_ ]([a-z])/g, (_, char) => char.toUpperCase());
}

export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[-_ ]+/g, '-')
    .toLowerCase();
}

export function truncate(str: string, length: number, ellipsis = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length - ellipsis.length) + ellipsis;
}
