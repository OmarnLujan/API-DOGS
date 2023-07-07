import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({ currentPage, setCurrentPage, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setCurrentPage(currentPage + 1);
  };
  const PageOne = () => {
    setInput(1);
    setCurrentPage(1);
  };
  const prevPage = () => {
    setInput(parseInt(input) - 1);
    setCurrentPage(currentPage - 1);
  };
  const maxPage = () => {
    setInput(maximo);
    setCurrentPage(maximo);
  };

  useEffect(()=> {
    setInput(currentPage);
  
  })
  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > maximo ||
        isNaN(parseInt(e.target.value))
      ) {
        setInput(1);
        setCurrentPage(1);
      } else {
        setInput(e.target.value);
        setCurrentPage(parseInt(e.target.value));
      }
    }
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className={styles.container} >
      <button
        className={styles.arrow}
        disabled={currentPage === 1 || currentPage < 1}
        onClick={PageOne}
      >
        ⯬
      </button>
      <button
        className={styles.arrow}
        disabled={currentPage === 1 || currentPage < 1}
        onClick={prevPage}
      >
        🢀
      </button>
      <input
        className={styles.input}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <p className={styles.arrow} > de {maximo}</p>
      <button
        className={styles.arrow}
        disabled={currentPage === maximo || currentPage > maximo}
        onClick={nextPage}
      >
        🢂
      </button>
      <button
        className={styles.arrow}
        disabled={currentPage === maximo || currentPage > maximo}
        onClick={maxPage}
      >
        ⯮
      </button>
    </div>
  );
};
