import { site } from '@/data/site';
import { withBasePath } from '@/lib/withBasePath';

// The hero portrait, framed by corner marks. Shows a placeholder until site.photo is set.
export default function Photo() {
  const hasPhoto = site.photo !== null;
  return (
    <div className="photo" aria-hidden={hasPhoto ? undefined : true}>
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />
      {site.photo ? (
        <img src={withBasePath(site.photo)} alt={`${site.name}, portrait`} width={320} height={320} />
      ) : (
        <div className="photo-placeholder">
          <span className="photo-initials">MB</span>
        </div>
      )}
    </div>
  );
}
