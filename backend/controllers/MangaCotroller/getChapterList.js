const axios = require('axios');

 // Get chapter list
const getChapterList = async (req, res) => {
    const { mangaId } = req.params;
    try {
      let allChapters = [];
      let offset = 0;
      let hasMore = true;
  
      while (hasMore) {
        const response = await axios.get(`https://api.mangadex.org/chapter?manga=${mangaId}&translatedLanguage[]=en&order[chapter]=asc&limit=100&offset=${offset}`);
        const chapters = response.data.data;
        allChapters = [...allChapters, ...chapters];
        hasMore = chapters.length === 100;
        offset += 100;
      }
  
      const filtered = allChapters
        .filter((chap) => chap.attributes.chapter && chap.attributes.title)
        .map((chap) => ({
          id: chap.id,
          chapter: chap.attributes.chapter,
          volume: chap.attributes.volume || 'N/A',
          title: chap.attributes.title
        }));
  
      res.json(filtered);
    } catch (err) {
      console.error("Failed to fetch chapter list:", err.message);
      res.status(500).json({ error: 'Failed to fetch chapters' });
    }
  };


  module.exports = getChapterList;