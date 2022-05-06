# Progetto Angular 2 per Start2Impact

## Descrizione

Questo progetto sviluppato in Angular permette di visualizzare le ultime news pubblicate su [Hacker News](https://news.ycombinator.com/).

Al caricamento iniziale, l'app effettua una chiamata api per ottenere circa 500 id sulle ultime pubblicazioni. Di questi ne vengono selezionati i primi dieci e, con una successiva chiamata, vengono mostrati a schermo titolo, data di pubblicazione e un link che permette di visionare l'articolo originale.

Un bottone posto in fondo alla pagina permette poi di effettuare una nuova chiamata per gli id successivi, sempre in gruppo da dieci, in modo da caricare altri articoli. Inoltre, dato che la lista può diventare lunga, un bottone "scroll to top" si manifesta una volta effettuato lo scrolling per permettere all'utente di tornare velocemente in cima.

Esteticamente l'app segue il Material Design di Google e, nello specifico, fa uso di Angular Material da cui prende le componenti per l'interfaccia utente. Totalmente responsive, il design è stato pensato per essere fruito principalmente da mobile.

## Metodologie di sviluppo

Sotto src/app troviamo **components**, **interfaces** e **services**.

I componenti si preoccupano di generare l'interfaccia e alcuni si scambiano dati attraverso i decorator @Input().

L'interfaccia _News_ viene utilizzata per ottenere correttamente i dati asincroni delle notizie.

In ultimo, il servizio _News Service_ si preoccupa delle chiamate api. Questo fa uso degli Observable messi a disposizione da Angular. Un primo Observable ritorna semplicemente un array di ID, mentre un secondo si preoccupa di raccogliere le info relative agli ID ottenuti e di ritornare il tutto seguendo le spefiche dell'interfaccia. Come loro, tutte le variabili dell'app sono state tipizzate per evitare errori.

Al termine del ciclo di vita del componente "dashboard", che alla creazione si sottoscrive a suddetti Observable, le sottoscrizioni vengono sciolte per evitare leak.

Il deploy è stato effettuato su Firebase.

### Costruito con

- Angular
- Material Design
- Firebase

### Screenshots

![Dashboard](src/assets/screenshots/app-desktop-top.png)
![Body](src/assets/screenshots/app-desktop-mid.png)

## Link

[Link per provare l'app](https://s2i-jobsearchapp.web.app/)

## Istruzioni per provare l'app in locale

Per provare l'app in locale è necessario avere innanzitutto gli strumenti di Angular da riga di comando, che si possono installare con `npm install -g @angular/cli`.

A questo punto si può clonare il progetto, soddisfare le dependencies di npm ed utilizzare i comandi di seguito riportati.

### Dev server

Eseguire `ng serve -o` per avviare il dev server. Di default sarà avviato su `http://localhost:4200/`. Ad ogni salvataggio il sito si ricarica in automatico.

### Build

Eseguire `ng build` per compilare il progetto. Il risultato verrà inserito nella cartella `dist/`.

### Unit tests

Eseguire `ng test` per eseguire degli unit test con [Karma](https://karma-runner.github.io). Di base questo avviene con Chrome, ma il progetto è già stato configurato per essere testato anche con Edge e Firefox attraverso le flag `--browsers Edge|Firefox`. Per qualsiasi altro browser cercare relativi plugin.

### End-to-end tests

Eseguire `ng e2e` per avviare dei test end-to-end con una piattaforma a tua scelta. Per usare questo comando è necessario installare prima un pacchetto per abilitare le funzionalità end-to-end.
