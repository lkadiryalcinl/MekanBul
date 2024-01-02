import Header from "./Header";
import VenueList from "./VenueList";
import VenueReducer from "../services/VenueReducer";
import VenueDataService from "../services/VenueDataService";
import React from "react";

function Admin() {
  const [venues, dispatchVenues] = React.useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    isDeleted: false,
  });

  React.useEffect(() => {
    dispatchVenues({ type: "FETCH_INIT" });
    try {
      VenueDataService.listAllVenues().then((result) => {
        dispatchVenues({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      });
    } catch {
      dispatchVenues({ type: "FETCH_FAILURE" });
    }
  }, [dispatchVenues])

  return (
    <>
      <Header headerText="Yönetici" motto="Mekanlarınızı Yönetin!" />
      {venues.isError ? (
        <p>
          <strong>Birşeyler ters gitti! ...</strong>
        </p>
      ) : venues.isLoading ? (
        <p>
          <strong>Mekanlar Yükleniyor ...</strong>
        </p>
      ) : (
        venues.isSuccess && (
          <div className="row">
            <VenueList
              venues={venues.data}
              admin={true}
              dispatchVenues={dispatchVenues}
            />
          </div>
        )
      )}
    </>
  );
}

export default Admin;
