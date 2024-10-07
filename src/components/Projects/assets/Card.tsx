import { IProjectCard } from "../../Interfaces";

export default function Card(card: IProjectCard) {
    return (
        <div className="projects__card" key={card.id}>
            <img
                className="projects__card-img wow animate__animated animate__fadeIn"
                style={{animationDelay: "0.2s"}}
                loading={"lazy"}
                src={require(`./images/${card.imageName}.png`)}
                alt={`Image ${card.title}`}
            />
            <h6
                className="projects__card-title wow animate__animated animate__fadeInUp"
                style={{animationDelay: "0.4s"}}
            >
                {card.title}
            </h6>
            <p
                className="projects__card-description wow animate__animated animate__fadeInUp"
                style={{animationDelay: "0.6s"}}
            >
                {card.description}
            </p>
        </div>
    )
}