import { Link } from 'react-router';
import { navLinks } from '../data/nav';
import { Wordmark } from './Wordmark';

interface FooterProps {
  hasPlan?: boolean;
}

export function Footer({ hasPlan = false }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <span className="eyebrow">Your next chapter</span>
        <h2>By first-gen students. For the next ones.</h2>
        <Link className="bar-link" to="/join">
          <span>Join us</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="footer__grid">
        <div className="footer__col--left">
          <Wordmark />
          <p className="footer__blurb">
            Admission Possible provides guided mentorship to help students find their direction, carve their path, and
            work toward their goals.
          </p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <span className="eyebrow">Explore</span>
          {navLinks(hasPlan).map((n) => (
            <Link key={n.id} to={n.path}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="footer__resources">
          <span className="eyebrow">First-gen access</span>
          <span className="footer__tag">Free guidance for what comes next.</span>
        </div>
      </div>
      <div className="footer__legal">
        <span>© (Ad)mission Possible {new Date().getFullYear()}. A student-run project.</span>
        <Link className="footer__legal-link" to="/privacy">
          Privacy
        </Link>
        <span>Made for what comes next.</span>
      </div>
      <div className="footer__endmark" aria-hidden="true">
        Possible.
      </div>
    </footer>
  );
}
