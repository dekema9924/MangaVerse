const axios = require('axios');

// Get all chapters by manga ID
const getMangaChapters = async (req, res) => {
  const { mangaId } = req.params;

  try {
    const seenChapters = new Set();
    let allChapters = [];
    let offset = 0;
    const limit = 100;
    let total = 0;

    while (true) {
      const response = await axios.get(`https://api.mangadex.org/chapter`, {
        params: {
          manga: mangaId,
          translatedLanguage: ['en'],
          order: { chapter: 'asc' },
          limit,
          offset
        }
      });

      const filtered = response.data.data.filter((chapter) => {
        const key = chapter.attributes.chapter;
        if (!key || seenChapters.has(key) || !chapter.attributes.title) return false;
        seenChapters.add(key);
        return true;
      });

      const chaptersData = filtered.map((chapter) => {
        const isoDate = chapter.attributes.publishAt;
        const date = new Date(isoDate);
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const yy = String(date.getFullYear()).slice(-2);
        const formattedDate = `${mm}/${dd}/${yy}`;

        return {
          id: chapter.id,
          volume: chapter.attributes.volume || 'N/A',
          title: chapter.attributes.title,
          chapterNumber: chapter.attributes.chapter,
          formattedDate
        };
      });

      allChapters = [...allChapters, ...chaptersData];
      total = response.data.total;

      if (offset + limit >= total) break;
      offset += limit;
    }

    res.json(allChapters);
  } catch (error) {
    console.error("Error fetching manga chapters:", error.message);
    res.status(500).json({ error: "Failed to fetch manga chapters" });
  }
};

module.exports = { getMangaChapters };
