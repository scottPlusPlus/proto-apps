"use client"

import { submitAnalytics } from "../frontCode/dataUtils"
import Observer from "./Observer"

export default function AnalyticObserver(props: { name: string}) {
    
    function onObserve():void {
        submitAnalytics(props.name, "");
    }
    
    return (
        <Observer onFirstObserve={onObserve} ></Observer>
    )
}