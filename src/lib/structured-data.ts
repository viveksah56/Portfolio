import { contactData, educationData, projectsData, siteConfig } from '@/lib/constants';
import { seoData } from '@/lib/seo';

const { siteUrl, title, description, socialCard, knowsAbout } = seoData;

const sameAs = contactData.socials.map((social) => social.href);

const alumniOf = educationData
    .filter((item) => item.institution === 'Pokhara University' || item.institution.startsWith('ISMT'))
    .map((item) => ({
        '@type': 'EducationalOrganization',
        name: item.institution,
    }));

const projectItems = projectsData.flatMap((project, index) =>
    'url' in project
        ? [
            {
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'CreativeWork',
                    name: project.name,
                    description: project.description,
                    url: project.url,
                    creator: { '@id': `${siteUrl}/#person` },
                    keywords: project.technologies.join(', '),
                },
            },
        ]
        : [],
);

export const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: siteConfig.name,
            url: siteUrl,
            image: `${siteUrl}${socialCard.url}`,
            jobTitle: siteConfig.role,
            description,
            email: `mailto:${siteConfig.email}`,
            knowsAbout: [...knowsAbout],
            alumniOf,
            hasOccupation: {
                '@type': 'Occupation',
                name: siteConfig.role,
                occupationLocation: { '@type': 'City', name: 'Kathmandu' },
                skills: [...knowsAbout].join(', '),
            },
            address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
            sameAs,
        },
        {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: siteConfig.name,
            description,
            inLanguage: 'en',
            publisher: { '@id': `${siteUrl}/#person` },
        },
        {
            '@type': 'ProfilePage',
            '@id': `${siteUrl}/#webpage`,
            url: siteUrl,
            name: title,
            description,
            inLanguage: 'en',
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#person` },
            mainEntity: { '@id': `${siteUrl}/#person` },
            dateModified: seoData.lastUpdated,
            primaryImageOfPage: { '@type': 'ImageObject', url: `${siteUrl}${socialCard.url}` },
        },
        {
            '@type': 'ItemList',
            '@id': `${siteUrl}/#projects`,
            name: `Projects by ${siteConfig.name}`,
            itemListElement: projectItems,
        },
    ],
};