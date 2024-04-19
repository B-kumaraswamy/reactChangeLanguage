import Header from "./components/header"
import LandingSection from "./components/landingsection"
import PlayTime from "./components/playtime"
import {useState} from 'react'

function ChangeLanguage() {
  const [activeLanguage, setactiveLanguage] = useState("English")

   const onChangingLanguage = (currentlanguage) => {
            setactiveLanguage(currentlanguage)


   }

// sending function as a prop to headers
  return (
    <div>
      <Header onChangingLanguage = {onChangingLanguage}/> 
      <LandingSection activeLanguage = {activeLanguage}/>
      <PlayTime  activeLanguage = {activeLanguage}/>
    </div>
  )
}

export default ChangeLanguage;