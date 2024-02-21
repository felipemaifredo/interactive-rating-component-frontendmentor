"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "./active.css"
import starIcon from "@/interactive-rating-component-main/images/icon-star.svg"
import illustrationImage from "@/interactive-rating-component-main/images/illustration-thank-you.svg"
import React, { useState } from 'react';

export default function Home() {
  const [renderElement, setRenderElement] = useState(false);
  const [rate, setRate] = useState("")

  function changeElement(rateR) {
    setRate(rateR)
    setRenderElement(true)
  }

  const RenderRate = () => {
    const [selectedOption, setSelectedOption] = useState("1")

    function chageRate(rate) {
      setSelectedOption(rate)
    }

    function handleSubmit(){
      changeElement(selectedOption)
    }

    return (
      <div className={styles.componentform}>
        <div className={styles.imgboxformcomponent}>
          <Image src={starIcon} />
        </div>
        <p className={styles.title}>How did we do?</p>
        <p className={styles.description}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offerinq!
        </p>
        <div className={styles.ratebox}>
          <label>
            <input type="radio" id="opcao1" name="opcao"
              onChange={() => chageRate("1")}
            />
            <span> 1 </span>
          </label>
          <label>
            <input type="radio" id="opcao2" name="opcao"
              onChange={() => chageRate("2")}
            />
            <span> 2 </span>
          </label>
          <label>
            <input type="radio" id="opcao3" name="opcao"
              onChange={() => chageRate("3")}
            />
            <span> 3 </span>
          </label>
          <label>
            <input type="radio" id="opcao4" name="opcao"
              onChange={() => chageRate("4")}
            />
            <span> 4 </span>
          </label>
          <label>
            <input type="radio" id="opcao5" name="opcao"
              onChange={() => chageRate("5")}
            />
            <span> 5 </span>
          </label>
        </div>
        <button onClick={() => handleSubmit()} className={styles.btn}>
          Submit
        </button>
      </div>
    )
  }

  const TksComponent = () => {

    function changeRating() {
      setRenderElement(false)
    }

    return (
      <div className={styles.componenttks}>
        <Image 
          src={illustrationImage}
        />
        <p className={styles.resume}>{`You selected ${rate} out of 5`}</p>
        <p className={styles.title}>Thank you!</p>
        <p className={styles.description}>We appreciate vou takinq the time to give a rating. If vou ever need more support. don't hesitate to get in touch!</p>
        <button onClick={() => changeRating()} >Change Rating</button>
      </div>
    )
  }

  return (
    <main className={styles.main}>
      {!renderElement ? <RenderRate /> : <TksComponent />}
    </main>
  );
}