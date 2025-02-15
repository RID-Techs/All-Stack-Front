import { useRouteError } from "react-router-dom";
export function PageElmErrorPage () {
    const onError = useRouteError();
    
    return <>
        <div className='error-page-wraper' style={{backgroundColor: "#FAFAFA", minHeight: "100vh"}}>
            <div className='error-page'>
                <div className="emoji-content">
                    <div className="emoji-eyes">
                        <div className="eyes"></div>
                        <div className="eyes"></div>
                    </div>
                    <div className="emoji-mouth-wrapper">
                        <div className="emoji-mouth"></div>
                    </div>
                </div>
                <h1> {onError.status} {onError.statusText} !</h1>
                <h3 id="Notfound-page-text">Sorry, this page does not exist. Check the link and refresh.</h3>
            </div>
        </div>
    </>
}