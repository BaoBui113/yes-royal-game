import React from 'react'

const listGames =
    [
        {
            title: "db-casino"
        },
        {
            title: "evolution-game"
        },
        {
            title: "pragmatic-game"
        },
        {
            title: "sexy-game"
        },
        {
            title: "h-game"
        },
        {
            title: "sa-game"
        },
        {
            title: "m-game"
        },
        {
            title: "m-slot"
        },
        {
            title: "pragmatic-slot"
        },
        {
            title: "redtiger-slot"
        },
        {
            title: "tournament-game"
        },
        {
            title: "total-slot"
        }
    ]
export default function GameZone() {
    return (
        <section style={{
            backgroundPosition: 'center top',
        }} className="gamezone bg-[url('/assets/image/game-zone/gamezone_bg.jpg')] pt-[165px] px-[10px] pb-[50px] relative min-w-[1200px]">
            <h2 style={{
                textIndent: '-200%',
            }} className="bg-[url('/assets/image/game-zone/gamezone_light.png')] h-[170px] max-w-[1200px] overflow-hidden absolute mx-auto top-0 left-0 right-0 bg-no-repeat">GAME MENU
            </h2>
            <ul className='max-w-[1200px] mx-auto relative overflow-auto'>
                {
                    listGames.map((game, inx) => {
                        return (
                            <li className={`bg-[url('/assets/image/game-zone/gamezone_bg.png')] w-[234px] h-[280px] float-left relative z-50 border border-solid border-[#000] m-[2px] transition-all ease .2s ${game.title}`} key={inx}>
                                <a href="">{game.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
