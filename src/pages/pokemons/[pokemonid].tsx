import Image from "next/image"
import { Photo, Info, Ficha, Tag, Type, Pokenav } from "@/styles/pokemon.styles"
import Link from "next/link"
import { BsFillReplyFill } from "react-icons/bs"
import { Maxpokemons } from ".."

const maxpokemons = Maxpokemons

export const getStaticPaths = async () => {
    const api = 'https://pokeapi.co/api/v2/pokemon'

    const response = await fetch(`${api}/?limit=${maxpokemons}`)
    const data = await response.json()

    const paths = data.results.map((pokemon: any, index: number) => {
        return {
            params: { pokemonid: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context: any) => {
    const id = context.params.pokemonid
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return { props: { pokemon: data } }
}
export default function Pokemonid({ pokemon }: any) {
    const types: { [key: string]: string } = {
        bug: 'bg-lime-400',
        dark: 'bg-gray-900',
        dragon: 'bg-violet-400',
        electric: 'bg-yellow-400',
        fairy: 'bg-pink-400',
        fighting: 'bg-orange-900',
        fire: 'bg-orange-600',
        flying: 'bg-blue-400',
        ghost: 'bg-indigo-500',
        grass: 'bg-green-500',
        ground: 'bg-amber-500',
        ice: 'bg-sky-400',
        normal: 'bg-zinc-400',
        poison: 'bg-fuchsia-700',
        psychic: 'bg-rose-600',
        rock: 'bg-yellow-500',
        steel: 'bg-zinc-600',
        water: 'bg-sky-700',
    }
    const anterior = pokemon.id == 1 ? maxpokemons : pokemon.id - 1
    const proximo = pokemon.id == maxpokemons ? 1 : pokemon.id + 1
    return (
        <>
            <Pokenav className="relative  w-5/6 md:w-4/6 lg:w-3/6">
                <div className="px-3 md:px-5 relative grid py-2 text-white bg-red-700 grid-cols-2 w-full">
                    <Link href={`/pokemons/${anterior}`}>#{("000" + (anterior)).slice(-3)} {'<'} Anterior</Link>
                    <Link 
                        id="return" 
                        href={`/#${pokemon.name}`}>
                            <BsFillReplyFill />
                            VOLTAR
                    </Link>
                    <Link className="text-end" href={`/pokemons/${proximo}`}>
                        Próximo {'>'} #{("000" + (proximo)).slice(-3)}
                    </Link>
                </div>
                <Tag className="bg-zinc-600">#{("000" + pokemon.id).slice(-3)}</Tag>
            </Pokenav>

            <Ficha className='grid grid-cols-1 md:grid-cols-2 flex bg-zinc-600 p-5 w-5/6 md:w-4/6 lg:w-3/6 '>

                <Photo>
                    <Image src={`https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`}
                        width={100}
                        height={100}
                        alt={pokemon.name}>
                    </Image>

                </Photo>
                <Info className="px-10">

                    <h1 className="text-center md:text-left">{pokemon.name.toUpperCase()}</h1>
                    <ul className="grid grid-cols-2 flex py-3 gap-4" >
                        {pokemon.types.map((item: { type: { name: string } }, index: number) => {

                            return (
                                <Type className={types[item.type.name]} key={index}>
                                    {item.type.name.toUpperCase()}
                                </Type>
                            )
                        })}
                    </ul>
                    <h2>Tamanho: {pokemon.height * 10} cm</h2>
                    <h2>Peso: {pokemon.weight / 10} kg</h2>
                    <h2>Sprites:</h2>
                    <div className="grid grid-cols-2 mt-1 p-2 bg-zinc-700 rounded-xl">
                        <div className="flex justify-center">
                            <img src={`https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokemon.name}.png`} alt={pokemon.name} />
                        </div>
                        <div className="flex justify-center">
                            <img src={`https://img.pokemondb.net/sprites/diamond-pearl/shiny/${pokemon.name}.png`} alt={`${pokemon.name} shiny`} />
                        </div>
                    </div>
                </Info>
            </Ficha>
        </>
    )
}
