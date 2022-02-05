import React from 'react';
import { Header, Footer, RecommendFood, AutoPlaySlider, RecommendAttract, RecommendActivity, Subscribe } from '../../components';

export const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <AutoPlaySlider />
      </div>
      <div className="page-content">
        <RecommendAttract />
      </div>
      <div className="page-content" style={{ backgroundColor: "#FAFAFA" }}>
        <RecommendActivity />
      </div>
      <div className="page-content">
        <RecommendFood />
      </div>
      <div className="page-content" style={{ backgroundColor: "rgba(118, 151, 99, 1)" }}>
        <Subscribe />
      </div>
      <Footer />
    </>
  )
}
