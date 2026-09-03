import React from 'react';

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[] | null;
}

/**
 * Reusable JSON-LD schema script injector component.
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
