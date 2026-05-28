import './Marquee.css';

const items = ['Branding', 'Art Direction', 'Motion Design', 'UI/UX', 'Strategy', 'Visual Identity', 'Web Design', 'Content'];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
