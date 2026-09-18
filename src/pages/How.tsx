import { Crumbs } from '../components/Crumbs';
import { navCrumbs } from '../data/nav';
import { Icon } from '../components/Icon';
import { EditorialHero } from '../components/EditorialHero';
import type { IconName } from '../types';

const STEPS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: 'route',
    title: 'Route',
    desc: 'Answer a few questions. We map your situation and your path.',
  },
  {
    icon: 'list',
    title: 'Build your list',
    desc: 'A balanced college list across fit and finances.',
  },
  {
    icon: 'write',
    title: 'Learn & write',
    desc: 'Produce-as-you-learn modules turn your story into essays.',
  },
  {
    icon: 'apply',
    title: 'Apply',
    desc: 'Your list decides the portals — and we walk you through each one.',
  },
  {
    icon: 'submit',
    title: 'Submit',
    desc: 'Deadlines, drafts, and next steps in one calm place.',
  },
];

export default function How() {
  return (
    <main className="interior">
      <EditorialHero
        kicker="01 / The admissions process"
        title="How admissions works"
        tone="pink"
        description="The same five phases every school expects — demystified. Answer a few questions, and we map the rest with you."
      />
      <Crumbs crumbs={navCrumbs('how')} />
      <div className="how__track">
        {STEPS.map((s) => (
          <div className="how__step" key={s.title}>
            <Icon name={s.icon} className="step-icon" />
            <div data-reveal="" className="how__step-title">
              {s.title}
            </div>
            <div className="how__step-desc">{s.desc}</div>
          </div>
        ))}
      </div>

    </main>
  );
}
