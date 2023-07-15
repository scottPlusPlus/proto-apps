"use client"

import ArrowWithHover from "@/src/agnostic/components/ArrowWithHover";
import { CssPropsCommon } from "@/src/frontCode/cssCommon";
import { useEffect, useState } from "react";
import { BirdActionButton } from "./BirdActionButton";

type Props = {
    onSubmitEmail?: (arg0: string) => void,
    cssCommon: CssPropsCommon,
}

export default function EmailFormBird(props: Props) {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        if (validateEmail(email)) {
            // Perform your desired action with the valid email
            console.log('Email submitted:', email);
            if (props.onSubmitEmail) {
                props.onSubmitEmail(email);
            } else {
                console.log('No onSubmitEmail handler');
            }
            setButtonDisabled(true);
        } else {
            setIsValidEmail(false);
        }
    };

    const validateEmail = (email: string): boolean => {
        // A simple email validation check using regular expression
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <div>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className={`form-input text-sm py-2 text-slate-800 ${!isValidEmail ? 'border-red-500' : ''
                            }`}
                        value={email}
                        required
                        onChange={handleEmailChange}
                    />

                    <BirdActionButton handle={handleSubmit} disabled={buttonDisabled}>
                        Join Waitlist
                        <ArrowWithHover />
                    </BirdActionButton>
                </div>
                {!isValidEmail && (
                    <p className="text-black mt-1">* Please enter a valid email</p>
                )}
            </div>
        </div>
    )
}