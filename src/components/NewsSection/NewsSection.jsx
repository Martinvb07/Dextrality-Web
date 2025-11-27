import { memo, useState } from 'react';
import { ArrowRightIcon } from '../Icons/index';

const NewsCard = memo(({ image, tag, tagType, title, description, date, onOpen }) => {
  return (
    <article className="news-card" onClick={onOpen} role="button" tabIndex={0}>
      <div
        className="news-image"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="news-content">
        <span className={`news-tag ${tagType === 'event' ? 'event' : ''}`}>{tag}</span>
        <span className="news-date">{date}</span>
        <h3 className="news-title">{title}</h3>
        <p className="news-excerpt">{description}</p>
        <span className="news-link inline-flex items-center gap-1 text-cyan-400">Leer más <ArrowRightIcon className="w-4 h-4" /></span>
      </div>
    </article>
  );
});

NewsCard.displayName = 'NewsCard';

const NewsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [visibleTypes, setVisibleTypes] = useState({
    announcement: true,
    event: true,
    update: true
  });
  const toggleType = (type) => {
    setVisibleTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };


  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      visible: true,
      image: '/Banner.png',
      tag: 'Anuncio',
      tagType: 'announcement',
      title: 'Proximamente Reapertura',
      description: ' ¡Dextrality regresa más fuerte que nunca!',
      date: 'Diciembre, 2025',
      mode: 'Servidor',
      contentHtml: '¡Hola a todos! Después de varias semanas de trabajo continuo, queremos mostrarles un adelanto de lo que se viene para la re-apertura de Dextrality Earth. Sabemos que muchos se han preguntado “¿Qué pasó con el servidor?” — y aquí está la respuesta:<p>No nos fuimos. Estábamos construyendo algo mucho más grande.</p>',
      highlights: [
        'Reapertura del servidor',
        'Sistema de rangos revisado',
        'Cambios en economía y tiendas',
      ],
      changelog: [
        'Optimización del rendimiento de chunks',
        'Ajuste de economía y precios de tiendas',
        'Nuevas misiones diarias y semanales'
      ],
      code: `# Ejemplo de configuración\nmax-players: 120\nview-distance: 10\nspawn-protection: 0`,
      attachments: [
        { type: 'image', url: './images/Reapertura1.png'},
        { type: 'image', url: './images/Reapertura2.png' },
        { type: 'image', url: './images/Reapertura3.png' },
        { type: 'image', url: './images/Reapertura4.png' }
      ]
    },
    {
      id: 2,
      visible: false,
      image: 'https://w.wallhaven.cc/full/01/wallhaven-0198wn.jpg',
      tag: 'Evento',
      tagType: 'event',
      title: 'No se me ocurre que poner',
      description: 'Pero ajam, esto es un evento.',
      date: 'Nov 20, 2050',
      mode: 'Eventos globales',
      content: 'Retos, recompensas exclusivas y más actividades para la comunidad. Participar otorgará cosméticos únicos y puntos para la temporada.',
      highlights: [
        'Recompensas exclusivas',
        'Actividades por equipos',
        'Ranking temporal'
      ],
      prizes: [
        'Cosmético exclusivo “Ala dorada”',
        '500 monedas',
        'Título especial en chat'
      ],
      attachments: [
        { type: 'image', url: 'https://w.wallhaven.cc/full/01/wallhaven-0198wn.jpg' }
      ]
    },
    {
      visible: false,
      id: 3,
      image: 'https://w.wallhaven.cc/full/zy/wallhaven-zy7y3v.jpg',
      tag: 'Anuncio',
      tagType: 'announcement',
      title: 'Mantenimiento programado',
      description: 'El servidor estará en mantenimiento por mejoras de infraestructura.',
      date: 'Dic 5, 2025',
      content: 'Apagaremos servicios por aproximadamente 2 horas para migrar a nueva infraestructura. Se verán mejoras en latencia y estabilidad. Gracias por la paciencia.',
      
    }
  ]);
  

  const openModal = (item) => {
    setSelectedNews(item);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedNews(null);
  };

  

  return (
    <section id="noticias" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">Noticias</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Mantente al día con las últimas novedades
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            type="button"
            aria-pressed={visibleTypes.announcement}
            onClick={() => toggleType('announcement')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${visibleTypes.announcement ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-400'}`}
          >
            Anuncios
          </button>
          <button
            type="button"
            aria-pressed={visibleTypes.event}
            onClick={() => toggleType('event')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${visibleTypes.event ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-400'}`}
          >
            Eventos
          </button>
          <button
            type="button"
            aria-pressed={visibleTypes.update}
            onClick={() => toggleType('update')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${visibleTypes.update ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-400'}`}
          >
            Actualizaciones
          </button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems
            .filter((n) => {
              // visibility: if explicitly false (either key), hide
              if (n.visible === false || n.Visibility === false) return false;
              // if tagType is missing, show it by default
              if (!n.tagType) return true;
              return visibleTypes[n.tagType] ?? true;
            })
            .map((news) => (
              <NewsCard key={news.id} {...news} onOpen={() => openModal(news)} />
            ))}
        </div>

        {showModal && selectedNews && (
          <div className="team-modal-overlay" role="dialog" aria-modal="true" onClick={closeModal}>
            <div className="team-modal" onClick={(e) => e.stopPropagation()}>
              <button className="team-modal-close" onClick={closeModal} aria-label="Cerrar">✕</button>
              <div className="team-modal-body" style={{ gridTemplateColumns: '1fr' }}>
                <div className="team-modal-info">
                  <h3 className="team-modal-name news-modal-title">{selectedNews.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                    <span className={`news-tag ${selectedNews.tagType === 'event' ? 'event' : ''}`}>{selectedNews.tag}</span>
                    <span className="news-date">{selectedNews.date}</span>
                  </div>
                  {selectedNews.mode && (
                    <div className="team-modal-meta">
                      <span><strong>Modalidad:</strong> {selectedNews.mode}</span>
                    </div>
                  )}
                  <p className="team-modal-bio">{selectedNews.description}</p>
                  {selectedNews.contentHtml ? (
                    <div className="team-modal-bio-long" dangerouslySetInnerHTML={{ __html: selectedNews.contentHtml }} />
                  ) : (
                    selectedNews.content && (
                      <>
                        {selectedNews.content.split('\n').map((line, idx) =>
                          line.trim() ? (
                            <p key={idx} className="team-modal-bio-long">{line}</p>
                          ) : (
                            <br key={idx} />
                          )
                        )}
                      </>
                    )
                  )}
                  {selectedNews.highlights && selectedNews.highlights.length > 0 && (
                    <div className="team-modal-achievements">
                      <h4 className="team-modal-subtitle">Puntos clave</h4>
                      <ul>
                        {selectedNews.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                      </ul>
                    </div>
                  )}
                  {selectedNews.tagType === 'update' && selectedNews.changelog && selectedNews.changelog.length > 0 && (
                    <div className="team-modal-achievements">
                      <h4 className="team-modal-subtitle">Lista de cambios</h4>
                      <ul>
                        {selectedNews.changelog.map((c, idx) => <li key={idx}>{c}</li>)}
                      </ul>
                    </div>
                  )}
                  {selectedNews.tagType === 'update' && selectedNews.code && (
                    <div className="team-modal-links" style={{ display: 'block' }}>
                      <h4 className="team-modal-subtitle">Código / comandos</h4>
                      <pre className="bg-slate-800/80 border border-cyan-400/30 rounded-lg p-3 text-cyan-200 overflow-auto"><code>{selectedNews.code}</code></pre>
                    </div>
                  )}
                  {selectedNews.attachments && selectedNews.attachments.length > 0 && (
                    <div className="team-modal-links">
                      <h4 className="team-modal-subtitle">Adjuntos</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedNews.attachments.filter(a => a.type === 'image').map((a, idx) => {
                          const isLocalRelative = typeof a.url === 'string' && (a.url.startsWith('.') || a.url.startsWith('/src'));
                          const src = isLocalRelative ? new URL(a.url, import.meta.url).href : a.url;
                          return (
                            <img key={idx} src={src} alt={`Adjunto ${idx+1}`} className="rounded-lg shadow-md" />
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {selectedNews.tagType === 'event' && selectedNews.prizes && selectedNews.prizes.length > 0 && (
                    <div className="team-modal-achievements">
                      <h4 className="team-modal-subtitle">Premios</h4>
                      <ul>
                        {selectedNews.prizes.map((p, idx) => <li key={idx}>{p}</li>)}
                      </ul>
                    </div>
                  )}
                  {/* Redes ocultadas por petición; se conserva data pero no se muestra */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(NewsSection);
