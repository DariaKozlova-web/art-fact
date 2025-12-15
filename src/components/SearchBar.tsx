import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export function SearchBar({ onSearch }: Props) {
  const [searchText, setSearchText]=useState('');
  return (
    <>
      <input onChange={(e)=>{
        setSearchText(e.currentTarget.value)
      }}
      placeholder="Search artworks..."
    />
    <button onClick={()=>{
      onSearch(searchText);
    }}>Search</button>
    </>
  );
}