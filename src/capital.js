import './capital.css';
import latest from "./assests/imgs/latest1.jpg";
import latest2 from "./assests/imgs/latest2.jpg";
import latest3 from "./assests/imgs/latest3.jpg";
import latest4 from "./assests/imgs/latest4.jpg";
import latest5 from "./assests/imgs/latest5.jpg";
import latest6 from "./assests/imgs/latest6.jpg";
import latest7 from "./assests/imgs/latest7.jpg";
import latest8 from "./assests/imgs/latest8.jpg";
import found from "./assests/imgs/founder-img.png";
import blog1 from "./assests/imgs/blog1.jpg";
import blog2 from "./assests/imgs/blog2.jpg";
import blog3 from "./assests/imgs/blog3.jpg";
import services1 from "./assests/imgs/services1.svg";
import service2 from "./assests/imgs/services2.svg";
import service3 from "./assests/imgs/services3.svg";
import service4 from "./assests/imgs/services4.svg";




<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

export function Capital() {

    return (

        <div className='superb'>

            <div class="sale">
                <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <u>Shop Now</u></p>
            </div>
            <div className='mainfasion'>
                <div className='subfasion'>
                    <p className='redc'>Fasion Sale</p>
                    <h1 className='Minimal'>Minimal Menz Style</h1>
                    <p className='Consectureal'>Consectureal adispisicing elit.Laborum fuga incident laboroum Volupats iure, delectus dignissioms facilits neque nulla earum.</p>
                    <button className='btnshop'>SHOP NOW</button>
                </div>
            </div>

            <div className='mainbgimgmen'>
                <div className='bgmenimg'>
                    <h2>Men's Fashion</h2>
                    <p className='shopnowc'><u>Shop Now</u></p>
                </div>
                <div className='bgmenimg1'>
                    <h2>Women's Fashion</h2>
                    <p className='shopnowc'><u>Shop Now</u></p>
                </div>
                <div className='bgmenimg2'>
                    <h2>Baby Fashion</h2>
                    <p className='shopnowc'><u>Shop Now</u></p>
                </div>
            </div>
            <div className='maintrading'>
                <div>
                    <h2>Trending This Week</h2>
                </div>
                <div className='mainmenc'>
                    <h4 className='menc'>Men</h4>
                    <h4>Women</h4>
                    <h4>Baby</h4>
                    <h4>Fashion</h4>
                </div>
            </div>
            <div className='mainlatest'>
                <div className='latestimgsub'>
                    <img height={280} src={latest} />
                    <p>Cashmere Tank + Beg</p>
                    <p className='dolerprices'>$98.00  <del>$120.00</del></p>
                </div>
                <div className='latestimgsub'>
                    <img height={280} src={latest2} />
                    <p>Cashmere Tank + Beg</p>
                    <p className='dolerprices'>$98.00  <del>$120.00</del></p>
                </div>
                <div className='latestimgsub'>
                    <img height={280} src={latest3} />
                    <p>Cashmere Tank + Beg</p>
                    <p className='dolerprices'>$98.00  <del>$120.00</del></p>
                </div>
                <div className='latestimgsub'>
                    <img height={280} src={latest4} />
                    <p>Cashmere Tank + Beg</p>
                    <p className='dolerprices'>$98.00  <del>$120.00</del></p>
                </div>
            </div>
            <div className='custom'>
                <h1>Customer Testimonial</h1>
                <p className='everybodyp'>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                <div className='founderimgs'>
                    <img src={found} />
                    <div className='foundimg'>
                        <h3>Petey Cruiser</h3>
                        <p className='Designer'>Designer at Colorlib</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='You'>You May Like</h1>
            </div>
            <div className='mainlatest'>
                <div className='latestimgsub'>
                    <img height={280} src={latest5} />
                    <p>Cashmere Tank + Beg</p>
                    <p className='dolerprices'>$98.00  <del>$120.00</del></p>
                </div>
                <div className='latestimgsub'>
                    <img height={280} src={latest6} />
                    <p>Cashmere Tank + Beg</p>
                    <p className='dolerprices'>$98.00  <del>$120.00</del></p>
                </div>
                <div className='latestimgsub'>
                    <img height={280} src={latest7} />
                    <p>Cashmere Tank + Beg</p>
                    <p className='dolerprices'>$98.00  <del>$120.00</del></p>
                </div>
                <div className='latestimgsub'>
                    <img height={280} src={latest8} />
                    <p>Cashmere Tank + Beg</p>
                    <p className='dolerprices'>$98.00  <del>$120.00</del></p>
                </div>
            </div>
            <div className='latestbgimg'>
                <div>
                    <h1 className='latnews'>Latest News</h1>
                </div>
                <div className='mainblogs'>
                    <div>
                        <img width={350} src={blog1} />
                        <p>Fashion Tips</p>
                        <h3>What Curling Irons Are The Best Ones</h3>
                        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                        <h4><u>Read More</u></h4>
                    </div>
                    <div>
                        <img width={350} src={blog2} />
                        <p>Fashion Tips</p>
                        <h3>Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes</h3>
                        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                        <h4><u>Read More</u></h4>
                    </div>
                    <div>
                        <img width={350} src={blog3} />
                        <p>Fashion Tips</p>
                        <h3>What Curling Irons Are The Best Ones</h3>
                        <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                        <h4><u>Read More</u></h4>
                    </div>
                </div>
            </div>
            <div className='mainservices'>
                <div>
                    <img src={services1} />
                    <h4>Fast & Free Delivery</h4>
                    <p>Free delivery on all orders</p>
                </div>
                <div>
                    <img src={service2} />
                    <h4>Secure Payment</h4>
                    <p>Free delivery on all orders</p>
                </div>  <div>
                    <img src={service3} />
                    <h4>Money Back Guarantee</h4>
                    <p>Free delivery on all orders</p>
                </div>
                <div>
                    <img src={service4} />
                    <h4>Online Support</h4>
                    <p>Free delivery on all orders</p>
                </div>
            </div>
            

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </div>

    )
}