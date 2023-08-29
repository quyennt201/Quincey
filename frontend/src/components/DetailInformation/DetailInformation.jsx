import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailInformation.css";
import "../../pages/HomePage/HomePage.css";
import CardItem from "../Card/CardItem";
import img1 from "../../assets/img/sale/sale1.jpg";
import imgSale1 from "../../assets/img/sale/sale1.jpg";
import productService from "../../services/ProductService";
import Loading from "../Loading/Loading";

function DetailInformation() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false)

  let lists = Object.keys(data);
  lists = lists.filter(
    (item) =>
      item == "name" ||
      item == "des" ||
      item == "category" ||
      item == "trademark" ||
      item == "style" ||
      item == "origin" ||
      item == "inventory"
  );

  const getData = async () => {
    setLoading(true)
    const res = await productService.getProductById(id);
    const res2 = await productService.getProducts();
    setData(res.data);
    setDatas(res2.data);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
    getData();
    window.scrollTo(0, 0)
  }, [id]);

  return (
    <div className="infor">
      {loading && <Loading />}
      <div className="infor-general c-infor">
        <div className="infor-general-img">
          <img src={data?.img} className="i-general-img-big" />
          <div className="i-share" style={{ marginTop: "20px" }}>
            <i
              class="fas fa-share"
              style={{ color: "#8a95a8", marginRight: "10px" }}
            ></i>
            <i
              class="fab fa-facebook-messenger"
              style={{ color: "#2369e1" }}
            ></i>
            <i class="fab fa-facebook" style={{ color: "#193971" }}></i>
            <i class="fab fa-pinterest" style={{ color: "#e13737" }}></i>
            <i class="fab fa-twitter" style={{ color: "#6899ee" }}></i>
          </div>
        </div>
        <div className="infor-general-txt">
          <h2 className="i-general-des">{data?.des}</h2>
          <div className="i-general-review">
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "#D8D9DA" }}></i>
            <p style={{ color: "var(--star-color)" }}>(1000+ Reviewrs)</p>
          </div>
          <p className="i-general-price">${data?.price}</p>
          <div className="i-general-infor">
            <div className="i-general-infor-form">
              <p className="i-label">category</p>
              <p className="i-txt">{data?.category}</p>
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">style</p>
              <p className="i-txt">{data?.style}</p>
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">trademark</p>
              <p className="i-txt">{data?.trademark}</p>
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">Color</p>
              {data?.color?.map((c) => (
                <button className="i-item">{c}</button>
              ))}
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">size</p>
              {data?.size?.map((c) => (
                <button className="i-item">{c}</button>
              ))}
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">quantity</p>
              <div className="i-input-quantity">
                <button className="i-input-select">
                  <i class="fas fa-minus"></i>
                </button>
                <input type="text" className="i-input-display" value="1" />
                <button className="i-input-select">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="i-general-btn">
            <button className="i-general-btn-add i-btn">
              <i class="fas fa-cart-plus"></i> Add to cart
            </button>
            <button className="i-general-btn-buy i-btn">Buy now</button>
          </div>
        </div>
      </div>
      <div className="infor-detail c-infor">
        <div className="i-title">Product details</div>
        <div className="infor-detail-txt">
          {lists.map((a) => (
            <div className="i-general-infor-form">
              <p className="i-label">{a}</p>
              <p className="i-txt">{data[a]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="infor-des c-infor">
        <div className="i-title">Product description</div>
        <div className="infor-des-txt">
          <h3>Men’s Workout Clothing</h3>
          <p>
            Our shirts are perfect for all your workout needs. With advanced
            moisture-wicking technology and quick dry design, you’ll have your
            shirt ready to wear right after your workout. Sweat condensation is
            eliminated while you train with this shirt. It is easy to wash, and
            you won’t have to worry about shrinkage!
          </p>
          <br />
          <h3>Men’s Tshirts</h3>
          <p>
            These t-shirts are a comfortable and durable alternative to standard
            cotton tees. It’s designed to be worn all day by the man in demand.
            This classic design will keep you looking presentable on the go with
            a gentle fabric for comfort all day. You won’t perform at your best
            if you’re irritated by your clothing. This sleek take on a
            well-loved classic features a tried and tested spread collar and
            slim fit.
          </p>
          <br />
          <h3>Summer Dresses</h3>
          <p>
            Turn heads this summer with the perfect set of summer dresses. Our
            dresses are designed to make you feel like the confident, stylish
            woman you were destined to be. The Lace Reflection Dresses are lined
            with soft, breathable tulle fabric and adorned with airy lace. They
            feature classical detailing in a range of colors, letting you bring
            a classic touch to summer trends. The skirt length is low enough to
            be modest but just high enough to give your legs a more extended and
            slimmer look. It can be perfectly paired with your favorite pair of
            flats because of its length.
          </p>
          <br />
          <h3>Sleepwear</h3>
          <p>
            Get the comfortable sleep you deserve after a long hard day. Our
            sleepwear has premium quality. They are soft as a cloud and
            breathable. Find comfort and style in our warm flannel pajamas, cozy
            cardigans, and pajama sets. Start your day refreshed and relaxed
            with our modern-day comfort.
          </p>
          <br />
          <h3>Suits</h3>
          <p>
            Want to look sharp for an event? If so, our suits are the perfect
            fit. They are unmatched in sophistication and style. These are made
            of high-grade material that is not only sleek and shiny but also
            breathable and comfortable. These are custom-built suits for
            game-changers. It’s slim fit and has accentuated shoulders that give
            a classic style. How you dress affects how people perceive you, and
            with this suit, they will see you as the boss.
          </p>
          <br />
          <h3>Jackets and Sweaters</h3>
          <p>
            The cold won’t bother you anymore when you wear one of our jackets
            and sweaters. They’re made of the most durable materials and are
            superbly dense to keep you warm even on the coldest nights. As an
            added extra, we’ve also constructed them with a comfortable fabric
            that wicks moisture away from your body. It stops you from feeling
            that usual, odd chill.
          </p>
          <br />
          <h3>Evening Dresses</h3>
          <p>
            Evening events are the prime time for clothing. Go to your dinner
            date in style with a dress that will make jaws drop. Our dresses are
            made from lightweight fabric and highlighted with delicate
            detailing. You can choose from a variety of sweetheart neckline
            dresses, sparkle dresses, wrap dresses, midi dresses, and evening
            dresses covered with sequins. They come in various colors, helping
            you match your dressing style with your moods.
          </p>
          <br />
        </div>
      </div>
      <div className="infor-more more">
        <div className="more-title">Discover More</div>
        <div className="more-item">
          {datas?.map((d) => (
            <CardItem
              _id={d._id}
              style={{ margin: "10px" }}
              img={d.img[0]}
              cost={d.price}
              des={d.des}
              name="detail"
            />
          ))}
        </div>
        <div className="more-button">
          <button>
            View More
            <i class="fas fa-angle-down" style={{ marginLeft: "20px" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailInformation;
