import Link from 'next/link';
import { type Frame, getCover, frameLabel } from '@/data/notebook';
import { asset } from '@/lib/asset';

// One folder of pages, drawn as a FLOT frame: closed it shows its cover page, open it shows every page.
// Built on <details>, so it opens and closes with no JavaScript.
export default function NotebookFrame({ frame }: { frame: Frame }) {
  const cover = getCover(frame);
  const count = frame.cells.length;
  return (
    <details className="nb-frame" id={frame.id}>
      <summary>
        <span className="nb-tab">{frame.label}</span>
        <span className="nb-cover">
          <img src={asset(cover.img)} alt={cover.alt} loading="lazy" />
        </span>
        <span className="nb-meta">
          <span className="nb-title">{cover.title}</span>
          {cover.date && <span className="nb-date">{cover.date}</span>}
        </span>
        <span className="nb-blurb">{frame.blurb}</span>
        <span className="nb-toggle">
          <span className="nb-open">{count > 1 ? `Open frame, ${count} pages` : 'Open frame'}</span>
          <span className="nb-close">Close frame</span>
        </span>
      </summary>

      <div className="nb-body">
        <div className={`nb-cells nb-cells-${Math.min(count, 4)}`}>
          {frame.cells.map((c) => (
            <figure className="nb-cell" key={c.id}>
              <a href={asset(c.img)} target="_blank" rel="noopener" className="nb-zoom">
                <img src={asset(c.img)} alt={c.alt} loading="lazy" />
                <span className="sr-only">Open full size</span>
              </a>
              <figcaption>
                <span className="nb-cell-title">
                  {c.title}
                  {c.date && <span className="nb-date">{c.date}</span>}
                </span>
                {c.lines && (
                  <span className="nb-lines">
                    {c.lines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
        {(frame.links?.length || frame.project) && (
          <p className="nb-links">
            {frame.links?.length ? (
              <span>
                Leads to{' '}
                {frame.links.map((id, i) => (
                  <span key={id}>
                    {i > 0 && (i === frame.links!.length - 1 ? ' and ' : ', ')}
                    <a href={`#${id}`}>{frameLabel(id)}</a>
                  </span>
                ))}
              </span>
            ) : null}
            {frame.project && (
              <span>
                Became <Link href={`/work/${frame.project.slug}/`}>{frame.project.name}</Link>
              </span>
            )}
          </p>
        )}
      </div>
    </details>
  );
}
