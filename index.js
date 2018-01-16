const hasThreeOfAKind = (hand) => { //reka czyli rozdanie 5 kart => zwykly string w formacie '2H 2S 2D 4C KH'
  const cards = hand.split(' '); // dzielimy rozdanie kart na poszczegolne karty
  let result = false; // ustawiamy domyslny wynik na false, jak znajdziemy dokladnie 3 takie same karty pozniej to zmienimy na true

  cards.map((card) => { //lecimy przez poszczegolne karty
    const count = cards.filter((handCard) => { //liczymy ilosc tych samych kart - przefiltrujemy wszystkie karty, aby zawieraly tylko takie same karty 
      return handCard.substring(0,1) === card.substring(0,1) // porownujemy tylko pierwsza litere (stad substringi), bo druga oznaczajaca kolor zawsze bedzie inna
    }).length; //do zmiennej count zapisujemy tylko ilosc przefiltrowanych, takich samych kart, wiec na koncu tablicy dodajemy .length

    if (count === 3) { //o, ilosc jest rowna trzy, czyli mamy trojke, czyli ustawiamy nasz result na true
      result = true;
    }
  });

  return result; // zwracamy result
}

export {hasThreeOfAKind}; //exportujemy funkcje