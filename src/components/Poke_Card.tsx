import Image from "next/image"
import { Button,Card } from "@/styles/Dex.styles"
import Link from "next/link"

export default function Poke_Card({pokemon}:any){

    return(
        <Card>
            <Image src={`https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokemon.name}.png`} 
            width={200} 
            height={200} 
            alt={pokemon.name}
            />
            <h1><span>#{("000" + pokemon.id).slice(-3)}</span> - {pokemon.name}</h1>
            <Link href={`/pokemons/${pokemon.id}`}><Button>+Detalhes</Button></Link>
        </Card>
    )

}