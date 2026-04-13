import { useEffect, useState } from "react"
import AppRoutes from "./Routes"
import { Loader } from "./components"

const App = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Only show loader on initial page load
    const isFirstLoad = !sessionStorage.getItem('app_loaded')
    
    if (isFirstLoad) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setLoading(false)
            sessionStorage.setItem('app_loaded', 'true')
            return 100
          }
          return prev + 25
        })
      }, 500)

      return () => clearInterval(interval)
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <Loader progress={progress} />
  }

  return (
    <div className="min-h-screen text-white relative">
      <AppRoutes/>
    </div>
  )
}

export default App
