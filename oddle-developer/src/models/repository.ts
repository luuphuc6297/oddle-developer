export interface Repository {
    id: string;
    userId: string;
    name: string;
    description?: string;
    thumbnailUrl?: string;
    createdAt?: number;
    updatedAt?: number;
}
