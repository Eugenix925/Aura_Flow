'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileText,
  GitBranch,
  Mail,
  Menu,
  MessageSquareText,
  Sparkles,
  Target,
  X,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Mail,
    number: '01',
    title: 'Smart Email Generator',
    description: 'Draft polished, context-aware emails in seconds. Choose the tone, share your intent, and let AI handle the rest.',
    bullets: ['Professional email drafts', 'Tone and style controls', 'Time-saving automation'],
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Meeting Notes Summarizer',
    description: 'Turn long meeting transcripts into concise summaries with decisions, highlights, and clear next steps.',
    bullets: ['Key points extracted', 'Decisions and action items', 'Readable summaries'],
    accent: 'from-purple-500 to-fuchsia-400',
  },
  {
    icon: ClipboardCheck,
    number: '03',
    title: 'AI Task Planner',
    description: 'Transform goals into structured action plans. Prioritise tasks, set timelines, and make progress visible.',
    bullets: ['Smart task breakdowns', 'Priority recommendations', 'Practical timelines'],
    accent: 'from-indigo-500 to-blue-400',
  },
]

const benefits = ['Reduced time spent on repetitive work', 'Clearer communication across teams', 'More consistent and actionable outputs', 'A focused workflow built around your goals']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-xl dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight" onClick={() => setMenuOpen(false)}>
            <span className="gradient-primary flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-lg shadow-blue-500/20"><Brain size={20} /></span>
            <span className="hidden text-sm sm:block">WorkFlow<span className="text-blue-600">AI</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#about">About</a>
            <a className="transition-colors hover:text-primary" href="#features">Features</a>
            <a className="transition-colors hover:text-primary" href="#impact">Impact</a>
            <a className="transition-colors hover:text-primary" href="#contact">Contact</a>
          </div>
          <a href="#features" className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105 md:flex">Explore project <ArrowRight size={15} /></a>
          <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        {menuOpen && <div className="border-t border-border bg-white px-5 py-4 dark:bg-slate-950 md:hidden"><div className="flex flex-col gap-4 text-sm font-medium"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#features" onClick={() => setMenuOpen(false)}>Features</a><a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></div>}
      </nav>

      <section id="home" className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-36 -top-40 h-[480px] w-[480px] rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-700/20" />
        <div className="pointer-events-none absolute -left-48 top-80 h-[360px] w-[360px] rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-700/15" />
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div className="slide-in-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300"><Sparkles size={14} /> AI Skills Accelerator Programme</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Work smarter with <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">intelligent</span> assistance.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">An intelligent workplace assistant that automates email drafting, meeting summarization, and task planning using Artificial Intelligence.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#features" className="gradient-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition-transform hover:scale-[1.03]">View project <ArrowRight size={17} /></a><a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted dark:bg-slate-900"><GitBranch size={17} /> GitHub repository</a></div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Check size={16} className="text-blue-600" /> Built for modern teams</span><span className="flex items-center gap-2"><Check size={16} className="text-blue-600" /> Human-centred AI</span></div>
          </div>
          <div className="slide-in-right relative mx-auto w-full max-w-md">
            <div className="gradient-secondary absolute inset-5 rounded-[2.5rem] opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-5 shadow-2xl shadow-indigo-900/20 dark:border-white/10">
              <div className="mb-10 flex items-center justify-between text-xs text-slate-400"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Assistant online</span><span>09:41 AM</span></div>
              <div className="mb-8"><p className="mb-2 text-xs font-medium text-blue-300">GOOD MORNING, ALEX</p><h2 className="text-2xl font-medium leading-tight text-white">Let&apos;s make today<br /><span className="text-slate-400">more productive.</span></h2></div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"><span className="rounded-xl bg-blue-500/20 p-2.5 text-blue-300"><Mail size={18} /></span><div className="flex-1"><p className="text-sm font-medium text-white">Draft an email</p><p className="text-xs text-slate-500">Create a clear, thoughtful reply</p></div><ArrowRight size={16} className="text-slate-500" /></div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"><span className="rounded-xl bg-purple-500/20 p-2.5 text-purple-300"><MessageSquareText size={18} /></span><div className="flex-1"><p className="text-sm font-medium text-white">Summarise meeting</p><p className="text-xs text-slate-500">Find the signal in the noise</p></div><ArrowRight size={16} className="text-slate-500" /></div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"><span className="rounded-xl bg-cyan-500/20 p-2.5 text-cyan-300"><Target size={18} /></span><div className="flex-1"><p className="text-sm font-medium text-white">Plan my priorities</p><p className="text-xs text-slate-500">Turn goals into next steps</p></div><ArrowRight size={16} className="text-slate-500" /></div>
              </div>
              <div className="mt-8 flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-3 text-xs text-slate-300"><span className="flex items-center gap-2"><Zap size={14} className="text-yellow-300" /> 3 tasks ready to go</span><ChevronDown size={14} /></div>
            </div>
          </div>
        </div>
        <div className="relative mt-20 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-slate-900"><p className="text-3xl font-semibold text-blue-600">3</p><p className="mt-1 text-sm text-muted-foreground">Core AI features</p></div><div className="rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-slate-900"><p className="text-3xl font-semibold text-purple-600">AI</p><p className="mt-1 text-sm text-muted-foreground">Powered automation</p></div><div className="rounded-2xl border border-border bg-white p-5 shadow-sm dark:bg-slate-900"><p className="text-3xl font-semibold text-indigo-600">∞</p><p className="mt-1 text-sm text-muted-foreground">Productivity focused</p></div></div>
      </section>

      <section id="about" className="border-y border-border bg-white py-20 dark:bg-slate-900/50 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">01 / About the project</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Making space for <span className="text-purple-600">higher-value work.</span></h2></div><div className="grid gap-8 text-muted-foreground"><div><h3 className="mb-2 text-lg font-semibold text-foreground">The problem</h3><p className="leading-7">Professionals spend significant time on repetitive tasks such as drafting emails, summarizing meetings, and planning schedules. This assistant helps automate these processes and improve efficiency.</p></div><div><h3 className="mb-2 text-lg font-semibold text-foreground">The objective</h3><p className="leading-7">Create a practical, approachable AI companion that removes friction from everyday work without removing human judgement from the process.</p></div><div className="grid gap-3 border-l-2 border-purple-400 pl-5"><p className="font-medium leading-7 text-foreground">Why this solution matters</p><p className="leading-7">When routine work becomes lighter, people get more time for creativity, collaboration, and the decisions that move organisations forward.</p></div></div></div></div></section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">02 / Core capabilities</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">One assistant.<br /><span className="text-muted-foreground">Three ways to work better.</span></h2></div><p className="max-w-sm leading-7 text-muted-foreground">Thoughtfully designed AI tools that fit into the flow of your work, not the other way around.</p></div><div className="grid gap-5 lg:grid-cols-3">{features.map((feature) => { const Icon = feature.icon; return <article key={feature.number} className="card-hover group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-slate-900"><div className={`mb-16 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} text-white shadow-lg`}><Icon size={22} /></div><span className="absolute right-7 top-7 text-xs font-semibold text-muted-foreground">{feature.number}</span><h3 className="text-xl font-semibold">{feature.title}</h3><p className="mt-3 min-h-[84px] text-sm leading-6 text-muted-foreground">{feature.description}</p><ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">{feature.bullets.map((bullet) => <li key={bullet} className="flex items-center gap-2"><Check size={15} className="text-blue-600" />{bullet}</li>)}</ul></article> })}</div></section>

      <section id="impact" className="gradient-primary relative overflow-hidden py-20 text-white sm:py-24"><div className="absolute -right-20 -top-40 h-96 w-96 rounded-full border border-white/10" /><div className="absolute -right-10 -top-32 h-80 w-80 rounded-full border border-white/10" /><div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><div className="grid items-center gap-12 lg:grid-cols-2"><div><p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-100">03 / Expected impact</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Productivity with a <span className="text-blue-100">human edge.</span></h2><p className="mt-6 max-w-xl leading-7 text-blue-50">The goal isn&apos;t to automate people out of the picture. It&apos;s to give them a clearer starting point, fewer repetitive tasks, and more time to do their best work.</p></div><ul className="space-y-4">{benefits.map((benefit) => <li key={benefit} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"><span className="rounded-full bg-white/15 p-2"><Check size={17} /></span><span className="text-sm font-medium">{benefit}</span></li>)}</ul></div></div></section>

      <footer id="contact" className="border-t border-border bg-white py-12 dark:bg-slate-950"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-12"><div><div className="flex items-center gap-3 font-semibold"><span className="gradient-primary flex h-8 w-8 items-center justify-center rounded-lg text-white"><Brain size={16} /></span> WorkFlowAI</div><p className="mt-3 text-sm text-muted-foreground">AI Skills Accelerator Programme project</p></div><div className="flex items-center gap-5 text-sm text-muted-foreground"><a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">GitHub</a><a href="mailto:hello@example.com" className="transition-colors hover:text-primary">Get in touch</a></div><p className="text-xs text-muted-foreground">© 2026 AI-Powered Workplace Productivity Assistant</p></div></footer>
    </main>
  )
}
