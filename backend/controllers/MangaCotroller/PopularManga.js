
const axios = require("axios");

const popularManga = async (req, res) => {

    
    try {
        const response = await axios.get('https://api.mangadex.org/manga?limit=20&order[followedCount]=desc&includes[]=cover_art&availableTranslatedLanguage[]=en'); 
        // Mapping through the response to get desired data
        const mangaData = response.data.data.map((manga) => {
            const title = manga.attributes.title.en || manga.attributes.title['en-US'];
            const id = manga.id;
            const cover = manga.relationships.find((rel) => rel.type === 'cover_art');
            const coverUrl = cover
                ? `https://uploads.mangadex.org/covers/${manga.id}/${cover.attributes.fileName}`
                : '';

            return { title, coverUrl, id };
        });

        // Respond with the manga data
        res.json(mangaData);
    } catch (error) {
        console.error('Error fetching manga data:', error.message);
        res.status(500).json({ error: 'Failed to fetch manga data' });
    }
                
}


module.exports = popularManga