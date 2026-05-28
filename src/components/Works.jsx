import './Works.css';

const projects = [
  {
    id: '01',
    title: 'Prelexity',
    category: 'Branding',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80',
  },
  {
    id: '02',
    title: 'Studio Noir',
    category: 'Art Direction',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80',
  },
  {
    id: '03',
    title: 'Velora Identity',
    category: 'Motion',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  },
  {
    id: '04',
    title: 'Apex Rebrand',
    category: 'Branding',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80',
  },
];

export default function Works() {
  return (
    <section className="works">
      <div className="works__header">
        <span className="pill-outline">Selected Works</span>
        <h2 className="works__heading display">OUR BEST<br /><span>PROJECTS</span></h2>
        <a href="/works" className="works__see-all">See All →</a>
      </div>

      <div className="works__grid">
        {projects.map((p) => (
          <div className="works__card" key={p.id}>
            <div className="works__card-img" style={{ backgroundImage: `url(${p.img})` }}>
              <div className="works__card-overlay" />
              <span className="works__card-num">[{p.id}]</span>
            </div>
            <div className="works__card-info">
              <div className="works__card-meta">
                <span className="pill-outline">{p.category}</span>
                <span className="works__card-year">{p.year}</span>
              </div>
              <h3 className="works__card-title display">{p.title}</h3>
              <button className="works__card-btn">View Project →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
