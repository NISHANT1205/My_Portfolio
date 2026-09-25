import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Header } from "@/components/header";
import { CapabilityIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { capabilities, skillGroups } from "@/data/site";
import { projects } from "@/data/projects";

export default function Home() {
  return <main>
    <Header />
    <section className="hero hero-minimal" id="home">
      <div className="minimal-orb" aria-hidden="true"><span>NS</span></div>
      <div className="minimal-hero-inner">
        <Reveal delay={0.08}><p className="minimal-name">Nishant Sharma <span>/</span> Full Stack Developer</p></Reveal>
        <Reveal delay={0.14}><h1>Building digital<br/>products that <em>work.</em></h1></Reveal>
        <Reveal delay={0.2}><div className="minimal-bottom"><p>Apps, websites, games and business systems—thoughtfully designed, carefully engineered and ready for real users.</p><div className="hero-actions"><Link className="button button-primary" href="#work">View selected work <ArrowDown size={17}/></Link><Link className="text-link" href="#contact">Let&apos;s work together <ArrowUpRight size={17}/></Link></div></div></Reveal>
      </div>
      <div className="capability-rail" aria-label="What I build">
        <div className="rail-track">
          <div className="rail-group">{["Mobile Apps", "Websites", "Dashboards", "Backend APIs", "Games", "Complete Products"].map((item)=><span key={item}>{item}<i>✦</i></span>)}</div>
          <div className="rail-group" aria-hidden="true">{["Mobile Apps", "Websites", "Dashboards", "Backend APIs", "Games", "Complete Products"].map((item)=><span key={item}>{item}<i>✦</i></span>)}</div>
        </div>
      </div>
    </section>

    <section className="section capabilities" id="services"><div className="container"><Reveal><div className="section-head"><div><span className="eyebrow">01 / What I build</span><h2>One builder.<br/><span>The whole product.</span></h2></div><p>I move comfortably between the layers—shaping the interface, connecting the system and getting the product into people&apos;s hands.</p></div></Reveal><div className="cap-grid">{capabilities.map((item, i) => <Reveal key={item.title} delay={i * .04}><article className="cap-card"><div className="cap-watermark" aria-hidden="true"><CapabilityIcon name={item.icon}/><i/><i/><i/></div><div className="cap-top"><div className="cap-icon"><CapabilityIcon name={item.icon}/></div><span>{item.number}</span></div><div className="cap-content"><h3>{item.title}</h3><p>{item.text}</p><div className="cap-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="cap-action" aria-hidden="true"><ArrowUpRight size={16}/></div></article></Reveal>)}</div></div></section>

    <section className="section work" id="work"><div className="container"><Reveal><div className="section-head work-head"><div><span className="eyebrow">02 / Selected work</span><h2>Built for the<br/><span>real world.</span></h2></div><p>A selection of commercial products, internal systems and independent experiments.</p></div></Reveal><div className="featured-list">{projects.filter(p=>p.featured).map((project, i)=><Reveal key={project.slug}><ProjectCard project={project} index={i}/></Reveal>)}</div><Reveal><div className="all-work-link"><Link className="button button-outline" href="/work">Explore all projects <ArrowRight size={17}/></Link></div></Reveal></div></section>

    <section className="section profile-section" id="about">
      <div className="container">
        <Reveal><div className="profile-head"><span className="eyebrow">03 / About</span><span>PRODUCT-MINDED · FULL STACK · INDIA</span></div></Reveal>
        <div className="profile-grid">
          <Reveal><div className="profile-intro"><span className="profile-number">A little about me</span><h2>I connect the<br/>details into a<br/><em>complete product.</em></h2><p>From the first screen to the systems running behind it, I like understanding the whole product—not just one layer of it.</p><div className="profile-signoff"><i/><span>Available for thoughtful product work</span></div></div></Reveal>
          <Reveal delay={.08}><div className="about-panel"><div className="about-statement"><span>WHAT DRIVES THE WORK</span><p>I build mobile, web and backend experiences that feel clear to use, reliable in production and considered at every step.</p></div><div className="about-focus"><article><span>01</span><div><h3>Think in products</h3><p>Every feature should solve a real problem and belong to a coherent experience.</p></div></article><article><span>02</span><div><h3>Work across layers</h3><p>Interface, APIs, data and delivery are parts of the same product—not separate concerns.</p></div></article><article><span>03</span><div><h3>Polish the details</h3><p>Performance, responsive behavior and small interactions shape how the whole product feels.</p></div></article></div><div className="profile-meta"><div><span>BASED IN</span><b>India</b></div><div><span>BUILDING ACROSS</span><b>Web · Mobile · Backend</b></div><div><span>MINDSET</span><b>Design × Engineering</b></div></div></div></Reveal>
        </div>
      </div>
    </section>

    <section className="section skills" id="skills"><div className="container"><Reveal><div className="section-head"><div><span className="eyebrow">04 / Toolkit</span><h2>Tools change.<br/><span>Thinking scales.</span></h2></div><p>A practical toolkit for designing, building and shipping across the product stack.</p></div></Reveal><div className="skill-groups">{skillGroups.map((group, i)=><Reveal key={group.title} delay={i*.08}><div className="skill-group"><span>0{i+1}</span><h3>{group.title}</h3><div>{group.skills.map(skill=><i key={skill}>{skill}</i>)}</div></div></Reveal>)}</div></div></section>

    {/* Development philosophy / "How I work" section temporarily hidden.
    <section className="section philosophy"><div className="container"><Reveal><span className="eyebrow">06 / How I work</span><h2 className="philosophy-title">Good software is more than<br/>code that <em>works.</em></h2></Reveal><div className="principles">{principles.map(([n,title,text])=><Reveal key={n}><article><span>{n}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
    */}

    <section className="github-section"><div className="container"><Reveal><div className="github-card"><div className="github-copy"><Github size={28}/><span className="eyebrow">Open source & experiments</span><h2>The workbench<br/>stays open.</h2><p>Browse selected repositories, experiments and projects as they evolve on GitHub.</p><a className="button button-light" href="https://github.com/NISHANT1205" target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={17}/></a></div><div className="code-art" aria-hidden="true"><div><span>01</span><b>const</b> builder = {"{"}</div><div><span>02</span>&nbsp;&nbsp;craft: <i>&quot;considered&quot;</i>,</div><div><span>03</span>&nbsp;&nbsp;scope: [<i>&quot;ui&quot;</i>, <i>&quot;systems&quot;</i>],</div><div><span>04</span>&nbsp;&nbsp;status: <i>&quot;shipping&quot;</i></div><div><span>05</span>{"}"};</div><div className="code-cursor"><span>06</span>_</div></div></div></Reveal></div></section>

    <section className="contact" id="contact"><div className="contact-orb"/><div className="container"><Reveal><span className="eyebrow">05 / Let&apos;s make something useful</span><h2>Have an idea?<br/><em>Let&apos;s build it.</em></h2><p>Whether it&apos;s an app, website, dashboard, game or complete digital product, tell me what you&apos;re building.</p><div className="contact-actions"><a className="button button-primary" href="mailto:nishants.robocircuits@gmail.com"><Mail size={18}/> Email me</a><a className="button button-outline" href="https://wa.me/918950406507" target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a><a className="icon-button contact-social" href="https://www.linkedin.com/in/nishant-sharma-840079369/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a></div></Reveal></div></section>

    <footer><div className="container footer-top"><div><Link className="brand" href="#home"><span>NS</span><b>Nishant Sharma</b></Link><p>Full Stack Developer building complete digital products.</p></div><div className="footer-links"><div><span>EXPLORE</span><Link href="#work">Work</Link><Link href="#about">About</Link><Link href="#skills">Skills</Link></div><div><span>CONNECT</span><a href="https://github.com/NISHANT1205">GitHub</a><a href="https://www.linkedin.com/in/nishant-sharma-840079369/">LinkedIn</a><a href="mailto:nishants.robocircuits@gmail.com">Email</a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Nishant Sharma</span><span>DESIGNED & BUILT WITH INTENT</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </main>;
}
