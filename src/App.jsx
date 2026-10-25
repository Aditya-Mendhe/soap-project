import { useState } from 'react';
import { PROJECT, TEAM, GALLERY, FALLBACK_IMAGE, PROJECT_DRIVE_URL } from './config.js';

const List = ({ items }) => <ul className="list">{items.map((t) => <li key={t}>{t}</li>)}</ul>;
const Note = ({ title, children }) => <aside className="note"><strong>{title}</strong><p>{children}</p></aside>;
const Section = ({ id, title, alt, children }) => (
  <section id={id} className={alt ? 'sec alt' : 'sec'}><div className="wrap"><h2>{title}</h2><div className="body">{children}</div></div></section>
);

const NAV = [
  ['home','Home'],['about','About the Project'],['objectives','Objectives'],['problem','Problem Statement'],['intro','Introduction to Soap'],
  ['principle','Principle of Saponification'],['materials','Materials Used'],['apparatus','Apparatus Used'],['methodology','Methodology'],
  ['reaction','Chemical Reaction'],['flowchart','Flowchart'],['gallery','Photo Gallery'],['features','Features of the Soap'],
  ['applications','Applications'],['safety','Safety Precautions'],['team','Our Team'],['submission','Project Submission'],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap navin">
        <a href="#home" className="brand">Soap Preparation</a>
        <button className="menubtn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Contents'}</button>
      </div>
      {open && (
        <nav id="menu" className="menu"><div className="wrap menugrid">
          {NAV.map(([id, t]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{t}</a>)}
        </div></nav>
      )}
    </header>
  );
}

const FLOW = [
  'Plan the activity and obtain faculty approval',
  'Prepare materials and safety equipment',
  'Dissolve NaOH in water to make the alkali solution',
  'Combine the alkali solution with coconut oil',
  'Mix so that saponification takes place',
  'Add NaCl to help the soap separate (salting out)',
  'Collect, shape and let the soap dry',
  'Observe and record the actual results',
];

