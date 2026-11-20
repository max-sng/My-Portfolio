import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react'
import PartLabel from '../components/PartLabel.jsx'
import { caseStudy as cs } from '../data/content.js'

const Label = ({ children }) => <div className="text-xs font-bold tracking-[0.12em] text-frontline">{children}</div>
const Kicker = ({ children }) => <div className="text-[11px] font-bold tracking-[0.1em] text-slate">{children}</div>
const H2 = ({ children }) => <h2 className="m-0 mt-2 font-display text-[40px] font-normal leading-[1.05] md:text-[44px]">{children}</h2>
const H3 = ({ children }) => <h3 className="m-0 font-sub text-[22px] font-bold leading-[1.15]">{children}</h3>

const Placeholder = ({ children, className = '' }) => (
  <div className={`flex items-center justify-center rounded-xl border-2 border-dashed border-[#C9CED6] bg-mist p-3 text-center text-xs font-bold tracking-[0.08em] text-slate ${className}`}>{children}</div>
)
/** Small vertical flow diagram, used where no screen exists (e.g. the approval flow). */
const Steps = ({ steps, label, highlight }) => (
  <ol aria-label={label} className="mt-1.5 flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-xl border border-line bg-mist p-4">
    {steps.map((s, i) => (
      <li key={s} className="flex list-none flex-col items-center gap-1">
        <span className={`rounded-lg border-[1.5px] px-3 py-1.5 text-[13px] font-bold ${s === highlight ? 'border-frontline bg-frontline text-white' : 'border-line bg-white'}`}>{s}</span>
        {i < steps.length - 1 && <ArrowDown size={14} className="text-slate" aria-hidden="true" />}
      </li>
    ))}
  </ol>
)

const Shot = ({ src, alt, fallback, className = '' }) =>
  src ? <img src={src} alt={alt} loading="lazy" className={`block w-full rounded-xl border border-line bg-white object-contain ${className}`} /> : <Placeholder className={className}>{fallback}</Placeholder>

const Section = ({ id, children, heavy }) => (
  <section id={id} className={`mt-14 scroll-mt-24 pt-8 ${heavy ? 'border-t-[3px] border-ink' : 'border-t border-line'}`}>{children}</section>
)

