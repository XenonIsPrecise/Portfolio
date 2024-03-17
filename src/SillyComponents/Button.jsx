/* eslint-disable react/prop-types */
import "./Button.css"
export default function Button({text,url}){
    return(
        <>
            <a href={url}><button>{text}</button></a>
        </>
    )
}