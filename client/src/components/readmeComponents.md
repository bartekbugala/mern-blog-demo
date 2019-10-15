# Components Roadmap

##### Alert

Komponent do pokazywania komunikatów tekstowych.

Przykład użycia:

```
<Alert variant="info">
  To jest komunikat
</Alert>
```

Parametry

- children (String | wymagany)
- variant (do wyboru: info, success, warning, error | wymagany)

##### Button

Komponent przycisku.

Przykład użycia:

```
<Button variant="primary">
  To jest komunikat
</Button>
```

Parametry

- children (String | wymagany)
- variant (String, do wyboru: primary, info, danger | wymagany)

##### Logo

Komponent pokazujący logo.

Przykład użycia:

```
<Logo />
```

##### MainMenu

Komponent głównej nawigacji.

Przykład użycia:

```
const links = [{ path: '/Home', title: 'Home' }, { path: '/About', title: 'About' }]

<MainMenu links={links}>
```

Parametry

- links (array -- tablica linków w formie obiektu `{ path, title }` | wymagany)

##### PageContainer

Komponent kontenera.

Przykład użycia:

```
<PageContainer>
  <div>
    ...
  </div>
</PageContainer>
```

Parametry

- children (Node | wymagany)

##### PageTitle

Komponent głównego tytułu podstrony.

Przykład użycia:

```
<PageTitle>
  Home
</PageTitle>
```

Parametry

- children (String | wymagany)

##### SectionTitle

Komponent do tytułów sekcji.

Przykład użycia:

```
<SectionTitle>
  Loerm Ipsum
</SectionTitle>
```

Parametry

- children (String | wymagany)

##### SmallTitle

Komponent do mniejszych tytułów.

Przykład użycia:

```
<SmallTitle>
  Loerm Ipsum
</SmallTitle>
```

Parametry

- children (String | wymagany)

##### Spinner

Komponent grafiki ładowania.

Przykład użycia:

```
<Spinner />
```

##### TextField

Komponent pola tekstowego.

Przykład użycia:

```
updateTitle = (e) => {
  this.setState({ title: e.target.value })
}

...

<TextField
  value={this.state.title}
  label="Tytuł"
  onChange={this.updateTitle} />
```

Parametry

- value (String | wymagany)
- label (String | wymagany)
- onChange: (Funkcja | wymagany)
