import AosModule from "./modules/AosModule.js";
import MagnificModule from "./modules/MagnificModule.js";
import SwiperModule from "./modules/SwiperModule.js";
import ScrollTopModule from "./modules/ScrollTopModule.js";
import ScrollToSectionModule from "./modules/ScrollToSectionModule.js";
import counting from "./modules/counting.js";
import frameTitle from "./modules/frameTitle.js";
import tabModule from "./modules/tabModule.js";
import subMenuModule from "./modules/subMenuModule.js";
import LightGalleryModule from "./modules/LightGalleryModule.js";
import languageModule from "./modules/languageModule.js";
import headerModule from "./modules/headerModule.js";
import SlideToggleModule from "./modules/SlideToggleModule.js";
import FullPageModule from "./modules/FullPageModule.js";
import maps from "./modules/mapsModule.js";
// import ScrollNextSection from "./modules/ScrollNextSection.js";

window.addEventListener("DOMContentLoaded", () => {
    AosModule();
    MagnificModule();
    ScrollTopModule();
    ScrollToSectionModule();
    counting();
    frameTitle();
    tabModule();
    subMenuModule();
    LightGalleryModule();
    languageModule();
    headerModule();
    SlideToggleModule();
    // ScrollNextSection();
    FullPageModule();
    SwiperModule();
    //maps();
});