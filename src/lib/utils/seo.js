export const defaultSEO = {
    title: 'Rosebourne Plumbing | Professional Plumbing Services in Andover',
    description: 'Expert plumbing services in Andover, Hampshire and surrounding areas. Emergency service available.',
    keywords: 'plumber, plumbing, Hampshire, Andover, emergency plumber, bathroom installation',
}

export const generateMetadata = (title, description) => {
    return {
        title: title ? `${title} | Rosebourne Plumbing` : defaultSEO.title,
        description: description || defaultSEO.description,
    }
} 