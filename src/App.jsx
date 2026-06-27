import { CalendarDays, Mail, MapPin, Menu, Phone, Trophy, UsersRound, X } from 'lucide-react';
import { useState } from 'react';
import logoLightImage from './assets/uae-lions-logo-transparent-light.png';
import logoImage from './assets/uae-lions-logo-transparent.png';
import { clubContent } from './content/clubContent.js';

function Logo({ compact = false }) {
  return (
    <a className={`logo ${compact ? 'logo--compact' : ''}`} href="#home" aria-label="UAE Lions Sports Club home">
      <img className="logo-mark" src={compact ? logoLightImage : logoImage} alt="UAE Lions Sports Club logo" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const navItems = ['Home', 'About', 'Sports', 'Events', 'Contact'];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img className="hero-bg" src={clubContent.hero.image} alt="" loading="eager" aria-hidden="true" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">UAE Lions Sports Club</p>
        <h1 id="hero-title">{clubContent.hero.title}</h1>
        <p>{clubContent.hero.subtitle}</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#sports">Explore Sports</a>
          <a className="button button--secondary" href="#contact">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const icons = [UsersRound, Trophy, CalendarDays];

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <p className="section-kicker">About UAE Lions Sports Club</p>
          <h2>A community built on training, teamwork, and purpose.</h2>
          <p>{clubContent.about.copy}</p>
        </div>
        <div className="value-grid">
          {clubContent.about.values.map((value, index) => {
            const Icon = icons[index];
            return (
              <article className="value-item" key={value.title}>
                <Icon size={28} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Sports() {
  return (
    <section className="section section--soft" id="sports">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Featured Sports</p>
          <h2>Programs for players ready to learn, compete, and improve.</h2>
        </div>
        <div className="sports-grid">
          {clubContent.sports.map((sport) => (
            <article className="sport-card" key={sport.name}>
              <img src={sport.image} alt={`${sport.name} training at UAE Lions Sports Club`} loading="lazy" />
              <div className="sport-card-body">
                <h3>{sport.name}</h3>
                <p>{sport.description}</p>
                <a href="#contact" aria-label={`Contact us for more details about ${sport.name}`}>
                  Contact us for more details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="events-section" id="events">
      <div className="container events-panel">
        <div>
          <p className="section-kicker section-kicker--light">Events / Training</p>
          <h2>Training sessions, friendly matches, tournaments, and future club events.</h2>
          <p>{clubContent.events.description}</p>
        </div>
        <div className="event-list">
          {clubContent.events.items.map((event) => (
            <article key={event.title}>
              <CalendarDays size={24} />
              <div>
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { contact } = clubContent;

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let’s build the future of sport together.</h2>
          <p>
            Whether you are an aspiring athlete, a parent, or a sports enthusiast, we would be pleased to hear from you.
          </p>
          <div className="contact-details">
            <a href={`tel:${contact.phone.replaceAll(' ', '')}`}><Phone size={20} /> {contact.phone}</a>
            {contact.emails.map((email) => (
              <a href={`mailto:${email}`} key={email}><Mail size={20} /> {email}</a>
            ))}
            <span><MapPin size={20} /> {contact.location}</span>
          </div>
        </div>
        <aside className="contact-note">
          <Mail size={34} />
          <h3>Have a query?</h3>
          <p>
            If you have any query about training, sports programs, friendly matches, or future club events, email us and
            our team will get back to you.
          </p>
          <a className="button button--primary" href={`mailto:${contact.email}`}>Email Us</a>
        </aside>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo compact />
        <p>© 2026 UAE Lions Sports Club. All rights reserved.</p>
        <p>Content-ready structure for future admin updates.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Sports />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
