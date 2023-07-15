"use client"

import { ButtonProps, CssPropsCommon } from "@/src/frontCode/cssCommon";
import { ComponentType } from "react";
import React from 'react';


export function BirdActionButton(props: ButtonProps) {
    // Component implementation here
    return (
        <button type="submit" className="btn-sm inline-flex items-center text-white bg-yellow-500 hover:bg-green-500 group shadow-sm text-xl rounded-sm rounded-r-full" disabled={props.disabled} onClick={props.handle}>
            {props.children}
        </button>
    )
};
