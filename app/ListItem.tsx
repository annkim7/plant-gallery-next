'use client'

import { Session } from 'next-auth'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useGetList } from '@/hook/post'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './loading'
import Img from '@/components/Img'
import Like from '@/components/Like'

interface ListItemProps {
  info: Session | null
}

export default function ListItem({ info }: ListItemProps) {
  const { data, isLoading } = useGetList()
  const limit = 8
  const [page, setPage] = useState(1)
  const [scrollData, setScrollData] = useState(data?.slice(0, limit) || [])

  const sliceData = () => {
    setPage((page) => page + 1)
  }

  const newData = useCallback(() => {
    if (data === undefined) return

    if (scrollData.length <= data.length) {
      const add = data.slice(0, page * limit).filter((el, idx) => {
        return scrollData.findIndex((base) => base._id === el._id) !== idx
      })

      const array = scrollData.concat(add)

      setScrollData([...array])
    }
  }, [page, data, scrollData])

  useEffect(() => {
    newData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <InfiniteScroll
          dataLength={scrollData.length}
          next={sliceData}
          hasMore={true}
          loader={<Loading />}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {scrollData.map((el) => (
                <div key={el._id.toString()} className="my-3 mx-3">
                  <Link
                    href={`/detail/${el._id}`}
                    className="overflow-hidden block rounded-lg"
                  >
                    <Img
                      width="full"
                      height="auto"
                      src={el.img}
                      alt={el.title}
                    />
                  </Link>
                  <Like id={`${el._id}`} access={info ? true : false} />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
      )}
    </>
  )
}
