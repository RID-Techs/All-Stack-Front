import { toast } from "react-toastify"
import "./admin.css";
import logo_light from "/logo_light.png"
import logo_dark from "/logo_dark.png"
import Gadgets_light from "/Gadgets_light.png"
import Gadgets_dark from "/Gadgets_dark.png"
import mobile_menu_light from "/mobile_menu_light.png"
import mobile_menu_dark from "/mobile_menu_dark.png"

import haut_parleur from "/haut_parleur.png"
import haut_parleur_light from "/haut_parleur_light.png"
import dual_Sim from "/dual_Sim.png"
import dual_Sim_light from "/dual_Sim_light.png"
import dual_speakers from "/dual_speakers.png"
import dual_speakers_light from "/dual_speakers_light.png"
import Esim from "/Esim.png"
import Esim_light from "/Esim_light.png"
import fingerprint from "/fingerprint.png"
import fingerprint_light from "/fingerprint_light.png"
import jack from "/jack.png"
import jack_light from "/jack_light.png"
import microSD from "/microSD.png"
import microSD_light from "/microSD_light.png"
import otg from "/otg.png"
import otg_light from "/otg_light.png"
import resolution from "/resolution.png"
import resolution_light from "/resolution_light.png"
import stereo from "/stereo.png"
import stereo_light from "/stereo_light.png"
import usbType from "/usbType.png"
import usbType_light from "/usbType_light.png"

import Ethernet from "/Ethernet.png"
import Ethernet_light from "/Ethernet_light.png"
import graph from "/graph.png"
import graph_light from "/graph_light.png"
import freq from "/freq.png"
import freq_light from "/freq_light.png"
import hard_drive from "/hard_drive.png"
import hard_drive_light from "/hard_drive_light.png"
import hdmi from "/hdmi.png"
import hdmi_light from "/hdmi_light.png"
import keyboard from "/keyboard.png"
import keyboard_light from "/keyboard_light.png"
import moniteur from "/moniteur.png"
import moniteur_light from "/moniteur_light.png"
import os from "/os.png"
import os_light from "/moniteur_light.png"
import touchscreen from "/touchscreen.png"
import touchscreen_light from "/touchscreen_light.png"
import type_C_port from "/type_C_port.png"
import type_C_port_light from "/type_C_port_light.png"
import usbB from "/usbB.png"
import usbB_light from "/usbB_light.png"
import vga from "/vga.png"
import vga_light from "/vga_light.png"

