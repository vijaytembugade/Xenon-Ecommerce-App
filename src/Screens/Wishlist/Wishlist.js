import React, { useEffect } from "react";
import WishListCart from "../../Components/WishListCart/WishListCart";
import { useWishList } from "../../Contexts";
import "./Wishlist.css";

const Wishlist = () => {
  const {
    state: { wishList },
  } = useWishList();

  return (
    <div className="wishlist-container">
      <h2>My wishlist</h2>
      <div class="wishlist-count">
        {wishList.length === 0 && "Your wishlist is Empty!"}
      </div>
      <div className="wishlist-products">
        {wishList.map((product) => {
          return <WishListCart product={product} />;
        })}
      </div>
    </div>
  );
};

export default Wishlist;
