
import CategoryComponent from "./CategoryComponent"

function Featured() {
  return (
    <>
        <CategoryComponent category="Weekly" url="limit=40&order[latestUploadedChapter]=desc&includes[]=cover_art&availableTranslatedLanguage[]=en"> </CategoryComponent>
    </>
  )
}

export default Featured