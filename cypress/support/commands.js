export const normalice = (s) => {
  return s
    .replace(/\s+/g, ' ')
    .trim()
    .normalize('NFKC')
}