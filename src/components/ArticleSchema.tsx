import React from 'react';

interface ArticleSchemaProps {
    title: string;
    description: string;
    pageUrl?: string;
    datePublished?: string;
    authorName?: string;
    imageUrl?: string;
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
    title,
    description,
    pageUrl,
    datePublished = new Date().toISOString(),
    authorName = '1RM Calculator Team',
    imageUrl,
}) => {
    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        author: {
            '@type': 'Person',
            name: authorName,
            url: 'https://www.onerepmaxcalculator.org',
        },
        publisher: {
            '@type': 'Organization',
            name: '1RM Calculator',
            url: 'https://www.onerepmaxcalculator.org',
        },
        ...(imageUrl && { image: imageUrl }),
        datePublished: datePublished,
        dateModified: new Date().toISOString(),
        ...(pageUrl && {
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': pageUrl,
            },
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ArticleSchema;
