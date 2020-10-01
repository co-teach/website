import { Partner } from "../../models/Partner";
import React from "react";

const PartnerLink = ({ partner }: { partner: Partner | null }) => {
  return <a href={partner?.website?.toString() || "#"}>{partner?.name}</a>;
};

export default PartnerLink;
