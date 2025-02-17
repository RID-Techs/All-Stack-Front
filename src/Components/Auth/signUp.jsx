import {toast} from "react-toastify"
import logo_light from "/logo_light.png"
import logo_dark from "/logo_dark.png"
import mobile_menu_light from "/mobile_menu_light.png"
import mobile_menu_dark from "/mobile_menu_dark.png"
import "./signings.css";
import { useEffect, useState, useRef } from "react"
import {useNavigate} from "react-router-dom"

const pickColor = {
    lightTheme: {
        accentColor: "#333333",
        secondaryColor: "#007BFF",
        neutralColor: "#FAFAFA",
        contrasteColor: "#333333c4"
    },
        darkTheme: {
        accentColor: "#FAFAFA",
        secondaryColor: "#007BFF",
        neutralColor: "#333333",
        contrasteColor: "#fafafa94"
    }
};
export function SignUp() {
    const navigate = useNavigate();
       const [isLight, setIsLight] = useState(() => {
            const storedTheme = localStorage.getItem("theme") || "light";
            return storedTheme === "light";
        });
    
        const dark_theme_icon = <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
    </svg>
    const light_theme_icon = <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#FAFAFA"
    >
      <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
      <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
      <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
      <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
      <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
      <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
      <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
      <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
      <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
    </svg>

        useEffect(() => {
    
            const changeBodyBackgroundColor = () => {
                document.body.style.backgroundColor = isLight ? pickColor.lightTheme.neutralColor : pickColor.darkTheme.neutralColor;
            }
            changeBodyBackgroundColor();
        }, [isLight]);
    
        const themeToggler = () => {
            const newTheme = isLight ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            setIsLight(!isLight);
        }
        const HeaderItemsRef = useRef(null);

    useEffect(() => {
        if (HeaderItemsRef.current) {
            HeaderItemsRef.current.style.display = "none";
        }
    }, []);

    const DisplayHeaderItems = () => {
        const allSection = document.querySelectorAll("section");
        const isHidden = HeaderItemsRef.current.style.display === "none";

        HeaderItemsRef.current.style.display = isHidden ? "block" : "none";

        if(HeaderItemsRef.current && HeaderItemsRef.current.style.display === "block") {
                allSection.forEach((sec) => {
                sec.style.filter = 'blur(22px)';
            }) 
        } else {
                allSection.forEach((sec) => {
                    sec.style.filter = '';
                })
        }
    }

    const errorMsgToast = (msg) => {
        toast.warn(msg)
    }
    const [isVisible, setIsVisible] = useState(true);
    const ShowPass = () => {
        setIsVisible(!isVisible);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        
        const getUserName = document.querySelector("#signup-name").value;
        const getUserPass = document.querySelector("#signup-pass").value;
        const getUserRole = document.querySelector("#signup-role").value;
        const SignBtnText = document.querySelector("#sign-text");
        const loadingItemsHolder = document.querySelector(".loadingItems-holder");

        if(!getUserName || !getUserPass || !getUserRole) {
            return errorMsgToast("All fields are mandatory !");
        }
        if(getUserPass.length < 6) {
            return errorMsgToast("Password must at least be 6 characters");
        } else if (getUserPass.length > 12){
            return errorMsgToast("Password must not exceed 12 characters");
        }

        SignBtnText.textContent = "Proceeding"
        loadingItemsHolder.style.display = "inline-flex";
        const CreateNewUser = async () => {
            const GetUrl = import.meta.env.MODE === "production" ? import.meta.env.VITE_Prod_Backend_URL : import.meta.env.VITE_Local_Backend_URL;
            try {
                const link = `${GetUrl}/api/signup`;
                const sendUserInfo = await fetch(link, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        username: getUserName,
                        password: getUserPass,
                        role: getUserRole
                    })
                })
                if(!sendUserInfo.ok) {
                    console.log("errs");
                    
                }
                const response = await sendUserInfo.json();
                console.log(response);
                SignBtnText.textContent = "Sign up";
                loadingItemsHolder.style.display = "none";
                navigate("/login");
            } catch (error) {
                SignBtnText.textContent = "Sign up";
                loadingItemsHolder.style.display = "none";
                console.log("Error while registering the user : " + error.message);
                
            }
        }
        CreateNewUser();

    }

    return (
        <>
        <header style={{backgroundColor: isLight ? pickColor.lightTheme.neutralColor : pickColor.darkTheme.neutralColor,
                            boxShadow: isLight ? "0px 1px 2px #33333328" : "0px 1px 2px rgba(250, 250, 250, 0.2)"
                    }} >
                        <div className="header-desktop">
                            <div className="logo-wrapper">
                            <img src={isLight ? logo_light : logo_dark} alt="All-Gagdet" />
                        </div>
                        <div className="header-items">
                            <ul>
                                <li><a style={{color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor}} href="#home">Accueil</a></li>
                                <li><a style={{color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor}} href="#catalogue">Catalogue</a></li>
                                <li><a style={{color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor}} href="#contact">Contact</a></li>
                                <li><a style={{color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor}} href="#about">À Propos</a></li>
                            </ul>
                            <div className="switch-theme">
                                <div onClick={themeToggler} className="dark-theme-icon">{isLight ? dark_theme_icon : light_theme_icon}</div>
                            </div>
                        </div>
                        <div className="mobile-header">
                            <div className="switch-theme-mobile">
                                <div onClick={themeToggler} className="dark-theme-icon">{isLight ? dark_theme_icon : light_theme_icon}</div>
                            </div>
                            <div className="mobile-menu-wrapper">
                                <div style={{backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, 
                                    boxShadow: isLight ? null : "0px 0px 3px #fafafa"
                                }} className="menu-icon">
                                    <img onClick={DisplayHeaderItems} id="mobile-menu-icon" height={50} src={isLight ? mobile_menu_dark : mobile_menu_light} alt="menu" />
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        
                        <div ref={HeaderItemsRef} className="header-items-mobile">
                            <ul>
                                <li><a style={{color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor}} href="#home">⬥ ⤑ Accueil</a></li>
                                <li><a style={{color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor}} href="#catalogue">⬥ ⤑ Catalogue</a></li>
                                <li><a style={{color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor}} href="#contact">⬥ ⤑ Contact</a></li>
                                <li><a style={{color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor}} href="#about">⬥ ⤑ À Propos</a></li>
                            </ul>
                        </div>
                    </header>


                    <section className="signup-section-wrapper">
                        <div className="signup-section" style={{backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor}} >
                            <h1 style={{color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor}} >Sign Up </h1>
                            <form onSubmit={handleSignUp}>
                                <div className="form-group">
                                    <label htmlFor="signup-name" style={{color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor}} >Nom d{"'"}utilisateur :</label>
                                    <input type="text" id="signup-name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signup-pass" style={{color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor}}>Mot de passe :</label>
                                    <div className="password-holder">
                                        <input type={isVisible ? "password" : "text"} minLength={6} maxLength={12} id="signup-pass"/>
                                        <span onClick={ShowPass}>
                                            {isVisible ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill={pickColor.lightTheme.accentColor}>
<path d="M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"></path>
<path d="M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"></path>
<path d="M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"></path>
</svg> : <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill={pickColor.lightTheme.accentColor}>
<path d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>
</svg>}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signup-role" style={{color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor}}>Statut :</label>
                                    <select id="signup-role">
                                        <option value="">Selectionner</option>
                                        <option value="superadmin">Chef</option>
                                        <option value="admin">Gérant</option>
                                    </select>
                                </div>
                                <button id="signup-btn" type="submit" style={{color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, cursor: "pointer"}}> <span id="sign-text">Sign up</span>  <span className="loadingItems-holder">
                                    <span className="loadingItems">
                                    <span id="loading-1">.</span>
                                    <span id="loading-2">.</span>
                                    <span id="loading-3">.</span>
                                    <span id="loading-4">.</span>
                                    <span id="loading-5">.</span>
                                    
                                    </span>
                                    </span> </button>
                            </form>
                        </div>
                    </section>
        </>
    )
}