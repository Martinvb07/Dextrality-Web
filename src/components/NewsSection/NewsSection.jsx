import { memo } from 'react';
import { ArrowRightIcon } from '../Icons/index';

const NewsCard = memo(({ image, tag, tagType, title, description, date }) => {
  return (
    <article className="news-card">
      <div
        className="news-image"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="news-content">
        <span className={`news-tag ${tagType === 'event' ? 'event' : ''}`}>{tag}</span>
        <span className="news-date">{date}</span>
        <h3 className="news-title">{title}</h3>
        <p className="news-excerpt">{description}</p>
        <a href="#" className="news-link">
          Leer más
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
});

NewsCard.displayName = 'NewsCard';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      image: 'https://w.wallhaven.cc/full/3l/wallhaven-3lexk6.png',
      tag: 'Actualización',
      tagType: 'update',
      title: 'Proximamente Reapertura',
      description: 'Nos quedamos sin money, pero pronto volveremos con todo!',
      date: 'Diciembre, 2025'
    },
    {
      id: 2,
      image: 'https://w.wallhaven.cc/full/01/wallhaven-0198wn.jpg',
      tag: 'Evento',
      tagType: 'event',
      title: 'No se me ocurre que poner',
      description: 'Pero ajam, esto es un evento.',
      date: 'Nov 20, 2050'
    }
  ];

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

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(NewsSection);
