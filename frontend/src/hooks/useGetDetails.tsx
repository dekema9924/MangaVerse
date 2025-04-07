import { useEffect, useState } from "react";
import axios from "axios";
import { ApiUrl } from "../config/ApiUrl";

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
    relationships: { id: string; type: string }[];
}

function useGetDetails({ id }: { id: string }) {
    const [mangaDetails, setMangaDetails] = useState<MangaDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [coverUrl, setCoverUrl] = useState<string | null>(null);

    useEffect(() => {
        // Call your own backend API to fetch manga details
        axios.get(`${ApiUrl.baseUrl}/${id}`)
            .then((response) => {
                setMangaDetails(response.data.mangaDetails); // Set manga details

                // Set cover image URL
                setCoverUrl(response.data.coverUrl);
                
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching manga details from backend:", error);
                setLoading(false);
            });
    }, [id]);

    return { mangaDetails, loading, coverUrl };
}

export default useGetDetails;
