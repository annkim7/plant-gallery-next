'use client'

import { Session } from 'next-auth'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { dataState } from '@/context/store'
import { useRecoilState } from 'recoil'
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
  const [scroll, setScrollState] = useRecoilState(dataState)

  const sliceData = () => {
    setPage((page) => page + 1)
  }

  const newData = useCallback(() => {
    if (data === undefined) return

    if (scroll.length <= data.length) {
      const add = data.slice(0, page * limit).filter((el, idx) => {
        return scroll.findIndex((base) => base._id === el._id) !== idx
      })

      const array = scroll.concat(add)

      setScrollState([...array])
    }
  }, [page, data, scroll, setScrollState])

  useEffect(() => {
    if (scroll.length) {
      newData()
    } else {
      setScrollState(data?.slice(0, limit) || [])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <InfiniteScroll
          dataLength={scroll.length}
          next={sliceData}
          hasMore={true}
          loader={<Loading />}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
          >
            <Masonry>
              {scroll.map((el) => (
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
