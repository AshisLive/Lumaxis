import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about__left">
        <span className="pill-outline">About Us</span>
        <h2 className="about__heading display">
          WE ARE A<br />CREATIVE<br /><em>STUDIO</em>
        </h2>
        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-num">08+</span>
            <span className="about__stat-label">Years Experience</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-num">150+</span>
            <span className="about__stat-label">Projects Done</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-num">40+</span>
            <span className="about__stat-label">Happy Clients</span>
          </div>
        </div>
      </div>

      <div className="about__right">
        <div className="about__img-grid">
          <div className="about__img about__img--1" />
          <div className="about__img about__img--2" />
        </div>
        <p className="about__desc">
          We are a multidisciplinary design studio focused on creating impactful brand identities, digital experiences and motion design that push boundaries and drive results.
        </p>
        <a href="/works" className="about__cta">
          View Our Work <span>→</span>
        </a>
      </div>
    </section>
  );
}
