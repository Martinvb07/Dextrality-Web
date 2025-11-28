import React from 'react'
import { Link } from 'react-router-dom'

export default function GuiaEarth() {
  return (
    <section className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">

          {/* Left index (TOC) */}
          <aside className="hidden lg:block lg:col-span-1">
            <nav className="sticky top-28">
              <h2 className="text-sm font-semibold text-slate-300 mb-3">Índice</h2>
              <ul className="space-y-2 text-sm">
                <li><a className="text-slate-200 hover:text-cyan-400" href="#que-es-earth">1. ¿Qué es EARTH?</a></li>
                <li><a className="text-slate-200 hover:text-cyan-400" href="#iniciando">2. Iniciando en EARTH</a></li>
                <li><a className="text-slate-200 hover:text-cyan-400" href="#comandos">3. Comandos esenciales</a></li>

                <li className="pl-3 text-slate-400"><a className="hover:text-cyan-400" href="#paises">Países</a></li>
                <li className="pl-3 text-slate-400"><a className="hover:text-cyan-400" href="#viajes">Viajes</a></li>
                <li className="pl-3 text-slate-400"><a className="hover:text-cyan-400" href="#proteccion">Protección</a></li>
                <li className="pl-3 text-slate-400"><a className="hover:text-cyan-400" href="#economia">Economía</a></li>
                <li className="pl-3 text-slate-400"><a className="hover:text-cyan-400" href="#mcmmo">MCMMO</a></li>
                <li className="pl-3 text-slate-400"><a className="hover:text-cyan-400" href="#extras">Extras</a></li>

                <li><a className="text-slate-200 hover:text-cyan-400" href="#consejos">4. Consejos</a></li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">🌍 Guía Oficial – Modalidad EARTH</h1>

            <p className="text-slate-300 mb-6">
              Bienvenido a <strong>Dextrality Earth</strong>. EARTH recrea el mapa del planeta Tierra dentro de Minecraft
              y combina supervivencia, política y progresión RPG. Aquí podrás crear países, unirte a otros, fundar ciudades,
              comerciar, mejorar tus estadísticas y participar en guerras y diplomacia.
            </p>

            {/* --- CONTENIDO INICIAL BONITO --- */}
            <div className="mb-10 space-y-10">

              {/* SECCIÓN 1 */}
              <div className="space-y-4">
                <h2 id="que-es-earth" className="scroll-mt-28 text-2xl font-bold flex items-center gap-2">
                  🧭 1. ¿Qué es EARTH?
                </h2>

                <p className="text-slate-300 leading-relaxed">
                  EARTH es una modalidad survival basada en un mapa realista del planeta Tierra, 
                  con sistemas geopolíticos, economía avanzada y progresión RPG que crean una 
                  experiencia estratégica y en constante evolución.
                </p>

                <p className="text-slate-300 leading-relaxed">
                  Dentro de esta modalidad podrás:
                </p>

                <ul className="list-disc ml-6 space-y-1 text-slate-300">
                  <li>Crear o unirte a un país.</li>
                  <li>Construir ciudades y reclamar territorios.</li>
                  <li>Hacer diplomacia, pactos, alianzas o declarar guerras.</li>
                  <li>Viajar entre capitales y zonas importantes mediante warps.</li>
                  <li>Comerciar en una economía activa con subastas y mercados.</li>
                  <li>Progresar con MCMMO y avanzar en rangos y kits.</li>
                  <li>Usar vehículos, protecciones y herramientas exclusivas.</li>
                </ul>

                <p className="text-slate-300 leading-relaxed">
                  Esta modalidad es ideal para quienes disfrutan el progreso constante, la estrategia 
                  y la construcción a gran escala. Cada acción influye en la política, economía y 
                  desarrollo del servidor.
                </p>
              </div>

              {/* SECCIÓN 2 */}
              <div className="space-y-4">
                <h2 id="iniciando" className="scroll-mt-28 text-2xl font-bold flex items-center gap-2">
                  🏁 2. Iniciando en EARTH
                </h2>

                <p className="text-slate-300 leading-relaxed">
                  Si estás comenzando en la modalidad, sigue estas recomendaciones para empezar fuerte:
                </p>

                <ol className="list-decimal ml-6 space-y-1 text-slate-300">
                  <li>Explora los países disponibles o crea uno si deseas liderar.</li>
                  <li>Usa <code>/paises</code> para ver opciones, capitales y warps.</li>
                  <li>Busca una zona segura con recursos y actividad.</li>
                  <li>Reclama tu territorio y construye tu base inicial.</li>
                  <li>Configura zonas importantes con <code>/sethome</code>.</li>
                  <li>Consulta tus habilidades con <code>/mcstats</code> y tu progreso con <code>/rank</code>.</li>
                </ol>

                <p className="text-slate-300 leading-relaxed font-medium">
                  Recuerda: el éxito en EARTH depende de tu organización, tus aliados y tu constancia.
                </p>
              </div>

              {/* SECCIÓN 3 INTRO */}
              <div>
                <h2 id="comandos" className="scroll-mt-28 text-2xl font-bold flex items-center gap-2">
                  🟥 3. Comandos Esenciales
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  A continuación encontrarás los comandos principales organizados por categoría.  
                  En móviles, las tablas pueden desplazarse horizontalmente.
                </p>
              </div>

            </div>

            {/* --- ALL COMMAND TABLES --- */}
            <div className="space-y-8">

              {/* Países */}
              <div>
                <h3 id="paises" className="text-xl font-semibold mb-2 scroll-mt-28">🏳️ Comandos de Países</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr>
                        <th className="p-3 text-left">Comando</th>
                        <th className="p-3 text-left">Función</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['/join', 'Unirse a un país'],
                        ['/paises', 'Lista de países'],
                        ['/f c f', 'Chat del país'],
                        ['/f c a', 'Chat de alianza'],
                        ['/f c m', 'Chat de mods'],
                        ['/capital', 'TP a la capital'],
                        ['/ciudades', 'Ciudades del país'],
                        ['/presidencia', 'Requisitos de presidente'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Viajes */}
              <div>
                <h3 id="viajes" className="text-xl font-semibold mb-2 scroll-mt-28">🧭 Viajes y Exploración</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr><th className="p-3">Comando</th><th className="p-3">Función</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['/warp', 'TP a capitales'],
                        ['/tpa', 'Pedir teletransporte'],
                        ['/back', 'Volver a ubicación anterior'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Protección */}
              <div>
                <h3 id="proteccion" className="text-xl font-semibold mb-2 scroll-mt-28">🛡️ Protección y Terreno</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr><th className="p-3">Comando</th><th className="p-3">Función</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['/protecciones', 'Tienda de protecciones'],
                        ['/lock', 'Bloquear objetos'],
                        ['/sethome', 'Guardar lugar'],
                        ['/home', 'TP a tus homes'],
                        ['/delhome', 'Eliminar home'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Economía */}
              <div>
                <h3 id="economia" className="text-xl font-semibold mb-2 scroll-mt-28">💰 Economía & Comercio</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr><th className="p-3">Comando</th><th className="p-3">Función</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['/ah', 'Subastas'],
                        ['/shop', 'Tienda global'],
                        ['/kits', 'Reclamar kits'],
                        ['/pay', 'Enviar dinero'],
                        ['/baltop', 'Top riqueza'],
                        ['/rank', 'Ver progreso'],
                        ['/rankup', 'Subir de rango'],
                        ['/ranks', 'Historial de rangos'],
                        ['/daily', 'Recompensa diaria'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MCMMO */}
              <div>
                <h3 id="mcmmo" className="text-xl font-semibold mb-2 scroll-mt-28">🔥 MCMMO & Estadísticas</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr><th className="p-3">Comando</th><th className="p-3">Función</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['/mcstats', 'Ver MCMMO'],
                        ['/estadisticas', 'Panel visual'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Extras */}
              <div>
                <h3 id="extras" className="text-xl font-semibold mb-2 scroll-mt-28">🎒 Extras de Jugabilidad</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr><th className="p-3">Comando</th><th className="p-3">Función</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['/sit', 'Sentarse'],
                        ['/lay', 'Acostarse'],
                        ['/crawl', 'Gatear'],
                        ['/kiss', 'Dar un beso'],
                        ['/skin', 'Cambiar skin'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Vehículos */}
              <div>
                <h3 className="text-xl font-semibold mb-2">🚗 Vehículos & Autos</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr><th className="p-3">Comando</th><th className="p-3">Función</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['/vehiculos', 'Tienda de autos'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Minijuegos */}
              <div>
                <h3 className="text-xl font-semibold mb-2">🎲 Apuestas & Minijuegos</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr><th className="p-3">Comando</th><th className="p-3">Función</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['/cf', 'Cara o sello'],
                        ['/dados', 'Tirar dados'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Profesiones */}
              <div>
                <h3 className="text-xl font-semibold mb-2">🧪 Oficios & Profesiones</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr><th className="p-3">Comando</th><th className="p-3">Función</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['/jobs', 'Menú de trabajos'],
                        ['/trabajos', 'Seleccionar trabajo'],
                        ['/alchemist', 'Alquimia'],
                        ['/tinkerer', 'Tinkerer'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Staff */}
              <div>
                <h3 id="staff" className="text-xl font-semibold mb-2 scroll-mt-28">🏛️ Staff & Administración</h3>
                <div className="overflow-x-auto rounded border border-slate-800">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-900">
                      <tr><th className="p-3">Comando</th><th className="p-3">Función</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['/postular', 'Aplicar a staff'],
                        ['/elhome', 'Eliminar homes'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-slate-800">
                          <td className="p-3"><code>{row[0]}</code></td>
                          <td className="p-3">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Consejos */}
              <div>
                <h2 id="consejos" className="text-2xl font-bold mt-6 scroll-mt-28">🌟 4. Consejos para Progresar</h2>
                <ul className="list-disc ml-6 mt-3 text-slate-300 space-y-1">
                  <li>Usa <code>/jobs</code> para generar dinero constante.</li>
                  <li>Únete a un país activo.</li>
                  <li>Compra autos en <code>/vehiculos</code>.</li>
                  <li>Aprovecha los warps de capitales.</li>
                  <li>Reclama tu zona correctamente.</li>
                  <li>Revisa tu progreso con <code>/rank</code> y <code>/mcstats</code>.</li>
                </ul>
              </div>

            </div>

            {/* Volver */}
            <div className="mt-8">
              <Link to="/guias" className="text-cyan-400 hover:underline">
                ← Volver a Guías
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
