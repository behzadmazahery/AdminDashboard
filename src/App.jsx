import { useSelector } from "react-redux";
import SideBar from "./components/SideBar";
import TopSetting from "./components/TopSetting";
import Dashboard from "./components/Dashboard";

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <main className={`h-full p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}> 
      <div className="h-full flex gap-4">
        <SideBar />
        <div className="flex-1 flex flex-col gap-4">
          <TopSetting/>
          <Dashboard />
        </div>
      </div>
    </main>
  )
}

export default App;