import instance from './instance'

export const getSwiper = (params) => {
    return instance.get("/home/swiper")
}

