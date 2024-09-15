import React from "react";
import DevLayout from "../../../ui/DevLayout";
import StatsCard from "./StatsCard";

export default function DevDashboard() {
  return (
    <DevLayout>
      <div className="wrap p-5 text-white">
        <div className="grid md:grid-cols-2 gap-7">
          <StatsCard
            primaryText={"Current Plan"}
            secondaryText={"Free"}
            info={"Your active Solpass subscription"}
          />
          <StatsCard
            primaryText={"Credit Usage"}
            secondaryText={"15/350,00"}
            info={"Credit used / Total Credit"}
          />
        </div>
      </div>
    </DevLayout>
  );
}
