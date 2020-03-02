import trashManImg from "../images/trash_man.svg";
import trashManDarkImg from "../images/trash_man_dark.svg";

//Badge images
import offsiteImg from "../images/offsite.svg";
import landfillImg from "../images/landfill.svg";
import landfillDarkImg from "../images/landfill_dark.svg";
import recycleImg from "../images/recycle.svg";
import recycleDarkImg from "../images/recycle_dark.svg";
import compostImg from "../images/compost.svg";

import walkingGraphic from "../images/walking_graphic.svg";
import walkingGraphicDark from "../images/walking_graphic_dark.svg";

import loadingImg from "../images/loading.svg";
import loadingDarkImg from "../images/loading_dark.svg";

import locationIllustrationImg from "../images/location_illustration.svg";
import locationIllustrationDarkImg from "../images/location_illustration_dark.svg";

import sadManImg from "../images/sad_man.svg";
import sadManDarkImg from "../images/sad_man_dark.svg";

// themes for light mode and dark mode

export const lightTheme = {
  name: "Light",
  titleText: "#000000",
  text: "#404040",
  body: "#FFFFFF",
  resultsText: "#000000",
  searchBackground: "#FFFFFF",
  searchText: "#737373",
  bottomNav: "#336b68",
  bottomNavCameraPg: "#404040",
  locationBorder: "#d9d9d9",
  focusedBorder: "1px solid #336b68",
  border: "1px solid #d9d9d9",
  stepperColor: "rgba(51, 107, 104, 0.2)",
  trashManImg,
  landfillImg,
  recycleImg,
  offsiteImg,
  compostImg,
  walkingGraphic,
  loadingImg,
  locationIllustrationImg,
  locationIllustrationMargin: "32",
  sadManImg,
  plasticSvgOuter: "#336B68",
  plasticSvgOuterOpacity: "0.1",
  plasticSvgAccent: "#404040"
};

export const darkTheme = {
  name: "Dark",
  titleText: "#FFFFFF",
  text: "#FFFFFF",
  resultsText: "#FFFFFF",
  body: "#1b1b1b",
  searchBackground: "#404040",
  searchText: "#FFFFFF",
  bottomNav: "#404040",
  bottomNavCameraPg: "#336b68",
  locationBorder: "#737373",
  focusedBorder: "0.5px solid #d9d9d9",
  border: "1px solid #404040",
  stepperColor: "#737373",
  trashManImg: trashManDarkImg,
  landfillImg: landfillDarkImg,
  recycleImg: recycleDarkImg,
  offsiteImg,
  locationIllustrationImg: locationIllustrationDarkImg,
  compostImg,
  walkingGraphic: walkingGraphicDark,
  locationIllustrationMargin: "56",

  loadingImg: loadingDarkImg,
  sadManImg: sadManDarkImg,

  plasticSvgOuter: "#404040",
  plasticSvgOuterOpacity: "1",
  plasticSvgAccent: "#D9D9D9"
};
