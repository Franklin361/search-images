import { Result } from "../interface"

interface ICard {
    res: Result
}

export const Card = ({ res }: ICard) => {
    return (
        <div>
            <img src={res.urls.small} alt={res.alt_description || 'photo'} />
            <p>{res.description}</p>
            <h4> ❤️: {res.likes}</h4>
        </div>
    )
}