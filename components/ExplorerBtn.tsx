"use client";
import Image from "next/image";

const ExplorerBtn = () => {
  return (
    <button
        type="button"
        id="explore-btn"
        className="mt-7 mx-auto"
        onClick={() => console.log("Explore Btn Clicked")}
    >
        <a href="#events">
          Explorer Events  
          <Image
            src="/icons/arrow-down.svg"
            alt="Arrow Down Icon"
            width={24}
            height={24}
            className="inline-block ml-2"
          />
        </a>
    </button>
  )
}

export default ExplorerBtn

