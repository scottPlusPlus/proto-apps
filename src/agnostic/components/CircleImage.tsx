import { overideTailwindCssClasses } from "../utils/cssUtils";

export type CircleImageProps = {
    src: string,
    alt: string,
    radius: number,
    cssBorderOverride: string,
}

export default function CircleImage(props: CircleImageProps) {

    var cssBorder = "border-solid border-2 border-sky-500";
    cssBorder = overideTailwindCssClasses(cssBorder, props.cssBorderOverride);


    const containerStyle = {
        width: `${props.radius}px`,
        height: `${props.radius}px`,
        position: 'relative' as 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
        // border: `${props.borderWidth.toString()}px solid ${props.borderColor}`,
    };

    const imageStyle = {
        objectFit: 'cover' as 'cover',
        height: '100%'

    };

    return (
        <div style={containerStyle} className={cssBorder}>
            <img
                src={props.src}
                alt={props.alt}
                style={imageStyle}
                />
        </div>
    );
};