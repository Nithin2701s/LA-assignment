import { TouchableOpacity, useColorScheme } from 'react-native'
import useBookMark from '@/hooks/useBookMark'
import TabIconSymbol from './TabIconSymbol';
const Bookmark = ({jobId,handleBookmark}) => {
    const bookmarked = useBookMark(jobId);
    const colorScheme = useColorScheme()  
    // const bg_color1 = colorScheme === 'dark': 
  return (
    <TouchableOpacity onPress={handleBookmark} accessibilityLabel="Bookmark job">
            <TabIconSymbol
              name={bookmarked ? "bookmark" : "bookmark-outline"}
              size={25}
              color={colorScheme === 'light'? "#000":"#aff"}
            />
          </TouchableOpacity>
  )
}

export default Bookmark
