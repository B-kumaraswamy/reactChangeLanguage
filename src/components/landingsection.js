import "./landingsection.css"

const obj = {
    Telugu : "లేపాక్షి ఆంధ్రప్రదేశ్ రాష్ట్రం, అనంతపురం జిల్లాలో ఇదే పేరుతో ఉన్న లేపాక్షి మండలం లోని గ్రామం, అదే మండలానికి కేంద్రం. ఇది సమీప పట్టణమైన హిందూపురం నుండి 16 కి. మీ. దూరంలో ఉంది. 2011 భారత జనగణన గణాంకాల ప్రకారం ఈ గ్రామం 2133 ఇళ్లతో, 10042 జనాభాతో 1891 హెక్టార్లలో విస్తరించి ఉంది. గ్రామంలో మగవారి సంఖ్య 5373, ఆడవారి సంఖ్య 4669. షెడ్యూల్డ్ కులాల సంఖ్య 1120 కాగా షెడ్యూల్డ్ తెగల సంఖ్య 134. గ్రామ జనగణన లొకేషన్ కోడ్ 595570[2].పిన్ కోడ్: 515331.",
    Hindi : "लेपाक्षी आंध्र प्रदेश राज्य के अनंतपुर जिले में इसी नाम के लेपाक्षी मंडल का एक गाँव है और उसी मंडल का केंद्र है। यह निकटतम शहर हिंदूपुरम से 16 किमी दूर है। एम। बहुत दूर है। 2011 की भारत की जनगणना के अनुसार, यह गाँव 2133 घरों और 10042 की आबादी के साथ 1891 हेक्टेयर में फैला हुआ है। गाँव में पुरुषों की संख्या 5373 है, महिलाओं की संख्या 4669 है। अनुसूचित जाति की संख्या 1120 है जबकि अनुसूचित जनजाति की संख्या 134 है। ग्राम जनगणना स्थान कोड 595570 है [2] .पिन कोड: 515331।",
    English : "ELepakshi is a village in Lepakshi mandal of the same name in Anantapur district of Andhra Pradesh state and the center of the same mandal. It is 16 km from the nearest town Hindupuram . m. is far away. According to the 2011 India census, the village is spread over 1891 hectares with 2133 houses and a population of 10042. The number of males in the village is 5373, the number of females is 4669. The number of scheduled castes is 1120 while the number of scheduled tribes is 134. Village census location code is 595570 [2] .Pin code: 515331."
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
        <div className="cart">
            <img  alt="image1" src="https://th-i.thgim.com/public/migration_catalog/article13345607.ece/alternates/FREE_1200/28MP-Lepakshi_3.jpg" className="image"/>
            <p className="para"> {displayLanguage}</p>
        </div>
    )
}

export default LandingSection;