import React, { useState } from 'react';
import './index.css';

/* Update these settings when the public links and original opening media are available.
   The source upload did not include an original cinematic opening asset. */
const SITE = {
  documentaryUrl: 'https://www.youtube.com/watch?v=N8kS3udTGBs',
  fundraiserUrl: 'https://gofund.me/4464fc0d1', // direct campaign link
  publicDocketUrl: 'https://www.courtlistener.com/docket/73285423/united-states-v-channon/',
  pacergateUrl: 'https://www.youtube.com/watch?v=qz3QtUBqFCw',
  senateOpeningVideo: '', // file in /public or a URL; optional, preserving the archival video below
  documentaryId: 'N8kS3udTGBs',
  pacergateId: 'qz3QtUBqFCw',
  senateInterviewId: 'ErTTNl4he14', // preserved from original homepage
};

const press = [
  ['Albuquerque Journal', 'It’s Time to Take Uncle Sam’s Matches Away', 'https://www.abqjournal.com/opinion/opinion-talk-of-the-town/3038042'],
  ['Eastern New Mexico News', 'Clovis Has Everything Except the Jobs the Community Deserves', 'https://www.easternnewmexiconews.com/story/2026/05/20/voices/opinion-clovis-has-everything-except-the-jobs-community-deserves/233470.html'],
  ['Las Cruces Bulletin', 'An Engineer Would Build a Desalination Plant', 'https://www.lascrucesbulletin.com/stories/an-engineer-would-build-a-desalination-plant,168697'],
  ['Roswell Daily Record', 'New Mexico Deserves a Republican Who Fights Back', 'https://www.rdrnews.com/opinion/editorials/new-mexico-deserves-a-republican-who-fights-back/article_da0da58a-1fd5-468c-8f73-b523003b401a.html'],
  ['Chronicle-News · Raton', 'Raton Pass Isn’t Dying. It’s Waiting for the Right Senator.', 'https://www.thechronicle-news.com/raton-pass-isnt-dying-its-waiting-for-the-right-senator/'],
  ['Alamogordo Town News', 'New Mexico Deserves a Republican Who Fights Back', 'https://2ndlifemediaalamogordo.town.news/g/alamogordo-nm/post/376066/new-mexico-deserves-republican-who-fights-back-matt-channon'],
];

function Arrow({children, href, secondary=false, external=false}) {
  return <a href={href} className={'action '+(secondary?'action-secondary':'action-primary')} target={external?'_blank':undefined} rel={external?'noopener noreferrer':undefined}>{children}<span aria-hidden="true">↗</span></a>;
}

