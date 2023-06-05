import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiBed, BiBath } from "react-icons/bi";

function ListingItem({ listing, id, onDelete }) {
  console.log("Listing data:", listing);
  console.log("Listing type:", listing.type, listing.name, listing.bedrooms)
  // Check if imgUrls array exists and has at least one item
   if (!listing || !listing.imgUrls || listing.imgUrls.length === 0) {
  return null; // Render nothing if the necessary data is missing
   }
  
  return (
    <li className="categoryListing">
      console.log({listing.type})
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            £
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / Month"}
          </p>
          <div className="categoryListingInfo">
            <BiBed alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <BiBath alt="bath" />
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : "1 Bathroom"}
            </p>
          </div>
        </div>
      </Link>
      {onDelete && (
        <AiFillDelete onClick={() =>onDelete(listing.id, listing.name)} />
      )}
    </li>
  );
}

export default ListingItem;
