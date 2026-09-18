import { Link, useOutletContext } from 'react-router';
import { AdmissionArt } from '../components/AdmissionArt';
import { TEAM } from '../data/team';

export default function Home() {
  const context = useOutletContext<{ opening: boolean } | undefined>();

  return (
    <main className="report-home">
      <section className="report-hero" aria-labelledby="home-title">
        <div className="report-art">
          <AdmissionArt variant="hero" opening={context?.opening} />
        </div>
        <div className="report-hero__copy">
          <p className="report-hero__intro">By first-gen students. For the next ones.</p>
          <h1 id="home-title">
            Impossible becomes <em>possible.</em>
          </h1>
          <p className="report-hero__credit">
            Your future is more than a college acceptance letter.
            <br />
            We help you build the path that gets you there.
          </p>
          <a className="report-hero__scroll" href="#what-we-offer">
            <span>Scroll to explore</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="report-mission" id="what-we-offer" aria-labelledby="offer-title">
        <div className="eyebrow">What we offer</div>
        <h2 id="offer-title" data-reveal="">
          Your future is more than a college acceptance letter.
        </h2>
        <div className="report-introduction">
          <div>
            <p>Thus, we don’t just help you get into college. We help you build the path that gets you there.</p>
            <p>Because getting into college is a milestone, not the finish line.</p>
            <p>Our philosophy stays consistent: your path doesn’t have a deadline. Neither does our support.</p>
          </div>
          <Link className="text-link" to="/offer">
            Find your direction <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="report-belief" aria-labelledby="journey-title">
        <div className="report-belief__identity">
          <span className="report-belief__asterisk" aria-hidden="true">+</span>
          <span className="eyebrow">Long-term mentorship</span>
        </div>
        <div>
          <h2 id="journey-title" data-reveal="">
            Carve your path.
            <br />
            We make it <em>possible.</em>
          </h2>
          <p>Identify your aspirations, explore your options, and develop toward your goals with continued guidance.</p>
        </div>
      </section>

      <section className="report-chapters" aria-label="Admission Possible steps">
        {[
          ['01', 'Find your direction', 'Explore your aspirations and educational opportunities.'],
          ['02', 'Carve your path', 'Build the next steps around your goals and your story.'],
          ['03', 'Keep moving forward', 'Receive guidance and mentorship as your path develops.'],
        ].map(([number, title, description]) => (
          <article className="report-chapter report-chapter--support" key={number}>
            <div className="report-chapter__name"><span>{number}</span><h2>{title}</h2></div>
            <div className="report-chapter__intro"><p>{description}</p></div>
            <div className="report-chapter__art"><AdmissionArt variant="support" /></div>
          </article>
        ))}
      </section>

      <section className="report-systems" aria-labelledby="how-title">
        <div className="eyebrow">How admissions works</div>
        <h2 id="how-title">A clearer way forward.</h2>
        <p>Understand the process and navigate educational opportunities with guidance that meets you where you are.</p>
        <Link className="text-link" to="/how">See how it works <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="report-story" aria-labelledby="people-title">
        <div className="report-story__copy">
          <span className="eyebrow">The people behind it</span>
          <h2 id="people-title" data-reveal="">Built by first-gen students.</h2>
          <p>Meet the people helping make the path possible.</p>
          <Link className="text-link" to="/about">Meet the team <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="report-story__team">
          {TEAM.map((member) => (
            <Link to="/about" key={member.slug} aria-label={member.name}>
              <img src={member.photo} alt="" loading="lazy" />
              <span>{member.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="report-start" aria-labelledby="join-title">
        <span className="eyebrow">Your next step</span>
        <h2 id="join-title">Let’s make admission possible.</h2>
        <Link className="bar-link" to="/join"><span>Join us</span><span aria-hidden="true">↗</span></Link>
      </section>
      <div className="report-ending" aria-hidden="true">Admission Possible.</div>
    </main>
  );
}
