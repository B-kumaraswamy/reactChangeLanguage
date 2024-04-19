import "./landingsection.css"
const obj = {
    Telugu : "తాజ్ మహల్ (ఆంగ్లం:Taj Mahal (/ˈtɑːdʒ məˈhɑːl/)[2] (హిందీ: ताज महल)[3][4] (ఉర్దూ: تاج محل ) అనే ఒక అద్భుతమైన సమాధి] భారతదేశంలోని ఆగ్రా నగరంలో ఉంది, ఇది చక్రవర్తి షాజహాన్ తన ప్రియమైన భార్య ముంతాజ్ మహల్ జ్ఞాపకార్ధంగా నిర్మించాడు.తాజ్ మహల్ (ఇంకా తాజ్) |మొఘల్ భవన నిర్మాణ శాస్త్రానికి ఒక గొప్ప ఉదాహరణగా గుర్తించబడింది, ఇది పర్షియా, భారతీయ, ఇస్లాం భవన నిర్మాణ అంశాల శైలితో నిర్మించబడింది.[5][6] 1983వ సంవత్సరంలో తాజ్ మహల్‌ను యునెస్కో ప్రపంచ పూర్వ సంస్కృతి ప్రదేశంగా మార్చినదీ, భారత దేశంలో ఉన్న ముస్లిం కళ యొక్క ఆభరణంగా ఉదాహరించింది అంతేగాక విశ్వవ్యాప్తంగా మెచ్చుకొనబడిన వాటిలో ఒక దివ్యమైన ప్రపంచ పూర్వ సంస్కృతిగా అభివర్ణించింది.",

    Hindi : "ताजमहल (उर्दू: تاج محل) भारत के उत्तर प्रदेश राज्य के आगरा शहर में स्थित एक विश्व धरोहर मक़बरा , और विश्व के ७ अजूबों में से एक है। इसका निर्माण १७वीं सदी में मुग़ल सम्राट शाहजहाँ ने अपनी पत्नी मुमताज़ महल की याद में करवाया था।ताजमहल अतुलनीय धरोहरमुगल सम्राट शाहजहां के समय में मुगल वास्तुकला अपने चरम शिखर पर थी, ताजमहल उन सभी वास्तुकलाओं के उदाहरण में सर्वप्रसिद्ध है। ताजमहल मुग़ल वास्तुकला का उत्कृष्ट नमूना है। इसकी वास्तु शैली फ़ारसी, तुर्क, भारतीय और इस्लामी वास्तुकला के घटकों का अनोखा सम्मिलन है। सन् १९८३ में, ताजमहल युनेस्को विश्व धरोहर स्थल बना। इसके साथ ही इसे विश्व धरोहर के सर्वत्र प्रशंसा पाने वाली, अत्युत्तम मानवी कृतियों में से एक बताया गया। ताजमहल को भारत की इस्लामी कला का रत्न भी घोषित किया गया है। साधारणतया देखे गये संगमर्मर की सिल्लियों की बडी- बडी पर्तो से ढंक कर बनाई गई इमारतों की तरह न बनाकर इसका श्वेत गुम्बद एवं टाइल आकार में संगमर्मर से[2] ढंका है। केन्द्र में बना मकबरा अपनी वास्तु श्रेष्ठता में सौन्दर्य के संयोजन का परिचय देते हैं। ताजमहल इमारत समूह की संरचना की खास बात है, कि यह पूर्णतया सममितीय है। इसका निर्माण सन् १६४८ के लगभग पूर्ण हुआ था।[1] उस्ताद अहमद लाहौरी को प्रायः इसका प्रधान रूपांकनकर्ता माना जाता है।[3] ताजमहल के निर्माण में लगभग २२ वर्षों का समय लगा।",
    English : "The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the Palace')[4][5][6] is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall."
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
        <div className="playtime-cart">
            <img alt="image2" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMl8zZF9pbGx1c3RyYXRpb25fb2ZfdGFqX21haGFsX2NhcnRvb25fbWluaW1hbF8xM2U3ZDY0NC1hMjU0LTRlMTAtOGI0Ni04NmNlNjI0OGIxZjNfMS5qcGc.jpg" className="image"/>
            <p className="para">{displayLanguage}</p>
        </div>
    )
}

export default PlayTime;