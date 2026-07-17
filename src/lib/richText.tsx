import { Fragment, type ReactNode } from 'react';

/**
 * Renders inline markup used across the content data files:
 *   {{highlight}}                              -> accent span
 *   {***text=Label;type=bold***}               -> bold accent span
 *   {***text=Label;type=link;link=https://***} -> external link
 */
export function RichText({ text }: { text: string }): ReactNode {
  const nodes: ReactNode[] = [];
  // Match either {***...***} or {{...}}
  const pattern = /\{\*\*\*(.+?)\*\*\*\}|\{\{(.+?)\}\}/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }

    if (match[1] !== undefined) {
      // {***...***} custom format
      const values: Record<string, string> = {};
      for (const pair of match[1].split(';')) {
        const [k, ...rest] = pair.split('=');
        values[k.trim()] = rest.join('=').trim();
      }
      const label = values.text ?? '';
      if (values.type === 'link' && values.link) {
        nodes.push(
          <a
            key={key++}
            href={values.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent transition"
          >
            {label}
          </a>
        );
      } else {
        nodes.push(
          <strong key={key++} className="font-semibold text-accent">
            {label}
          </strong>
        );
      }
    } else if (match[2] !== undefined) {
      // {{...}} highlight
      nodes.push(
        <span key={key++} className="font-medium text-accent">
          {match[2]}
        </span>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return <>{nodes}</>;
}
