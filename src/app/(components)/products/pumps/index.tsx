'use client'

import React from "react";
import { pumpsData } from "@/app/(constants)/pumps";
import ProductLayout from "../layout";

const PumpsPage = () => {
    return <ProductLayout {...pumpsData} />;
};

export default PumpsPage;