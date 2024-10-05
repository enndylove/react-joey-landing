import { IProjectCard } from "../../Interfaces";

export default function Card(card: IProjectCard) {
    return (
        <div className="projects__card" key={card.id}>
            <img
                className="projects__card-img"
                loading={"lazy"}
                src={require(`./images/${card.imageName}.png`)}
                alt={`Image ${card.title}`}
            />
            <h6 className="projects__card-title">
                {card.title}
            </h6>
            <p className="projects__card-description">
                {card.description}
            </p>
        </div>
    )
}