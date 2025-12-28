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
    imageUrl = 'https://www.1rm-calculator.com/og-image.jpg', // Default fallback
}) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        heading: title,
        headline: title,
        description: description,
        author: {
            '@type': 'Person',
            name: authorName,
            url: 'https://www.1rm-calculator.com',
        },
        publisher: {
            '@type': 'Organization',
            name: '1RM Calculator',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.1rm-calculator.com/logo.png',
            },
        },
        image: imageUrl,
        datePublished: datePublished,
        dateModified: new Date().toISOString(),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.1rm-calculator.com',
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
