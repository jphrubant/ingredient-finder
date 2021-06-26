import Head from "next/head";
import React, { useContext } from "react";

import { GlobalContext } from "./../context/GlobalState";

import { SearchBar } from "./../components/SearchBar";
import { Ingredient } from "./../components/Ingredient";

export default function Home() {
  const { state } = useContext(GlobalContext);

  return (
    <div>
      <Head>
        <title>Ingredient Finder</title>
        <meta name="keywords" content="ingredient, search engine, food" />
      </Head>
      <h1>Ingredient Finder</h1>
      <SearchBar />
      {state.ingredients.map((ingredient) => {
        return <Ingredient key={ingredient.id} {...ingredient} />;
      })}
      {state.showSearchError ? (
        <div>
          <p>Woopsy, your search did not return any results.</p>
        </div>
      ) : null}
    </div>
  );
}
