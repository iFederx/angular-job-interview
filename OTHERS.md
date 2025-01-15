## Esercizio 2 - conoscenze medie
Sulla base del risultato finale dell'esercizio 1 o del ramo `1.5` del repository, fare le seguenti cose:

- RxJs - realizzare un pulsante premendo il quale parte uno stream che ogni secondo aggiorni un contatore che parte da 0; una volta partito il contatore, se il poulsante viene premuto di nuovo, il contatore deve ripartire da 0; quando il conteggio arriva a 20, deve fermarsi e tornare allo stato iniziale

- copia di un oggetto - Fare in modo che il pulsante **Elimina** elimini la persona dalla lista senza modificare l'array originale e aggiungere un pulsante **Reset** per ripristinare la lista delle persone all'array originale `people`

- routing - fare in modo che il componente per la lista delle persone sia raggiungibile tramite un percorso `/people` e che il componente per la lista delle persone sia raggiungibile tramite un percorso `/person/:id` dove `:id` è l'indice della persona nell'array `people`

Stile:
- media queries - fare in modo che il componente per la lista delle persone, abbia una larghezza massima pari al 50% dello spazio disponibile se si è in modalità desktop, altrimenti al 100% dello spazio disponibile
- display flex - fare in modo che la lista delle persone sia centrata orizzontalmente e verticalmente rispetto allo spazio disponibile
- display grid - fare in modo che la lista delle persone sia disposta in due colonne se la larghezza massima è maggiore di 600px, altrimenti in una colonna
