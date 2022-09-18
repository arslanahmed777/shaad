import React from 'react'
import { Link } from 'react-router-dom'

const Packages = () => {
    const packages = [
        {
            name: "react-accordian",
            pic: "bg-jobseeker",
            description: "A lightweight and complete tree with checkbox, add and delete functionality",
            link: "/react-tree-checkbox"
        },
        {
            name: "react-input-timepicker",
            pic: "bg-jobseeker",
            description: "A lightweight and complete tree with checkbox, add and delete functionality",
            link: "/react-tree-checkbox"
        },
        {
            name: "react-tree-checkbox",
            pic: "bg-jobseeker",
            description: "A lightweight and complete tree with checkbox, add and delete functionality",
            link: "/react-tree-checkbox"
        },
        {
            name: "react-form-supervalidator",
            pic: "bg-jobseeker",
            description: "A lightweight and complete tree with checkbox, add and delete functionality",
            link: "/react-tree-checkbox"
        },
    ]
    return (
        <div className='col-lg-12'>
            <h1 className='text-center text-3xl font-semibold shadow-md mb-4'>NPM Packages</h1>
            <div className='row'>
                {packages.map((pkg, i) => {
                    return (
                        <div key={i} className='col-lg-3 text-center px-11'>
                            <div className={`mb-3 ${pkg.pic} bg-bottom bg-no-repeat bg-cover h-32 border-4 rounded-md border-[#EC0088]`}></div>
                            <Link className='text-center text-[#EC0088]' to={pkg.link} >{pkg.name}</Link>
                            <p className='text-[10px] font-extralight text-gray-600'>{pkg.description}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Packages