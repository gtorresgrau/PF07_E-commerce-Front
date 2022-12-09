import "./Styles/CarouselBrands.css";
import adidas from "../Images/adidaslogo.png";
import fila from "../Images/filalogo.png";
import nike from "../Images/nikelogo.png";
import puma from "../Images/pumalogo.png";
import reebok from "../Images/reeboklogo.png";

export default function CarouselBrands() {

return (

<div class="sliderBrand">
	<div class="slideBrand-track">
		<div class="slideBrand">
			<img src={adidas}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={nike} width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={fila}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={puma}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={reebok}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={adidas}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={nike}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={fila}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={puma}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={reebok}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={adidas}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={nike}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={fila}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={puma}  width="200" alt="" />
		</div>
		<div class="slideBrand">
			<img src={reebok}  width="200" alt="" />
		</div>
		
		
	</div>
</div>
)
}