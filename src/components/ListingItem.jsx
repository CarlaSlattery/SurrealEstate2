import { Link } from "react-router-dom"
import { AiFillDelete } from "react-icons/ai"
import {BiBed, BiBath} from "react-icons/bi"



function ListingItem({listing, id}) {
    //console.log(listings)
  // Check if imgUrls array exists and has at least one item
  if (!listing || !listing.imgUrls || listing.imgUrls.length === 0) {
    return null; // Render nothing if the necessary data is missing
  }
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className="categroyListingImg"
        />
        <div className="categoryListingDetails">
            <p className="categoryListingLocation">{listing.location}</p>
            <p className="categoryListingName">{listing.name}</p>
            <p className="categoryListingPrice">{listing.offer ? listing.discountedPrice : listing.regularPrice}</p>
        </div>
      </Link>
    </li>
  );
}

export default ListingItem
