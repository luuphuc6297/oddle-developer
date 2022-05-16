export interface Repository {
    id: string;
    userId: string;
    name: string;
    description?: string;
    status?: string;
    language?: string;
    thumbnailUrl?: string;
    createdAt?: number;
    updatedAt?: number;
}
