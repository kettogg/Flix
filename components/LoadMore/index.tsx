"use client"

import Image from "next/image";
import React from 'react';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function LoadMore() {
  const { ref, inView } = useInView();

  useEffect(() => 
  {
    if(inView){
      alert("Load More")
    }
  }, [inView])

  return (
    <>
      <section>
        <div ref={ref}>

        </div>
      </section>
    </>
  )
}

