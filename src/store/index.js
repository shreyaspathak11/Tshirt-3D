import { proxy }    from 'valtio';

const state = proxy({
    intro: true,        //are we currently on the homepage or not
    color: '#EFBD48',  //the default color of the current page
    isLogoTexture: true,        //are we currently displaying logo on t shirt
    isFullTexture: false,       //are we currently displaying full texture on t shirt
    logoDecal:'./threejs.png' ,   // initial logo
    fullDecal: './threejs.png'       
});

export default state;