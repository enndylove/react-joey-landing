import {IProjectContent} from "../../Interfaces";

// @ts-ignore
import IconRightArrow from "../../../images/icons/right-arrow.svg";

export default function Content(props: IProjectContent) {
    return (
        <div className="projects__content flex justify-between items-end">
            <div className="projects__content-block">
                <h2 className="projects__content-title">
                    {props.title}
                </h2>
                <p className="projects__content-description">
                    {props.description}
                </p>
            </div>
            <div className="projects__content-block">
                <a href={props.link} className="projects__content-btn flex items-center">
                    More
                    <span>
                        <img className="projects__content-btn-icon" src={IconRightArrow} alt="right-arrow-icon"/>
                    </span>
                </a>
            </div>
        </div>
    )
}