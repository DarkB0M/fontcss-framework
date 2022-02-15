var string = '<link rel="stylesheet" href="location/build.css">'

export default function(){
    return (
        <>
        <h1>How to setup Font-Framework</h1>
        <div className="download">
        <h2>Install the build.css from <a href="https://www.mediafire.com/file/zvg5j4fwm1dyz1j/build.css/file" target="_blank">Here</a> </h2> 
        <h2>And Now link to  your page : <code>{string}</code></h2> <br /> <br />
        <h1>Special thanks to mediafire Google Fonts and LightShot web host</h1>
        </div>
        <style jsx>{`
        *{
            color:white;
            text-align:center;
        }
        .download{
            color:white;

        }
        a{
            color:#4257f5;
        }
        
        `}</style>
        </>
    )
}
