'use client'

import React from "react";
import { solarData } from "@/app/(constants)/solar";
import ProductLayout from "../layout";

const SolarPage = () => {
    return <ProductLayout {...solarData} />;
};

export default SolarPage;