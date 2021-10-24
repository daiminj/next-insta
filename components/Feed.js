import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

export default function Feed() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl max-auto'>

            <section className='col-span-2'>
                {/**Stories */}
                <Stories />
                {/** Posts */}
                <Posts />

            </section> 

            <section className="hidden xl:inline-grid md:col-span-2">
                <div className="">
                    <MiniProfile />
                    <Suggestions />
                </div>
            </section>
               
        </main>
    )
}
