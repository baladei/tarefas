export const List = () => {
    const items = [
        {
            id: 1,
            name: "Fernando",
        },
        {
            id: 2,
            name: "Karina",
        },
        {
            id:3,
            name:"Magda"
        },
    ];

    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}

        </div>
    )
}