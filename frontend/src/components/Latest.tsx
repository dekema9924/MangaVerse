

import CategoryComponent from "./CategoryComponent"

function Latest() {
  return (
    <CategoryComponent 
        category="Completed"
        url="limit=40&order[updatedAt]=desc&includes[]=cover_art&availableTranslatedLanguage[]=en&status[]=completed"
    >
        
    </CategoryComponent>
  )
}

export default Latest