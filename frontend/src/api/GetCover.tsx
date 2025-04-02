import { useState, useEffect } from "react";
import axios from "axios";

// Define the type of the props for the hook
interface CoverParams {
    manga_id: string;
    covers: { manga_id: string; cover_id: string }[];  // Array of covers with coverId and manga_id
}

const useGetCover = ({ covers, manga_id }: CoverParams) => {
    const [coverUrls, setCoverUrls] = useState<string[]>([]);

    useEffect(() => {
        const fetchCoverUrls = async () => {
            try {
                const coverPromises = covers.map(async ({ cover_id }) => {
                    try {
                        const coverResponse = await axios.get(`https://api.mangadex.org/cover/${cover_id}`);
                        const fileName = coverResponse.data.data.attributes.fileName;
                        const coverUrl = `https://uploads.mangadex.org/covers/${manga_id}/${fileName}`;
                        return coverUrl;
                    } catch (error) {
                        console.error("Error fetching cover:", error);
                        return null;  // Return null for failed fetch
                    }
                });

                // Wait for all the promises to resolve and filter out null values
                const coverUrls = (await Promise.all(coverPromises)).filter((url): url is string => url !== null);

                // Update the state with the valid cover URLs
                setCoverUrls(coverUrls);
                console.log(coverUrls)
            } catch (error) {
                console.error("Error fetching covers:", error);
            }
        };

        if (covers.length > 0) {
            fetchCoverUrls();
        }
    }, [covers, manga_id]);  // This will run whenever `covers` or `manga_id` change

    return coverUrls;
};

export default useGetCover;
