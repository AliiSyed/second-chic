import React, { useState } from "react";
import "./ProductShop.css";
import ProductShopCard from "../../Components/ProductShopCard/ProductShopCard.jsx";
import Pagination from "../../Components/Pagination/Pagination.jsx";
import { IoIosStar } from "react-icons/io";
import productsData from "../../Data/product.json";
const ProductShop = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [activeType, setActiveType] = useState([]);
  const [activeMaterial, setActiveMaterial] = useState([]);
  const [activeSize, setActiveSize] = useState([]);

  const [filterData, setFilterData] = useState(productsData.products);

  const [rating, setRating] = useState(0);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  const handleFilteration = (
    category,
    minPrice,
    maxPrice,
    rating,
    color,
    type,
    material,
    size
  ) => {
    setFilterData(productsData.products);

    let filteredData = productsData.products.filter((item) => {
      console.log("size", size);
      console.log("size", item.size);
      console.log("size", size.includes(item.size) || size.length === 0);
      return (
        (item.category === category || category === "") &&
        item.price >= minPrice &&
        item.price <= maxPrice &&
        item.rating >= rating &&
        (item.color === color || color === "") &&
        (type.includes(item.type) || type.length === 0) &&
        (material.includes(item.material) || material.length === 0) &&
        (size.includes(item.size) || size.length === 0)
      );
    });
    setFilterData(filteredData);
  };

  const hanldeActivePrice = () => {
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      activeMaterial,
      activeSize
    );
  };

  const handleActiveCategory = (e) => {
    setActiveCategory(e.target.innerHTML);
    handleFilteration(
      e.target.innerHTML,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      activeMaterial,
      activeSize
    );
  };

  const handleActiveRating = (value) => {
    setRating(value);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      value,
      activeColor,
      activeType,
      activeMaterial,
      activeSize
    );
  };

  const handleActiveColor = (value) => {
    setActiveColor(value);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      value,
      activeType,
      activeMaterial,
      activeSize
    );
  };

  const handleActiveType = (value) => {
    let newValue = activeType;
    newValue = newValue.includes(value)
      ? newValue.filter((item) => item !== value)
      : [...newValue, value];
    setActiveType(newValue);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      newValue,
      activeMaterial,
      activeSize
    );
  };
  const handleActiveMaterial = (value) => {
    let newValue = activeMaterial;
    newValue = newValue.includes(value)
      ? newValue.filter((item) => item !== value)
      : [...newValue, value];
    setActiveMaterial(newValue);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      newValue,
      activeSize
    );
  };
  const handleActiveSize = (value) => {
    let newValue = activeSize;
    newValue = newValue.includes(value)
      ? newValue.filter((item) => item !== value)
      : [...newValue, value];
    setActiveSize(newValue);
    handleFilteration(
      activeCategory,
      minPrice,
      maxPrice,
      rating,
      activeColor,
      activeType,
      activeMaterial,
      newValue
    );
  };
  const hanldleResetFilter = () => {
    setFilterData(productsData.products);
    setActiveCategory("");
    setActiveColor("");
    setActiveType([]);
    setActiveMaterial([]);
    setActiveSize([]);
    setRating(0);
    setMinPrice(0);
    setMaxPrice(5000);
  };

  return (
    <div className="my-container">
      <div className="product-shop">
        <div className="product-shop-filter">
          <div className="product-shop-filter-section1">
            <h4>FILTERS</h4>
            <div onClick={hanldleResetFilter}>
              <p>Clear All</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                  fill="#898989"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L0.292893 6.29289C-0.0976315 6.68342 -0.0976315 7.31658 0.292893 7.70711C0.683417 8.09763 1.31658 8.09763 1.70711 7.70711L7.70711 1.70711C8.09763 1.31658 8.09763 0.683417 7.70711 0.292893Z"
                  fill="#898989"
                ></path>
              </svg>
            </div>
          </div>
          <h3>Realted Categories</h3>
          <div className="product-shop-filter-section2">
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Uncategorized" ? { color: "#444444" } : {}
              }
            >
              Uncategorized
            </h6>
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Electronic Accessories"
                  ? { color: "#444444" }
                  : {}
              }
            >
              Electronic Accessories
            </h6>
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Women Fashion" ? { color: "#444444" } : {}
              }
            >
              Women Fashion
            </h6>
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Mobile Accessories"
                  ? { color: "#444444" }
                  : {}
              }
            >
              Mobile Accessories
            </h6>
            <h6
              onClick={handleActiveCategory}
              style={
                activeCategory === "Computer Accessories"
                  ? { color: "#444444" }
                  : {}
              }
            >
              Computer Accessories
            </h6>
          </div>
          <h3>Price Range</h3>
          <div className="product-shop-filter-section3">
            <div>
              <div>
                <p>Min.</p>
                <input
                  onChange={(e) => setMinPrice(e.target.value)}
                  value={minPrice}
                  placeholder="0"
                  type="number"
                />
              </div>
              <div>
                <p>Max.</p>
                <input
                  onChange={(e) => setMaxPrice(e.target.value)}
                  value={maxPrice}
                  type="number"
                  placeholder="850"
                />
              </div>
            </div>

            <button onClick={hanldeActivePrice}>Update</button>
          </div>
          <h3>Color</h3>
          <div className="product-shop-filter-section5">
            <div>
              <input
                onClick={() => handleActiveColor("Blue")}
                style={{ backgroundColor: "blue" }}
                type="radio"
                id="id_blue"
                name="fav_language"
                value="Blue"
              />
                <label for="id_blue">Blue</label>
            </div>
            <div>
              <input
                onClick={() => handleActiveColor("Black")}
                style={{ backgroundColor: "black" }}
                type="radio"
                id="id_black"
                name="fav_language"
                value="HTML"
              />
                <label for="id_black">Black</label>
            </div>
            <div>
              <input
                onClick={() => handleActiveColor("White")}
                style={{ backgroundColor: "white" }}
                type="radio"
                id="id_white"
                name="fav_language"
                value="HTML"
              />
                <label for="id_white">White</label>
            </div>
          </div>
          <h3>Type</h3>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveType("T-shirt")}
              type="checkbox"
              id="id_t-shirt"
            />
            <label for="id_t-shirt">T-shirt</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveType("Trouser")}
              type="checkbox"
              id="id_trouser"
            />
            <label for="id_trouser">Trouser</label>
            <br></br>
          </div>

          <h3>Material</h3>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveMaterial("Cotton")}
              type="checkbox"
              id="id_cotton"
            />
            <label for="id_cotton">Cotton</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveMaterial("Fabric")}
              type="checkbox"
              id="id_fabric"
            />
            <label for="id_fabric">Fabric</label>
            <br></br>
          </div>
          <h3>Size</h3>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("S")}
              type="checkbox"
              id="id_s"
            />
            <label for="id_s">S</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("M")}
              type="checkbox"
              id="id_m"
            />
            <label for="id_m">M</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input
              onClick={() => handleActiveSize("L")}
              type="checkbox"
              id="id_l"
            />
            <label for="id_l">L</label>
            <br></br>
          </div>
          {/* <h3>Impedance</h3>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> 32 Ω</label>
            <br></br>
          </div>
          <h3>Brand</h3>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">Samsung</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Infinix</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Yellow</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Aarong</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Walton</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Huawei</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Realme</label>
            <br></br>
          </div>
          <h4>See All</h4> */}
          <h3>Rating</h3>
          <div className="product-shop-filter-section6">
            <div>
              <IoIosStar
                className={rating >= 1 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(1)}
              />
              <IoIosStar
                className={rating >= 2 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(2)}
              />
              <IoIosStar
                className={rating >= 3 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(3)}
              />
              <IoIosStar
                className={rating >= 4 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(4)}
              />
              <IoIosStar
                className={rating >= 5 ? "yellowstars" : "graystar"}
                onClick={() => handleActiveRating(5)}
              />
            </div>
            <p>{rating} Stars</p>
          </div>
        </div>
        <div className="product-shop-items">
          <div className="products-shop-items-header">
            <h2>77 products found</h2>
            <div>
              <div>
                <p>Sort Bt:</p>
                <select id="cars" name="carlist" form="carform">
                  <option value="volvo">Price Low to High</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div>
                <p>Showing</p>
                <select id="cars" name="carlist" form="carform">
                  <option value="volvo">12</option>
                  <option value="saab">1</option>
                  <option value="opel">13</option>
                  <option value="audi">10</option>
                </select>
              </div>
              <svg
                class="-mb-5p -ml-3p"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H5.42857V5.42857H0V0Z" fill="currentColor"></path>
                <path
                  d="M6.78564 0H12.2142V5.42857H6.78564V0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M13.5713 0H18.9999V5.42857H13.5713V0Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M13.5713 6.78564H18.9999V12.2142H13.5713V6.78564Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0 13.5715H5.42857V19.0001H0V13.5715Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.78564 13.5715H12.2142V19.0001H6.78564V13.5715Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M13.5713 13.5715H18.9999V19.0001H13.5713V13.5715Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0 6.78564H5.42857V12.2142H0V6.78564Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.78564 6.78564H12.2142V12.2142H6.78564V6.78564Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                class="-mb-5p neg-transition-scale"
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.78564 0H23.0714V5.42857H6.78564V0Z"
                  fill="currentColor"
                ></path>
                <path d="M0 0H5.42857V5.42857H0V0Z" fill="currentColor"></path>
                <path
                  d="M0 6.78564H5.42857V12.2142H0V6.78564Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0 13.5715H5.42857V19.0001H0V13.5715Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.78564 6.78564H23.0714V12.2142H6.78564V6.78564Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.78564 13.5715H23.0714V19.0001H6.78564V13.5715Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="products-shop-items-content">
            {filterData?.map((item) => {
              return (
                <ProductShopCard
                  profile="profile1.png"
                  image="productShopCard1.png"
                  text={item.category}
                  heading="dfsdfcd"
                  featured={true}
                  rating={item.rating}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className="product-ship-pagination">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShop;
