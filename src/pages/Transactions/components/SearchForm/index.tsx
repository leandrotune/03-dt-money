import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearcForm() {
  return(
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />
      
      <button type="submit">
        <MagnifyingGlass size={20} color="#00B37E"/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}