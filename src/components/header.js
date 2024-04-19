import "./landingsection.css"
function Header(props) {
    const {onChangingLanguage} = props

    const onChanging = (event) => {
        onChangingLanguage(event.target.value)
    }

    return (
        <div className="header">
            <select onChange = {onChanging}>
                <option>-select-</option>
                <option value = "Telugu">Telugu</option>
                <option value = "Hindi">Hindi</option>
                <option value = "English">English</option>
            </select>
        </div>

    )
}

export default Header;

