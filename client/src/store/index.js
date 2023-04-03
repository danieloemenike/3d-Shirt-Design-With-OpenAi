import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true, //are we currently displaying the logo on the shirt
    isFullTexture: false,
    logoDecal: "./threejs.png",
    fullDecal: './threejs.png'
});
export default state