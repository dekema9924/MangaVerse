import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function ChapterReader() {
  const { chapterId, id, title } = useParams();
  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [chapterList, setChapterList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch chapter images
  useEffect(() => {
    if (!chapterId) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        setImageUrls([]);

        const res = await axios.get(`https://api.mangadex.org/at-home/server/${chapterId}`);
        const { baseUrl, chapter } = res.data;

        if (!chapter.hash || !chapter.data?.length) {
          setError("This chapter is unavailable or missing images.");
          return;
        }

        const urls = chapter.data.map((filename: string) => `${baseUrl}/data/${chapter.hash}/${filename}`);
        setImageUrls(urls);
      } catch (err) {
        setError("Failed to load chapter images.");
      } finally {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    fetchImages();
  }, [chapterId]);

  // Fetch all chapters
  useEffect(() => {
    if (!id) return;

    const fetchChapters = async () => {
      try {
        let allChapters: any[] = [];
        let offset = 0;
        let hasMore = true;

        while (hasMore) {
          const res = await axios.get(`https://api.mangadex.org/chapter?manga=${id}&translatedLanguage[]=en&order[chapter]=asc&limit=100&offset=${offset}`);
          const data = res.data.data;
          allChapters = [...allChapters, ...data];
          hasMore = data.length === 100;
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

        setChapterList(filtered);
      } catch (err) {
        console.error("Failed to fetch chapters", err);
      }
    };

    fetchChapters();
  }, [id]);

  const currentIndex = chapterList.findIndex(c => c.id === chapterId);
  const nextChapter = currentIndex !== -1 ? chapterList[currentIndex + 1] : null;
  const prevChapter = currentIndex > 0 ? chapterList[currentIndex - 1] : null;

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    navigate(`/${title}/${id}/${selectedId}`);
  };

  return (
    <div className="p-4">
      <Link to={`/manga/${title}/${id}`} className="text-white flex items-center mb-4">
        <ArrowBackIosNewIcon /> Back to Manga
      </Link>

      {chapterList.length > 0 && (
        <div className="flex items-center gap-4 mb-4 flex-wrap  ">
          <select value={chapterId} onChange={handleDropdownChange} className="bg-gray-800 text-white p-2 rounded  w-11/12 md:w-96">
            {chapterList.map((c) => (
              <option  key={c.id} value={c.id}>
                Vol {c.volume} - Ch {c.chapter} - {c.title}
              </option>
            ))}
          </select>

          <button
            disabled={!prevChapter}
            onClick={() => navigate(`/${title}/${id}/${prevChapter?.id}`)}
            className="bg-orange-500 px-4 py-1 rounded text-white disabled:opacity-50 cursor-pointer"
          >
            Prev
          </button>
          <button
            disabled={!nextChapter}
            onClick={() => navigate(`/${title}/${id}/${nextChapter?.id}`)}
            className="bg-orange-500 px-4 py-1 rounded text-white disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      )}

      <div className="flex flex-col items-center">
        {loading && <p className="text-white">Loading images...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && imageUrls.map((url, idx) => (
          <img
            loading='lazy'
            key={idx}
            src={url}
            alt={`Page ${idx + 1}`}
            className="scrollbar-hide mb-4 max-w-full rounded-md shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default ChapterReader;
