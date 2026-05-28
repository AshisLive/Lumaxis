import './Services.css';

const services = [
  { num: '01', title: 'Branding', desc: 'From strategy to visual identity, we build brands that resonate and endure.' },
  { num: '02', title: 'Art Direction', desc: 'We guide the visual narrative of your brand with precision and intent.' },
  { num: '03', title: 'Motion Design', desc: 'Bringing ideas to life through fluid animation and cinematic sequences.' },
  { num: '04', title: 'UI/UX Design', desc: 'Digital experiences that feel intuitive, beautiful and conversion-focused.' },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services__header">
        <span className="pill-outline">What We Do</span>
        <h2 className="services__heading display">OUR<br /><span>SERVICES</span></h2>
      </div>

      <div className="services__list">
        {services.map((s) => (
          <div className="services__item" key={s.num}>
            <span className="services__item-num">{s.num}</span>
            <div className="services__item-body">
              <h3 className="services__item-title display">{s.title.toUpperCase()}</h3>
              <p className="services__item-desc">{s.desc}</p>
            </div>
            <div className="services__item-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}
