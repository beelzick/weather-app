

export default function CityPage({weather, clothing}) {
    return (
<>
        <section>
        
        </section>
        <section>

        </section>
    </>
)
}

export function getStaticProps() {
    return {
        props: {
            weather: {
                city: 'Warszawa',
                temperature: '22',
                condition: 'burza',
                rainChance: 98,
                humidity: 37,
                wind: 12,
            },
            clothing: ['krótkie spodenki', 't-shirt', 'parasolka']
        }
    }
}