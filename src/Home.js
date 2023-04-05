import React, {useState} from "react";
import { useInView } from 'react-intersection-observer';
import Header from "./Header";
// Home styling directory👇
import "./Home.css";

import Product from "./Product";

const Home = () => {

  const [sec, setsec] = useState(0)
// replaces intersection observer 🙌🏾😁 
  const {ref: myRef , inView: isVisible}  = useInView();

  return (
    <div className="home">
       < Header className='header' />
      <div className="home_contaier">
        {/* banner image👇 */}


        <img
          className="home_image"
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
          alt=""
        />

                 {/* 👇PRODUCTS COMPONENTS👇 */}
        <div className="home_row">
            {/* passing props --->♻️ */}
         <Product id={1} title='Sony PlayStation 5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed ...' price={699.99} image={'https://store.bellestoreinc.com/wp-content/uploads/2020/06/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20.png'} rating={4} />
         <Product   id={2} title='NutriBullet blender combo will take your nutrition extraction to the next level with the versatility of both a multi-serving pitcher and a single ...' price={200.99} image={'https://media-www.canadiantire.ca/product/living/kitchen/kitchen-appliances/0432192/b-d-10-speed-blender-550w-42oz-glass-db558793-277a-43d6-8b17-ca588cca6e22.png?imwidth=1024'} rating={3}  />
        </div>
        <div>{sec}</div>
        {/* Add an intersection observer  */}
         <p ref={myRef}><h2 className={`h2 ${isVisible ? 'animate' : ''}`}>Hot deal's</h2></p>
        <div className="home_row">
        <Product  id={3} title='Brand: Apple
*5G only on Cellular model, iPad Pro features the powerful Apple M1 chip for next-level performance and all-day battery life.2 An immersive 12.9-inch ...' price={899.99} image={'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202104_FMT_WHH?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126626000'} rating={4}  />
        <Product  id={4} title='This Apple Watch is a unique combination of style and functionality that keeps you ahead of time with its unique features.
The Apple smartwatch also motivates you to be fit...' price={300.99} image={'https://static.toiimg.com/thumb/resizemode-4,msid-54128624,imgsize-200,width-1200/54128624.jpg'} rating={4}  />
        <Product  id={5} title="Original Apple AirPods 2 with Charging Case MV7N2ZM/A Apple's AirPods 2 will bring you never-before-seen music and media enjoyment. They're all you'll ..." price={400.99} image={'https://easybuygh.com/wp-content/uploads/2018/04/airpod.png'} rating={4}  />
        </div>

        <div className="home_row">
        <Product  id={6} title='Amazon... , Compatible with Amazon Alexa - Speaker and Control of Other Devices - Clear Sound - With 4 Long-range Microphones, The Echo Dot is a smart ...' price={399.99} image={'https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/SYAMDOT3NC_amazon_echo_dot_3rd_gen_smart_speaker_charcoal_fabric.jpg/resize?size=600&auth=MjA5OTcwODkwMg__'} rating={4}  />
        <Product  id={7} title='Technical DetailsApple Mac mini with Apple M1 ChipProcessor, Apple M1 chip 8-core CPU with 4 performance cores and 4 efficiency cores; 8-core GPU; ...' price={600.99} image={'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-spacegray-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1603580359000'} rating={4}  />
        <Product  id={8} title='Lileng 819 Mini USB fan has 3 blades that deliver refreshing air to you at home, in the shop and office, Ultra quite design, up and down adjustable ...' price={400.99} image={'https://img.fruugo.com/product/3/44/150169443_max.jpg'} rating={4}  />
        </div>

        <div className="home_row">
        <Product  id={6} title="Ideal for mobile device users wanting to take the next step with their photography, the EOS Rebel T7 camera combines fantastic features with..." price={300.99} image={'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323758_sd.jpg'} rating={4}  />
        <Product  id={7} title=' 5 year limited warranty. Read about the terms in the limited warranty brochure. Combination of microwave oven and fan for installation in a wall...' price={500.99} image={'https://www.ikea.com/us/en/images/products/medelniva-over-the-range-microwave-stainless-steel__0852294_pe780009_s5.jpg'} rating={4}  />
        <Product  id={8} title='This MacBook Pro has been professionally restored to working order by an approved vendor. It has been inspected, cleaned, and repaired to...' price={2500.99} image={'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207'} rating={4}  />
        </div>

        <div className="home_row">
        <Product  id={9} title='27-INCH CURVED MONITOR with an industry-leading 1800R curvature allows you to be fully immersed in the game experience3-SIDED FRAMELESS MONITOR ideal ...' price={599.99} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2T_auVrs8hthaymg9TSSPXQ8Jx6SsQZJ9hQ&usqp=CAU'} rating={4}  />
        </div>
      </div>
    </div>
  );
};

export default Home;
