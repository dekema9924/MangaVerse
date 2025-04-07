

import CompletedComponent from "./Completed"

function Latest() {
    const query = 'limit=40&order[updatedAt]=desc&includes[]=cover_art&availableTranslatedLanguage[]=en&status[]=completed'
  return (
    <CompletedComponent
        completed="Completed"
        url={encodeURIComponent(query)}

    />
        
  )
}

export default Latest