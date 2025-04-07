const axios = require('axios');


const completedManga = async (req, res) => {
    const { url } = req.query;

    const getCoverImageDetails = async (coverId) => {
        try {
            const response = await axios.get(`https://api.mangadex.org/cover/${coverId}`);
            return response.data.data.attributes.fileName;
        } catch (err) {
            console.error("Error fetching cover:", err.response?.data || err.message);
            return null;
        }
    };

    try {
        const response = await axios.get(`${process.env.API_URL}?${url}`);

        const mangaData = await Promise.all(response.data.data.map(async (manga) => {
            const title = manga.attributes.title.en || manga.attributes.title["en-US"];
            const id = manga.id;

            const cover = manga.relationships.find((rel) => rel.type === "cover_art");
            let coverUrl = "https://placehold.co/600x400/000000/FFFFFF/png";

            if (cover?.id) {
                const fileName = await getCoverImageDetails(cover.id);
                if (fileName) {
                    coverUrl = `https://uploads.mangadex.org/covers/${id}/${fileName}`;
                }
            }

            return { title, id, coverUrl };
        }));

        res.json(mangaData);
    } catch (error) {
        console.error("Error fetching weekly manga:", error);
        res.status(500).json({ error: "Failed to fetch manga data" });
    }
}


module.exports = completedManga