import './men.css';
import latest5 from "./assests/imgs/latest5.jpg";
import latest6 from "./assests/imgs/latest6.jpg";
import latest7 from "./assests/imgs/latest7.jpg";
import latest8 from "./assests/imgs/latest8.jpg";
import latest1 from "./assests/imgs/latest1.jpg";
import latest2 from "./assests/imgs/latest2.jpg";
import latest3 from "./assests/imgs/latest3.jpg";
import latest4 from "./assests/imgs/latest4.jpg";


export function Men() {
    return (
        <div className='superb'>
           
            <div class="sale">
                <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <u>Shop Now</u></p>
            </div>
            <div className='homecbg'>
                <h1>Category</h1>
                <p className='homepara'>Home_Category</p>
            </div>
            <div className='mainlatestimgs'>
                <div className='latest1'>
                    <img width={250} src={latest5} />
                    <p>Cashmere Tank + Bag</p>
                    <p className='dollerrs'>$98.00 <del>$120.00</del></p>
                </div>
                <div className='latest1'>
                    <img width={250} src={latest6} />
                    <p>Cashmere Tank + Bag</p>
                    <p className='dollerrs'> $98.00 <del>$120.00</del></p>
                </div>
                <div className='latest1'>
                    <img width={250} src={latest7} />
                    <p>Cashmere Tank + Bag</p>
                    <p className='dollerrs'>$98.00 <del>$120.00</del></p>
                </div>
            </div>
            <div className='mainlatestimgs'>
                <div className='latest1'>
                    <img width={250} src={latest8} />
                    <p>Cashmere Tank + Bag</p>
                    <p className='dollerrs'>$98.00 <del>$120.00</del></p>
                </div>
                <div className='latest1'>
                    <img width={250} src={latest1} />
                    <p>Cashmere Tank + Bag</p>
                    <p className='dollerrs'> $98.00 <del>$120.00</del></p>
                </div>
                <div className='latest1'>
                    <img width={250} src={latest2} />
                    <p>Cashmere Tank + Bag</p>
                    <p className='dollerrs'>$98.00 <del>$120.00</del></p>
                </div>
            </div>
            <div className='mainlatestimgs'>
                <div className='latest1'>
                    <img width={250} src={latest3} />
                    <p>Cashmere Tank + Bag</p>
                    <p className='dollerrs'>$98.00 <del>$120.00</del></p>
                </div>
                <div className='latest1'>
                    <img width={250} src={latest4} />
                    <p>Cashmere Tank + Bag</p>
                    <p className='dollerrs'> $98.00 <del>$120.00</del></p>
                </div>
                <div className='latest1'>
                    <img width={250} src={latest7} />
                    <p>Cashmere Tank + Bag</p>
                    <p className='dollerrs'>$98.00 <del>$120.00</del></p>
                </div>
            </div>
            
        </div>
    )
}