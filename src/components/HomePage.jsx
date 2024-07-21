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
  if (widget.type == "full_slider") return <Sliders data={widget.data} />;
  if (widget.type == "popular_brands_grid")
    return <Brands data={widget.data} />;
  if (widget.type == "products_ordered")
    return <BestingProducts data={widget.data} />;
  if (widget.type == "deep_links") return <Categories data={widget.data} />;
  if (widget.type == "fresh_shortcut")
    return <DigiPlusAmazing data={widget.data} />;
  if (widget.type == "products_cart") return <Offer data={widget.data} />;
  if (widget.type == "magazine_posts") return <Reading data={widget.data} />;
  if (widget.type == "main_categories_grid")
    return <SellingCategory data={widget.data} />;
  if (widget.type == "simple_banner" && widget.data.length == 4)
    return <FourBanner data={widget.data} height="240px" width={"100%"} />;
  if (widget.type == "simple_banner" && widget.data.length == 2)
    return <TwoBanner data={widget.data} height="240px" width={"100%"} />;
}

function HomePage() {
  const [widgets, setWidgets] = useState([]);
  useEffect(() => {
    const url = "https://api.digikala.com/v2/";
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function fetchBrand() {
      const response = await fetch(url, { signal });
      const data = await response.json();
      setWidgets(data.data.widgets);
    }
    fetchBrand();
    return () => {
      abortController.abort()
    }
  }, []);

  return (
    <>
      <svg style={{ display: 'none' }}>
        <symbol id="support" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></symbol>
      </svg>

      <div className="pop-up">
        <svg style={{ width: '24px', height: '24px', fill: '#fff' }} ><use href='#support'></use></svg>
      </div>
      <Header />
      <Stories />
      {widgets.map((widget, index) => (
        <Widget key={index} widget={widget} />
      ))}
      <hr />
      <Footer />
      <FooterResponsive />
    </>
  );
}
export default HomePage;
