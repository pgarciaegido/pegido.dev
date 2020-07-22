const greenBgSpecialStyles = {
  zIndex: -1,
  height: '300px'
}

const h1SpecialStyles = {
  fontFamily: "'Patua One', cursive"
}

export const Landing = ({t}) => (
  <> 
    {/* GREEN BACKGROUND */}
    <div className="bg-green-200 h-32 w-full absolute top-0 left-0" style={greenBgSpecialStyles}></div>
    <h1 className="text-5xl" style={h1SpecialStyles}>¡Hola!</h1>
  </>
);
