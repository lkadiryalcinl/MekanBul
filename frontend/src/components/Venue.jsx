import { NavLink } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import { useNavigate } from "react-router-dom"
import AdminButton from "./AdminButton";
import { formatDistance } from "../services/Utils";
import React from "react";
import VenueDataService from "../services/VenueDataService";
const Venue = ({ venue, admin, dispatchVenues }) => {
  const navigate = useNavigate();

  const performClick = (evt) => {
    evt.preventDefault();
    if (evt.target.name === "Güncelle") {
      return navigate(`/admin/addupdate/venue/${venue._id}`,{state : {action:"update"}});
    } else if (evt.target.name === "Sil")
      VenueDataService.removeVenue(venue._id)
      dispatchVenues({ type: "REMOVE_VENUE", payload: venue });
      
  };
  return (
    <div className="list-group">
      <div className="col-xs-12 col-sm-12">
        <div className="col-xs-12 list-group-item">
          <h4>
            <NavLink to={`/venue/${venue.id}`}>{venue.name} </NavLink>
            <Rating rating={venue.rating} />
          </h4>
          <span className="span badge pull-right badge-default">
            {!admin ? formatDistance(venue.distance) : ""}
          </span>
          {admin ? (
            <AdminButton type="primary" name="Sil" onClick={performClick} />
          ) : (
            ""
          )}
          {admin ? (
            <AdminButton type="info" name="Güncelle" onClick={performClick} />
          ) : (
            ""
          )}
          <p className="address"> {venue.address}</p>
          <p>
            <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink} />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Venue;
