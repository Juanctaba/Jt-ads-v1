const countries = [
  { flag: "🇲🇽", name: "México" },
  { flag: "🇨🇴", name: "Colombia" },
  { flag: "🇨🇱", name: "Chile" },
  { flag: "🇦🇷", name: "Argentina" },
  { flag: "🇺🇸", name: "USA" },
];

export default function CredibilityBar() {
  return (
    <div className="border-y border-[var(--bg-border)] bg-[var(--bg-surface)] py-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] sm:mr-4">
            Trabajamos con empresas en:
          </span>
          <div className="flex items-center gap-6">
            {countries.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5">
                <span className="text-xl">{c.flag}</span>
                <span className="text-sm text-[var(--text-secondary)] hidden sm:inline">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
