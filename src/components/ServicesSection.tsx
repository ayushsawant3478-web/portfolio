import FadeIn from "./FadeIn";

interface SkillItem {
  num: string;
  name: string;
  desc: string;
}

const SKILL_ITEMS: SkillItem[] = [
  {
    num: "01",
    name: "Ethical Hacking & VAPT",
    desc: "Penetration testing, vulnerability assessment, attack vector simulation, and OWASP Top 10 exploitation. TryHackMe Top 40% globally — 17+ rooms across offensive and defensive security.",
  },
  {
    num: "02",
    name: "SOC & Incident Response",
    desc: "SIEM-style monitoring, IDS/IPS, behavioural anomaly detection, Wireshark packet analysis, and structured incident response using Google's detection and response framework.",
  },
  {
    num: "03",
    name: "IT Audit & GRC",
    desc: "Formal compliance auditing across ISO 27001, PCI-DSS, GDPR, SOC 2, and NIST. Control gap analysis, risk assessment, and management-ready remediation reporting.",
  },
  {
    num: "04",
    name: "Secure Development",
    desc: "Building live production platforms with AES-256 encryption, OAuth 2.0, JWT, RBAC, and least-privilege design. Security code review and authentication vulnerability patching.",
  },
  {
    num: "05",
    name: "Cloud & Network Security",
    desc: "GCP hands-on labs — Cloud SQL, IAM, App Engine, Cloud Run, Serverless (Silver League 2026). TCP/IP, DNS, Nmap, firewall concepts, and network reconnaissance.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills-section"
      className="relative w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="text-[#0C0C0C] font-black uppercase tracking-tight text-[3rem] sm:text-[8vw] md:text-[10vw] lg:text-[160px] leading-none mb-16 sm:mb-20 md:mb-28">
            Skills
          </h2>
        </FadeIn>

        {/* Skills Vertical List */}
        <div className="w-full flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SKILL_ITEMS.map((item, index) => (
            <FadeIn
              key={item.num}
              delay={index * 0.1}
              y={30}
              className="w-full"
            >
              <div className="w-full py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 md:gap-16">
                
                {/* Large Number Label */}
                <span className="font-black text-[#0C0C0C] text-[3.2rem] sm:text-[6.5vw] md:text-[8.5vw] lg:text-[140px] leading-none shrink-0 select-none min-w-[70px] sm:min-w-[120px] md:min-w-[150px]">
                  {item.num}
                </span>

                {/* Skill Title & Detail Text */}
                <div className="flex flex-col text-left gap-2 sm:gap-3 flex-grow">
                  <h3 className="font-semibold uppercase tracking-tight text-[#0C0C0C] text-[1.2rem] sm:text-[1.8vw] md:text-[2.2vw] lg:text-[2.1rem]">
                    {item.name}
                  </h3>
                  <p className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl text-[0.85rem] sm:text-[1.1vw] md:text-[1.3vw] lg:text-[1.25rem]">
                    {item.desc}
                  </p>
                </div>
                
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
