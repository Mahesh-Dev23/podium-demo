const changeColors = (colors) => {

    const r = document.querySelector(':root')
     
    if (Object.keys(colors).length !== 0) {
        r.style.setProperty('--brandingDark', colors.brandingDark);
        r.style.setProperty('--brandingLight', colors.brandingLight);
        r.style.setProperty('--branding1', colors.branding1);
        r.style.setProperty('--branding2', colors.branding2);
        r.style.setProperty('--branding3', colors.branding3);
    }

}

export default changeColors    