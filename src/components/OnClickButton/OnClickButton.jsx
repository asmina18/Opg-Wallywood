

export function OnClickButton(props) {


    return (
        <button onClick={props.clickEvent}>
            {props.children}
        </button>
    )

}
