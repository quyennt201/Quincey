import React from "react";
import "./HomePage.css";
import CardCategoryShop from "../../components/Card/CardCategoryShop";
import CardCategoryName from "../../components/Card/CardCategoryName";
import CardSale from "../../components/Card/CardSale";
import CardItem from "../../components/Card/CardItem";
import imgMen from "../../assets/img/categoryshop/men.jpg";
import imgWomen from "../../assets/img/categoryshop/women.webp";
import imgKid from "../../assets/img/categoryshop/kid.jpg";
import imgLady from "../../assets/img/categoryshop/lady.avif";
import imgGentleman from "../../assets/img/categoryshop/gentleman.jpg";
import imgJean from "../../assets/img/categoryname/jean.jpg";
import imgShirt from "../../assets/img/categoryname/shirt.jpg";
import imgTShirt from "../../assets/img/categoryname/tshirt.jpg";
import imgDress from "../../assets/img/categoryname/dress.jpg";
import imgHoodie from "../../assets/img/categoryname/hoodie.jpg";
import imgSale1 from "../../assets/img/sale/sale1.jpg";

function HomePage() {
  return (
    <div className="homepage">
      <div className="category">
        <div className="category-title">Shop By Category</div>
        <div className="category-shop">
          <CardCategoryShop img={imgMen} text="Men" path="/men" />
          <CardCategoryShop img={imgWomen} text="Women" path="/women" />
          <CardCategoryShop img={imgKid} text="Kid" />
          <CardCategoryShop img={imgLady} text="Lady" />
          <CardCategoryShop img={imgGentleman} text="Gentlemen" />
        </div>
        <div className="category-name">
          <CardCategoryName img={imgJean} text="jean" />
          <CardCategoryName img={imgHoodie} text="hoodie" />
          <CardCategoryName img={imgDress} text="dress" />
          <CardCategoryName img={imgShirt} text="shirt" />
          <CardCategoryName img={imgTShirt} text="t-shirt" />
          <CardCategoryName img={imgJean} text="jean" />
          <CardCategoryName img={imgHoodie} text="hoodie" />
          <CardCategoryName img={imgDress} text="dress" />
          <CardCategoryName img={imgShirt} text="shirt" />
          <CardCategoryName img={imgTShirt} text="t-shirt" />
        </div>
      </div>
      <div className="sale">
        <div className="sale-title">FLASH SALE</div>
        <div className="sale-item">
          <CardSale cost="3.27" sale="7.44" percent="50" img={imgSale1} />
          <CardSale cost="6.47" sale="9.00" percent="50" img={imgSale1} />
          <CardSale cost="3.44" sale="4.78" percent="50" img={imgSale1} />
          <CardSale cost="3.27" sale="7.44" percent="50" img={imgSale1} />
          <CardSale cost="6.47" sale="9.00" percent="50" img={imgSale1} />
          <CardSale cost="3.44" sale="4.78" percent="50" img={imgSale1} />
        </div>
      </div>
      <div className="more">
        <div className="more-title">Discover More</div>
        <div className="more-item">
          <CardItem img={imgSale1} cost="4.33" des="so beautifulrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
          <CardItem img={imgSale1} cost="4.33" des="so beautiful" />
        </div>
        <div className="more-button">
          <button>View More<i class="fas fa-angle-down" style={{marginLeft: "20px"}}></i></button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
