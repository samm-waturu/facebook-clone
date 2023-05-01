import Cards from "./Cards";

const allStories = [
    {
        name: 'Sonny ',
        src: 'https://links.papareact.com/zof',
        prof: 'https://links.papareact.com/l4v'
    },

    {
        name: 'Elon musk',
        src: 'https://links.papareact.com/4zn',
        prof: 'https://links.papareact.com/kxk',
    },

    {
        name: 'Jeff Bezos',
        src: 'https://links.papareact.com/k2j',
        prof: 'https://cdna.artstation.com/p/assets/images/images/007/039/558/large/ahmed-karam-img-20170820-163241-205.jpg?1503239784'
    },

    {
        name: 'Mark zuckrberg',
        src: 'https://links.papareact.com/xql',
        prof: 'https://links.papareact.com/snf'
    },
    {
        name: 'Bill Gates',
        src: 'https://links.papareact.com/4u4',
        prof: 'https://links.papareact.com/zvy'
    },

]

export default function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto ">
            {allStories.map((story) => (
                <Cards name={story.name} src={story.src} profile={story.prof} key={story.name}></Cards>
                )
            )}
        </div>
    )
}