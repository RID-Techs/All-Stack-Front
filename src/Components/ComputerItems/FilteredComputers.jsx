import PropTypes from "prop-types";
// import { useState } from "react";

import Esim from "/Esim.png"
import Esim_light from "/Esim_light.png"
import jack from "/jack.png"
import jack_light from "/jack_light.png"
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

export function FilteredComputers({ products, isLight }) {

  const OpenOtherFeatures = (e) => {
    const getParent = e.currentTarget
    const parentFound = getParent.closest(".product-holder");
    const openingFeatures = parentFound.querySelector(".other-features-content");
    getParent.style.filter = "blur(12px)";
    openingFeatures.style.display = "block";
  }
  const CloseOtherFeatures = (e) => {
    const getParent = e.currentTarget
    const parentFound = getParent.closest(".product-holder");
    const openingFeatures = parentFound.querySelector(".other-features-content");
    const BtnFeatures = parentFound.querySelector(".features-btn-holder");
    BtnFeatures.style.filter = "blur(0px)";
    openingFeatures.style.display = "";
  }

  return(
    <div className="Products-wrapper">
      {products.map((product) => (
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
  )
}

// PropTypes validation
FilteredComputers.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      ComputerPicture: PropTypes.string,
      ComputerName: PropTypes.string,
      ComputerRam: PropTypes.string,
      ComputerRom: PropTypes.string,
      ComputerDiskType: PropTypes.string,
      ComputerProcessor: PropTypes.string,
      ComputerProcessorFrequency: PropTypes.string,
      ComputerScreenInch: PropTypes.string,
      ComputerPrice: PropTypes.string,
      ComputerHeart: PropTypes.string,
      ComputerIntegratedGpu: PropTypes.string,
      ComputerDedicatedGpu: PropTypes.string,
      ComputerKeyboard: PropTypes.string,
      ComputerSimCard: PropTypes.string,
      ComputerOs: PropTypes.string,
      ComputerBattery: PropTypes.string,
      ComputerTouchScreen: PropTypes.string,
      ComputerUSBNumber: PropTypes.number,
      ComputerRJ45: PropTypes.string,
      ComputerHDMI: PropTypes.string,
      ComputerVGA: PropTypes.string,
      ComputerType_C: PropTypes.string,
      ComputerPortJack: PropTypes.string,
      ComputerType: PropTypes.string,
      ComputerDesignedFor: PropTypes.string,
      ComputerAvailableYear: PropTypes.number,
      ComputerStock: PropTypes.string,
    })
  ), // products must be a required array of objects
  isLight: PropTypes.bool.isRequired
};