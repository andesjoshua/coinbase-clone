import { sanityClient } from "@sanity/client";

export const client = sanityClient({
    projectId: 'ft1iluom',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:'sk2TrJPaLpNlIQcNQNUViDqV6GSmoJLDCgX39apEbSRiLNDjb3ERIQ0HFAFb9xO4QSbY4ugdugBSvLGQ6AlPtInQA7yR2LgZuQ7doZLyqlXpV8unyG9Q32wcvBgxdibueoUV5kDxbWuiqsrc5KdGX9VrFrXvLbBL0aySVfYnx5ot2zwShnGx',
    useCdn: false,

})