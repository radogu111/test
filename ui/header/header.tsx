import { FC } from 'react'
import { BiMoviePlay, BiSearch } from 'react-icons/bi'

export const Header: FC = () => {
    return (
        <header className='bg-black text-white flex justify-between items-center px-4 py-2'>
            <h1 className='flex items-center'>
                <BiMoviePlay />
                Movee
            </h1>
            <div className='flex items-center border-white border-solid border-[1px] rounded-md px-1'>
                <BiSearch />
                <input
                    className='bg-black text-gray-400 outline-none border-none'
                    type={`text`}
                    placeholder='Search your favourite movie'
                />
            </div>
        </header>
    )
}
