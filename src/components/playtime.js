const obj = {
    Telugu : "తెలుగు playtime",
    Hindi : "हिंदी playtime",
    English : "English playtime"
}
function PlayTime(props) {
    const display = (lan) => {
        switch(lan) {
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

    return(
        <div>
            <h1>Hello playtime in {displayLanguage}</h1>
        </div>
    )
}

export default PlayTime;