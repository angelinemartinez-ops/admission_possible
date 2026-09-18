import { Crumbs } from '../components/Crumbs';
import { navCrumbs } from '../data/nav';
import { EditorialHero } from '../components/EditorialHero';

export default function Offer() {
  return (
    <main className="interior">
      <EditorialHero
        kicker="02 / Long-term mentorship"
        title="What we offer"
        tone="plum"
        note="Your path doesn’t have a deadline."
        description="We don’t just help you get into college. We help you build the path that gets you there."
      />
      <Crumbs crumbs={navCrumbs('offer')} />

      <div className="offer__block">
        <div data-reveal="" className="offer__summary">
          <h2 className="offer__head">Find your direction.</h2>
          <p className="offer__body">
            Identify your aspirations and explore your options with guidance that meets you where you are.
          </p>
        </div>
        <div data-reveal="" className="ruled-list">
          <div>Explore educational opportunities</div>
          <div>Understand your options</div>
        </div>
      </div>

      <div className="offer__block offer__block--alt">
        <div data-reveal="" className="offer__summary">
          <h2 className="offer__head">Carve your path.</h2>
          <p className="offer__body">
            Develop toward your goals and receive continued guidance over the months and years it takes to get there.
          </p>
        </div>
        <div data-reveal="" className="ruled-list">
          <div>Guidance built around your goals</div>
          <div>Support beyond a single milestone</div>
        </div>
      </div>
    </main>
  );
}
