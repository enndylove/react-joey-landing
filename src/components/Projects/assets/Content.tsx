import {IProjectContent} from "../../Interfaces";

// @ts-ignore
import IconRightArrow from "../../../images/icons/right-arrow.svg";

export default function Content(props: IProjectContent) {
    return (
        <div className="projects__content flex justify-between items-end">
            <div className="projects__content-block">
                <h2
                    className="projects__content-title wow animate__animated animate__fadeInUp"
                >
                    {props.title}
                </h2>
                <p
                    className="projects__content-description wow animate__animated animate__fadeIn"
                    style={{animationDelay: "0.6s"}}
                >
                    {props.description}
                </p>
            </div>
            <div className="projects__content-block">
                <a
                    href={props.link}
                    className="projects__content-btn flex items-center projects__content-title wow animate__animated animate__fadeIn animate__repeat-3"
                    style={{animationDelay: "0.3s"}}
                >
                    More
                    <span>
                        <img className="projects__content-btn-icon" src={IconRightArrow} alt="right-arrow-icon"/>
                    </span>
                </a>
            </div>
        </div>
    )
}