
import { toast } from "react-toastify";
import { useEffect, useState, useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import "./admin.css";
import logo_light from "/logo_light.png"
import logo_dark from "/logo_dark.png"
import mobile_menu_light from "/mobile_menu_light.png"
import mobile_menu_dark from "/mobile_menu_dark.png"

const pickColor = {
  lightTheme: {
    accentColor: "#333333",
    secondaryColor: "#007BFF",
    neutralColor: "#FAFAFA",
    contrasteColor: "#333333c4",
    contrasteColor_2: "#33333327"
  },
  darkTheme: {
    accentColor: "#FAFAFA",
    secondaryColor: "#007BFF",
    neutralColor: "#333333",
    contrasteColor: "#fafafa94",
    contrasteColor_2: "#fafafa13"
  }
};
export function Modify () {
  const Data = useLoaderData();
  const navigate = useNavigate();

    const warnAlert = (msg) => {
          toast.warn(msg);
      }
      const SuccessAlert = () => {
          toast.success("New Item updated successfully !");
      }
  
    const [isLight, setIsLight] = useState(() => {
          const storedTheme = localStorage.getItem("theme") || "light";
          return storedTheme === "light";
      });
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
          
                  if (HeaderItemsRef.current && HeaderItemsRef.current.style.display === "block") {
                      allSection.forEach((sec) => {
                          sec.style.filter = 'blur(22px)';
                      })
                  } else {
                      allSection.forEach((sec) => {
                          sec.style.filter = '';
                      })
                  }
              }
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


const changeItemPictureRef = useRef(null);
const [submiText, setSubmitText] = useState(true);

const [productName, setProductname] = useState(Data.productName);
  const handleProductName = (e) => {
    setProductname(e.target.value.trim());
  }
  const [productPicture, setProductPicture] = useState(null);
  const [preview, setPreview] = useState(Data.productPicture);
  const handleProductPicture = (event) => {
      const file = event.target.files[0];
      const NewImage = URL.createObjectURL(file);
      setPreview(NewImage);
      setProductPicture(file);
    if (changeItemPictureRef.current) {
      changeItemPictureRef.current.src = NewImage;
    }
  }

  const [productRam, setProductRam] = useState(Data.productRam);
  const handleProductRam = (e) => {
    setProductRam(e.target.value.trim());
  }
  const [productRom, setProductRom] = useState(Data.productRom);
  const handleProductRom = (e) => {
    setProductRom(e.target.value.trim());
  }
  const [productScreenType, setProductScreenType] = useState(Data.productScreenType);
  const handleProductScreenType = (e) => {
    setProductScreenType(e.target.value.trim());
  }
  const [productDisplayResolution, setProductDisplayResolution] = useState(Data.productDisplayResolution);
  const handleProductDisplayResolution = (e) => {
    setProductDisplayResolution(e.target.value.trim());
  }
  const [productMainCamera, setProductMainCamera] = useState(Data.productMainCamera);
  const handleProductMainCamera = (e) => {
    setProductMainCamera(parseInt(e.target.value.trim()));
  }
  const [productFrontCamera, setProductFrontCamera] = useState(Data.productFrontCamera);
  const handleProductFrontCamera = (e) => {
    setProductFrontCamera(parseInt(e.target.value.trim()));
  }
  const [productDualSim, setProductDualSim] = useState(Data.productDualSim);
  const handleProductDualSim = (e) => {
    setProductDualSim(e.target.value.trim());
  }
  const [productEsim, setProductEsim] = useState(Data.productEsim);
  const handleProductEsim = (e) => {
    setProductEsim(e.target.value.trim());
  }
  const [productMermorySlot, setProductMermorySlot] = useState(Data.productMermorySlot);
  const handleProductMermorySlot = (e) => {
    setProductMermorySlot(e.target.value.trim());
  }
  const [productUsbType, setProductUsbType] = useState(Data.productUsbType);
  const handleProductUsbType = (e) => {
    setProductUsbType(e.target.value.trim());
  }
  const [productOTG, setProductOTG] = useState(Data.productOTG);
  const handleProductOTG = (e) => {
    setProductOTG(e.target.value.trim());
  }
  const [productBattery, setProductBattery] = useState(Data.productBattery);
  const handleProductBattery = (e) => {
    setProductBattery(parseInt(e.target.value.trim()));
  }
  const [productWiredCharger, setProductWiredCharger] = useState(Data.productWiredCharger);
  const handleProductWiredCharger = (e) => {
    setProductWiredCharger(parseInt(e.target.value.trim()));
  }
  const [productWirelessCharger, setProductWirelessCharger] = useState(Data.productWirelessCharger);
  const handleProductWirelessCharger = (e) => {
    setProductWirelessCharger(e.target.value.trim());
  }
  const [productFingerPrint, setProductFingerPrint] = useState(Data.productFingerPrint);
  const handleProductFingerPrint = (e) => {
    setProductFingerPrint(e.target.value.trim());
  }
  const [productPortJack, setProductPortJack] = useState(Data.productPortJack);
  const handleProductPortJack = (e) => {
    setProductPortJack(e.target.value.trim());
  }
  const [productLoudSpeakers, setProductLoudSpeakers] = useState(Data.productLoudSpeakers);
  const handleProductLoudSpeakers = (e) => {
    setProductLoudSpeakers(e.target.value.trim());
  }
  const [productDualSpeakers, setProductDualSpeakers] = useState(Data.productLoudSpeakers);
  const handleProductDualSpeakers = (e) => {
    setProductDualSpeakers(e.target.value.trim());
  }
  const [productStereoSpeakers, setProductStereoSpeakers] = useState(Data.productStereoSpeakers);
  const handleProductStereoSpeakers = (e) => {
    setProductStereoSpeakers(e.target.value.trim());
  }
  const [productRange, setProductRange] = useState(Data.productRange);
  const handleProductRange = (e) => {
    setProductRange(e.target.value.trim());
  }
  const [productAvailableDate, setProductAvailableDate] = useState(Data.productAvailableDate);
  const handleProductAvailableDate = (e) => {
    setProductAvailableDate(parseInt(e.target.value.trim()));
  }
  const [productStock, setProductStock] = useState(Data.productStock);
  const handleProductStock = (e) => {
    setProductStock(e.target.value.trim());
  }
  const [productPrice, setProductPrice] = useState(Data.productPrice);
  const handleProductPrice = (e) => {
    setProductPrice(e.target.value.trim());
  }

  const ModifyProduct = (e) => {

    e.preventDefault();

    if (!productName || !productPicture || !productRam || !productRom || !productScreenType || !productDisplayResolution || !productMainCamera || !productFrontCamera || !productDualSim || !productEsim || !productMermorySlot || !productUsbType || !productOTG || !productBattery || !productWiredCharger || !productWirelessCharger || !productFingerPrint || !productPortJack || !productLoudSpeakers || !productDualSpeakers || !productStereoSpeakers || !productRange || !productAvailableDate || !productStock || !productPrice) {
      return warnAlert("Veuillez remplir tous les champs obligatoires");
    }

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPicture", productPicture);
    formData.append("productRam", productRam);
    formData.append("productRom", productRom);
    formData.append("productScreenType", productScreenType);
    formData.append("productDisplayResolution", productDisplayResolution);
    formData.append("productMainCamera", productMainCamera);
    formData.append("productFrontCamera", productFrontCamera);
    formData.append("productDualSim", productDualSim);
    formData.append("productEsim", productEsim);
    formData.append("productMermorySlot", productMermorySlot);
    formData.append("productUsbType", productUsbType);
    formData.append("productOTG", productOTG);
    formData.append("productBattery", productBattery);
    formData.append("productWiredCharger", productWiredCharger);
    formData.append("productWirelessCharger", productWirelessCharger);
    formData.append("productFingerPrint", productFingerPrint);
    formData.append("productPortJack", productPortJack);
    formData.append("productLoudSpeakers", productLoudSpeakers);
    formData.append("productDualSpeakers", productDualSpeakers);
    formData.append("productStereoSpeakers", productStereoSpeakers);
    formData.append("productRange", productRange);
    formData.append("productAvailableDate", productAvailableDate);
    formData.append("productStock", productStock);
    formData.append("productPrice", productPrice);

    const AddItemsToDB = async () => {
      setSubmitText(false);
      try {
        const url = `https://all-stack-back.onrender.com/api/products/updatephonebyid/${Data._id}`;
        const SendItem = await fetch(url, {
          method: "PUT",
          credentials: "include",
          body: formData
        })
        const response = await SendItem.json();

        if (SendItem.ok) {
          console.log(response.msg);
          SuccessAlert();
          setSubmitText(true);
          navigate("/admin");
        }
        setSubmitText(true);
      } catch (error) {
        console.log("Error while adding a new item:", error);

      }
    }
    AddItemsToDB();
  }

  return (
    <>
      <header style={{
                    backgroundColor: isLight ? pickColor.lightTheme.neutralColor : pickColor.darkTheme.neutralColor,
                    boxShadow: isLight ? "0px 1px 2px #33333328" : "0px 1px 2px rgba(250, 250, 250, 0.2)"
                }} >
                    <div className="header-desktop">
                        <div className="logo-wrapper">
                            <img src={isLight ? logo_light : logo_dark} alt="All-Gagdet" />
                        </div>
                        <div className="header-items">
                            <ul>
                                <li><a style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }} href="#home">Accueil</a></li>
                                <li><a style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }} href="#catalogue">Catalogue</a></li>
                                <li><a style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }} href="#contact">Contact</a></li>
                                <li><a style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }} href="#about">À Propos</a></li>
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
                                <div style={{
                                    backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor,
                                    boxShadow: isLight ? null : "0px 0px 3px #fafafa"
                                }} className="menu-icon">
                                    <img onClick={DisplayHeaderItems} id="mobile-menu-icon" height={50} src={isLight ? mobile_menu_dark : mobile_menu_light} alt="menu" />
                                </div>
                            </div>
    
                        </div>
                    </div>
    
                    <div ref={HeaderItemsRef} className="header-items-mobile">
                        <ul>
                            <li><a style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }} href="#home">⬥ ⤑ Accueil</a></li>
                            <li><a style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }} href="#catalogue">⬥ ⤑ Catalogue</a></li>
                            <li><a style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }} href="#contact">⬥ ⤑ Contact</a></li>
                            <li><a style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }} href="#about">⬥ ⤑ À Propos</a></li>
                        </ul>
                    </div>
                </header>
                
                <section className="modify-section">
                  <div className="items-form">
          <form encType="multipart/form-data" style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }}>
            <div className="item-name-and-picture">
              <div className="form-group">
                <label htmlFor="item-name">Nom du produit</label>
                <input type="text" id="item-name" required value={productName} onChange={handleProductName} />
              </div>
              <div className="item-picture">
                <div className="form-group">
                  <label htmlFor="item-picture">Image du produit</label>
                  <input onChange={handleProductPicture} type="file" id="item-picture" accept="image/*" required />
                </div>
                <div className="picture-hold">
                  <img id="picture-item" ref={changeItemPictureRef} src={preview} alt="picture-item" />
                </div>
              </div>
            </div>

            <div className="item-features-wrapper">
              <p>Caractéristiques du produit</p>
              <div className="item-features">
                <div className="form-group">
                  <label htmlFor="item-ram">RAM (Mémoire Vive) </label>
                  <input type="text" id="item-ram" value={productRam} onChange={handleProductRam} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-rom">ROM (Stockage Interne)</label>
                  <input type="text" id="item-rom" value={productRom} onChange={handleProductRom} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-screen-type">Type d{"'"}écran</label>
                  <select id="item-screen-type" value={productScreenType} onChange={handleProductScreenType}>
                    <option>Choisir</option>
                    <option value="IPS LCD">IPS LCD</option>
                    <option value="OLED">OLED</option>
                    <option value="AMOLED">AMOLED</option>
                    <option value="Retina IPS LCD">Retina IPS LCD</option>
                    <option value="Liquid Retina IPS LCD">Liquid Retina IPS LCD</option>
                    <option value="Super Retina OLED">Super Retina OLED</option>
                    <option value="Super Retina XDR OLED">Super Retina XDR OLED</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-display-resolution">Résolution d{"'"}affichage</label>
                  <input type="text" id="item-display-resolution" value={productDisplayResolution} onChange={handleProductDisplayResolution} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-main-camera">Caméra Principale</label>
                  <input type="text" id="item-main-camera" value={productMainCamera} onChange={handleProductMainCamera} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-front-camera">Caméra Frontale (Selfie)</label>
                  <input type="text" id="item-front-camera" value={productFrontCamera} onChange={handleProductFrontCamera} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-sim-card">Prend Deux SIM</label>
                  <select id="item-sim-card" value={productDualSim} onChange={handleProductDualSim}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-esim">Prend une e-SIM</label>
                  <select id="item-esim" value={productEsim} onChange={handleProductEsim}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-card-slot">Prend une Carte Mémoire</label>
                  <select id="item-card-slot" value={productMermorySlot} onChange={handleProductMermorySlot}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-usb-type">Type USB</label>
                  <select id="item-usb-type" value={productUsbType} onChange={handleProductUsbType}>
                    <option>Choisir</option>
                    <option value="microUSB">microUSB</option>
                    <option value="Type-C">USB Type-C</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-otg">OTG (Partage de fichiers avec un PC) </label>
                  <select id="item-otg" value={productOTG} onChange={handleProductOTG}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-battery">Battérie (mAh) </label>
                  <input type="text" id="item-battery" value={productBattery} onChange={handleProductBattery} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-wired-charger">Chargeur Filaire</label>
                  <input type="text" id="item-wired-charger" value={productWiredCharger} onChange={handleProductWiredCharger} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-wireless-charger">Chargeur Sans Fil</label>
                  <input type="text" id="item-wireless-charger" value={productWirelessCharger} onChange={handleProductWirelessCharger} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-fingerprint">Empreinte Digitale</label>
                  <select id="item-fingerprint" value={productFingerPrint} onChange={handleProductFingerPrint}>
                    <option>Choisir</option>
                    <option value="Montée à l'arrière">Montée à l{"'"}arrière</option>
                    <option value="Montée latéralement">Montée latéralement</option>
                    <option value="Sous l'écran">Sous l{"'"}écran</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-jack-port">Prise Jack de 3.5 mm</label>
                  <select id="item-jack-port" value={productPortJack} onChange={handleProductPortJack}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-loudspeakers">Haut-Parleurs</label>
                  <select id="item-loudspeakers" value={productLoudSpeakers} onChange={handleProductLoudSpeakers}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-dual-speakers">Locuteurs à deux canaux</label>
                  <select id="item-dual-speakers" value={productDualSpeakers} onChange={handleProductDualSpeakers}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-stereo-speakers">Locuteurs Stéréo</label>
                  <select id="item-stereo-speakers" value={productStereoSpeakers} onChange={handleProductStereoSpeakers}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
              </div>
              <hr />

              <div className="other-features">
                <div className="items-range">
                  <div className="form-group">
                    <p>Gamme du Produit</p>
                    <select id="item-range" value={productRange} onChange={handleProductRange} required>
                      <option>Choisir</option>
                      <option value="Entrée de Gamme">Entrée de Gamme</option>
                      <option value="Milieu de Gamme">Milieu de Gamme</option>
                      <option value="Haut de Gamme">Haut de Gamme</option>
                    </select>
                  </div>
                </div>
                <div className="Item-available-since">
                  <div className="form-group">
                    <label htmlFor="item-available-since">Année de Sortie</label>
                    <input type="text" id="item-available-since" value={productAvailableDate} onChange={handleProductAvailableDate} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="item-stock">État de Stock</label>
                  <select id="item-stock" value={productStock} onChange={handleProductStock}>
                    <option>Choisir</option>
                    <option value="En Stock">En Stock</option>
                    <option value="En Rupture">En Rupture</option>
                  </select>
                </div>
                <div className="Item-price">
                  <div className="form-group">
                    <label htmlFor="item-price">Prix du produit</label>
                    <input type="text" id="item-price" value={productPrice} onChange={handleProductPrice} required />
                  </div>
                </div>
              </div>
              <div className="submit-btn-holder">
                <button onClick={ModifyProduct} type="submit" style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.secondaryColor }}>{submiText ? "Modifier" : "Modification en cours..."}</button>
              </div>
            </div>
          </form>
                  </div>
                </section>

    </>
  )
}