import type { Role } from '@/data/site';

export default function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ol className="list">
      {roles.map((r) => (
        <li key={r.title + r.years}>
          <span className="years">{r.years}</span>
          <div>
            <h3>
              {r.title} <span className="org">· {r.org}</span>
            </h3>
            <p>{r.line}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