function Gallery() {
  return (
    <div className="gallery">
      {GALLERY.map((g, i) => (
        <figure key={i}>
          <img src={g.src} alt={g.caption} loading="lazy" style={{ objectPosition: g.pos || "center" }} onError={(e) => { if (!e.currentTarget.dataset.f) { e.currentTarget.dataset.f = 1; e.currentTarget.src = FALLBACK_IMAGE; } }} />
          <figcaption>{g.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Submission() {
  let valid = false;
  try { valid = /^https?:$/.test(new URL(PROJECT_DRIVE_URL).protocol); } catch { /* empty or invalid */ }
  return (
    <div>
      <p>The project files and report are shared through Google Drive.</p>
      {valid ? (
        <a className="btn" href={PROJECT_DRIVE_URL} target="_blank" rel="noopener noreferrer">Open project folder</a>
      ) : (
        <><button className="btn" disabled>Open project folder</button><p className="muted" role="status">Submission link will be available soon.</p></>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero"><div className="wrap">
          <p className="meta">{PROJECT.subject} · {PROJECT.year}</p>
          <h1>Soap Preparation</h1>
          <p className="sub">A Chemical Prototyping Project</p>
          <p className="lead">An educational look at how fats and oils react with an alkali to form soap.</p>
          <p className="meta">{PROJECT.department}<br />{PROJECT.college}</p>
          <a className="btn" href="#about">Read the project</a>
        </div></section>

        <Section id="about" title="About the Project">
          <p>This project introduces the basic chemistry of soap making. We use coconut oil, sodium hydroxide and sodium chloride to study how soap is formed and why it cleans. This website summarises the concept, the materials, a general method and the safety rules that apply.</p>
          <Note title="Scope of this website">The content is an educational overview. Experimental observations are not reported here unless they are added with evidence by the team.</Note>
        </Section>

        <Section id="objectives" title="Objectives" alt>
          <List items={['To understand the chemistry of soap formation.','To study saponification of an oil with an alkali.','To learn the role of each material used.','To practise safe handling of corrosive chemicals in the laboratory.','To document the activity clearly for submission.']} />
        </Section>

        <Section id="problem" title="Problem Statement">
          <p>Soap is used every day, but its chemistry is rarely seen first-hand. The problem addressed here is to understand and prototype a small-scale soap preparation, linking the reaction between an oil and an alkali to the properties of the product.</p>
        </Section>

        <Section id="intro" title="Introduction to Soap" alt>
          <p>Soap is a salt of a long-chain fatty acid. Each soap molecule has a water-loving (hydrophilic) head and an oil-loving (hydrophobic) tail. In water, the tails surround grease and the heads face the water, so the grease can be rinsed away.</p>
          <p>Soaps made with sodium hydroxide are generally solid, while those made with potassium hydroxide are softer.</p>
        </Section>

        <Section id="principle" title="Principle of Saponification">
          <p>Saponification is the hydrolysis of a fat or oil by a strong base. Fats and oils are triglycerides: one glycerol unit joined to three fatty acid chains. With sodium hydroxide, the ester bonds break. This gives glycerol and the sodium salts of the fatty acids, which is soap.</p>
          <p>Coconut oil is rich in lauric acid, so a soap from it is largely sodium laurate. Sodium chloride is commonly added afterwards because soap is less soluble in salt water, which helps it separate. This is called salting out.</p>
        </Section>

        <Section id="materials" title="Materials Used" alt>
          <div className="tablewrap"><table>
            <thead><tr><th>Material</th><th>Reported quantity</th><th>Role</th></tr></thead>
            <tbody>
              <tr><td>Coconut oil</td><td>60 mL</td><td>Source of triglycerides</td></tr>
              <tr><td>Sodium hydroxide (NaOH) flakes</td><td>15 g</td><td>Alkali for saponification</td></tr>
              <tr><td>Sodium chloride (NaCl)</td><td>15 g</td><td>Helps separate soap (salting out)</td></tr>
              <tr><td>Water</td><td>Quantity unconfirmed</td><td>Dissolves NaOH and NaCl</td></tr>
            </tbody></table></div>
          <Note title="Note">The water quantity has not been confirmed and is deliberately not stated here.</Note>
        </Section>

        <Section id="apparatus" title="Apparatus Used">
          <Note title="Illustrative list">Our actual equipment is unconfirmed. The items below are typical for a small-scale soap activity.</Note>
          <List items={['Glass beakers','Glass stirring rod','Weighing balance','Measuring cylinder','Heat source (if the approved procedure requires one)','Filter cloth or filtration set-up','Mould or container for shaping','Gloves, safety goggles and lab coat']} />
        </Section>

        <Section id="methodology" title="Methodology" alt>
          <Note title="Educational overview only">This is not a verified record of our experiment. No temperatures, durations or results are given. The actual procedure must follow faculty-approved instructions.</Note>
          <ol className="list">
            <li>Wear protective equipment and prepare a clear, ventilated work area.</li>
            <li>Measure the materials with suitable laboratory equipment.</li>
            <li>Dissolve the NaOH in water. Always add NaOH to water, never water to NaOH. The solution releases heat.</li>
            <li>Combine the alkali solution with the coconut oil and stir.</li>
            <li>Continue as instructed so that saponification occurs.</li>
            <li>Add NaCl solution to help the soap separate.</li>
            <li>Collect the soap, shape it and allow it to dry.</li>
            <li>Record observations honestly and dispose of waste as instructed.</li>
          </ol>
        </Section>

        <Section id="reaction" title="Chemical Reaction">
          <p>Generalised saponification of a triglyceride with sodium hydroxide:</p>
          <div className="eq" role="math" aria-label="Triglyceride plus three sodium hydroxide gives glycerol plus three soap molecules">
            <span>Triglyceride</span><b>+</b><span>3 NaOH</span><b>→</b><span>Glycerol</span><b>+</b><span>3 RCOONa</span>
          </div>
          <p className="muted">R is the hydrocarbon chain of the fatty acid. RCOONa is the sodium salt of the fatty acid, i.e. soap. Glycerol is C₃H₅(OH)₃.</p>
        </Section>

        <Section id="flowchart" title="Flowchart" alt>
          <p className="muted">General process flow. It is illustrative and not a record of our experiment.</p>
          <ol className="flow">{FLOW.map((s) => <li key={s}>{s}</li>)}</ol>
        </Section>

        <Section id="gallery" title="Photo Gallery">
          <Gallery />
        </Section>

        <Section id="features" title="Features of the Soap" alt>
          <p>These are expected characteristics based on the chemistry. They are not experimentally verified results of our sample.</p>
          <List items={['Coconut-oil soaps are generally hard and produce a lot of lather.','Soap is slightly alkaline in water.','Glycerol may remain in the product unless removed.','Properties depend on the actual quantities and procedure used.']} />
          <Note title="Not claimed">We do not claim this soap is safe for skin or approved for commercial use. That would require testing and regulatory evidence.</Note>
        </Section>

        <Section id="applications" title="Applications">
          <p>Soap in general is used for:</p>
          <List items={['Personal and hand washing','Laundry and household cleaning','Teaching saponification and surfactant action','Small-scale chemical prototyping activities']} />
        </Section>

        <Section id="safety" title="Safety Precautions" alt>
          <p><strong>Sodium hydroxide is corrosive.</strong> It can burn skin and eyes and damage surfaces.</p>
          <List items={['Wear goggles, gloves and a lab coat at all times.','Add NaOH to water slowly while stirring, never the reverse.','Work in a ventilated area and avoid breathing fumes.','Keep NaOH dry and away from metals such as aluminium.','For skin or eye contact, rinse with plenty of water and inform faculty at once.','Never taste or use the product unless it has been tested and approved.','Follow faculty instructions and dispose of waste as directed.']} />
        </Section>

        <Section id="team" title="Our Team">
          <div className="team">{TEAM.map((m) => <div key={m.prn} className="member"><h3>{m.name}</h3><p>PRN: {m.prn}</p></div>)}</div>
        </Section>

        <Section id="submission" title="Project Submission" alt>
          <Submission />
        </Section>
      </main>
      <footer className="foot"><div className="wrap">
        <p>{PROJECT.college}</p><p>{PROJECT.department} · {PROJECT.year}</p><p>Subject: {PROJECT.subject}</p>
      </div></footer>
    </>
  );
}
