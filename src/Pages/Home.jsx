import React from 'react'
import Packages from '../components/packages/Packages'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

const Home = () => {
    return (
        <div className='bg-[#021639]'>
            <div className='bscontainer '>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Projects />
                        <div className='row'>
                            <Packages />
                        </div>
                        <Skills />
                        {/* <button className='bg-gradient-to-r from-[#CF00E6] to-[#EC0088]'>Home</button> */}
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Home