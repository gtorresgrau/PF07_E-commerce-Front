import "./Styles/CarouselBrands.css";
import adidas from "../Images/adidaslogo.png";
import fila from "../Images/filalogo.png";
import nike from "../Images/nikelogo.png";
import puma from "../Images/pumalogo.png";
import reebok from "../Images/reeboklogo.png";

export default function CarouselBrands() {

return (

<div className="sliderBrand">
	<div className="slideBrand-track">
		<div className="slideBrand">
			<img src={adidas}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={nike} width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={fila}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={puma}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={reebok}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={adidas}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={nike}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={fila}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={puma}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={reebok}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={adidas}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={nike}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={fila}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={puma}  width="200" alt="" />
		</div>
		<div className="slideBrand">
			<img src={reebok}  width="200" alt="" />
		</div>
	</div>
</div>
)
}