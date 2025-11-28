export const guideModules = import.meta.glob([
  "./*.jsx",
  "./EARTH/*.jsx",
]);

console.log("📂 Archivos detectados:", Object.keys(guideModules));

export const loadGuide = (file) => {
  const nested = `./${file}.jsx`;
  const direct = `./${file}.jsx`;
  const earth = `./EARTH/${file}.jsx`;

  console.log("🔍 Intentando cargar:", nested, direct, earth);

  if (guideModules[nested]) return guideModules[nested]();   // IMPORT OK
  if (guideModules[direct]) return guideModules[direct]();   // IMPORT OK
  if (guideModules[earth]) return guideModules[earth]();     // IMPORT OK

  console.error("❌ Guía no encontrada:", file);
  return () => import("./Index.jsx");
};
