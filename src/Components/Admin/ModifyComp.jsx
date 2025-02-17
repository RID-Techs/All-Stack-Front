
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
export function ModifyComputer() {
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

  const [productName, setProductname] = useState(Data.ComputerName);
  const handleProductName = (e) => {
    setProductname(e.target.value.trim());
  }
  const [productPicture, setProductPicture] = useState(null);
  const [preview, setPreview] = useState(Data.ComputerPicture);
  const handleProductPicture = (event) => {
    const file = event.target.files[0];
    const NewImage = URL.createObjectURL(file);
    setPreview(NewImage);
    setProductPicture(file);
    if (changeItemPictureRef.current) {
      changeItemPictureRef.current.src = NewImage;
    }
  }

  const [productRam, setProductRam] = useState(Data.ComputerRam);
  const handleProductRam = (e) => {
    setProductRam(e.target.value.trim());
  }
  const [productRom, setProductRom] = useState(Data.ComputerRom);
  const handleProductRom = (e) => {
    setProductRom(e.target.value.trim());
  }
  const [productDiskType, setProductDiskType] = useState(Data.ComputerDiskType);
  const handleProductDiskType = (e) => {
    setProductDiskType(e.target.value.trim());
  }
  const [productDisplayResolution, setProductDisplayResolution] = useState(Data.ComputerScreenInch);
  const handleProductDisplayResolution = (e) => {
    setProductDisplayResolution(e.target.value.trim());
  }
  const [productProcessor, setProductProcessor] = useState(Data.ComputerProcessor);
  const handleProductProcessor = (e) => {
    setProductProcessor(parseInt(e.target.value.trim()));
  }
  const [productProcessorFrequency, setProductProcessorFrequency] = useState(Data.ComputerProcessorFrequency);
  const handleProductProcessorFrequency = (e) => {
    setProductProcessorFrequency(parseInt(e.target.value.trim()));
  }
  const [productHeart, setProductHeart] = useState(Data.ComputerHeart);
  const handleProductHeart = (e) => {
    setProductHeart(e.target.value.trim());
  }
  const [productIntegratedGpu, setProductIntegratedGpu] = useState(Data.ComputerIntegratedGpu);
  const handleProductIntegratedGpu = (e) => {
    setProductIntegratedGpu(e.target.value.trim());
  }
  const [productDedicatedGpu, setProductDedicatedGpu] = useState(Data.ComputerDedicatedGpu);
  const handleProductDedicatedGpu = (e) => {
    setProductDedicatedGpu(e.target.value.trim());
  }
  const [productKeyboard, setProductKeyboard] = useState(Data.ComputerKeyboard);
  const handleProductKeyboard = (e) => {
    setProductKeyboard(e.target.value.trim());
  }
  const [productLightKeyboard, setProductLightKeyboard] = useState(Data.ComputerKeyboardLight);
  const handleProductLightKeyboard = (e) => {
    setProductLightKeyboard(e.target.value.trim());
  }
  const [productSimCard, setProductSimCard] = useState(Data.ComputerSimCard);
  const handleProductSimCard = (e) => {
    setProductSimCard(e.target.value.trim());
  }
  const [productOS, setProductOS] = useState(Data.ComputerOs);
  const handleProductOS = (e) => {
    setProductOS(parseInt(e.target.value.trim()));
  }
  const [productBattery, setProductBattery] = useState(Data.ComputerBattery);
  const handleProductBattery = (e) => {
    setProductBattery(parseInt(e.target.value.trim()));
  }
  const [productTouchScreen, setProductTouchScreen] = useState(Data.ComputerTouchScreen);
  const handleProductTouchScreen = (e) => {
    setProductTouchScreen(e.target.value.trim());
  }
  const [productRJ45, setProductRJ45] = useState(Data.ComputerRJ45);
  const handleProductRJ45 = (e) => {
    setProductRJ45(e.target.value.trim());
  }
  const [productUSBNumber, setProductUSBNumber] = useState(Data.ComputerUSBNumber);
  const handleProductUSBNumber = (e) => {
    setProductUSBNumber(parseInt(e.target.value.trim()));
  }
  const [productHDMI, setProductHDMI] = useState(Data.ComputerHDMI);
  const handleProductHDMI = (e) => {
    setProductHDMI(e.target.value.trim());
  }
  const [productVGA, setProductVGA] = useState(Data.ComputerVGA);
  const handleProductVGA = (e) => {
    setProductVGA(e.target.value.trim());
  }
  const [productType_C, setProductType_C] = useState(Data.ComputerType_C);
  const handleProductType_C = (e) => {
    setProductType_C(e.target.value.trim());
  }
  const [productPortJack, setProductPortJack] = useState(Data.ComputerPortJack);
  const handleProductPortJack = (e) => {
    setProductPortJack(e.target.value.trim());
  }
  const [productDesignedFor, setProductDesignedFor] = useState(Data.ComputerDesignedFor);
  const handleProductDesignedFor = (e) => {
    setProductDesignedFor(parseInt(e.target.value.trim()));
  }
  const [productType, setProductType] = useState(Data.ComputerType);
  const handleProductType = (e) => {
    setProductType(e.target.value.trim());
  }
  const [productStock, setProductStock] = useState(Data.ComputerStock);
  const handleProductStock = (e) => {
    setProductStock(e.target.value.trim());
  }
  const [productAvailableYear, setProductAvailableYear] = useState(Data.ComputerAvailableYear);
  const handleProductAvailableYear = (e) => {
    setProductAvailableYear(parseInt(e.target.value.trim()));
  }
  const [productPrice, setProductPrice] = useState(Data.ComputerPrice);
  const handleProductPrice = (e) => {
    setProductPrice(e.target.value.trim());
  }

  const UpdateProductPC = (e) => {

    e.preventDefault();

    if (!productName || !productPicture || !productRam || !productRom || !productDiskType || !productDisplayResolution || !productProcessor || !productProcessorFrequency || !productHeart || !productIntegratedGpu || !productDedicatedGpu || !productKeyboard || !productLightKeyboard || !productSimCard || !productOS || !productBattery || !productTouchScreen || !productRJ45 || !productUSBNumber || !productHDMI || !productVGA || !productType_C || !productPortJack || !productDesignedFor || !productType || !productStock || !productAvailableYear || !productPrice) {
      return warnAlert("Veuillez remplir tous les champs obligatoires");
    }

    const formData = new FormData();
    formData.append("ComputerName", productName);
    formData.append("ComputerPicture", productPicture);
    formData.append("ComputerRam", productRam);
    formData.append("ComputerRom", productRom);
    formData.append("ComputerDiskType", productDiskType);
    formData.append("ComputerScreenInch", productDisplayResolution);
    formData.append("ComputerProcessor", productProcessor);
    formData.append("ComputerProcessorFrequency", productProcessorFrequency);
    formData.append("ComputerHeart", productHeart);
    formData.append("ComputerIntegratedGpu", productIntegratedGpu);
    formData.append("ComputerDedicatedGpu", productDedicatedGpu);
    formData.append("ComputerKeyboard", productKeyboard);
    formData.append("ComputerKeyboardLight", productLightKeyboard);
    formData.append("ComputerSimCard", productSimCard);
    formData.append("ComputerOs", productOS);
    formData.append("ComputerBattery", productBattery);
    formData.append("ComputerTouchScreen", productTouchScreen);
    formData.append("ComputerRJ45", productRJ45);
    formData.append("ComputerUSBNumber", productUSBNumber);
    formData.append("ComputerHDMI", productHDMI);
    formData.append("ComputerVGA", productVGA);
    formData.append("ComputerType_C", productType_C);
    formData.append("ComputerPortJack", productPortJack);
    formData.append("ComputerType", productType);
    formData.append("ComputerDesignedFor", productDesignedFor);
    formData.append("ComputerAvailableYear", productAvailableYear);
    formData.append("ComputerStock", productStock);
    formData.append("ComputerPrice", productPrice);

    const AddItemsToDB = async () => {
      setSubmitText(false);
      const GetUrl = import.meta.env.MODE === "production" ? import.meta.env.VITE_Prod_Backend_URL : import.meta.env.VITE_Local_Backend_URL;
      try {
        const url = `${GetUrl}/api/products/updatecomputerbyid/${Data._id}`;
        const SendItem = await fetch(url, {
          method: "PUT",
          credentials: "include",
          body: formData
        })
        const response = await SendItem.json();

        if (SendItem.ok) {
          console.log(response);
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
                <label htmlFor="item-name-computer">Nom du produit</label>
                <input type="text" id="item-name-computer" value={productName} onChange={handleProductName} required />
              </div>
              <div className="item-picture">
                <div className="form-group">
                  <label htmlFor="item-picture-computer">Image du produit</label>
                  <input onChange={handleProductPicture} type="file" id="item-picture-computer" accept="image/*" required />
                </div>
                <div className="picture-holder">
                  <img id="picture-item" ref={changeItemPictureRef} src={preview} alt="picture-item" />
                </div>
              </div>
            </div>

            <div className="item-features-wrapper">
              <p>Caractéristiques du produit</p>
              <div className="item-features">
                <div className="form-group">
                  <label htmlFor="item-ram-computer">RAM (Mémoire Vive) </label>
                  <input type="text" id="item-ram-computer" value={productRam} onChange={handleProductRam} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-rom-computer">ROM (Stockage Interne)</label>
                  <input type="text" id="item-rom-computer" value={productRom} onChange={handleProductRom} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-disk-type">Type du disque</label>
                  <select id="item-disk-type" value={productDiskType} onChange={handleProductDiskType}>
                    <option>Choisir</option>
                    <option value="SSD">SSD</option>
                    <option value="HDD">HDD</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-screen-inch">Écran</label>
                  <input type="text" id="item-screen-inch" value={productDisplayResolution} onChange={handleProductDisplayResolution} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-processor">Processeur</label>
                  <input type="text" id="item-processor" value={productProcessor} onChange={handleProductProcessor} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-processor-frequency">Féquence du Processeur</label>
                  <input type="text" id="item-processor-frequency" value={productProcessorFrequency} onChange={handleProductProcessorFrequency} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-heart">Nombre de Cœur</label>
                  <input type="text" id="item-heart" value={productHeart} onChange={handleProductHeart} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-integrated-gpu">Graphiques intégrés</label>
                  <select id="item-integrated-gpu" value={productIntegratedGpu} onChange={handleProductIntegratedGpu}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-dedicated-gpu">Carte graphique dédiée</label>
                  <select id="item-dedicated-gpu" value={productDedicatedGpu} onChange={handleProductDedicatedGpu}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-keyboard">Clavier</label>
                  <select id="item-keyboard" value={productKeyboard} onChange={handleProductKeyboard}>
                    <option>Choisir</option>
                    <option value="Azerty">Azerty</option>
                    <option value="Qwerty">Qwerty</option>
                    <option value="Qwertz">Qwertz</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-keyboard-light">Clavier Rétro-éclairé</label>
                  <select id="item-keyboard-light" value={productLightKeyboard} onChange={handleProductLightKeyboard}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-card-sim-computer">Prend une Carte SIM</label>
                  <select id="item-card-sim-computer" value={productSimCard} onChange={handleProductSimCard}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-os">Système d{"'"}exploitation</label>
                  <select id="item-os" value={productOS} onChange={handleProductOS}>
                    <option>Choisir</option>
                    <option value="Windows 10">Windows 10</option>
                    <option value="Windows 11">Windows 11</option>
                    <option value="MacOS">MacOS</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-battery-computer">Autonomie de la Battérie</label>
                  <input type="text" id="item-battery-computer" value={productBattery} onChange={handleProductBattery} required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-touchscreen">Écran tactile</label>
                  <select id="item-touchscreen" value={productTouchScreen} onChange={handleProductTouchScreen}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="item-USBnumber-computer">Nombre de Port USB</label>
                  <input type="text" id="item-USBnumber-computer" value={productUSBNumber} onChange={handleProductUSBNumber} />
                </div>
                <div className="form-group">
                  <label htmlFor="item-ethernet">Port Ethernet RJ45 (Réseau)</label>
                  <select id="item-ethernet" value={productRJ45} onChange={handleProductRJ45}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-hdmi">Port HDMI</label>
                  <select id="item-hdmi" value={productHDMI} onChange={handleProductHDMI}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-vga">Port VGA</label>
                  <select id="item-vga" value={productVGA} onChange={handleProductVGA}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-type-c">Port Type-C</label>
                  <select id="item-type-c" value={productType_C} onChange={handleProductType_C}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="item-computer-jack">Port Jack</label>
                  <select id="item-computer-jack" value={productPortJack} onChange={handleProductPortJack}>
                    <option>Choisir</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>


              </div>
              <hr />
              <div className="other-features">
                <div className="Item-available-since">
                  <div className="form-group">
                    <label htmlFor="item-computer-type">Type d{"'"} ordinateur</label>
                    <select id="item-computer-type" value={productType} onChange={handleProductType}>
                      <option>Choisir</option>
                      <option value="laptop">Ordinateur Portable</option>
                      <option value="desktop">Ordinateur de bureau</option>
                    </select>
                  </div>
                </div>
                <div className="Item-available-since">
                  <div className="form-group">
                    <label htmlFor="item-designed-for">Domaine d{"'"} utilisation</label>
                    <select id="item-designed-for" value={productDesignedFor} onChange={handleProductDesignedFor}>
                      <option>Choisir</option>
                      <option value="graphisme">Graphisme</option>
                      <option value="programmation">Programmation</option>
                      <option value="gaming">Gaming</option>
                    </select>
                  </div>
                </div>
                <div className="Item-available-since">
                  <div className="form-group">
                    <label htmlFor="item-available-year">Année de Sortie</label>
                    <input type="text" id="item-available-year" value={productAvailableYear} onChange={handleProductAvailableYear} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="item-computer-stock">État de Stock</label>
                  <select id="item-computer-stock" value={productStock} onChange={handleProductStock}>
                    <option>Choisir</option>
                    <option value="En Stock">En Stock</option>
                    <option value="En Rupture">En Rupture</option>
                  </select>
                </div>
                <div className="Item-price">
                  <div className="form-group">
                    <label htmlFor="item-price-computer">Prix du produit</label>
                    <input type="text" id="item-price-computer" value={productPrice} onChange={handleProductPrice} />
                  </div>
                </div>
              </div>
              <div className="submit-btn-holder">
                <button onClick={UpdateProductPC} type="submit" style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.secondaryColor }}>{submiText ? "Modifier" : "Modification en cours..."}</button>
              </div>
            </div>
          </form>
        </div>
      </section>

    </>
  )
}