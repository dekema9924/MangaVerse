import axios from "axios";
import { ApiUrl } from "../config/ApiUrl";
import { useEffect, useState } from "react";

// Define interfaces for the Manga structure
interface MangaAttributes {
    title: { en: string };
    altTitles: { [key: string]: string }[];
    description: { en: string };
    year: string;
    status: string;
    tags: { attributes: { name: { en: string } } }[];
}

interface MangaDetails {
    id: string;
    attributes: MangaAttributes;
    relationships: { id: string; type: string }[]; // relationships field
}

interface MangaResponse {
    data: MangaDetails; // Expecting 'data' to directly contain the MangaDetails object
}

interface CoverResponse {
    data: {
        attributes: {
            fileName: string;
        };
    };
}

function useGetDetails({ id }: { id: string }) {
    const [mangaDetails, setManagDetails] = useState<MangaDetails | null>(null); // Explicit type for mangaDetails
    const [loading, setLoading] = useState(true);
    const [coverUrl, setCoverUrl] = useState<string | null>(null);

    useEffect(() => {
        axios.get<MangaResponse>(`${ApiUrl.baseUrl}/${id}`)
            .then((response) => {
                setManagDetails(response.data.data); // Set manga details

                // Check for cover art in relationships
                const coverArtRelationship: { id: string; type: string } | undefined = response.data.data.relationships.find(
                    (relationship: { id: string; type: string }) => relationship.type === 'cover_art'
                );

                // If cover art relationship exists, fetch the image URL
                if (coverArtRelationship) {
                    const cover_id = coverArtRelationship.id;

                    // Get cover URL
                    axios.get<CoverResponse>(`https://api.mangadex.org/cover/${cover_id}`)
                        .then((response) => {
                            const coverImage = response.data.data.attributes.fileName;
                            console.log(response.data.data.attributes.fileName);
                            setCoverUrl(`https://mangadex.org/covers/${id}/${coverImage}`);
                        });
                }
                setLoading(false);
            });
    }, [id]);

    return { mangaDetails, loading, coverUrl };
}

export default useGetDetails;
