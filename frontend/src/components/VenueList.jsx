import Venue from "./Venue";
import AdminButton from "./AdminButton";
import { useNavigate} from "react-router-dom"
import React from "react";
const VenueList = ({ venues, admin, dispatchVenues }) => {

  var navigate = useNavigate();
  const performClick = (evt) => {
    if (evt.target.name === "Mekan Ekle") {
      return navigate("/admin/addupdate/venue/new",{state : {action:"new"}});
    }
  };
  return (
    <div>
      {venues.map((venue, index) => (
        <Venue key={index} venue={venue} admin={admin} dispatchVenues={dispatchVenues}/>
      ))}

      {admin ? (
        <div className="col-xs-12 col-sm-12">
          <div className="row">
            <div className="column pull-right">
              <AdminButton
                name="Mekan Ekle"
                type="success"
                onClick={performClick}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default VenueList;
