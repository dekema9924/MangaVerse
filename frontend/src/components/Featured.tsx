
import CategoryComponent from "./CategoryComponent"

function Featured() {
  const query = 'limit=40&order[latestUploadedChapter]=desc&includes[]=cover_art&availableTranslatedLanguage[]=en';
  return (
    <>
      <CategoryComponent category="Weekly" url={encodeURIComponent(query)}/> 
    </>
  )
}

export default Featured