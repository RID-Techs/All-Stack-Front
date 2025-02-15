export function BoundaryErrorPage () {
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
                <h1>Oups, Something went wrong !</h1>
                <p id="reresh-page-text">Try refreshing the page. Or, call us : +228 79 83 62 19</p>
            </div>
        </div>
    </>
}