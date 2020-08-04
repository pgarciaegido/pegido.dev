const greenBgSpecialStyles = {
  zIndex: -1,
  height: '280px'
}

const h1SpecialStyles = {
  fontFamily: "'Patua One', cursive"
}

export default ({t}) => (
  <> 
    {/* GREEN BACKGROUND */}
    <div className="bg-green-200 w-full absolute top-0 left-0" style={greenBgSpecialStyles}></div>
    <h1 className="text-5xl pt-24 mb-8" style={h1SpecialStyles}>¡Hola!</h1>

    <p className="text-lg w-1/4 mb-8 leading-loose">
    I’m Pablo, Software engineer. I love creating beautiful and blazing fast websites and all things Javascript. Some more copy here and there. Que quede bonico.
    </p>
    <p className="text-purple-500 text-lg font-semibold cursor-pointer">Checkout my work</p>
  </>
);