import { useEffect, useRef, useState } from "react"
import { useSearchParams, useLoaderData, useNavigate} from "react-router-dom"
import { FilteredComputers } from "../ComputerItems/FilteredComputers";
import { FilteredPhoneComputers } from "../ComputerItems/FilteredPhones";

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
export function Admin() {
    const { smartphones, computers } = useLoaderData();
    const Navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const getRl = sessionStorage.getItem("rl");
    const checkRl = getRl === "superadmin";

    const [isLight, setIsLight] = useState(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        return storedTheme === "light";
    });

    const OpenOtherFeatures = (e) => {
        const getParent = e.currentTarget
        const parentFound = getParent.closest(".product-holder");
        const openingFeatures = parentFound.querySelector(".other-features-content");
        const ContactField = parentFound.querySelector(".contact-field");
        getParent.style.filter = "blur(12px)";
        ContactField.style.filter = "blur(12px)";
        openingFeatures.style.display = "block";
    }
    const CloseOtherFeatures = (e) => {
        const getParent = e.currentTarget
        const parentFound = getParent.closest(".product-holder");
        const openingFeatures = parentFound.querySelector(".other-features-content");
        const BtnFeatures = parentFound.querySelector(".features-btn-holder");
        const ContactField = parentFound.querySelector(".contact-field");
        BtnFeatures.style.filter = "blur(0px)";
        ContactField.style.filter = "blur(0px)";
        openingFeatures.style.display = "";
    }
    const OpenOtherFeaturesMobile = (e) => {
        const getParent = e.currentTarget
        const parentFound = getParent.closest(".product-holder-mobile");
        const openingFeatures = parentFound.querySelector(".other-features-content");
        const ContactField = parentFound.querySelector(".contact-field");
        getParent.style.filter = "blur(12px)";
        ContactField.style.filter = "blur(12px)";
        openingFeatures.style.display = "block";
    }
    const CloseOtherFeaturesMobile = (e) => {
        const getParent = e.currentTarget
        const parentFound = getParent.closest(".product-holder-mobile");
        const openingFeatures = parentFound.querySelector(".other-features-content");
        const BtnFeatures = parentFound.querySelector(".features-btn-holder");
        const ContactField = parentFound.querySelector(".contact-field");
        BtnFeatures.style.filter = "blur(0px)";
        ContactField.style.filter = "blur(0px)";
        openingFeatures.style.display = "";
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

    const [submiText, setSubmitText] = useState(true);

    const warnAlert = (msg) => {
        toast.warn(msg);
    }
    const SuccessAlert = (msg) => {
        toast.success(msg);
    }

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
    const [openAddItemSection, setOpenAddItemSection] = useState(false);
    const [CloseBtn, setCloseBtn] = useState(false);
    const handleItemsToAddSection = () => {
        setOpenAddItemSection(!openAddItemSection);
        setCloseBtn(true);
    }
    const GetUrl = import.meta.env.MODE === "production" ? import.meta.env.VITE_Prod_Backend_URL : import.meta.env.VITE_Local_Backend_URL;
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

    const [FilterPhoneComponent, setFilterPhoneComponent] = useState(false);
    const [FilterComputerComponent, setFilterComputerComponent] = useState(false);
    const [PhoneProduct, setPhoneProduct] = useState(false);
    const [ComputerProduct, setComputerProduct] = useState(false);
    
    const handlePhoneProduct = () => {
        setPhoneProduct(true);
        setComputerProduct(false);
    }
    const handleComputerProduct = () => {
        setComputerProduct(true);
        setPhoneProduct(false);
    }

    const handleCloseBtn = () => {
        setOpenAddItemSection(false);
        setCloseBtn(false);
        setComputerProduct(false);
        setPhoneProduct(false);
    }

    const changeItemPictureRef = useRef(null);

    const chooseItemPicture = (event) => {
        const file = event.target.files[0];
        const NewImage = URL.createObjectURL(file);
        changeItemPictureRef.current.style.display = "block";
        changeItemPictureRef.current.src = NewImage;
    }

    const AddNewProductPC = (e) => {
        e.preventDefault();
        const itemNameComputer = document.querySelector("#item-name-computer");
        const itemPictureComputer = document.querySelector("#item-picture-computer");
        const itemRamComputer = document.querySelector("#item-ram-computer");
        const itemRomComputer = document.querySelector("#item-rom-computer");
        const itemDiskType = document.querySelector("#item-disk-type");
        const itemScreenInch = document.querySelector("#item-screen-inch");
        const itemProcessor = document.querySelector("#item-processor");
        const itemProcessorFrequency = document.querySelector("#item-processor-frequency");
        const itemHeart = document.querySelector("#item-heart");
        const itemIntegratedGpu = document.querySelector("#item-integrated-gpu");
        const itemDedicatedGpu = document.querySelector("#item-dedicated-gpu");
        const itemKeyboard = document.querySelector("#item-keyboard");
        const itemKeyboardLight = document.querySelector("#item-keyboard-light");
        const itemCardSimComputer = document.querySelector("#item-card-sim-computer");
        const itemOs = document.querySelector("#item-os");
        const itemBatteryComputer = document.querySelector("#item-battery-computer");
        const itemTouchScreen = document.querySelector("#item-touchscreen");
        const itemUsbNumber = document.querySelector("#item-USBnumber-computer");
        const itemEthernet = document.querySelector("#item-ethernet");
        const itemHDMI = document.querySelector("#item-hdmi");
        const itemVGA = document.querySelector("#item-vga");
        const itemTypeC = document.querySelector("#item-type-c");
        const itemComputerJack = document.querySelector("#item-computer-jack");
        const itemComputerType = document.querySelector("#item-computer-type");
        const itemDesignedFor = document.querySelector("#item-designed-for");
        const itemAvailableYear = document.querySelector("#item-available-year");
        const itemComputerStock = document.querySelector("#item-computer-stock");
        const itemPriceComputer = document.querySelector("#item-price-computer");

        if (itemNameComputer.value.trim() === "" || !itemPictureComputer.files[0] || itemRamComputer.value.trim() === "" || itemRomComputer.value.trim() === "" || itemDiskType.value.trim() === "" || itemScreenInch.value.trim() === "" || itemProcessor.value.trim() === "" || itemProcessorFrequency.value.trim() === "" || itemHeart.value.trim() === "" || itemIntegratedGpu.value.trim() === "" || itemDedicatedGpu.value.trim() === "" || itemKeyboard.value.trim() === "" || itemCardSimComputer.value.trim() === "" || itemOs.value.trim() === "" || itemBatteryComputer.value.trim() === "" || itemTouchScreen.value.trim() === "" || itemUsbNumber.value.trim() === "" || itemEthernet.value.trim() === "" || itemHDMI.value.trim() === "" || itemVGA.value.trim() === "" || itemTypeC.value.trim() === "" || itemComputerJack.value.trim() === "" || itemComputerType.value.trim() === "" || itemDesignedFor.value.trim() === "" || itemAvailableYear.value.trim() === "" || itemComputerStock.value.trim() === "" || itemPriceComputer.value.trim() === "") {
            return warnAlert("Veuillez remplir tous les champs !");
        }

        const formData = new FormData();
        formData.append("ComputerName", itemNameComputer.value.trim());
        formData.append("ComputerPicture", itemPictureComputer.files[0]);
        formData.append("ComputerRam", itemRamComputer.value.trim());
        formData.append("ComputerRom", itemRomComputer.value.trim());
        formData.append("ComputerDiskType", itemDiskType.value.trim());
        formData.append("ComputerScreenInch", itemScreenInch.value.trim());
        formData.append("ComputerProcessor", itemProcessor.value.trim());
        formData.append("ComputerProcessorFrequency", itemProcessorFrequency.value.trim());
        formData.append("ComputerHeart", itemHeart.value.trim());
        formData.append("ComputerIntegratedGpu", itemIntegratedGpu.value.trim());
        formData.append("ComputerDedicatedGpu", itemDedicatedGpu.value.trim());
        formData.append("ComputerKeyboard", itemKeyboard.value.trim());
        formData.append("ComputerKeyboardLight", itemKeyboardLight.value.trim());
        formData.append("ComputerSimCard", itemCardSimComputer.value.trim());
        formData.append("ComputerOs", itemOs.value.trim());
        formData.append("ComputerBattery", itemBatteryComputer.value.trim());
        formData.append("ComputerTouchScreen", itemTouchScreen.value.trim());
        formData.append("ComputerUSBNumber", parseInt(itemUsbNumber.value.trim()));
        formData.append("ComputerRJ45", itemEthernet.value.trim());
        formData.append("ComputerHDMI", itemHDMI.value.trim());
        formData.append("ComputerVGA", itemVGA.value.trim());
        formData.append("ComputerType_C", itemTypeC.value.trim());
        formData.append("ComputerPortJack", itemComputerJack.value.trim());
        formData.append("ComputerType", itemComputerType.value.trim());
        formData.append("ComputerDesignedFor", itemDesignedFor.value.trim());
        formData.append("ComputerAvailableYear", itemAvailableYear.value.trim());
        formData.append("ComputerStock", itemComputerStock.value.trim());
        formData.append("ComputerPrice", itemPriceComputer.value.trim());

        const AddPcItemsToDB = async () => {
            setSubmitText(false);
            try {
                const url = `${GetUrl}/api/products/additem/computer`
                const SendItem = await fetch(url, {
                    method: "POST",
                    credentials: "include",
                    body: formData
                })
                const response = await SendItem.json();
                console.log(response);

                if (SendItem.ok) {
                    SuccessAlert("New Item added successfully !");
                    setSubmitText(true);
                }
                setSubmitText(true);
            } catch (error) {
                console.log("Error while adding a new item:", error);

            }
        }
        AddPcItemsToDB();
    }


    
    const AddNewProduct = (e) => {
        e.preventDefault();
        const itemName = document.querySelector("#item-name");
        const itemPicture = document.querySelector("#item-picture");
        const itemRam = document.querySelector("#item-ram");
        const itemRom = document.querySelector("#item-rom");
        const itemScreenType = document.querySelector("#item-screen-type");
        const itemDisplayResolution = document.querySelector("#item-display-resolution");
        const itemMainCamera = document.querySelector("#item-main-camera");
        const itemFrontCamera = document.querySelector("#item-front-camera");
        const itemSimCard = document.querySelector("#item-sim-card");
        const itemEsim = document.querySelector("#item-esim");
        const itemCardSlot = document.querySelector("#item-card-slot");
        const itemUsbType = document.querySelector("#item-usb-type");
        const itemOtg = document.querySelector("#item-otg");
        const itemBattery = document.querySelector("#item-battery");
        const itemWiredCharger = document.querySelector("#item-wired-charger");
        const itemWirelessCharger = document.querySelector("#item-wireless-charger");
        const itemFingerPrint = document.querySelector("#item-fingerprint");
        const itemJackPort = document.querySelector("#item-jack-port");
        const itemLoudSpeakers = document.querySelector("#item-loudspeakers");
        const itemDualSpeakers = document.querySelector("#item-dual-speakers");
        const itemStereoSpeakers = document.querySelector("#item-stereo-speakers");
        const itemRange = document.querySelector("#item-range");
        const itemAvalaibleSince = document.querySelector("#item-available-since");
        const itemStock = document.querySelector("#item-stock");
        const itemPrice = document.querySelector("#item-price");

        if (itemName.value.trim() === "" || !itemPicture.files[0] || itemRam.value.trim() === "" || itemRom.value.trim() === "" || itemScreenType.value.trim() === "" || itemDisplayResolution.value.trim() === "" || itemMainCamera.value.trim() === "" || itemFrontCamera.value.trim() === "" || itemSimCard.value.trim() === "" || itemEsim.value.trim() === "" || itemCardSlot.value.trim() === "" || itemUsbType.value.trim() === "" || itemOtg.value.trim() === "" || itemWiredCharger.value.trim() === "" || itemWirelessCharger.value.trim() === "" || itemFingerPrint.value.trim() === "" || itemJackPort.value.trim() === "" || itemLoudSpeakers.value.trim() === "" || itemDualSpeakers.value.trim() === "" || itemStereoSpeakers.value.trim() === "" || itemRange.value.trim() === "" || itemAvalaibleSince.value.trim() === "" || itemStock.value.trim() === "" || itemPrice.value.trim() === "") {
            return warnAlert("Veuillez remplir tous les champs obligatoires");
        }

        const formData = new FormData();
        formData.append("productName", itemName.value.trim());
        formData.append("productPicture", itemPicture.files[0]);
        formData.append("productRam", itemRam.value.trim());
        formData.append("productRom", itemRom.value.trim());
        formData.append("productScreenType", itemScreenType.value.trim());
        formData.append("productDisplayResolution", itemDisplayResolution.value.trim());
        formData.append("productMainCamera", parseInt(itemMainCamera.value.trim()));
        formData.append("productFrontCamera", parseInt(itemFrontCamera.value.trim()));
        formData.append("productDualSim", itemSimCard.value.trim());
        formData.append("productEsim", itemEsim.value.trim());
        formData.append("productMermorySlot", itemCardSlot.value.trim());
        formData.append("productUsbType", itemUsbType.value.trim());
        formData.append("productOTG", itemOtg.value.trim());
        formData.append("productBattery", parseInt(itemBattery.value.trim()));
        formData.append("productWiredCharger", parseInt(itemWiredCharger.value.trim()));
        formData.append("productWirelessCharger", itemWirelessCharger.value.trim());
        formData.append("productFingerPrint", itemFingerPrint.value.trim());
        formData.append("productPortJack", itemJackPort.value.trim());
        formData.append("productLoudSpeakers", itemLoudSpeakers.value.trim());
        formData.append("productDualSpeakers", itemDualSpeakers.value.trim());
        formData.append("productStereoSpeakers", itemStereoSpeakers.value.trim());
        formData.append("productRange", itemRange.value.trim());
        formData.append("productAvailableDate", parseInt(itemAvalaibleSince.value.trim()));
        formData.append("productStock", itemStock.value.trim());
        formData.append("productPrice", itemPrice.value.trim());

        const AddItemsToDB = async () => {
            setSubmitText(false);
            try {
                const url = `${GetUrl}/api/products/additem`
                const SendItem = await fetch(url, {
                    method: "POST",
                    credentials: "include",
                    body: formData
                })
                const response = await SendItem.json();

                if (SendItem.ok) {
                    console.log(response.msg);
                    SuccessAlert("New Item added successfully !");
                    setSubmitText(true);
                }
                setSubmitText(true);
            } catch (error) {
                console.log("Error while adding a new item:", error);

            }
        }
        AddItemsToDB();
    }

    const [getFilteredData, setGetFilteredData] = useState([]);
    
    const [getFilteredPhoneData, setGetFilteredPhoneData] = useState([]);

    const [showDefaultFilter, setShowDefaultFilter] = useState(true);

    const [onlyPhone, setOnlyPhone] = useState(true);
    const [onlyDeskTop, setOnlyDeskTop] = useState(false);

    const handleOnlyPhone = (e) => {
        setSearchParams("");
        setOnlyPhone(e.target.checked);
        setOnlyDeskTop(false);
        setShowDefaultFilter(true);
        setFilterPhoneComponent(false);
        setFilterComputerComponent(false);
        setHighRange(false);
        setEntryRange(false);
        setMiddleRange(false);
    }
    const handleOnlyDeskTop = (e) => {
        setSearchParams("");
        setOnlyDeskTop(e.target.checked);
        setOnlyPhone(false);
        setShowDefaultFilter(false);
        setFilterPhoneComponent(false);
        setFilterComputerComponent(false);
        setLaptop(false);
        setDesktop(false);
        setGraphisme(false);
        setProgramming(false);
        setGaming(false);
    }

    const [entryRange, setEntryRange] = useState(false);
    const [middleRange, setMiddleRange] = useState(false);
    const [highRange, setHighRange] = useState(false);

    const handleEntryRange = (e) => {
        setOnlyPhone(false);
        setOnlyDeskTop(false);
        setSearchParams({ phoneRange: "Entrée de Gamme" });
        setFilterPhoneComponent(true);
        setFilterComputerComponent(false);
        setEntryRange(e.target.checked);
        setMiddleRange(false);
        setHighRange(false);
    }
    const handleMiddleRange = (e) => {
        setOnlyPhone(false);
        setOnlyDeskTop(false);
        setSearchParams({ phoneRange: "Milieu de Gamme" });
        setFilterPhoneComponent(true);
        setFilterComputerComponent(false);
        setMiddleRange(e.target.checked);
        setEntryRange(false);
        setHighRange(false);
    }
    const handleHighRange = (e) => {
        setOnlyPhone(false);
        setOnlyDeskTop(false);
        setSearchParams({ phoneRange  : "Haut de Gamme"});
        setFilterPhoneComponent(true);
        setFilterComputerComponent(false);
        setHighRange(e.target.checked);
        setEntryRange(false);
        setMiddleRange(false);
    }

    const [laptop, setLaptop] = useState(false);
    const [desktop, setDesktop] = useState(false);
    const [graphisme, setGraphisme] = useState(false);
    const [programming, setProgramming] = useState(false);
    const [gaming, setGaming] = useState(false);

    const handleLaptop = (e) => {
        setOnlyPhone(false);
        setOnlyDeskTop(false);
        setFilterComputerComponent(true);
        setFilterPhoneComponent(false);
        setSearchParams({ computerField: "laptop" })
        setLaptop(e.target.checked);
        setDesktop(false);
        setGraphisme(false);
        setProgramming(false);
        setGaming(false);
    }
    const handleDesktop = (e) => {
        setOnlyPhone(false);
        setOnlyDeskTop(false);
        setFilterComputerComponent(true);
        setFilterPhoneComponent(false);
        setSearchParams({computerField: "desktop"})
        setDesktop(e.target.checked);
        setLaptop(false);
        setGraphisme(false);
        setProgramming(false);
        setGaming(false);
    }
    const handleGraphisme= (e) => {
        setOnlyPhone(false);
        setOnlyDeskTop(false);
        setFilterComputerComponent(true);
        setFilterPhoneComponent(false);
        setSearchParams({ computerField: "graphisme" })
        setGraphisme(e.target.checked);
        setLaptop(false);
        setDesktop(false);
        setProgramming(false);
        setGaming(false);
    }
    const handleProgramming= (e) => {
        setOnlyPhone(false);
        setOnlyDeskTop(false);
        setFilterComputerComponent(true);
        setFilterPhoneComponent(false);
        setSearchParams({ computerField: "programmation" })
        setProgramming(e.target.checked);
        setLaptop(false);
        setDesktop(false);
        setGraphisme(false);
        setGaming(false);
    }
    const handleGaming = (e) => {
        setOnlyPhone(false);
        setOnlyDeskTop(false);
        setFilterPhoneComponent(false);
        setFilterComputerComponent(true);
        setSearchParams({ computerField: "gaming" })
        setGaming(e.target.checked);
        setLaptop(false);
        setDesktop(false);
        setGraphisme(false);
        setProgramming(false);
    }

    useEffect(() => {
        const getQuery = searchParams.get("computerField");
        if (getQuery === null) {
            return;
        } else {
            const DisplayItemsByQuery = async () => {
                if (getQuery === "programmation") {
                    setProgramming(true);
                } else if (getQuery === "graphisme") {
                    setGraphisme(true);
                } else if (getQuery === "gaming") {
                    setGaming(true);
                } else if (getQuery === "laptop") {
                    setLaptop(true);
                } else if (getQuery === "desktop") {
                    setDesktop(true);
                }
                try {
                    const url = `${GetUrl}/api/products/getqueriedcomputer?computerField=${getQuery}`
                    const sendRequest = await fetch(url);
                    const response = await sendRequest.json();
                    const { FoundByQuery, msg } = response;
                    if(msg) console.log(msg);
                    if (FoundByQuery) {
                        setFilterPhoneComponent(false);
                        setFilterComputerComponent(true);
                        setOnlyPhone(false);
                        setOnlyDeskTop(false);
                        setShowDefaultFilter(false);
                    }
                    setGetFilteredData(FoundByQuery);
                } catch (error) {
                    console.log("error fetching by query :", error);
                }
            }
            DisplayItemsByQuery();
        }
    }, [searchParams, GetUrl]);

    useEffect(() => {
        const getQuery = searchParams.get("phoneRange");
        if (getQuery === null) {
            return;
        } else {
            const DisplayItemsByQuery = async () => {
                if (getQuery === "Haut de Gamme") {
                    setEntryRange(false);
                    setMiddleRange(false);
                    setHighRange(true);
                } else if (getQuery === "Milieu de Gamme") {
                    setEntryRange(false);
                    setMiddleRange(true);
                    setHighRange(false);
                } else if (getQuery === "Entée de gamme") {
                    setEntryRange(true);
                    setMiddleRange(false);
                    setHighRange(true);
                }
                try {
                    const url = `${GetUrl}/api/products/getqueriedphones?phoneRange=${getQuery}`
                    const sendRequest = await fetch(url);
                    const response = await sendRequest.json();
                    const { FoundByQuery, msg } = response;
                    if (msg) console.log(msg);
                    if (FoundByQuery) {
                        setFilterPhoneComponent(true);
                        setFilterComputerComponent(false);
                        setOnlyPhone(false);
                        setOnlyDeskTop(false);
                        setShowDefaultFilter(true);
                    }
                    setGetFilteredPhoneData(FoundByQuery);
                } catch (error) {
                    console.log("error fetching by query :", error);
                }
            }
            DisplayItemsByQuery();
        }
    }, [searchParams, GetUrl]);

    const handleDeleteSection = (e) => {
        const currentTg = e.currentTarget;
        const getParent = currentTg.closest(".product-holder-mobile");
        const Item = getParent.querySelector(".role-btns-holder");
        const ConfirmDeletion = getParent.querySelector(".confirmation-context-holder");
        if (Item){
            Item.style.display = "none";
            ConfirmDeletion.style.display = "block";
        }
    }
    const abortItemDeletion = (e) => {
        const currentTg = e.currentTarget;
        const getParent = currentTg.closest(".product-holder-mobile");
        const Item = getParent.querySelector(".role-btns-holder");
        const ConfirmDeletion = getParent.querySelector(".confirmation-context-holder");
        if (Item) {
            Item.style.display = "block";
            ConfirmDeletion.style.display = "";
        }
    }
    const handleDeleteSectionPC = (e) => {
        const currentTg = e.currentTarget;
        const getParent = currentTg.closest(".product-holder");
        const Item = getParent.querySelector(".role-btns-holder");
        const ConfirmDeletion = getParent.querySelector(".confirmation-context-holder");
        if (Item){
            Item.style.display = "none";
            ConfirmDeletion.style.display = "block";
        }
    }
    const abortItemDeletionPC = (e) => {
        const currentTg = e.currentTarget;
        const getParent = currentTg.closest(".product-holder");
        const Item = getParent.querySelector(".role-btns-holder");
        const ConfirmDeletion = getParent.querySelector(".confirmation-context-holder");
        if (Item) {
            Item.style.display = "block";
            ConfirmDeletion.style.display = "";
        }
    }

     const deleteItem = (e) => {
        e.preventDefault();
        const getAttrId = e.currentTarget.getAttribute("data-id");
        
        const RemovingItem = async () => {
          try {
              const url = `${GetUrl}/api/products/deletephonebyid/${getAttrId}`;
            const SendItem = await fetch(url, {
              method: "DELETE",
              credentials: "include"
            })
            const response = await SendItem.json();
    
            if (SendItem.ok) {
              console.log(response);
                SuccessAlert("Item deleted successfully !");
              setTimeout(() => {
                  Navigate("/admin");
              }, 2000);
            }
          } catch (error) {
            console.log("Error while adding a new item:", error);    
          }
        }
        RemovingItem();
      }

     const deleteItemPC = (e) => {
        e.preventDefault();
        const getAttrId = e.currentTarget.getAttribute("data-id");
        
        const RemovingItemPC = async () => {
          try {
              const url = `${GetUrl}/api/products/deletecomputerbyid/${getAttrId}`;
            const SendItem = await fetch(url, {
              method: "DELETE",
              credentials: "include"
            })
            const response = await SendItem.json();
    
            if (SendItem.ok) {
              console.log(response);
                SuccessAlert("Item deleted successfully !");
              setTimeout(() => {
                  Navigate("/admin");
              }, 2000);
            }
          } catch (error) {
            console.log("Error while adding a new item:", error);  
          }
        }
         RemovingItemPC();
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

            <section className="welcome-message-section">
                <div className="welcome-message">
                    <h1 style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor }} ><span style={{
                        backgroundImage: isLight
                            ? `linear-gradient(to left, ${pickColor.lightTheme.accentColor}, ${pickColor.lightTheme.secondaryColor})`
                            : `linear-gradient(to left, ${pickColor.darkTheme.accentColor}, ${pickColor.darkTheme.secondaryColor})`
                    }} id="all-gadget"><em>All-Gadget</em></span> : Partie Admin</h1>
                    <div className="welcome-message-details">
                        <p style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.contrasteColor }} >Découvrez nos smartphones et ordinateurs portables ou de bureau, disponibles en entrée, milieu et haut de gamme pour répondre à tous vos besoins.</p>
                    </div>
                </div>
            </section>

            <section className="gadget-pictures-section">
                <div className="gadget-pictures">
                    <img src={isLight ? Gadgets_light : Gadgets_dark} alt="Gadgets Picture" />
                </div>
            </section>

            <section className="add-items-section">
                <div className="add-item-btn-wrapper">
                    <button onClick={handleItemsToAddSection} style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.secondaryColor }} id="add-item-btn" type="button"> <span><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        <path d="M14 17h6m-3 -3v6" />
                    </svg></span> <span>Ajouter un produit</span></button> {CloseBtn && (<div className="item-close-btn-holder">
                        <button style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight }} id="item-close-btn" onClick={handleCloseBtn}>
                            <span>Fermer</span>
                            <span id="close-icon" style={{ fontSize: "2rem", fontWeight: "bold" }}>⛌</span>
                        </button>
                    </div>)}
                </div>
                {openAddItemSection && (
                    <div className="items-category">
                        <div className="items-group">
                            <button className="category-btns" style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor, border: "1px solid", borderColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor }} onClick={handlePhoneProduct} type="button">Smartphone</button>

                            <button className="category-btns" style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, border: "1px solid", borderColor: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor }} onClick={handleComputerProduct} type="button">Ordinateur</button>
                        </div>
                    </div>
                )}

                {PhoneProduct && (

                    <div className="items-form">
                        <form encType="multipart/form-data" style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }}>
                            <div className="item-name-and-picture">
                                <div className="form-group">
                                    <label htmlFor="item-name">Nom du produit</label>
                                    <input type="text" id="item-name" required />
                                </div>
                                <div className="item-picture">
                                    <div className="form-group">
                                        <label htmlFor="item-picture">Image du produit</label>
                                        <input onChange={chooseItemPicture} type="file" id="item-picture" accept="image/*" required />
                                    </div>
                                    <div className="picture-holder">
                                        <img id="picture-item" ref={changeItemPictureRef} src="" alt="picture-item" />
                                    </div>
                                </div>
                            </div>

                            <div className="item-features-wrapper">
                                <p>Caractéristiques du produit</p>
                                <div className="item-features">
                                    <div className="form-group">
                                        <label htmlFor="item-ram">RAM (Mémoire Vive) </label>
                                        <input type="text" id="item-ram" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-rom">ROM (Stockage Interne)</label>
                                        <input type="text" id="item-rom" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-screen-type">Type d{"'"}écran</label>
                                        <select id="item-screen-type">
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
                                        <input type="text" id="item-display-resolution" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-main-camera">Caméra Principale</label>
                                        <input type="text" id="item-main-camera" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-front-camera">Caméra Frontale (Selfie)</label>
                                        <input type="text" id="item-front-camera" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-sim-card">Prend Deux SIM</label>
                                        <select id="item-sim-card">
                                            <option>Choisir</option>
                                            <option value="oui">Oui</option>
                                            <option value="non">Non</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-esim">Prend une e-SIM</label>
                                        <select id="item-esim">
                                            <option>Choisir</option>
                                            <option value="oui">Oui</option>
                                            <option value="non">Non</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-card-slot">Prend une Carte Mémoire</label>
                                        <select id="item-card-slot">
                                            <option>Choisir</option>
                                            <option value="oui">Oui</option>
                                            <option value="non">Non</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-usb-type">Type USB</label>
                                        <select id="item-usb-type">
                                            <option>Choisir</option>
                                            <option value="microUSB">microUSB</option>
                                            <option value="Type-C">USB Type-C</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-otg">OTG (Partage de fichiers avec un PC) </label>
                                        <select id="item-otg">
                                            <option>Choisir</option>
                                            <option value="oui">Oui</option>
                                            <option value="non">Non</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-battery">Battérie (mAh) </label>
                                        <input type="text" id="item-battery" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-wired-charger">Chargeur Filaire</label>
                                        <input type="text" id="item-wired-charger" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-wireless-charger">Chargeur Sans Fil</label>
                                        <input type="text" id="item-wireless-charger" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-fingerprint">Empreinte Digitale</label>
                                        <select id="item-fingerprint">
                                            <option>Choisir</option>
                                            <option value="Montée à l'arrière">Montée à l{"'"}arrière</option>
                                            <option value="Montée latéralement">Montée latéralement</option>
                                            <option value="Sous l'écran">Sous l{"'"}écran</option>
                                            <option value="non">Non</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-jack-port">Prise Jack de 3.5 mm</label>
                                        <select id="item-jack-port">
                                            <option>Choisir</option>
                                            <option value="oui">Oui</option>
                                            <option value="non">Non</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-loudspeakers">Haut-Parleurs</label>
                                        <select id="item-loudspeakers">
                                            <option>Choisir</option>
                                            <option value="oui">Oui</option>
                                            <option value="non">Non</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-dual-speakers">Locuteurs à deux canaux</label>
                                        <select id="item-dual-speakers">
                                            <option>Choisir</option>
                                            <option value="oui">Oui</option>
                                            <option value="non">Non</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-stereo-speakers">Locuteurs Stéréo</label>
                                        <select id="item-stereo-speakers">
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
                                            <select id="item-range">
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
                                            <input type="text" id="item-available-since" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="item-stock">État de Stock</label>
                                        <select id="item-stock">
                                            <option>Choisir</option>
                                            <option value="En Stock">En Stock</option>
                                            <option value="En Rupture">En Rupture</option>
                                        </select>
                                    </div>
                                    <div className="Item-price">
                                        <div className="form-group">
                                            <label htmlFor="item-price">Prix du produit</label>
                                            <input type="text" id="item-price" />
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-btn-holder">
                                    <button onClick={AddNewProduct} type="submit" style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.secondaryColor }}>{submiText ? "Ajouter" : "Ajout en cours..."}</button>
                                </div>
                            </div>
                        </form>
                    </div>

                )} 
                
                {ComputerProduct && (
                <div className="items-form">
                    <form encType="multipart/form-data" style={{ color: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.accentColor }}>
                        <div className="item-name-and-picture">
                            <div className="form-group">
                                <label htmlFor="item-name-computer">Nom du produit</label>
                                <input type="text" id="item-name-computer" required />
                            </div>
                            <div className="item-picture">
                                <div className="form-group">
                                    <label htmlFor="item-picture-computer">Image du produit</label>
                                    <input onChange={chooseItemPicture} type="file" id="item-picture-computer" accept="image/*" required />
                                </div>
                                <div className="picture-holder">
                                    <img id="picture-item" ref={changeItemPictureRef} src="" alt="picture-item" />
                                </div>
                            </div>
                        </div>

                        <div className="item-features-wrapper">
                            <p>Caractéristiques du produit</p>
                            <div className="item-features">
                                <div className="form-group">
                                    <label htmlFor="item-ram-computer">RAM (Mémoire Vive) </label>
                                    <input type="text" id="item-ram-computer" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-rom-computer">ROM (Stockage Interne)</label>
                                    <input type="text" id="item-rom-computer" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-disk-type">Type du disque</label>
                                    <select id="item-disk-type">
                                        <option>Choisir</option>
                                        <option value="SSD">SSD</option>
                                        <option value="HDD">HDD</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-screen-inch">Écran</label>
                                    <input type="text" id="item-screen-inch" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-processor">Processeur</label>
                                    <input type="text" id="item-processor" required />
                                </div>
                                <div className="form-group">
                                        <label htmlFor="item-processor-frequency">Féquence du Processeur</label>
                                        <input type="text" id="item-processor-frequency" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-heart">Nombre de Cœur</label>
                                    <input type="text" id="item-heart" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-integrated-gpu">Graphiques intégrés</label>
                                    <select id="item-integrated-gpu">
                                        <option>Choisir</option>
                                        <option value="oui">Oui</option>
                                        <option value="non">Non</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-dedicated-gpu">Carte graphique dédiée</label>
                                    <select id="item-dedicated-gpu">
                                        <option>Choisir</option>
                                        <option value="oui">Oui</option>
                                        <option value="non">Non</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-keyboard">Clavier</label>
                                    <select id="item-keyboard">
                                        <option>Choisir</option>
                                        <option value="Azerty">Azerty</option>
                                        <option value="Qwerty">Qwerty</option>
                                        <option value="Qwertz">Qwertz</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-keyboard-light">Clavier Rétro-éclairé</label>
                                    <select id="item-keyboard-light">
                                        <option>Choisir</option>
                                        <option value="oui">Oui</option>
                                        <option value="non">Non</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-card-sim-computer">Prend une Carte SIM</label>
                                    <select id="item-card-sim-computer">
                                        <option>Choisir</option>
                                        <option value="oui">Oui</option>
                                        <option value="non">Non</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-os">Système d{"'"}exploitation</label>
                                    <select id="item-os">
                                        <option>Choisir</option>
                                        <option value="Windows 10">Windows 10</option>
                                        <option value="Windows 11">Windows 11</option>
                                        <option value="MacOS">MacOS</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-battery-computer">Autonomie de la Battérie</label>
                                    <input type="text" id="item-battery-computer" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="item-touchscreen">Écran tactile</label>
                                    <select id="item-touchscreen">
                                        <option>Choisir</option>
                                        <option value="oui">Oui</option>
                                        <option value="non">Non</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                        <label htmlFor="item-USBnumber-computer">Nombre de Port USB</label>
                                    <input type="text" id="item-USBnumber-computer" />
                                </div>
                                <div className="form-group">
                                        <label htmlFor="item-ethernet">Port Ethernet RJ45 (Réseau)</label>
                                    <select id="item-ethernet">
                                        <option>Choisir</option>
                                        <option value="oui">Oui</option>
                                        <option value="non">Non</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="item-hdmi">Port HDMI</label>
                                        <select id="item-hdmi">
                                        <option>Choisir</option>
                                        <option value="oui">Oui</option>
                                        <option value="non">Non</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="item-vga">Port VGA</label>
                                        <select id="item-vga">
                                        <option>Choisir</option>
                                        <option value="oui">Oui</option>
                                        <option value="non">Non</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="item-type-c">Port Type-C</label>
                                        <select id="item-type-c">
                                        <option>Choisir</option>
                                        <option value="oui">Oui</option>
                                        <option value="non">Non</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="item-computer-jack">Port Jack</label>
                                        <select id="item-computer-jack">
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
                                            <select id="item-computer-type">
                                                <option>Choisir</option>
                                                <option value="laptop">Ordinateur Portable</option>
                                                <option value="desktop">Ordinateur de bureau</option>
                                            </select>
                                    </div>
                                </div>
                                <div className="Item-available-since">
                                    <div className="form-group">
                                        <label htmlFor="item-designed-for">Domaine d{"'"} utilisation</label>
                                            <select id="item-designed-for">
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
                                        <input type="text" id="item-available-year" />
                                    </div>
                                </div>
                                    <div className="form-group">
                                        <label htmlFor="item-computer-stock">État de Stock</label>
                                        <select id="item-computer-stock">
                                            <option>Choisir</option>
                                            <option value="En Stock">En Stock</option>
                                            <option value="En Rupture">En Rupture</option>
                                        </select>
                                    </div>
                                <div className="Item-price">
                                    <div className="form-group">
                                        <label htmlFor="item-price-computer">Prix du produit</label>
                                        <input type="text" id="item-price-computer" />
                                    </div>
                                </div>
                            </div>
                            <div className="submit-btn-holder">
                                <button onClick={AddNewProductPC} type="submit" style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.secondaryColor }}>{submiText ? "Ajouter" : "Ajout en cours..."}</button>
                            </div>
                        </div>
                    </form>
                </div>
                )
                
                }


            </section>

            <section className="catalogue-section" id="catalogue">
                <div className="catalogue-title">
                    <h2 style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor }} > ≽ <span className="item-name-wrapper"><span className="item-name">Nos Produits</span></span></h2>
                </div>
                <div className="catalogue-items">
                    <div className="items-filters" style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }}>
                        <p id="filter-icon" style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor }}><span><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M20 3h-16a1 1 0 0 0 -1 1v2.227l.008 .223a3 3 0 0 0 .772 1.795l4.22 4.641v8.114a1 1 0 0 0 1.316 .949l6 -2l.108 -.043a1 1 0 0 0 .576 -.906v-6.586l4.121 -4.12a3 3 0 0 0 .879 -2.123v-2.171a1 1 0 0 0 -1 -1z" />
                        </svg></span> <span>Filtrer</span></p>
                        <div className="filters">

                            <div className="item-group-one">
                                <div className="chekbox-holder">
                                    <label htmlFor="only-phones">
                                        <input type="checkbox" id="only-phones" onChange={handleOnlyPhone} checked={onlyPhone} />
                                        <span>Smartphones</span>
                                    </label>
                                </div>
                                <div className="chekbox-holder">
                                    <label htmlFor="only-desktop">
                                        <input type="checkbox" id="only-desktop" onChange={handleOnlyDeskTop} checked={onlyDeskTop} />
                                        <span>Ordinateurs</span>
                                    </label>
                                </div>
                            </div>
                            <hr className="seperate-items" />
                            {
                                showDefaultFilter ? (
                            <div className="item-group-two">
                                <div className="chekbox-holder">
                                    <label htmlFor="entry-range">
                                        <input type="checkbox" id="entry-range" onChange={handleEntryRange} checked={entryRange} />
                                        <span>Entée de gamme</span>
                                    </label>
                                </div>
                                <div className="chekbox-holder">
                                    <label htmlFor="middle-range">
                                        <input type="checkbox" id="middle-range" onChange={handleMiddleRange} checked={middleRange} />
                                        <span>Milieu de gamme</span>
                                    </label>
                                </div>
                                <div className="chekbox-holder">
                                    <label htmlFor="high-range">
                                        <input type="checkbox" id="high-range" onChange={handleHighRange} checked={highRange} />
                                        <span>Haute de gamme</span>
                                    </label>
                                </div>
                            </div>
                                ) :
                                (
                            <div className="item-group-three">
                                <div className="chekbox-holder">
                                    <label htmlFor="laptop">
                                        <input type="checkbox" id="laptop" onChange={handleLaptop} checked={laptop} />
                                        <span>Ordinateur portable</span>
                                    </label>
                                </div>
                                <div className="chekbox-holder">
                                    <label htmlFor="desktop">
                                        <input type="checkbox" id="desktop" onChange={handleDesktop} checked={desktop} />
                                        <span>Ordinateur de bureau</span>
                                    </label>
                                </div>
                                <div className="chekbox-holder">
                                    <label htmlFor="graphisme">
                                        <input type="checkbox" id="graphisme" onChange={handleGraphisme} checked={graphisme} />
                                        <span>Graphisme</span>
                                    </label>
                                </div>
                                <div className="chekbox-holder">
                                    <label htmlFor="programming">
                                        <input type="checkbox" id="programming" onChange={handleProgramming} checked={programming} />
                                        <span>Programmation</span>
                                    </label>
                                </div>
                                <div className="chekbox-holder">
                                    <label htmlFor="Gaming">
                                        <input type="checkbox" id="Gaming" onChange={handleGaming} checked={gaming} />
                                        <span>Gaming</span>
                                    </label>
                                </div>
                            </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>


            <section className="items-section">
               {onlyDeskTop && (
                    <div className="Products-wrapper">
                        {computers.map((product) => (
                            <div key={product._id} style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.darkTheme.contrasteColor : pickColor.lightTheme.contrasteColor, boxShadow: isLight ? "2px 2px 9px #000" : "2px 2px 9px #fff" }} className="product-holder">
                                <div className="product-header" style={{ backgroundColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }}>
                                    <span id="product-stock"
                                        style={{ backgroundColor: product.ComputerStock === "En Stock" ? "lightgreen" : "rgba(255, 130, 130, 0.774)", color: product.ComputerStock === "En Stock" ? "rgb(1, 117, 1)" : "rgb(117, 0, 0)" }}>{product.ComputerStock}</span>
                                    <div className="product-picture-holder">
                                        <img src={product.ComputerPicture} alt="picture" />
                                    </div>
                                    <h2 style={{ backgroundColor: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor }}>{product.ComputerName}</h2>
                                </div>

                                <div className="product-body">
                                    <div className="product-crucial-features">
                                        <ul style={{ backgroundColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }}>
                                            <li className="icons-and-item-feature">
                                                <span>
                                                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 35 35" data-name="Layer 2" id="ac59cc0a-8895-4ad6-9f65-67566b7e9681" xmlns="http://www.w3.org/2000/svg"><path d="M27.059,31.25H7.941A4.2,4.2,0,0,1,3.75,27.059V7.941A4.2,4.2,0,0,1,7.941,3.75H27.059A4.2,4.2,0,0,1,31.25,7.941V27.059A4.2,4.2,0,0,1,27.059,31.25ZM7.941,6.25A1.693,1.693,0,0,0,6.25,7.941V27.059A1.693,1.693,0,0,0,7.941,28.75H27.059a1.693,1.693,0,0,0,1.691-1.691V7.941A1.693,1.693,0,0,0,27.059,6.25Z" /><path d="M22.119,24.75H12.881a2.635,2.635,0,0,1-2.631-2.631V12.881a2.634,2.634,0,0,1,2.631-2.631h9.238a2.634,2.634,0,0,1,2.631,2.631v9.238A2.635,2.635,0,0,1,22.119,24.75Zm-9.238-12a.131.131,0,0,0-.131.131v9.238a.131.131,0,0,0,.131.131h9.238a.131.131,0,0,0,.131-.131V12.881a.131.131,0,0,0-.131-.131Z" /><path d="M12.982,4.4A1.25,1.25,0,0,1,11.734,3.2l-.034-1A1.25,1.25,0,0,1,12.908.905,1.263,1.263,0,0,1,14.2,2.112l.034,1A1.252,1.252,0,0,1,13.025,4.4Z" /><path d="M17.516,4.4A1.251,1.251,0,0,1,16.267,3.2l-.033-1A1.249,1.249,0,0,1,17.442.905a1.223,1.223,0,0,1,1.291,1.208l.033,1A1.25,1.25,0,0,1,17.558,4.4Z" /><path d="M22.049,4.4A1.251,1.251,0,0,1,20.8,3.2l-.033-1A1.249,1.249,0,0,1,21.975.905a1.22,1.22,0,0,1,1.291,1.208l.033,1A1.25,1.25,0,0,1,22.091,4.4Z" /><path d="M32.081,23.334a1.25,1.25,0,0,1-.041-2.5l1-.034a1.25,1.25,0,1,1,.083,2.5l-1,.034Z" /><path d="M32.081,18.8a1.25,1.25,0,0,1-.042-2.5l1-.034a1.25,1.25,0,1,1,.085,2.5l-1,.034Z" /><path d="M32.081,14.266a1.25,1.25,0,0,1-.041-2.5l1-.033a1.25,1.25,0,1,1,.083,2.5l-1,.033Z" /><path d="M22.066,34.1a1.25,1.25,0,0,1-1.249-1.208l-.033-1A1.251,1.251,0,0,1,21.991,30.6,1.238,1.238,0,0,1,23.283,31.8l.033,1a1.249,1.249,0,0,1-1.207,1.291Z" /><path d="M17.532,34.1a1.249,1.249,0,0,1-1.248-1.209l-.033-1a1.25,1.25,0,0,1,1.208-1.29A1.237,1.237,0,0,1,18.75,31.8l.033,1a1.249,1.249,0,0,1-1.208,1.29Z" /><path d="M13,34.1a1.249,1.249,0,0,1-1.248-1.209l-.034-1a1.25,1.25,0,0,1,2.5-.082l.034,1a1.25,1.25,0,0,1-1.208,1.29Z" /><path d="M1.918,14.216a1.25,1.25,0,0,1-.041-2.5l1-.033a1.25,1.25,0,1,1,.083,2.5l-1,.033Z" /><path d="M1.918,18.75a1.25,1.25,0,0,1-.041-2.5l1-.034a1.25,1.25,0,1,1,.083,2.5l-1,.034Z" /><path d="M1.918,23.284a1.25,1.25,0,0,1-.042-2.5l1-.034a1.269,1.269,0,0,1,1.292,1.206,1.251,1.251,0,0,1-1.207,1.292l-1,.034Z" /></svg>
                                                </span>
                                                <span>
                                                    RAM : {product.ComputerRam}
                                                </span>
                                            </li>
                                            <li className="icons-and-item-feature">
                                                <span>
                                                    <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24"
                                                        viewBox="0 0 472.645 472.645" xmlSpace="preserve">
                                                        <g>
                                                            <g>
                                                                <rect x="110.868" y="110.868" width="250.88" height="250.88" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="312.517" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="255.143" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="197.809" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="140.406" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="312.517" y="403.23" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="255.143" y="403.23" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="197.809" y="403.23" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="140.406" y="403.23" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect y="140.406" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect y="197.809" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect y="255.143" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect y="312.517" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="403.23" y="140.406" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="403.23" y="197.809" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="403.23" y="255.143" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="403.23" y="312.517" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span>
                                                    ROM : {product.ComputerRom}
                                                </span>
                                            </li>
                                            <li className="icons-and-item-feature">
                                                <span>
                                                    <img src={isLight ? hard_drive : hard_drive_light} alt="pic" />
                                                </span>
                                                <span>
                                                    Disque : {product.ComputerDiskType}
                                                </span>
                                            </li>
                                            <li className="icons-and-item-feature">
                                                <span>
                                                    <img src={isLight ? moniteur : moniteur_light} alt="pic" />
                                                </span>
                                                <span>
                                                    Écran : {product.ComputerScreenInch}
                                                </span>
                                            </li>
                                            <li className="icons-and-item-feature">
                                                <span>
                                                    <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24"
                                                        viewBox="0 0 472.645 472.645" xmlSpace="preserve">
                                                        <g>
                                                            <g>
                                                                <rect x="110.868" y="110.868" width="250.88" height="250.88" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="312.517" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="255.143" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="197.809" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="140.406" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="312.517" y="403.23" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="255.143" y="403.23" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="197.809" y="403.23" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="140.406" y="403.23" width="19.692" height="69.415" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect y="140.406" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect y="197.809" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect y="255.143" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect y="312.517" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="403.23" y="140.406" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="403.23" y="197.809" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="403.23" y="255.143" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <rect x="403.23" y="312.517" width="69.415" height="19.692" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span>
                                                    Procèsseur : {product.ComputerProcessor}
                                                </span>
                                            </li>
                                            <li className="icons-and-item-feature">
                                                <span>
                                                    <img src={isLight ? freq : freq_light} alt="pic" />
                                                </span>
                                                <span>
                                                    Fréq. du Procès. : {product.ComputerProcessorFrequency}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="other-computer-features" style={{ backgroundColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }}>
                                        <div className="computer-price-holder" style={{ backgroundColor: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor }}>
                                            <p className="icons-and-item-feature" id={isLight ? "computer-price-light" : "computer-price-dark"}>
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12.01 2.011c.852 0 1.668 .34 2.267 .942l.698 .698a1.2 1.2 0 0 0 .845 .349h1a3.2 3.2 0 0 1 3.2 3.2v1c0 .316 .126 .62 .347 .843l.698 .698a3.2 3.2 0 0 1 .002 4.536l-.698 .698a1.2 1.2 0 0 0 -.349 .845v1a3.2 3.2 0 0 1 -3.2 3.2h-1a1.2 1.2 0 0 0 -.843 .347l-.698 .698a3.2 3.2 0 0 1 -4.536 .002l-.698 -.698a1.2 1.2 0 0 0 -.845 -.349h-1a3.2 3.2 0 0 1 -3.2 -3.2v-1a1.2 1.2 0 0 0 -.347 -.843l-.698 -.698a3.2 3.2 0 0 1 -.002 -4.536l.698 -.698a1.2 1.2 0 0 0 .349 -.845v-1l.005 -.182a3.2 3.2 0 0 1 3.195 -3.018h1a1.2 1.2 0 0 0 .843 -.347l.698 -.698a3.2 3.2 0 0 1 2.269 -.944m2.49 10.989a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m1.207 -4.707a1 1 0 0 0 -1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6 -6a1 1 0 0 0 0 -1.414m-6.207 -.293a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    Prix : {product.ComputerPrice} Fcfa
                                                </span>
                                            </p>
                                        </div>
                                        <div id="open-computer-features" style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2, boxShadow: isLight ? "inset 0px 1px 6px #fafafa" : "inset 0px 1px 6px #333333" }}>
                                            <p className="features-btn-holder" onClick={OpenOtherFeatures}>
                                                <span id="features-btn">
                                                    <span>༺ Autres Caractéristiques ༻</span> <br />
                                                    <span id="open-feature-arrow">▼</span>
                                                </span>
                                            </p>
                                        </div>

                                        <div className="other-features-content">
                                            <ul style={{ backgroundColor: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor }}>
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <svg fill="currentColor" width="24" height="24" viewBox="0 0 35 35" data-name="Layer 2" id="ac59cc0a-8895-4ad6-9f65-67566b7e9681" xmlns="http://www.w3.org/2000/svg"><path d="M27.059,31.25H7.941A4.2,4.2,0,0,1,3.75,27.059V7.941A4.2,4.2,0,0,1,7.941,3.75H27.059A4.2,4.2,0,0,1,31.25,7.941V27.059A4.2,4.2,0,0,1,27.059,31.25ZM7.941,6.25A1.693,1.693,0,0,0,6.25,7.941V27.059A1.693,1.693,0,0,0,7.941,28.75H27.059a1.693,1.693,0,0,0,1.691-1.691V7.941A1.693,1.693,0,0,0,27.059,6.25Z" /><path d="M22.119,24.75H12.881a2.635,2.635,0,0,1-2.631-2.631V12.881a2.634,2.634,0,0,1,2.631-2.631h9.238a2.634,2.634,0,0,1,2.631,2.631v9.238A2.635,2.635,0,0,1,22.119,24.75Zm-9.238-12a.131.131,0,0,0-.131.131v9.238a.131.131,0,0,0,.131.131h9.238a.131.131,0,0,0,.131-.131V12.881a.131.131,0,0,0-.131-.131Z" /><path d="M12.982,4.4A1.25,1.25,0,0,1,11.734,3.2l-.034-1A1.25,1.25,0,0,1,12.908.905,1.263,1.263,0,0,1,14.2,2.112l.034,1A1.252,1.252,0,0,1,13.025,4.4Z" /><path d="M17.516,4.4A1.251,1.251,0,0,1,16.267,3.2l-.033-1A1.249,1.249,0,0,1,17.442.905a1.223,1.223,0,0,1,1.291,1.208l.033,1A1.25,1.25,0,0,1,17.558,4.4Z" /><path d="M22.049,4.4A1.251,1.251,0,0,1,20.8,3.2l-.033-1A1.249,1.249,0,0,1,21.975.905a1.22,1.22,0,0,1,1.291,1.208l.033,1A1.25,1.25,0,0,1,22.091,4.4Z" /><path d="M32.081,23.334a1.25,1.25,0,0,1-.041-2.5l1-.034a1.25,1.25,0,1,1,.083,2.5l-1,.034Z" /><path d="M32.081,18.8a1.25,1.25,0,0,1-.042-2.5l1-.034a1.25,1.25,0,1,1,.085,2.5l-1,.034Z" /><path d="M32.081,14.266a1.25,1.25,0,0,1-.041-2.5l1-.033a1.25,1.25,0,1,1,.083,2.5l-1,.033Z" /><path d="M22.066,34.1a1.25,1.25,0,0,1-1.249-1.208l-.033-1A1.251,1.251,0,0,1,21.991,30.6,1.238,1.238,0,0,1,23.283,31.8l.033,1a1.249,1.249,0,0,1-1.207,1.291Z" /><path d="M17.532,34.1a1.249,1.249,0,0,1-1.248-1.209l-.033-1a1.25,1.25,0,0,1,1.208-1.29A1.237,1.237,0,0,1,18.75,31.8l.033,1a1.249,1.249,0,0,1-1.208,1.29Z" /><path d="M13,34.1a1.249,1.249,0,0,1-1.248-1.209l-.034-1a1.25,1.25,0,0,1,2.5-.082l.034,1a1.25,1.25,0,0,1-1.208,1.29Z" /><path d="M1.918,14.216a1.25,1.25,0,0,1-.041-2.5l1-.033a1.25,1.25,0,1,1,.083,2.5l-1,.033Z" /><path d="M1.918,18.75a1.25,1.25,0,0,1-.041-2.5l1-.034a1.25,1.25,0,1,1,.083,2.5l-1,.034Z" /><path d="M1.918,23.284a1.25,1.25,0,0,1-.042-2.5l1-.034a1.269,1.269,0,0,1,1.292,1.206,1.251,1.251,0,0,1-1.207,1.292l-1,.034Z" /></svg>
                                                        </span>
                                                        <span>
                                                            Cœur : {product.ComputerHeart}
                                                        </span>
                                                    </li>
                                                    <hr />
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
                                                                <path d="M7 10l0 4" />
                                                                <path d="M10 10l0 4" />
                                                                <path d="M13 10l0 4" />
                                                                <path d="M16 10l0 4" />
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            Autonomie : {product.ComputerBattery}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? graph : graph_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Carte Graphique Integrée : {product.ComputerIntegratedGpu}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? graph : graph_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Mémoire Dédiée : {product.ComputerDedicatedGpu}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? keyboard : keyboard_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Clavier : {product.ComputerKeyboard}
                                                        </span>
                                                    </li>
                                                    <hr />
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? hdmi : hdmi_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Port HDMI : {product.ComputerHDMI}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? keyboard : keyboard_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Clavier Rétro-éclairé : {product.ComputerKeyboardLight}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? Ethernet : Ethernet_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Port Ethernet RJ45 : {product.ComputerRJ45}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? usbB : usbB_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Nombre de Port USB : {product.ComputerUSBNumber}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? Esim : Esim_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Port SIM : {product.ComputerSimCard}
                                                        </span>
                                                    </li>
                                                    <hr />
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? vga : vga_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Port VGA : {product.ComputerVGA}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? os : os_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Système Installé : {product.ComputerOs}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? jack : jack_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Port Jack : {product.ComputerPortJack}
                                                        </span>
                                                    </li>
                                                    <hr />
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? type_C_port : type_C_port_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Port Type-C : {product.ComputerType_C}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? touchscreen : touchscreen_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Écran Tactile : {product.ComputerTouchScreen}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                                                                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                                                <path d="M15 3v4" />
                                                                <path d="M7 3v4" />
                                                                <path d="M3 11h16" />
                                                                <path d="M18 16.496v1.504l1 1" />
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            Date de sortie : {product.ComputerAvailableYear}
                                                        </span>
                                                    </li>
                                                </div>
                                                <button id="close-other-features-btn" onClick={CloseOtherFeatures} type="button" style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.contrasteColor }}>Fermer</button>
                                            </ul>
                                        </div>


                                        <div className="contact-field">
                                            <a style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor }} href={`https://wa.me/+22879836219?text=Salut, Je suis intéressé par le ${product.ComputerName}.`} target="_blank">
                                                <span><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                                </svg></span>
                                                <span>Acheter</span>
                                            </a>
                                        </div>
                                        <div className="role-btns-holder">
                                            <div className="role-btns">
                                                <a className="update-btn" href={`/admin/product/modify/computer/${product._id}`}>
                                                    Modifier
                                                </a>
                                                {checkRl && <button onClick={handleDeleteSectionPC} className="delete-btn" type="button">Supprimer</button>}
                                            </div>
                                        </div>
                                        <div className="confirmation-context-holder">
                                            <div className="confirmation-context">
                                                <p>Are You Sure ?</p>
                                                <div className="confirmation-btns">
                                                    <button onClick={deleteItemPC} className="btn-yes" data-id={product._id} type="button">Yes</button>
                                                    <button onClick={abortItemDeletionPC} className="btn-no" type="button">No</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
               )}

               {onlyPhone && (
                    <div className="Products-wrapper-moblile">
                        {smartphones.map((product) => (
                            <div key={product._id} style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.darkTheme.contrasteColor : pickColor.lightTheme.contrasteColor, boxShadow: isLight ? "2px 2px 9px #000" : "2px 2px 9px #fff" }} className="product-holder-mobile">
                                <div className="product-header" style={{ backgroundColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }}>
                                    <span id="product-stock"
                                        style={{ backgroundColor: product.productStock === "En Stock" ? "lightgreen" : "rgba(255, 130, 130, 0.774)", color: product.productStock === "En Stock" ? "rgb(1, 117, 1)" : "rgb(117, 0, 0)" }}>{product.productStock}</span>
                                    <div className="product-picture-holder-mobile">
                                        <img src={product.productPicture} alt="picture" />
                                    </div>
                                    <h2 style={{ backgroundColor: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor }}>{product.productName}</h2>
                                </div>

                                <div className="product-body">
                                    <div className="product-crucial-features">
                                        <ul style={{ backgroundColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }}>
                                            <div className="mobile-ram-rom">
                                                <li className="icons-and-item-feature">
                                                    <span>
                                                        <svg fill="currentColor" width="24" height="24" viewBox="0 0 35 35" data-name="Layer 2" id="ac59cc0a-8895-4ad6-9f65-67566b7e9681" xmlns="http://www.w3.org/2000/svg"><path d="M27.059,31.25H7.941A4.2,4.2,0,0,1,3.75,27.059V7.941A4.2,4.2,0,0,1,7.941,3.75H27.059A4.2,4.2,0,0,1,31.25,7.941V27.059A4.2,4.2,0,0,1,27.059,31.25ZM7.941,6.25A1.693,1.693,0,0,0,6.25,7.941V27.059A1.693,1.693,0,0,0,7.941,28.75H27.059a1.693,1.693,0,0,0,1.691-1.691V7.941A1.693,1.693,0,0,0,27.059,6.25Z" /><path d="M22.119,24.75H12.881a2.635,2.635,0,0,1-2.631-2.631V12.881a2.634,2.634,0,0,1,2.631-2.631h9.238a2.634,2.634,0,0,1,2.631,2.631v9.238A2.635,2.635,0,0,1,22.119,24.75Zm-9.238-12a.131.131,0,0,0-.131.131v9.238a.131.131,0,0,0,.131.131h9.238a.131.131,0,0,0,.131-.131V12.881a.131.131,0,0,0-.131-.131Z" /><path d="M12.982,4.4A1.25,1.25,0,0,1,11.734,3.2l-.034-1A1.25,1.25,0,0,1,12.908.905,1.263,1.263,0,0,1,14.2,2.112l.034,1A1.252,1.252,0,0,1,13.025,4.4Z" /><path d="M17.516,4.4A1.251,1.251,0,0,1,16.267,3.2l-.033-1A1.249,1.249,0,0,1,17.442.905a1.223,1.223,0,0,1,1.291,1.208l.033,1A1.25,1.25,0,0,1,17.558,4.4Z" /><path d="M22.049,4.4A1.251,1.251,0,0,1,20.8,3.2l-.033-1A1.249,1.249,0,0,1,21.975.905a1.22,1.22,0,0,1,1.291,1.208l.033,1A1.25,1.25,0,0,1,22.091,4.4Z" /><path d="M32.081,23.334a1.25,1.25,0,0,1-.041-2.5l1-.034a1.25,1.25,0,1,1,.083,2.5l-1,.034Z" /><path d="M32.081,18.8a1.25,1.25,0,0,1-.042-2.5l1-.034a1.25,1.25,0,1,1,.085,2.5l-1,.034Z" /><path d="M32.081,14.266a1.25,1.25,0,0,1-.041-2.5l1-.033a1.25,1.25,0,1,1,.083,2.5l-1,.033Z" /><path d="M22.066,34.1a1.25,1.25,0,0,1-1.249-1.208l-.033-1A1.251,1.251,0,0,1,21.991,30.6,1.238,1.238,0,0,1,23.283,31.8l.033,1a1.249,1.249,0,0,1-1.207,1.291Z" /><path d="M17.532,34.1a1.249,1.249,0,0,1-1.248-1.209l-.033-1a1.25,1.25,0,0,1,1.208-1.29A1.237,1.237,0,0,1,18.75,31.8l.033,1a1.249,1.249,0,0,1-1.208,1.29Z" /><path d="M13,34.1a1.249,1.249,0,0,1-1.248-1.209l-.034-1a1.25,1.25,0,0,1,2.5-.082l.034,1a1.25,1.25,0,0,1-1.208,1.29Z" /><path d="M1.918,14.216a1.25,1.25,0,0,1-.041-2.5l1-.033a1.25,1.25,0,1,1,.083,2.5l-1,.033Z" /><path d="M1.918,18.75a1.25,1.25,0,0,1-.041-2.5l1-.034a1.25,1.25,0,1,1,.083,2.5l-1,.034Z" /><path d="M1.918,23.284a1.25,1.25,0,0,1-.042-2.5l1-.034a1.269,1.269,0,0,1,1.292,1.206,1.251,1.251,0,0,1-1.207,1.292l-1,.034Z" /></svg>
                                                    </span>
                                                    <span>
                                                        RAM : {product.productRam}
                                                    </span>
                                                </li>
                                                <li className="icons-and-item-feature">
                                                    <span>
                                                        <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24"
                                                            viewBox="0 0 472.645 472.645" xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <rect x="110.868" y="110.868" width="250.88" height="250.88" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="312.517" width="19.692" height="69.415" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="255.143" width="19.692" height="69.415" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="197.809" width="19.692" height="69.415" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="140.406" width="19.692" height="69.415" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="312.517" y="403.23" width="19.692" height="69.415" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="255.143" y="403.23" width="19.692" height="69.415" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="197.809" y="403.23" width="19.692" height="69.415" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="140.406" y="403.23" width="19.692" height="69.415" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect y="140.406" width="69.415" height="19.692" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect y="197.809" width="69.415" height="19.692" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect y="255.143" width="69.415" height="19.692" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect y="312.517" width="69.415" height="19.692" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="403.23" y="140.406" width="69.415" height="19.692" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="403.23" y="197.809" width="69.415" height="19.692" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="403.23" y="255.143" width="69.415" height="19.692" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <rect x="403.23" y="312.517" width="69.415" height="19.692" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        ROM : {product.productRom}
                                                    </span>
                                                </li>
                                                <li className="icons-and-item-feature">
                                                    <span>
                                                        <span><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                                            <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                        </svg></span>
                                                    </span>
                                                    <span>
                                                        Caméra Principale : {product.productMainCamera}MP
                                                    </span>
                                                </li>
                                            </div>
                                            <li className="icons-and-item-feature">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                                        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                                                        <path d="M15 11l.01 0" />
                                                        <path d="M9 11l.01 0" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    Caméra Frontale : {product.productFrontCamera}MP
                                                </span>
                                            </li>
                                            <li className="icons-and-item-feature">
                                                <span>
                                                    <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="24" height="24" viewBox="455.056 796 200 200" enableBackground="new 455.056 796 200 200" xmlSpace="preserve">
                                                        <path d="M599.091,796h-88.068c-9.139,0-16.574,7.435-16.574,16.572v166.854c0,9.138,7.436,16.573,16.574,16.573h88.068
	c9.138,0,16.572-7.436,16.572-16.573V812.572C615.663,803.435,608.229,796,599.091,796z M603.339,979.427
	c0,2.343-1.906,4.25-4.248,4.25h-88.068c-2.344,0-4.25-1.907-4.25-4.25V812.572c0-2.343,1.907-4.249,4.25-4.249h15.164
	c0.515,4.248,4.132,7.541,8.519,7.541h40.697c4.392,0,8.005-3.293,8.52-7.541h15.169c2.342,0,4.248,1.906,4.248,4.249V979.427z"/>
                                                    </svg>
                                                </span>
                                                <span>
                                                    Écran : {product.productScreenType}
                                                </span>
                                            </li>
                                            <li className="icons-and-item-feature">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
                                                        <path d="M7 10l0 4" />
                                                        <path d="M10 10l0 4" />
                                                        <path d="M13 10l0 4" />
                                                        <path d="M16 10l0 4" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    Battérie : {product.productBattery} mAh
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="other-computer-features" style={{ backgroundColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }}>
                                        <div className="computer-price-holder" style={{ backgroundColor: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor }}>
                                            <p className="icons-and-item-feature" id={isLight ? "computer-price-light" : "computer-price-dark"}>
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12.01 2.011c.852 0 1.668 .34 2.267 .942l.698 .698a1.2 1.2 0 0 0 .845 .349h1a3.2 3.2 0 0 1 3.2 3.2v1c0 .316 .126 .62 .347 .843l.698 .698a3.2 3.2 0 0 1 .002 4.536l-.698 .698a1.2 1.2 0 0 0 -.349 .845v1a3.2 3.2 0 0 1 -3.2 3.2h-1a1.2 1.2 0 0 0 -.843 .347l-.698 .698a3.2 3.2 0 0 1 -4.536 .002l-.698 -.698a1.2 1.2 0 0 0 -.845 -.349h-1a3.2 3.2 0 0 1 -3.2 -3.2v-1a1.2 1.2 0 0 0 -.347 -.843l-.698 -.698a3.2 3.2 0 0 1 -.002 -4.536l.698 -.698a1.2 1.2 0 0 0 .349 -.845v-1l.005 -.182a3.2 3.2 0 0 1 3.195 -3.018h1a1.2 1.2 0 0 0 .843 -.347l.698 -.698a3.2 3.2 0 0 1 2.269 -.944m2.49 10.989a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3m1.207 -4.707a1 1 0 0 0 -1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6 -6a1 1 0 0 0 0 -1.414m-6.207 -.293a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    Prix : {product.productPrice} Fcfa
                                                </span>
                                            </p>
                                        </div>
                                        <div id="open-computer-features" style={{ color: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2, boxShadow: isLight ? "inset 0px 1px 6px #fafafa" : "inset 0px 1px 6px #333333" }}>
                                            <p className="features-btn-holder" onClick={OpenOtherFeaturesMobile}>
                                                <span id="features-btn">
                                                    <span>༺ Autres Caractéristiques ༻</span> <br />
                                                    <span id="open-feature-arrow">▼</span>
                                                </span>
                                            </p>
                                        </div>

                                        <div className="other-features-content">
                                            <ul style={{ backgroundColor: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor }}>
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? dual_Sim : dual_Sim_light} alt="pic" />
                                                        </span>
                                                        Dual SIM : {product.productDualSim}
                                                    </li>
                                                    <hr />
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? usbType : usbType_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            USB : {product.productUsbType}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? resolution : resolution_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Résolution d{"'"}écran : {product.productDisplayResolution}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? microSD : microSD_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Carte Mémo. : {product.productMermorySlot}
                                                        </span>
                                                    </li>
                                                    <hr />
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? Esim : Esim_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            e-SIM : {product.productEsim}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? jack : jack_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Port Jack : {product.productPortJack}
                                                        </span>
                                                    </li>
                                                    <hr />
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? otg : otg_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            OTG : {product.productOTG}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-4.5" />
                                                                <path d="M3 15h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2z" />
                                                                <path d="M6 22v-3" />
                                                                <path d="M4 15v-2.5" />
                                                                <path d="M8 15v-2.5" />
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            Charge filiaire : {product.productWiredCharger}W
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M16 7h1a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2" />
                                                                <path d="M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1" />
                                                                <path d="M12 8l-2 4h3l-2 4" />
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            Charge sans fil : {product.productWirelessCharger}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? fingerprint : fingerprint_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Empr. digitale : {product.productFingerPrint}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? haut_parleur : haut_parleur_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Haut-parleurs : {product.productLoudSpeakers}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? dual_speakers : dual_speakers_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Locuteurs à deux canaux : {product.productDualSpeakers}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <img src={isLight ? stereo : stereo_light} alt="pic" />
                                                        </span>
                                                        <span>
                                                            Locuteurs stéréo : {product.productStereoSpeakers}
                                                        </span>
                                                    </li>
                                                </div>
                                                <hr className="custom-divider" style={{ borderColor: isLight ? pickColor.lightTheme.contrasteColor_2 : pickColor.darkTheme.contrasteColor_2 }} />
                                                <div className="grouped-features-info">
                                                    <li className="icons-and-item-feature">
                                                        <span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                                                                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                                                <path d="M15 3v4" />
                                                                <path d="M7 3v4" />
                                                                <path d="M3 11h16" />
                                                                <path d="M18 16.496v1.504l1 1" />
                                                            </svg>
                                                        </span>
                                                        <span>
                                                            Date de sortie : {product.productAvailableDate}
                                                        </span>
                                                    </li>
                                                </div>
                                                <button id="close-other-features-btn" onClick={CloseOtherFeaturesMobile} type="button" style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.contrasteColor : pickColor.darkTheme.contrasteColor }}>Fermer</button>
                                            </ul>
                                        </div>


                                        <div className="contact-field">
                                            <a style={{ color: isLight ? pickColor.darkTheme.accentColor : pickColor.lightTheme.accentColor, backgroundColor: isLight ? pickColor.lightTheme.accentColor : pickColor.darkTheme.accentColor }} href={`https://wa.me/+22879836219?text=Salut, Je suis intéressé par le ${product.ComputerName}.`} target="_blank">
                                                <span><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                                </svg></span>
                                                <span>Acheter</span>
                                            </a>
                                        </div>

                                        <div className="role-btns-holder">
                                            <div className="role-btns">
                                                <a className="update-btn" href={`/admin/product/modify/${product._id}`}>
                                                    Modifier
                                                </a>
                                                {checkRl && <button onClick={handleDeleteSection} className="delete-btn" type="button">Supprimer</button>}  
                                            </div>
                                    </div>
                                        <div className="confirmation-context-holder">
                                        <div className="confirmation-context">
                                            <p>Are You Sure ?</p>
                                            <div className="confirmation-btns">
                                                <button onClick={deleteItem} className="btn-yes" data-id={product._id} type="button">Yes</button>
                                                <button onClick={abortItemDeletion} className="btn-no" type="button">No</button>
                                            </div>
                                        </div> 
                                    </div>
    
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            )}
            
                <div className="filtered-contents">
                {FilterPhoneComponent &&
                    <FilteredPhoneComputers Phoneproducts={getFilteredPhoneData} isLight={isLight} /> }
                {FilterComputerComponent &&
                        <FilteredComputers products={getFilteredData} isLight={isLight} />}
                </div>

            </section>

        </>
    )
}