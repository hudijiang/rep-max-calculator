import React from 'react';

interface ArticleSchemaProps {
    title: string;
    description: string;
    datePublished?: string;
    authorName?: string;
    imageUrl?: string;
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
    title,
    description,
    datePublished = new Date().toISOString(),
    authorName = '1RM Calculator Team',
    imageUrl = 'https://www.onerepmaxcalculator.org/og-image.jpg', // Default fallback
}) => {
    const schema = {
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
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.onerepmaxcalculator.org/logo.png',
            },
        },
        image: imageUrl,
        datePublished: datePublished,
        dateModified: new Date().toISOString(),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.onerepmaxcalculator.org',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ArticleSchema;
