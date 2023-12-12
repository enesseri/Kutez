// App.jsx
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Container from "./components/Container";
import "./index.css";


function App() {
  const buttonsColors = [
    { color: "#E6CA97", variant: "altin" },
    { color: "#D9D9D9", variant: "gumus" },
    { color: "#E1A4A9", variant: "bronz" },
  ];

  const products = {
    product: [
      {
        id: 1,
        name: "Engagement Ring 1",
        colors: ["#E6CA97", "#D9D9D9", "#E1A4A9"],
        checkImg: {
          bronz: true,
          altin: false,
          gumus: false,
        },
        price: "$101.00 USD",
        linkImage: {
          bronz: "/img/Products/EG009/EG-bronz.jpg",
          altin: "/img/Products/EG009/EG-altin.jpg",
          gumus: "/img/Products/EG009/EG-gumus.jpg",
        },
      },
      {
        id: 2,
        name: "Engagement Ring 2",
        colors: ["#E6CA97", "#D9D9D9", "#E1A4A9"],
        checkImg: {
          bronz: true,
          altin: false,
          gumus: false,
        },
        price: "$101.00 USD",
        linkImage: {
          bronz: "/img/Products/EG012/EG012-bronz.jpg",
          altin: "/img/Products/EG012/EG012-altin.jpg",
          gumus: "/img/Products/EG012/EG012-gumus.jpg",
        },
      },
      {
        id: 3,
        name: "Engagement Ring 3",
        colors: ["#E6CA97", "#D9D9D9", "#E1A4A9"],
        checkImg: {
          bronz: true,
          altin: false,
          gumus: false,
        },
        price: "$101.00 USD",
        linkImage: {
          bronz: "/img/Products/EG020/EG020-bronz.jpg",
          altin: "/img/Products/EG020/EG020-altin.jpg",
          gumus: "/img/Products/EG020/EG020-gumus.jpg",
        },
      },
      {
        id: 4,
        name: "Engagement Ring 4",
        colors: ["#E6CA97", "#D9D9D9", "#E1A4A9"],
        price: "$101.00 USD",
        checkImg: {
          bronz: true,
          altin: false,
          gumus: false,
        },
        linkImage: {
          bronz: "/img/Products/EG022/EG022-bronz.jpg",
          altin: "/img/Products/EG022/EG022-altin.jpg",
          gumus: "/img/Products/EG022/EG022-gumus.jpg",
        },
      },
      {
        id: 5,
        name: "Engagement Ring 5",
        colors: ["#E6CA97", "#D9D9D9", "#E1A4A9"],
        checkImg: {
          bronz: true,
          altin: false,
          gumus: false,
        },
        price: "$101.00 USD",
        linkImage: {
          bronz: "/img/Products/EG074/EG074-bronz.jpg",
          altin: "/img/Products/EG074/EG074-altin.jpg",
          gumus: "/img/Products/EG074/EG074-gumus.jpg",
        },
      },
      {
        id: 6,
        name: "Engagement Ring 6",
        colors: ["#E6CA97", "#D9D9D9", "#E1A4A9"],
        checkImg: {
          bronz: true,
          altin: false,
          gumus: false,
        },
        price: "$101.00 USD",
        linkImage: {
          bronz: "/img/Products/EG075/EG075-bronz.jpg",
          altin: "/img/Products/EG075/EG075-altin.jpg",
          gumus: "/img/Products/EG075/EG075-gumus.jpg",
        },
      },
      {
        id: 7,
        name: "Engagement Ring 7",
        colors: ["#E6CA97", "#D9D9D9", "#E1A4A9"],
        price: "$101.00 USD",
        linkImage: {
          bronz: "/img/Products/EG094/EG094-bronz.jpg",
          altin: "/img/Products/EG094/EG094-altin.jpg",
          gumus: "/img/Products/EG094/EG094-gumus.jpg",
        },
        checkImg: {
          bronz: true,
          altin: false,
          gumus: false,
        },
      },
      {
        id: 8,
        name: "Engagement Ring 8",
        colors: ["#E6CA97", "#D9D9D9", "#E1A4A9"],
        checkImg: {
          bronz: true,
          altin: false,
          gumus: false,
        },
        price: "$101.00 USD",
        linkImage: {
          bronz: "/img/Products/EG115/EG115-bronz.jpg",
          gumus: "/img/Products/EG115/EG115-gumus.jpg",
          altin: "/img/Products/EG115/EG115-altin.jpg",
        },
      },
    ],
  };

  const priceStyle = {
    fontFamily: 'font-montserrat-medium',
    fontSize: '17pt', 
  };

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(popupTimer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="outer-container mx-auto p-12" style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
      <div className="inner-content">
        <Header />
        <Container />
        <div className="">
          <Slider products={products.product} buttonsColors={buttonsColors} style={priceStyle}/>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <p>BU BİR REKLAMDIR</p>
            <button onClick={closePopup}>Kapat...</button>
          </div>
        </div>
      )}
    </div>
  );

}

export default App;
