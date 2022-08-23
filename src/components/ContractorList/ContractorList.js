import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Contractor from "./Contractor";

const ContractorList = () => {
  const contractors = useSelector(({ contractors }) => contractors);
  return contractors.map((contractor, i) => (
    <Link
      to={`/contractor/${contractor.id}`}
      className="text-decoration-none"
      key={contractor.id}
    >
      <div key={i} className="my-1">
        <Contractor
          rating={contractor.rating}
          reviews={contractor.reviews}
          profileImg={contractor.profileImg}
          name={`${contractor.firstName} ${contractor.lastName}`}
          company={contractor.company}
        />
      </div>
    </Link>
  ));
};

export default ContractorList;
