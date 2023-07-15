"use client"

import BandImage from '@/public/images//rock/bloodywood.jpg'
import Anberlin from '@/public/images//rock/anberlin_square.jpg'
import CheckMarkSVG from '@/src/agnostic/components/CheckMarkSVG';
import { ChangeEventHandler, useState } from 'react';

export default function PreviewPage() {

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="max-w-md bg-gray-800 rounded-lg p-8">
                    <img
                        className="mx-auto mb-4"
                        src={BandImage.src}
                        alt="Rock"
                    />
                    <input
                        className="w-full px-4 py-2 rounded-md mb-4 bg-gray-700 text-white placeholder-gray-500"
                        type="text"
                        placeholder="Enter your name"
                    />
                    <div className="flex justify-between">
                        <div>
                            <CheckBoxC label="Concerts" />
                            <CheckBoxC label="Albums" />
                        </div>
                        <div>
                            <CheckBoxC label="Notify immediately" />
                            <CheckBoxC label="Send in Weekly Digest " />
                            <CheckBoxC label="Add to my Calendar" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="max-w-md bg-gray-800 rounded-lg">
                    <ConcertItem
                        imageSrc={Anberlin.src}
                        title="Bloodywood"
                        dateTxt="Wed, Aug 2"
                        line2Txt="San Francisco"
                        line3Txt="Bill Graham Civic Auditorium" />
                    <ConcertItem
                        imageSrc={Anberlin.src}
                        title="Bloodywood"
                        dateTxt="Wed, Aug 2"
                        line2Txt="San Francisco"
                        line3Txt="Bill Graham Civic Auditorium" />
                    <ConcertItem
                        imageSrc={Anberlin.src}
                        title="Bloodywood"
                        dateTxt="Wed, Aug 2"
                        line2Txt="San Francisco"
                        line3Txt="Bill Graham Civic Auditorium" />
                </div>
            </div>
        </>
    )
}

interface CheckboxProps {
    label: string;
}


function CheckBoxC(props: CheckboxProps) {
    return (
        <label className="flex items-center space-x-2 py-1">
            <CustomCheck />
            <span className="text-white">{props.label}</span>
        </label>
    );
}


function CustomCheck() {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="inline-flex items-center">
            <input
                type="checkbox"
                className="form-checkbox h-6 w-6"
                checked={false}
                onChange={handleCheckboxChange}
            />
            {isChecked && (
                <div className="absolute h-6 w-6">
                    <div className="absolute bottom-0 -left-1">
                        <CheckMarkSVG width={40} height={40} color={'#ef950e'} />
                    </div>
                </div>
            )}
        </label>
    );
};


interface ConcertItemProps {
    imageSrc: string,
    title: string,
    dateTxt: string,
    line2Txt: string,
    line3Txt: string
}

function ConcertItem(props: ConcertItemProps) {


    const cssBandName = "text-lg font-semibold text-white";
    const cssSmallTxt = "text-sm text-gray-400";

    return (
        <div className="flex items-center justify-between p-4">
            <div className="w-24 h-24 mr-4">
                <img
                    className="object-cover w-full h-full rounded-md"
                    src={props.imageSrc}
                    alt="Concert"
                />
            </div>
            <div className="flex-1 mr-4">
                <h2 className={cssBandName + " mb-2"}>{props.title}</h2>
                <p className={cssSmallTxt}>{props.dateTxt}</p>
                <p className={cssSmallTxt}>{props.line2Txt}</p>
                <p className={cssSmallTxt}>{props.line3Txt}</p>
            </div>
            <div className="flex flex-col items-end mt-auto">
                <button className="px-4 py-2 text-white bg-amber-500 rounded-md">
                    Tickets
                </button>
            </div>
        </div>
    );
}