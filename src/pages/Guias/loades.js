export const guideModules = import.meta.glob([
    './*.jsx',
    './EARTH/*.jsx'
    ]);

    export const loadGuide = (file) => {
    const directPath = `./${file}.jsx`;
    const earthPath = `./EARTH/${file}.jsx`;

    if (guideModules[directPath]) return guideModules[directPath];
    if (guideModules[earthPath]) return guideModules[earthPath];

    console.error(`No se encontró la guía: ${file}`);
    return () => import('./Index.jsx'); // fallback
};
