import { useEffect } from 'react';

const DEFAULT_TITLE = 'Collab';
const DEFAULT_DESCRIPTION = 'A collaborative project workspace built with the same frontend flow as Leading Trading Est.';

export default function Seo({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, robots }) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name) => {
      let tag = document.head.querySelector(`meta[name="${name}"]`);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }

      return tag;
    };

    ensureMeta('description').setAttribute('content', description);

    if (robots) {
      ensureMeta('robots').setAttribute('content', robots);
    }
  }, [description, robots, title]);

  return null;
}
