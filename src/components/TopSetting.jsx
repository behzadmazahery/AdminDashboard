import { MoonStar, Sun, Search } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../redux/slices/themeSlice"

const TopSetting = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
      <section className={`w-full p-4 font-bold rounded-xl flex justify-between items-center transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}>
          {/* right box  */}
          <article className={`flex items-center p-2 rounded-xl transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
              <input 
                className={`p-2 w-xs bg-transparent outline-none transition-colors duration-300 ${
                  isDarkMode ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-500'
                }`}
                type="text" 
                placeholder="جستجو ..." 
              />
              <button className={`p-2 rounded transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
              }`}>
                <Search className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
              </button>
          </article>

          {/* left box  */}
          <article className="flex gap-4 items-center">
              <div className="flex items-center gap-2"> 
                <div className="text-center">
                    <p> بهزاد مظاهری </p>
                    <p className={`text-[12px] ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      مدیر وبسایت
                    </p>
                </div>
                  
                <img className="w-[50px] h-[50px] rounded-full ml-2" 
                     src="../../public/images/avatar.jfif" 
                     alt="avatar" />
              </div>
              
              <button 
                onClick={() => dispatch(toggleTheme())}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? (
                  <Sun className="text-yellow-500" size={20} />
                ) : (
                  <MoonStar className="text-gray-600" size={20} />
                )}
              </button>
          </article>

    </section>
  )
}

export default TopSetting