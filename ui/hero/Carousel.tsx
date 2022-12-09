'use client'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useState, useEffect } from 'react'
import { Movies } from '../../app/page'
import { getImageUrl } from '../../config/api'

interface Props {
    movies: Movies[]
}

export const Carousel = ({ movies }: Props) => {
    const [index, setIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: false, align: 'center', dragFree: true },
        [Autoplay()]
    )
    useEffect(() => {
        const onScroll = () => {
            if (emblaApi) setIndex(emblaApi.selectedScrollSnap())
        }
        if (emblaApi) {
            emblaApi.on('scroll', onScroll)
        }
        return () => {
            emblaApi?.off('scroll', onScroll)
        }
    }, [emblaApi])
    const onClick = (index: number) => {
        if (emblaApi) {
            emblaApi.scrollTo(index)
            setIndex(emblaApi.selectedScrollSnap())
        }
    }
    return (
        <>
            <div className='relative'>
                <div className='relative block w-screen h-[360px] lg:h-[80vh]'>
                    <Image
                        src={getImageUrl(movies[index].backdrop_path)}
                        alt=''
                        fill
                    />
                </div>
                <div
                    className='overflow-hidden absolute left-0 bottom-0 translate-y-[50%]'
                    ref={emblaRef}
                >
                    <div className='flex w-full'>
                        {movies
                            ? movies.map((movie, i) => (
                                <Image
                                    className={`flex-[0_0_256px] ${index === i
                                        ? 'border-white border-solid border-[2px]'
                                        : ''
                                        } mx-2 rounded-[5px]`}
                                    key={movie.id}
                                    src={getImageUrl(movie.backdrop_path)}
                                    height={144}
                                    width={256}
                                    alt='img'
                                    onClick={() => onClick(i)}
                                />
                            ))
                            : null}
                    </div>
                </div>
            </div>
        </>
    )
}