function SectionHead({eyebrow, title, children, light=false}) {
  return <div className={'section-head '+(light?'section-head-light':'')}><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

export default function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const nav = [['The Film','#film'],['Support','#support'],['PACERgate','#pacergate'],['X Strike','#x-strike'],['About','#about']];
  return <main id="top">
    <div className="site-hero">
      <div className="flag-backdrop" />
      {SITE.senateOpeningVideo && <video className="opening-video" src={SITE.senateOpeningVideo} autoPlay muted loop playsInline aria-hidden="true" />}
      <header className="site-header wrap">
        <a className="wordmark" href="#top"><strong>MATT CHANNON</strong><small>NEW MEXICO · LIBERTY · ACCOUNTABILITY</small></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?'Close':'Menu'} <span aria-hidden="true">☰</span></button>
        <nav className={menuOpen?'open':''} id="primary-nav" aria-label="Primary navigation">{nav.map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav>
      </header>
      <section className="hero-content wrap" aria-label="Introduction">
        <div className="hero-layout">
          <div className="hero-text">
            <span className="kicker">A personal story · A public record · A call for solidarity</span>
            <h1>LIBERTY<br/><em>IS PERSONAL.</em></h1>
            <p className="hero-intro">I’m an engineer, a dad, and an Albuquerque rideshare driver. In 2026, federal criminal proceedings changed my work, my family’s life, and my understanding of what it means to be free.</p>
            <p className="hero-sub">Hear the recordings. Examine the evidence. Make up your own mind.</p>
            <div className="hero-actions"><Arrow href="#film">Watch the story</Arrow><Arrow href={SITE.fundraiserUrl} external secondary>Support Matt and his boy</Arrow></div>
          </div>
          <div className="hero-video-panel">
            <div className="hero-video-head">THE DOCUMENTARY <span>2026</span></div>
            <div className="hero-video-ratio">
              <iframe src={`https://www.youtube.com/embed/${SITE.documentaryId}`} title="Why Are the Feds Scared to Death of a Skirt? — Matt Channon" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="hero-video-caption">Courtroom recordings, government interviews, and a firsthand account. The original KALH interview is preserved below.</p>
          </div>
        </div>
        <div className="hero-footnote">FROM THE CAMPAIGN TRAIL TO THE COURTROOM · ALBUQUERQUE, NEW MEXICO</div>
      </section>
      <div className="hero-stripe" />
    </div>

    <section id="film" className="section film-section">
      <div className="wrap film-grid">
        <div>
          <SectionHead eyebrow="The documentary" title="Why are the feds scared to death of a skirt?">A firsthand documentary featuring courtroom audio, investigative recordings, and the effects of prosecution on one New Mexico family.</SectionHead>
          <div className="film-points"><p><b>Listen.</b> Hear officials discuss clothing, a gender marker, and detention.</p><p><b>Examine.</b> Consider the underlying documents and recorded interviews.</p><p><b>Decide.</b> The criminal proceedings remain ongoing, and some conclusions are disputed.</p></div>
          <div className="button-row">{SITE.documentaryUrl?<Arrow href={SITE.documentaryUrl} external>Watch the documentary</Arrow>:<a className="action action-primary" href="#support">Explore the story <span aria-hidden="true">↗</span></a>}<a className="text-link" href="#record">About the source material →</a></div>
        </div>
        <a className="feature-media" href={SITE.documentaryUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch Why Are the Feds Scared to Death of a Skirt? on YouTube"><img src="/a_bold_graphic_thumbnail_a_solid_black_background.png" alt="The film's red-and-white typographic question about federal officials and a skirt"/><div className="media-tag">WATCH THE ORIGINAL RECORDINGS ↗</div></a>
      </div>
    </section>

    <section id="support" className="section support-section">
      <div className="wrap support-grid">
        <div className="support-copy"><span className="eyebrow gold">Support the family</span><h2>Not just a case number.<br/><em>A father and son.</em></h2><p>Months of monitoring and work restrictions have had consequences far beyond a federal courtroom. I’m trying to protect our home, keep working, and stay present for my son.</p><p>Whether you can contribute, share the film, or point others toward the original records, your support is welcome.</p>
        <div className="button-row">{SITE.fundraiserUrl?<Arrow href={SITE.fundraiserUrl} external>Support Matt and his boy</Arrow>:<a className="action action-primary" href="#get-involved">Ways to help <span aria-hidden="true">↗</span></a>}<a href="#film" className="subtle-link">See why I’m asking →</a></div>
        {!SITE.fundraiserUrl && <p className="editor-note">Fundraising link will appear here when the public GoFundMe URL is added.</p>}
        </div>
        <div className="support-visual"><img src="/matt-channon.jpg" alt="Photograph of Matt Channon"/><div className="photo-caption">MATTHEW CHANNON · NEW MEXICO</div></div>
      </div>
    </section>

    <section id="record" className="record-banner"><div className="wrap record-inner"><div><span className="eyebrow">Look for yourself</span><h2>Claims deserve scrutiny.<br/>So does government power.</h2></div><div className="record-copy"><p>The film draws on courtroom recordings, recorded interviews, and case documents. The public docket offers a way to follow the proceedings independently; the film presents my own account and interpretations.</p><a className="docket-link" href={SITE.publicDocketUrl} target="_blank" rel="noopener noreferrer" aria-label="View the public docket for United States v. Channon on CourtListener">View the public court docket <span aria-hidden="true">↗</span></a><span className="docket-note">United States v. Channon · Case No. 1:26-cr-02056 · CourtListener</span></div></div></section>

    <section id="pacergate" className="section pacergate-section"><div className="wrap pacer-grid"><a className="pacer-art" href={SITE.pacergateUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch PACERgate Volume 1 on YouTube"><img src="/a_highly_detailed_vintage_retro_billboard_scene.png" alt="Vintage PACERgate Volume 1 desert billboard with Route 66 shield, pink Edsel, and roadrunner" /></a><div><SectionHead eyebrow="Another documentary · Volume one" title="PACERgate" light>The fastest 66 minutes of your life. A visually inventive journey through federal court records and the American justice system.</SectionHead><p className="pacer-detail">The same curiosity, public records, and unmistakably New Mexican sensibility—this time with a pink Edsel and a roadrunner.</p>{SITE.pacergateUrl?<Arrow href={SITE.pacergateUrl} external>Watch PACERgate Vol. 1</Arrow>:<Arrow href="https://www.youtube.com/results?search_query=PACERgate+Volume+1" external>Search internet videos for PACERgate</Arrow>}</div></div></section>

    <section id="x-strike" className="section strike-section"><div className="wrap strike-grid"><div><span className="eyebrow gold">A voluntary act of solidarity</span><h2>X MARKS<br/><em>MY SPOT.</em></h2><p className="strike-lead">None of the state's business.</p><p>The X Strike invites people who share that message to select an X gender marker on their driver’s license, where the option is available and appropriate for them.</p><p>It’s a peaceful way to question why a government-issued ID needs to announce anyone’s gender at all.</p><a className="action action-light" href="#get-involved">Learn how to take part <span aria-hidden="true">↗</span></a></div><div className="strike-mark" aria-label="The letter X">X<span>DECLINE TO BE DEFINED</span></div></div></section>

    <section id="about" className="section about-section"><div className="wrap about-grid"><div><SectionHead eyebrow="Meet Matt" title="Engineer. Inventor. Uber driver. Dad.">I’ve spent much of my life building things, solving problems, and questioning systems that don’t work.</SectionHead><p>My background includes materials engineering, entrepreneurship, and years of work behind the wheel. In 2026, I ran for the United States Senate in New Mexico with a message about accountability, practical problem-solving, and public trust.</p><p>The Senate campaign is part of this story, not the homepage’s central purpose. Today, I’m focused on my family, the court record, and the public conversation about civil liberties.</p><div className="mini-credentials"><span>ENGINEERING</span><span>ENTREPRENEURSHIP</span><span>NEW MEXICO</span></div></div><div className="about-stack"><img src="/breannamatt.png" alt="Matt Channon and Breanna Barna at the 2025 UNM Lobo Hackathon award event"/><div className="stack-caption"><b>First place · UNM Lobo Hackathon · 2025</b><span>ShredLeash team · $5,000 award</span></div></div></div></section>

    <section className="section archive-section"><div className="wrap archive-grid"><div><SectionHead eyebrow="From the archives" title="The 2026 Senate campaign">Preserving the original site's political work, reporting, and the voice of an unconventional New Mexico candidacy.</SectionHead><div className="senate-video"><iframe src={`https://www.youtube.com/embed/${SITE.senateInterviewId}`} title="Matt Channon's 2026 KALH radio interview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" /></div><p className="video-caption">KALH Radio Interview · 2026</p></div><div className="archive-press"><h3>Published commentary</h3>{press.map(([outlet,title,url])=><a href={url} key={url} target="_blank" rel="noopener noreferrer"><span>{outlet}</span><b>{title}</b><span className="press-arrow">↗</span></a>)}</div></div></section>

    <section id="get-involved" className="section involved-section"><div className="wrap involved-inner"><div><span className="eyebrow gold">Stay involved</span><h2>Help the story travel.</h2><p>Watch the documentary. Share the recordings. Support the family through the fundraiser. Consider joining the X Strike. Public attention begins with people willing to look.</p></div><div className="involved-actions"><Arrow href={SITE.fundraiserUrl} external>Contribute on GoFundMe</Arrow><a className="action action-secondary" href={SITE.documentaryUrl} target="_blank" rel="noopener noreferrer">Watch &amp; share the film <span aria-hidden="true">↗</span></a><a className="action action-secondary" href="#x-strike">Explore the X Strike <span aria-hidden="true">↗</span></a></div></div></section>

    <footer className="footer"><div className="wrap footer-inner"><div><b>MATTCHANNON.COM</b><p>New Mexico · Public records · Personal liberty</p></div><div className="footer-links"><a href="#top">Back to top ↑</a><a href="#pacergate">PACERgate</a><a href="#support">Support</a></div></div><div className="wrap footer-small"><span>© 2026 Matt Channon</span><span>Historical campaign information: Matt Channon for U.S. Senate · FEC C00947622</span></div></footer>
  </main>;
}
