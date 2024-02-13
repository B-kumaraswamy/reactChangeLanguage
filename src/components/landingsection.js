const obj = {
    Telugu : "తెలుగు landingsection",
    Hindi : "पाततद landinsection",
    English : "English landingsection"
}


function LandingSection(props) {
    const display = (lan) => {
       switch(lan){
        case "Telugu":
            return obj.Telugu
        case "Hindi":
            return obj.Hindi
        case "English":
            return obj.English
        default:
            return obj.English
       }
    }
    const {activeLanguage} = props
    const displayLanguage = display(activeLanguage)

    console.log(props)
    return (
        <div>
            <h1>Hello LandingSection in {displayLanguage}</h1>
        </div>
    )
}

export default LandingSection;