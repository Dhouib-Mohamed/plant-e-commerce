import logo from "../assets/logo.png"

function Banner() {
    const title = "jungle house"
    return (
		<div className='component' id="banner">
			<img src={logo} alt='Jungle House' className='image' />
			<h1 className='content'>{title}</h1>
		</div>
	)

}



export default Banner