import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import AdminButton from "./AdminButton";
import Header from "./Header";
import VenueReducer from "../services/VenueReducer";
import VenueDataService from "../services/VenueDataService";

function AddUpdateVenue() {
  const { id } = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  const [venue, dispatchVenues] = React.useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  React.useEffect(() => {
    if (location.state.action == "update" && id) {
      dispatchVenues({ type: "FETCH_INIT" });
      try {
        VenueDataService.getVenue(id).then((result) => {
          dispatchVenues({
            type: "FETCH_SUCCESS",
            payload: result.data,
          });
        });
      } catch {
        dispatchVenues({ type: "FETCH_FAILURE" });
      }
    }
  }, []);

  const performClick = async (evt) => {
    evt.preventDefault();

    let formData = {
      name: evt.target[0].value,
      address: evt.target[1].value,
      foodanddrink: evt.target[2].value.split(","),
      lat: evt.target[3].value.split(",")[0],
      long: evt.target[3].value.split(",")[1],
      close1: evt.target[5].value.split(",")[1],
      day1: evt.target[4].value,
      isClosed1: id ? venue.data.hours[0].isClosed : false,
      open1: evt.target[5].value.split(",")[0],
      close2: evt.target[7].value.split(",")[1],
      day2: evt.target[6].value,
      isClosed2: id ? venue.data.hours[1].isClosed : false,
      open2: evt.target[7].value.split(",")[0],
      rating: id ? venue.data.rating : 0,
    };

    try {
      if (location.state.action === "update" && id)
        VenueDataService.updateVenue(id, formData);
      else if (location.state.action === "new")
        VenueDataService.addVenue(formData);

      navigate("/admin")
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <>
      {location.state.action == "new" ? (
        <Header headerText="Yönetici" motto="Yeni mekan ekleyin!" />
      ) : venue.isSuccess ? (
        <Header
          headerText="Yönetici"
          motto={venue.data.name + " mekanını güncelleyin!"}
        />
      ) : (
        <Header headerText="Yönetici" />
      )}

      <div className="col-xs-12 col-md-6">
        <form className="form-horizontal" id="addVenue" onSubmit={performClick}>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">Ad:</label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="name"
                defaultValue={venue.data.name ? venue.data.name : ""}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">Adres:</label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="address"
                defaultValue={venue.data.address ? venue.data.address : ""}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">
              İmkanlar:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="foodanddrink"
                defaultValue={
                  venue.data.foodanddrink ? venue.data.foodanddrink : ""
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">
              Enlem & Boylam:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="coordinates"
                defaultValue={
                  venue.data.coordinates
                    ? venue.data.coordinates[0] +
                      "," +
                      venue.data.coordinates[1]
                    : ""
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">
              Günler-1:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="day1"
                defaultValue={venue.data.hours ? venue.data.hours[0].days : ""}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">
              Açılış & Kapanış-1:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="openclose1"
                defaultValue={
                  venue.data.hours
                    ? venue.data.hours[0].open + "," + venue.data.hours[0].close
                    : ""
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">
              Günler-2:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="day2"
                defaultValue={venue.data.hours ? venue.data.hours[1].days : ""}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-10 col-sm-2 control-label">
              Açılış & Kapanış-2:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input
                className="form-control"
                name="openclose2"
                defaultValue={
                  venue.data.hours
                    ? venue.data.hours[1].open + "," + venue.data.hours[1].close
                    : ""
                }
              />
            </div>
          </div>
          {venue.data.name ? (
            <AdminButton name="Güncelle" type="primary" />
          ) : (
            <AdminButton name="Ekle" type="primary" />
          )}
        </form>
      </div>
    </>
  );
}

export default AddUpdateVenue;
