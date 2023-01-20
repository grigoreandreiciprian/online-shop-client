import React from "react";
import Data from "../../../Api";
import FooterMain from "../Footer/FooterMain";
import JSNavbar from "../Header/JSNavbar";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import Costumer from "../../../models/Costumer";
import Favorite from "../../../models/Favorite";
import FavoriteCard from "./FavoriteCard";

const Favorites: React.FC = () => {
  const api = new Data();
  const [cookies, setCookie] = useCookies(["authentificatedUser"]);
  const [user, setUser] = useState(Object);
  const [favoriteItems, setFavoriteItems] = useState(Object);

  const getFavs = async () => {
    const items = await api.getFavorites();

    if (user) {
      //@ts-ignore
      const favItems = items.filter((e: Favorite) => e.costumerId === user.id);
      setFavoriteItems(favItems);
    }
  };

  const findUser = async () => {
    const users = await api.getUsers();

    //@ts-ignore

    const user = users.filter(
      (e: Costumer) => e.id === cookies.authentificatedUser.id
    )[0];

    setUser(user);
  };

  useEffect(() => {
    findUser();
  }, []);

  useEffect(() => {
    getFavs();
  }, [user]);

  return (
    <div>
      <JSNavbar />
      <div className="featuredProducts">
        <h1>Your favorite products</h1>
        <div className="productCards">
          {favoriteItems.length > 0 ? (
            favoriteItems.map((e: Favorite) => {
              return <FavoriteCard favItem={e} key={e.id} />;
            })
          ) : (
            <p>No favorite items</p>
          )}
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default Favorites;
