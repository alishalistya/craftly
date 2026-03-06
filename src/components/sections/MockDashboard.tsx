import Icon from "@/components/ui/Icon";

export default function MockDashboard() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] overflow-hidden border border-black/5">
        <div className="bg-dark px-5 py-3.5 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <div className="p-5 space-y-2.5">
          <MockRow
            icon="fa-bolt"
            iconBg="bg-blue-500"
            name="Kabel NYM-J 5x2,5"
            detail="Elektro · 120m"
            badge="Auf Lager"
            badgeColor="bg-emerald-100 text-emerald-800"
          />
          <MockRow
            icon="fa-faucet-drip"
            iconBg="bg-purple-500"
            name="Kupferrohr 22mm"
            detail="Sanitär · 8 Stk."
            badge="Wenig"
            badgeColor="bg-amber-100 text-amber-800"
          />
          <MockRow
            icon="fa-fire"
            iconBg="bg-red-500"
            name="Thermostatventil DN15"
            detail="Heizung · 0 Stk."
            badge="Leer"
            badgeColor="bg-red-100 text-red-800"
          />
        </div>
      </div>
    </div>
  );
}

function MockRow({
  icon,
  iconBg,
  name,
  detail,
  badge,
  badgeColor,
}: {
  icon: string;
  iconBg: string;
  name: string;
  detail: string;
  badge: string;
  badgeColor: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 px-4 rounded-xl bg-surface-subtle border border-border-light">
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm text-white ${iconBg}`}
        >
          <Icon name={icon} />
        </div>
        <div>
          <strong className="block text-sm">{name}</strong>
          <small className="text-xs text-text-light">{detail}</small>
        </div>
      </div>
      <span
        className={`text-[0.7rem] font-semibold px-2.5 py-1 rounded-full ${badgeColor}`}
      >
        {badge}
      </span>
    </div>
  );
}
