import React, { useState, useEffect } from "react";
import Header from "./Haeder";
import Offer from "./Offer";
import DigiPlusAmazing from "./DigiPlusAmazing";
import SellingCategory from "./SellingCategory";
import Brands from "./Brands";
import BestingProducts from "./BestingProducts";
import Reading from "./Reading";
import Footer from "./Footer";
import Sliders from "./Sliders";
import Stories from "./Stories";
import FooterResponsive from "./FooterResponsive";
import Categories from "./Cateories";
import FourBanner from "./FourBanner";
import TwoBanner from "./TwoBanner";

function Widget({ widget }) {
  if (widget.type == "mega-menu") return <Header data={widget.data} />;
  if (widget.type == "stories") return <Stories data={widget.data} />;
  if (widget.type == "full_slider") return <Sliders data={widget.data} />;
  if (widget.type == "deep_links") return <Categories data={widget.data} />;
  if (widget.type == "products_cart") return <Offer data={widget.data} />;
  if (widget.type == "fresh_shortcut")
    return <DigiPlusAmazing data={widget.data} />;
  if (widget.type == "simple_banner" && widget.data.length == 4)
    return <FourBanner data={widget.data} height="240px" width={"100%"} />;
  if (widget.type == "main_categories_grid")
    return <SellingCategory data={widget.data} />;
  if (widget.type == "simple_banner" && widget.data.length == 2)
    return <TwoBanner data={widget.data} height="240px" width={"100%"} />;
  if (widget.type == "popular_brands_grid")
    return <Brands data={widget.data} />;
  if (widget.type == "products_ordered")
    return <BestingProducts data={widget.data} />;
  if (widget.type == "magazine_posts") {
    return (
      <>
        <Reading data={widget.data} />
        <Footer />
        <FooterResponsive />
      </>
    )
  }
}

function HomePage() {
  const [widgets, setWidgets] = useState([]);
  useEffect(() => {
    const url = 'https://run.mocky.io/v3/1e5c67ad-39f4-4060-820a-7a44d2271b0e'
    // const url = '../Digikala/public/data.json'
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function fetchBrand() {
      const response = await fetch(url, { signal });
      const data = await response.json();
      setWidgets(data.data);
    }
    fetchBrand();
    return () => {
      abortController.abort()
    }
  }, []);
  const styles = {
    fontSize: '24px',
    color: '#fff'
  }
  return (
    <>
      <div className="pop-up">
        <i className="cube-comm-support" style={styles}></i>
      </div>
      {/* <div><p>اگه صفحه باز نشد احتمالا url از بین رفته!!</p></div> */}
      {widgets.map((widget, index) => (
        <Widget key={index} widget={widget} />
      ))}
    </>
  );
}
export default HomePage;
