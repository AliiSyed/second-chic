import React from "react";
import "./ProductShop.css";
import ProductShopCard from "../../Components/ProductShopCard/ProductShopCard.jsx";
import Pagination from "../../Components/Pagination/Pagination.jsx";
import { IoIosStar } from "react-icons/io";
const ProductShop = () => {
  return (
    <div className="my-container">
      <div className="product-shop">
        <div className="product-shop-filter">
          <div className="product-shop-filter-section1">
            <h4>FILTERS</h4>
            <div>
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
            <h6>Uncategorized</h6>
            <h6>Electronic Accessories</h6>
            <h6>Women Fashion</h6>
            <h6>Mobine Accessories</h6>
            <h6>Computer Accessories</h6>
            <h6>Electronic Devices</h6>
            <h6>Babies & Toys</h6>
            <h6>Kid Fashion</h6>
            <h6>Fashion</h6>
            <h6>
              <b>See All</b>
            </h6>
          </div>
          <h3>Price Range</h3>
          <div className="product-shop-filter-section3">
            <div>
              <div>
                <p>Min.</p>
                <input placeholder="0" type="number" />
              </div>
              <div>
                <p>Max.</p>
                <input type="number" placeholder="850" />
              </div>
            </div>

            <button>Update</button>
          </div>
          <h3>B2B</h3>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="b2b" name="b2b" value="b2b" />
            <label for="vehicle1"> B2B Products Only</label>
            <br></br>
          </div>
          <h3>Color</h3>
          <div className="product-shop-filter-section5">
            <div>
              <input
                style={{ backgroundColor: "blue" }}
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              />
                <label for="html">Blue</label>
            </div>
            <div>
              <input
                style={{ backgroundColor: "black" }}
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              />
                <label for="html">Black</label>
            </div>
            <div>
              <input
                style={{ backgroundColor: "white" }}
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              />
                <label for="html">White</label>
            </div>
          </div>
          <h3>Type</h3>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> USB 3.0 Type-A</label>
            <br></br>
          </div>
          <h3>Material</h3>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Cotton</label>
            <br></br>
          </div>
          <h3>Size</h3>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">S</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">M</label>
            <br></br>
          </div>
          <div className="product-shop-filter-section4">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> L</label>
            <br></br>
          </div>
          <h3>Impedance</h3>
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
          <h4>See All</h4>
          <h3>Rating</h3>
          <div className="product-shop-filter-section6">
            <div>
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <p>0 Stars</p>
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
            <ProductShopCard
              profile="profile1.png"
              image="productShopCard1.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={true}
              rating={0}
            />
            <ProductShopCard
              profile="profile2.png"
              image="productShopCard2.png"
              text="Electronic Accessories"
              heading="USB Type C Cable 2 In 1 Fast Charging Cord Data Sync..."
              featured={true}
              rating={4}
            />
            <ProductShopCard
              profile="profile1.png"
              image="productShopCard3.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={true}
              rating={0}
            />
            <ProductShopCard
              profile="profile2.png"
              image="productShopCard4.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={false}
              rating={0}
            />
            <ProductShopCard
              profile="profile1.png"
              image="productShopCard5.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={true}
              rating={0}
            />
            <ProductShopCard
              profile="profile2.png"
              image="productShopCard6.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={true}
              rating={4.001}
            />
            <ProductShopCard
              profile="profile1.png"
              image="productShopCard7.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={true}
              rating={3.57}
            />
            <ProductShopCard
              profile="profile2.png"
              image="productShopCard8.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={false}
              rating={2.65}
            />
            <ProductShopCard
              profile="profile1.png"
              image="productShopCard9.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={true}
              rating={1}
            />
            <ProductShopCard
              profile="profile2.png"
              image="productShopCard10.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={true}
              rating={1.67}
            />
            <ProductShopCard
              profile="profile1.png"
              image="productShopCard11.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={false}
              rating={5}
            />
            <ProductShopCard
              profile="profile2.png"
              image="productShopCard12.png"
              text="Uncategorized"
              heading="dfsdfcd"
              featured={false}
              rating={0.6}
            />
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
