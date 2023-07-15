"use client"

import { submitEmail } from "../frontCode/dataUtils"
import EmailForm from "./emailForm";

export default function ClientSubmitEmailForm() {
    
    function handleSubmitEmail(email: string): void {
        var ref = "ref=" + document.referrer;
        submitEmail(email, ref);
      }
    
    return (
        <EmailForm onSubmitEmail={handleSubmitEmail}></EmailForm>
    )
}