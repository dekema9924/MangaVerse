const axios = require("axios");

const mangaDetails = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "Manga ID is required" });
    }
    try {
        // Fetch manga details from MangaDex API
        const mangaRes = await axios.get(`${process.env.API_URL}/${id}`);
        const mangaDetails = mangaRes.data.data;

        let coverUrl = null;

        const coverArt = mangaDetails.relationships.find(rel => rel.type === "cover_art");

        if (coverArt) {
            // Fetch the cover image URL
            const coverRes = await axios.get(`https://api.mangadex.org/cover/${coverArt.id}`);
            const fileName = coverRes.data.data.attributes.fileName;
            coverUrl = `https://mangadex.org/covers/${id}/${fileName}`;
        }

        res.json({
            mangaDetails,
            coverUrl,
        });
    } catch (error) {
        console.error("Error fetching manga details:", error.message);
        res.status(500).json({ error: "Failed to fetch manga details", details: error.message });
    }
};

module.exports = mangaDetails;