export default function CaseStudy() {
  return (
    <section id="case-study" className="scroll-mt-24 bg-white">
      <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-10 md:px-16">
        <PartLabel part="CASE STUDY" detail="THE FRONTLINE" />
        <header className="mt-5 border-y border-b-[3px] border-ink py-4 text-center">
          <img src="/images/frontline-logo.webp" alt="The Frontline: CMS and digital archive for campus journalism" className="mx-auto block w-[560px] max-w-full" />
        </header>

        {/* 01 · PROJECT OVERVIEW */}
        <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <Label>01 · PROJECT OVERVIEW</Label>
            <h1 className="m-0 mt-2.5 font-display text-4xl font-normal leading-[1.05] md:text-[51px]">ONE WORKSPACE FROM DRAFT TO ARCHIVE</h1>
            <p className="mt-3.5 text-xl font-medium leading-normal">{cs.title}</p>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#3A3F4A]">{cs.product}</p>
            <div className="mt-[22px] gap-8 text-[15px] leading-[1.7] text-[#3A3F4A] md:columns-2 md:[column-rule:1px_solid_#E3E6EA]">
              <p className="m-0 break-inside-avoid"><b className="text-[11px] tracking-[0.1em] text-slate">THE PROBLEM</b><br />{cs.problem}</p>
              <p className="mt-3.5 mb-0 break-inside-avoid md:mt-0"><b className="text-[11px] tracking-[0.1em] text-slate">THE GOAL</b><br />{cs.goal}</p>
            </div>
            <p className="mt-4 text-[13px] text-slate"><b className="tracking-[0.1em]">DURATION</b> · {cs.duration}</p>
          </article>
          <aside className="self-start rounded-[14px] bg-mist p-[22px] lg:col-span-4">
            <Kicker>WHO IT SERVES</Kicker>
            {cs.users.map((u) => (
              <div key={u.t} className="border-b border-line py-3 last:border-0">
                <div className="font-sub text-[22px] font-bold leading-[1.15]">{u.t}</div>
                <div className="text-sm text-slate">{u.d}</div>
              </div>
            ))}
          </aside>
        </div>

        {/* 02 · MY ROLE */}
        <Section>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Label>02 · MY ROLE</Label>
              <div className="mt-3 border-l-4 border-frontline py-1 pl-[18px]">
                <div className="font-sub text-3xl font-bold leading-[1.15]">{cs.role}</div>
                <p className="mt-3 mb-0 max-w-[620px] text-[15px] leading-relaxed">{cs.roleSummary}</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <Kicker>THE TEAM</Kicker>
              <ul className="mt-3 grid gap-2.5 p-0">
                {cs.teamRoles.map((m, i) => (
                  <li key={m.name} className={`list-none rounded-xl border-[1.5px] px-4 py-3 ${i === 0 ? 'border-frontline' : 'border-line'}`}>
                    <div className="font-bold">{m.name}</div>
                    <div className="text-sm text-slate">{m.role}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 03 · UNDERSTANDING THE USER */}
        <Section id="cs-users" heavy>
          <Label>03 · UNDERSTANDING THE USER</Label>
          <H2>WHO WE DESIGNED FOR</H2>
          <p className="mt-3 max-w-[760px] text-base leading-[1.7]">{cs.research}</p>

          <div className="mt-10"><Kicker>PAIN POINTS → DESIGN RESPONSE</Kicker></div>
          <ol className="mt-4 grid grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {cs.painPoints.map((p, i) => (
              <li key={p.t} className="list-none">
                <div className="font-display text-[56px] leading-[1.05] text-frontline">{String(i + 1).padStart(2, '0')}</div>
                <div className="mt-1.5"><H3>{p.t}</H3></div>
                <p className="mt-1.5 mb-0 text-sm text-slate">{p.d}</p>
                <p className="mt-2.5 mb-0 border-t border-line pt-2.5 text-[15px] font-medium">{p.fix}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-2">
            <Kicker>PERSONAS & PROBLEM STATEMENTS</Kicker>
            <span className="text-[13px] italic text-slate">Assumption-based archetypes, not interview results</span>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-4 p-0 md:grid-cols-3">
            {cs.personas.map((p) => (
              <li key={p.role} className="flex list-none flex-col rounded-[14px] border border-line p-5">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xl text-white">{p.role.split(' ').pop()[0]}</span>
                  <div>
                    <H3>{p.role}</H3>
                    <div className="text-sm text-slate">{p.who}</div>
                  </div>
                </div>
                <dl className="mt-4 mb-0 text-sm leading-relaxed">
                  <dt className="text-[11px] font-bold tracking-[0.1em] text-navy">GOALS</dt>
                  <dd className="m-0">{p.goals}</dd>
                  <dt className="mt-2.5 text-[11px] font-bold tracking-[0.1em] text-frontline">FRUSTRATIONS</dt>
                  <dd className="m-0">{p.frustrations}</dd>
                </dl>
                <p className="mt-4 mb-0 rounded-lg bg-mist p-3 text-sm italic leading-relaxed">“{p.statement}”</p>
              </li>
            ))}
          </ul>

          <div className="mt-12"><Kicker>USER JOURNEY · THE CORRESPONDENT</Kicker></div>
          <div className="mt-4 overflow-x-auto rounded-[14px] border border-line">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-mist text-[11px] tracking-[0.1em] text-slate">
                <tr>
                  <th className="p-3 font-bold">STAGE</th><th className="p-3 font-bold">THOUGHT</th><th className="p-3 font-bold">DIFFICULTY</th><th className="p-3 font-bold">OPPORTUNITY</th>
                </tr>
              </thead>
              <tbody>
                {cs.journey.map((j) => (
                  <tr key={j.stage} className="border-t border-line align-top">
                    <th scope="row" className="p-3 font-sub text-lg font-bold">{j.stage}</th>
                    <td className="p-3 italic">“{j.thought}”</td>
                    <td className="p-3 text-slate">{j.pain}</td>
                    <td className="p-3">{j.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* 04 · STARTING THE DESIGN */}
        <Section id="cs-design" heavy>
          <Label>04 · STARTING THE DESIGN</Label>
          <H2>WIREFRAMES THAT TRACE TO A PAIN POINT</H2>
          <p className="mt-3 max-w-[760px] text-base leading-[1.7]">{cs.wireframeNote}</p>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {cs.wireframes.map((w) => (
              <figure key={w.screen} className="m-0">
                <Shot src={w.img} alt={`${w.screen}, ${w.source.toLowerCase()}`} fallback={`[${w.source}: ${w.screen.toUpperCase()}]`} className="aspect-[10/7]" />
                <figcaption className="mt-4">
                  <Kicker>{w.source}</Kicker>
                  <div className="mt-1"><H3>{w.screen}</H3></div>
                  <ol className="mt-3 mb-0 p-0">
                    {w.elements.map((e, i) => (
                      <li key={e.el} className="flex list-none gap-3 border-t border-line py-2.5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-frontline text-xs font-bold text-white">{i + 1}</span>
                        <span className="text-sm"><b>{e.el}.</b> <span className="text-slate">{e.why}</span></span>
                      </li>
                    ))}
                  </ol>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12"><Kicker>MAIN FLOW · HOW A STORY MOVES</Kicker></div>
          <ol className="mt-[18px] flex flex-wrap items-center gap-2.5 p-0">
            {cs.flow.map((f, i) => (
              <li key={f.who} className="flex list-none items-center gap-2.5">
                <div className={`min-w-[150px] rounded-xl border-[1.5px] px-[18px] py-3.5 ${f.hot ? 'border-frontline bg-frontline text-white' : 'border-line bg-white'}`}>
                  <div className="text-[10px] font-bold tracking-[0.1em]">{f.who}</div>
                  <div className="mt-1 text-[17px] font-bold">{f.what}</div>
                </div>
                {i < cs.flow.length - 1 && <ArrowRight size={22} className="text-slate" aria-hidden="true" />}
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-[14px] bg-mist p-6 md:p-8">
            <Kicker>USABILITY TESTING PLAN</Kicker>
            <p className="mt-3 max-w-[820px] text-[15px] leading-[1.7]">{cs.testPlan.intro}</p>
            <ol className="mt-5 grid grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {cs.testPlan.tasks.map((t, i) => (
                <li key={t.task} className="list-none rounded-xl bg-white p-4">
                  <div className="text-[11px] font-bold tracking-[0.08em] text-slate">TASK {i + 1}</div>
                  <div className="mt-1 font-bold leading-snug">{t.task}</div>
                  <div className="mt-2 text-sm"><span className="text-slate">Success:</span> {t.measure}</div>
                  <div className="mt-1 text-sm"><span className="text-slate">Watch for:</span> {t.watch}</div>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* 05 · REFINING THE DESIGN */}
        <Section id="cs-refine" heavy>
          <Label>05 · REFINING THE DESIGN</Label>
          <div className="flex flex-wrap items-end justify-between gap-2">
            <H2>DESIGN REVISIONS</H2>
            <span className="text-[13px] italic text-slate">From building the system, not user testing</span>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {cs.revisions.map((r) => (
              <div key={r.t}>
                <H3>{r.t}</H3>
                <div className="mt-3 grid grid-cols-1 items-start gap-3 sm:grid-cols-[1fr_auto_1fr]">
                  <div>
                    <Kicker>BEFORE</Kicker>
                    {r.beforeSteps
                      ? <Steps steps={r.beforeSteps} label={`${r.t} before`} />
                      : <Shot src={r.beforeImg} alt={`${r.t} before`} fallback="[BEFORE]" className="mt-1.5 aspect-[4/3]" />}
                    <p className="mt-2 mb-0 text-sm text-slate">{r.before}</p>
                  </div>
                  <ArrowRight size={22} className="mt-24 hidden text-frontline sm:block" aria-hidden="true" />
                  <ArrowDown size={22} className="mx-auto text-frontline sm:hidden" aria-hidden="true" />
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.1em] text-frontline">AFTER</div>
                    {r.afterSteps
                      ? <Steps steps={r.afterSteps} label={`${r.t} after`} highlight={r.newStep} />
                      : <Shot src={r.afterImg} alt={`${r.t} after`} fallback="[AFTER]" className="mt-1.5 aspect-[4/3]" />}
                    <p className="mt-2 mb-0 text-sm font-medium">{r.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12"><Kicker>FINAL SCREENS</Kicker></div>
          <ul className="mt-4 grid grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {cs.screens.map((s, i) => (
              <li key={s.name} className={`list-none ${i === 0 ? 'sm:col-span-2 lg:row-span-2' : ''}`}>
                <Shot src={s.img} alt={`The Frontline: ${s.name}`} fallback={`[${s.name.toUpperCase()}]`} className="aspect-[16/10]" />
                <div className="mt-2 font-bold">{s.name}</div>
                <div className="text-sm text-slate">{s.cap}</div>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Kicker>HIGH-FIDELITY PROTOTYPE</Kicker>
              <p className="mt-3 text-base leading-[1.7]">{cs.prototype.text}</p>
              {cs.prototype.url ? (
                <a href={cs.prototype.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-xl bg-frontline px-5 font-bold text-white no-underline">
                  Open the working build <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ) : (
                <p className="mt-4 text-sm italic text-slate">{cs.prototype.pending}</p>
              )}
            </div>
            <div className="lg:col-span-7">
              <Kicker>ACCESSIBILITY CONSIDERATIONS</Kicker>
              <ol className="mt-3 grid grid-cols-1 gap-3 p-0 sm:grid-cols-3">
                {cs.accessibility.map((a, i) => (
                  <li key={a.t} className="list-none rounded-xl bg-mist p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-frontline text-sm font-bold text-white">{i + 1}</div>
                    <div className="mt-2.5 font-bold leading-snug">{a.t}</div>
                    <p className="mt-1.5 mb-0 text-sm leading-relaxed text-slate">{a.d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        {/* 06 · GOING FORWARD */}
        <Section id="cs-forward" heavy>
          <Label>06 · GOING FORWARD</Label>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <H2>TAKEAWAYS</H2>
              <div className="mt-4 text-[15px] leading-[1.7] text-[#3A3F4A]">
                <Kicker>IMPACT · EXPECTED, NOT YET MEASURED</Kicker>
                <p className="mt-1 mb-0">{cs.impact}</p>
                <div className="mt-5"><Kicker>WHAT I LEARNED</Kicker></div>
                <p className="mt-1 mb-0">{cs.learned}</p>
                <div className="mt-5"><Kicker>CHALLENGES</Kicker></div>
                <ul className="mt-1 mb-0 list-disc space-y-1 pl-5 marker:text-frontline">
                  {cs.challenges.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>
            <div>
              <H2>NEXT STEPS</H2>
              <ol className="mt-4 p-0">
                {cs.nextSteps.map((n, i) => (
                  <li key={n.t} className="flex list-none gap-4 border-t border-line py-4">
                    <span className="font-display text-[44px] leading-none text-frontline">{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <H3>{n.t}</H3>
                      <span className="mt-1 block text-[15px] leading-relaxed text-slate">{n.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="mt-10 border-t border-line pt-4 text-center text-[13px] text-slate">{cs.team}</p>
        </Section>
      </div>
    </section>
  )
}
