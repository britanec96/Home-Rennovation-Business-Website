const icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  pound: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c0 1.897.694 4.024 2.334 5.57M14.121 7.629c.312-.312.647-.6 1.004-.86M14.121 7.629l-1.414 1.414M6 18h12M9.351 15l-2.842 2.673M14.121 7.629l2.842-2.673" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.026a7.5 7.5 0 005.322 7.169A7.5 7.5 0 0017.55 7.6V4.575a1.575 1.575 0 00-3.15 0v1.65a1.575 1.575 0 01-3.15 0v-1.65z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.4 7.6a7.5 7.5 0 01-5.322 7.169 7.5 7.5 0 005.322-7.169z" />
    </svg>
  ),
};

export default function TrustBadge({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="mb-4 inline-flex text-sage">{icons[icon] || icons.shield}</div>
      <h3 className="mb-2 text-lg font-semibold text-charcoal">{title}</h3>
      <p className="text-sm leading-relaxed text-warm-gray">{description}</p>
    </div>
  );
}
