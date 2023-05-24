export function Card({ name, image, editorial, creation_date, creator, description }) {
    return (
        <div class="Card">
            <img src={image} alt="" />
            <div>
                <p>{name}</p>
                <div class="description">
                        <p>Descrição</p>
                        <span>
                            {description}
                        </span>
                </div>
                <br />
                <div class="footer">
                    Data de criação: <span>{creation_date}</span>
                    Editoria: <span>{editorial}</span>
                    Criadores: <span>{creator}</span>
                </div>
            </div>
        </div>
    )
}