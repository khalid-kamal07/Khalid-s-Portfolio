import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Send,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { projects, skills } from "./data";

function ProjectVisual({ type }) {
  const Icon =
    type === "shop"
      ? Layers3
      : type === "jobs"
        ? BriefcaseBusiness
        : type === "students"
          ? Code2
          : Zap;
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-window">
        <div className="window-bar">
          <span />
          <span />
          <span />
          <i>project preview</i>
        </div>
        <div className="visual-content">
          <div className="visual-icon">
            <Icon size={22} />
          </div>
          <div className="visual-lines">
            <b />
            <span />
            <span />
          </div>
          <div className="visual-cards">
            <i />
            <i />
            <i />
          </div>
          <div className="visual-footer">
            <span />
            <span />
          </div>
        </div>
      </div>
      <span className="visual-orb orb-one" />
      <span className="visual-orb orb-two" />
    </div>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Khalid Kamal home">
        <span className="brand-mark">
          K<span>.</span>
        </span>
        <span>KHALID KAMAL</span>
      </a>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        className={open ? "nav-links nav-open" : "nav-links"}
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
export default function App() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [copied, setCopied] = useState(false);
  const email = "khalidbruda07@gmail.com";
  const groups = useMemo(
    () => ["All", ...new Set(skills.map((s) => s.group))],
    [],
  );
  const visibleSkills = useMemo(
    () =>
      activeGroup === "All"
        ? skills
        : skills.filter((s) => s.group === activeGroup),
    [activeGroup],
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR FREELANCE PROJECTS
            </div>
            <h1>
              Building digital
              <br />
              experiences that
              <br />
              <span>make an impact.</span>
            </h1>
            <p className="hero-description">
              I’m Khalid, a Full Stack Web Developer crafting responsive,
              user-focused web applications with the MERN stack.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <Code2 size={16} /> MERN Stack Developer
              </span>
              <i />
              <span>
                <Globe2 size={16} /> Karachi, Pakistan
              </span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Abstract developer workspace illustration"
          >
            <div className="art-grid" />
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="code-card">
              <div className="code-card-top">
                <span className="terminal-dots">● ● ●</span>
                <span>developer.js</span>
                <Terminal size={15} />
              </div>
              <div className="code-lines">
                <p>
                  <em>const</em> developer = {"{"}
                </p>
                <p className="indent">
                  <b>name:</b> <strong>'Khalid'</strong>,
                </p>
                <p className="indent">
                  <b>stack:</b> <strong>'MERN'</strong>,
                </p>
                <p className="indent">
                  <b>focus:</b> <strong>'Solutions'</strong>
                </p>
                <p>{"}"};</p>
                <p className="code-comment">// ideas into reality</p>
              </div>
              <div className="code-card-bottom">
                <span>
                  <span className="tiny-green" /> Building something useful
                </span>
                <Sparkles size={15} />
              </div>
            </div>
            <div className="float-chip chip-top">
              <span className="chip-icon">
                <Code2 size={16} />
              </span>
              <span>
                <b>Clean code</b>
                <small>Reusable by design</small>
              </span>
            </div>
            <div className="float-chip chip-bottom">
              <span className="chip-icon chip-purple">
                <Zap size={16} />
              </span>
              <span>
                <b>Full stack</b>
                <small>Frontend to backend</small>
              </span>
            </div>
            <div className="hero-index">
              01 <span>/ 04</span>
            </div>
          </div>
          <a href="#about" className="scroll-cue">
            <span className="scroll-line" /> SCROLL TO EXPLORE{" "}
            <ArrowDown size={14} />
          </a>
        </section>
        <section className="about section-wrap section-pad" id="about">
          <div className="section-kicker">
            <span>01</span> / ABOUT ME
          </div>
          <div className="about-layout">
            <h2>
              Thoughtful code.
              <br />
              <span>Useful products.</span>
            </h2>
            <div className="about-copy">
              <p className="large-copy">
                I turn ideas into practical web experiences — with a focus on
                clarity, usability, and maintainable code.
              </p>
              <p>
                I build full-stack applications using React, Node.js, Express,
                and MongoDB. From responsive interfaces to REST APIs and
                authentication flows, I enjoy connecting the pieces into one
                reliable product.
              </p>
              <p>
                I’m currently pursuing a BSCS at Virtual University of Pakistan
                and continuously strengthening my skills through hands-on
                projects.
              </p>
              <a className="text-link" href="#contact">
                Have a project in mind? <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="stats-row">
            <div>
              <span className="stat-number">MERN</span>
              <span className="stat-label">Core stack</span>
            </div>
            <div>
              <span className="stat-number">Full-stack</span>
              <span className="stat-label">End-to-end development</span>
            </div>
            <div>
              <span className="stat-number">Responsive</span>
              <span className="stat-label">Across screen sizes</span>
            </div>
            <div>
              <span className="stat-number">Learning</span>
              <span className="stat-label">Always improving</span>
            </div>
          </div>
        </section>
        <section className="skills-section section-pad" id="skills">
          <div className="section-wrap">
            <div className="section-kicker">
              <span>02</span> / TOOLKIT
            </div>
            <div className="section-heading-row">
              <h2>
                Skills I bring
                <br />
                <span>to the table.</span>
              </h2>
              <p>
                A practical toolkit for building, connecting, and shipping
                modern web applications.
              </p>
            </div>
            <div
              className="skill-filters"
              role="group"
              aria-label="Filter skills"
            >
              {groups.map((group) => (
                <button
                  key={group}
                  className={
                    activeGroup === group ? "filter-chip active" : "filter-chip"
                  }
                  onClick={() => setActiveGroup(group)}
                >
                  {group}
                </button>
              ))}
            </div>
            <div className="skills-grid">
              {visibleSkills.map((skill, index) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{skill.name}</span>
                  <ArrowUpRight size={15} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="projects-section section-wrap section-pad"
          id="projects"
        >
          <div className="section-kicker">
            <span>03</span> / SELECTED WORK
          </div>
          <div className="section-heading-row project-heading">
            <h2>
              Projects built
              <br />
              <span>to solve things.</span>
            </h2>
            <p>
              A selection of live projects. Open any project to explore the
              deployed website.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <a
                  className="project-image-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name}`}
                >
                  <ProjectVisual type={project.visual} />
                  <span className="project-open">
                    <ArrowUpRight size={19} />
                  </span>
                </a>
                <div className="project-card-content">
                  <div className="project-overline">
                    <span>
                      {project.number} / {project.category}
                    </span>
                    <Globe2 size={14} />
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="project-visit"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit live website <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="projects-note">
            <span className="note-mark">+</span> More projects will be added as
            I keep building. This portfolio is data-driven, so adding another
            project is simple.
          </p>
        </section>
        <section className="contact-section section-pad" id="contact">
          <div className="section-wrap contact-layout">
            <div className="section-kicker">
              <span>04</span> / CONTACT
            </div>
            <div className="contact-main">
              <p className="contact-overline">
                <span className="status-dot" /> LET’S BUILD SOMETHING
              </p>
              <h2>
                Have an idea?
                <br />
                <span>Let’s make it real.</span>
              </h2>
              <p className="contact-description">
                Have a website to build, an existing project to improve, or an
                idea you want to discuss? Send me a message.
              </p>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={`mailto:${email}?subject=${encodeURIComponent("Let's discuss a project")}`}
                >
                  Start a conversation <Send size={16} />
                </a>
                <button className="button button-outline" onClick={copyEmail}>
                  {copied ? <Check size={16} /> : <Mail size={16} />}{" "}
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>
              <div className="contact-details">
                <a href={`mailto:${email}`}>
                  <Mail size={16} />
                  <span>{email}</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://wa.me/923222806390"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="contact-decoration">
              <div className="contact-ring ring-one" />
              <div className="contact-ring ring-two" />
              <div className="contact-symbol">
                <span>K</span>
                <i>.</i>
              </div>
              <span className="decoration-label">OPEN TO GOOD IDEAS</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">
            K<span>.</span>
          </span>
          <span>KHALID KAMAL</span>
        </a>
        <span>Designed &amp; built with care.</span>
        <a href="#home" className="back-top">
          Back to top <ArrowUpRight size={14} />
        </a>
        <span className="copyright">
          © {new Date().getFullYear()} Khalid Kamal
        </span>
      </footer>
    </div>
  );
}
