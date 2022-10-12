module.exports = (file: string) => {
  'use trick';
  return () => import(`@/modules/${file}`);
};
