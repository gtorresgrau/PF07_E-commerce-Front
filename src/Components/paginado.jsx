import React from 'react';
import { useEffect, useState } from "react";
import s from './paginado.module.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Paginado({ sneakersPerPage, allSneakers, currentPage, setCurrentPage }) {

  const [pages, setPages] = useState([]);

  function handleNext() {
    if (currentPage <= pages.length - 1) setCurrentPage(currentPage + 1)
  };

  function handlePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    let paginas = [1];
    for (let i = 2; i <= Math.ceil(allSneakers / sneakersPerPage) + 1; i++) {
      paginas.push(i);
    }
    setPages(paginas);
  }, [allSneakers, sneakersPerPage]);

  return (
    <div className={s.cardContainer}>
      <button disabled={currentPage <= 1} className={currentPage <= 1 ? s.prevMax : s.prev} onClick={handlePrev}><AiOutlineArrowLeft/></button>
      {pages.map((page) => (
        <input type='submit' value={page} className={currentPage === page ? s.button2 : s.button} key={page} onClick={() => setCurrentPage(page)} />
      ))}
      <button disabled={currentPage >= pages.length} className={currentPage >= pages.length ? s.nextMax : s.next} onClick={handleNext}><AiOutlineArrowRight/></button>
    </div>
  );
};