

const axios = require('axios');

// Get chapter images
const getChapterImages = async (req, res) => {
  const { chapterId } = req.params;

  try {
    const { data } = await axios.get(`https://api.mangadex.org/at-home/server/${chapterId}`);
    const { baseUrl, chapter } = data;

    if (!chapter.hash || !chapter.data?.length) {
      return res.status(404).json({ error: 'Chapter images unavailable.' });
    }

    const imageUrls = chapter.data.map((filename) => `${baseUrl}/data/${chapter.hash}/${filename}`);
    res.json({ imageUrls });
  } catch (err) {
    console.error("Failed to fetch chapter images:", err.message);
    res.status(500).json({ error: 'Failed to fetch chapter images' });
  }
};


module.exports = getChapterImages;